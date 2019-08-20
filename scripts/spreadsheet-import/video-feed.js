const fetch = require("node-fetch");

// New API URL
//

// Downloads the YT playlist and automatically maps talks to their
// respective video through the talk URL pasted into the YT description.
exports.getVideoMapping = async function() {
  return get({}, 0, null);
};

async function get(videos, index, token) {
  let url =
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL37ZVnwpeshHwJPVBqEnZild7QHWhdufu&key=" +
    process.env.youtube_api_key;
  if (token) {
    url += "&pageToken=" + token;
  }
  const response = await fetch(url);
  const json = await response.json();
  if (!json.items) {
    console.dir(json);
    throw new Error(`YT request failed ${url}`);
  }

  index = await processYt(videos, json, index);
  if (json.nextPageToken) {
    await get(videos, index, json.nextPageToken);
  }
  return videos;
}

async function processYt(videos, json, index) {
  const infos = await getVideoInfo(json.items);
  json.items.forEach((item, itemIndex) => {
    const snippet = item.snippet;
    const id = snippet.resourceId.videoId;
    if (!id) {
      throw new Error(`Can't find video id in ${JSON.stringify(item)}`);
    }
    if (snippet.title == "Private video") {
      console.warn(`Skipping private video ${id}`);
      index++;
      return; // Skip
    }
    if (!snippet.thumbnails) {
      console.log(snippet);
      throw new Error(`Incomplete meta data for ${id}`);
    }
    const info = infos.find(i => i.id == id);
    if (!info) {
      throw new Error(`Can't find info for video ${JSON.stringify(item)}`);
    }
    const age = (Date.now() - Date.parse(snippet.publishedAt)) / 1000 / 3600;
    const thumb = snippet.thumbnails.maxres || snippet.thumbnails.default;
    if (!thumb) {
      console.log(snippet.thumbnails);
      throw new Error(`Incomplete thumbnail data for ${id}`);
    }

    const yt = {
      id: id,
      url: "https://youtube.com/watch/" + encodeURIComponent(id),
      title: snippet.title,
      poster: thumb.url,
      index: index++,
      schema: getSchema(id, snippet, info, thumb),
      viewsPerHour: Number(info.statistics.viewCount) / age
    };
    const desc = snippet.description;
    let urls = desc.match(/https\:\/\/2019\.jsconf\.eu(\/\S+\.html)/gm);
    if (urls) {
      urls = urls.map(u => u.substr("https://2019.jsconf.eu".length));
      yt.websiteUrl = urls[0];
      for (let url of urls) {
        videos[url] = yt;
      }
    }
  });
  return index;
}

async function getVideoInfo(items) {
  const ids = items
    .map(i => encodeURIComponent(i.snippet.resourceId.videoId))
    .join(",");
  const url = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${ids}&playlistId=PL37ZVnwpeshHwJPVBqEnZild7QHWhdufu&key=${
    process.env.youtube_api_key
  }`;
  const response = await fetch(url);
  const json = await response.json();
  if (!json.items) {
    console.dir(json);
    throw new Error(`YT request failed ${url}`);
  }
  return json.items;
}

function getSchema(id, snippet, info, thumb) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: snippet.title,
    duration: info.contentDetails.duration,
    description: snippet.description,
    thumbnailUrl: thumb.url,
    uploadDate: snippet.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "JSConf EU",
      logo: {
        "@type": "ImageObject",
        url: "https://2019.jsconf.eu/android-chrome-512x512.png",
        width: 512,
        height: 512
      }
    },
    embedUrl: "https://www.youtube.com/embed/" + encodeURIComponent(id),
    interactionCount: Number(info.statistics.viewCount)
  };
}
