const updateStatus = require('./tracker/updateState');
const loadEvent = require('./loadEvent');
const getStoryState = require('./event/getStoryState');
const getBranchName = require('./event/getBranchName');
const getStoryId = require('./tracker/getStoryId');

function process(env) {
  const apiKey = env.TRACKER_API_KEY;
  const event = loadEvent(env.GITHUB_EVENT_PATH);
  const state = getStoryState(event);

  if (state) {
    const branchName = getBranchName(event);
    const storyId = getStoryId(branchName);
    return updateStatus(apiKey, storyId, state);
  }
}

module.exports = process;
