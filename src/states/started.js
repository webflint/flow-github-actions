const wasBranchCreated = require('../event/wasBranchCreated');
const wasChangesRequested = require('../event/wasChangesRequested');

function isStarted(payload) {
  return wasBranchCreated(payload) ||
    wasChangesRequested(payload);
}

module.exports = isStarted;
