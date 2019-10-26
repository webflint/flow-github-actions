const wasPrMerged = require('../event/wasPrMerged');

function isAccepted(payload) {
  return wasPrMerged(payload);
}

module.exports = isAccepted;
