const core = require('@actions/core');

function run() {
  const event_path = core.getInput('GITHUB_EVENT_PATH', { required: true });
  const api_key = core.getInput('TRACKER_API_KEY', { required: true });
  process({
    event_path,
    api_key
  });
}

run();
