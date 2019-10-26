const reviewState = require('./getReviewState');

function wasPrApproved(payload) {
  return payload.action === 'submitted' &&
    reviewState(payload) === 'approved';
}

module.exports = wasPrApproved;
