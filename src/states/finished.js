const wasPrOpened = require('../event/wasPrOpened');

// TODO: this need to check if it's draft status
// and perhaps when tests have passed
function isFinished(payload) {
  return wasPrOpened(payload);
}

module.exports = isFinished;
