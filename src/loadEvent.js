const fs = require('fs');

function loadEvent(path) {
  const json = fs.readFileSync(path);
  return JSON.parse(json);
}

module.exports = loadEvent;
