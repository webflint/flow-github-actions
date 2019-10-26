function getReviewState(payload) {
  if (!('review' in payload)) return;

  return payload.review.state
}

module.exports = getReviewState;
