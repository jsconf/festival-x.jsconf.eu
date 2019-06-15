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

  index = processYt(videos, json, index);
  if (json.nextPageToken) {
    await get(videos, index, json.nextPageToken);
  }
  return videos;
}

function processYt(videos, json, index) {
  json.items.forEach(item => {
    const snippet = item.snippet;
    const id = snippet.resourceId.videoId;
    if (!id) {
      throw new Error(`Can't find video id in ${JSON.stringify(item)}`);
    }
    const yt = {
      id: id,
      url: "https://youtube.com/watch/" + encodeURIComponent(id),
      title: snippet.title,
      poster: snippet.thumbnails.maxres.url,
      index: index++
    };
    const desc = snippet.description;
    const url = desc.match(/https\:\/\/2019\.jsconf\.eu(\/\S+\.html)/m);
    if (url) {
      yt.websiteUrl = url[1];
      videos[url[1]] = yt;
    }
  });
  return index;
}
