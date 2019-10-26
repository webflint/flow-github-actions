const reviewState = require('./getReviewState');

function wasChangesRequested(payload) {
  return payload.action === 'submitted' &&
    reviewState(payload) === 'changes_requested';
}

module.exports = wasChangesRequested;
