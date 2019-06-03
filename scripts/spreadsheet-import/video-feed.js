let Parser = require("rss-parser");
let parser = new Parser({
  customFields: {
    item: [["media:group", "media"]]
  }
});

// Downloads the YT playlist and automatically maps talks to their
// respective video through the talk URL pasted into the YT description.
exports.getVideoMapping = async function() {
  let feed = await parser.parseURL(
    "https://www.youtube.com/feeds/videos.xml?playlist_id=PL37ZVnwpeshHwJPVBqEnZild7QHWhdufu"
  );

  const videos = {};
  feed.items.forEach(item => {
    const yt = {
      id: item.id.split(":")[2],
      url: item.link,
      title: item.title
    };
    const desc = item.media["media:description"][0];
    const url = desc.match(/https\:\/\/2019\.jsconf\.eu(\/\S+\.html)/m);
    if (url) {
      yt.websiteUrl = url[1];
      videos[url[1]] = yt;
    }
  });
  return videos;
};
