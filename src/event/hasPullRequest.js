function hasPullRequest(payload) {
  return 'pull_request' in payload;
}

module.exports = hasPullRequest;
