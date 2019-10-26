const wasPush = require('../event/wasPush');
const wasChangesRequested = require('../event/wasChangesRequested');

function isStarted(payload) {
  return wasPush(payload) ||
    wasChangesRequested(payload);
}

module.exports = isStarted;
