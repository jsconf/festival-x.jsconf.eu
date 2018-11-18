const fs = require('fs');

module.exports.processSchedule = function(sheet) {
  const data = structureData(sheet);
  const schedule = {
    info: info(),
    schedule: data,
  }
  const json = JSON.stringify(schedule, null, '  ');
  console.info(json);
  fs.writeFileSync('./schedule.json', json);
  // Write with .txt filename, because wintersmith doesn't support serving
  // files with the "magic" .json extension.
  fs.writeFileSync('./contents/schedule-json.txt', json);
}

const columns = [
  'backtrack:startTime', 'backtrack:duration', 'backtrack:number',
  '-', 'backtrack:who', 'backtrack:what', '-',
  'sidetrack:startTime', 'sidetrack:duration', 'sidetrack:number',
  '-', 'sidetrack:who', 'sidetrack:what', '-',
  'community:startTime', 'community:what', 'community:detail', '-',
  'sponsor:startTime', 'sponsor:what', 'sponsor:detail'
];

const tracksMap = {
  backtrack: 'Back Track',
  sidetrack: 'Side Track',
  community: 'Community Lounge',
  sponsor: 'Sponsor Booth'
}

function structureData(lessCrappyData) {
  let day = 1;
  const mergedRecords = {};

  for (let row = 2, nRows = lessCrappyData.length; row < nRows; row++) {


    if (!lessCrappyData[row]) { continue; }

    if (/Day 2:/.test(lessCrappyData[row][0])) {
      day = 2;
    }

    const tracks = {};
    for (let col = 0, nCols = lessCrappyData[row].length; col < nCols; col++) {
      if (!columns[col] || columns[col] === '-') { continue; }
      const [track, field] = columns[col].split(':');


      if (!tracks[track]) {
        tracks[track] = {
          day: day,
          date: day == 1 ? '2018-06-02' : '2018-06-03',
          track: tracksMap[track],
          trackId: track
        };
      }
      tracks[track][field] = lessCrappyData[row][col];
    }

    Object.keys(tracks).forEach(track => {
      if (!tracks[track].startTime || !tracks[track].what) {
        return;
      }
      tracks[track].startTime = String(tracks[track].startTime).replace(':', '.');
      tracks[track].dateTime = tracks[track].date + ' ' +
          tracks[track].startTime.replace('.', ':') +
          ' GMT+0200';
      if (!mergedRecords[day]) {
        mergedRecords[day] = {};
      }
      if (!mergedRecords[day][tracks[track].startTime]) {
        mergedRecords[day][tracks[track].startTime] = [];
      }
      mergedRecords[day][tracks[track].startTime].push(tracks[track]);
    });
  }

  return mergedRecords;
}

function info() {
  const now = new Date();
  const conferenceDay = now < Date.parse('Sun Jun 02 2018 00:00:00 GMT+0200 (CEST)') ? 1 : 2;
  return {
    currentDay: conferenceDay,
    generationTime: now.toString(),
  };
}