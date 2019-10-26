const hasPullRequest = require('./hasPullRequest');

function wasPrMerged(payload) {
  return payload.action === 'closed' &&
    hasPullRequest(payload) &&
    payload.pull_request.merge_commit_sha !== undefined;
}

module.exports = wasPrMerged;
