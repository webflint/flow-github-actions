const core = require('@actions/core');
const updateStatus = require('./tracker/updateState');
const loadEvent = require('./loadEvent');
const getStoryState = require('./event/getStoryState');
const getBranchName = require('./event/getBranchName');
const getStoryId = require('./tracker/getStoryId');

function process(env) {
  const event = loadEvent(env.GITHUB_EVENT_PATH);
  const apiKey = env.TRACKER_API_KEY;
  const state = getStoryState(event);

  if (state) {
    const branchName = getBranchName(event);
    const storyId = getStoryId(branchName);
    if (storyId) {
      core.info(`Updating story state for id:${storyId} to state:${state}`);
      return updateStatus(apiKey, storyId, state);
    } else {
      core.debug(`Story id couldn't not be determined for update state:${state}`);
    }

  } else {
    core.debug(`The story state could not be determined from the Github event`);
  }

}

module.exports = process;
