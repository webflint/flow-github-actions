const wasPrApproved = require('../event/wasPrApproved');

// should this be when the PR is mergable?
function isDelivered(payload) {
  return wasPrApproved(payload);
}

module.exports = isDelivered;
