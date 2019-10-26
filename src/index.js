const core = require('@actions/core');

function run() {
  core.debug('Does this output to the logs?');
  core.debug(`env: ${process.env}`);

  const event_path = process.env['GITHUB_EVENT_PATH'];
  const api_key = process.env['TRACKER_API_KEY'];

  process({
    event_path,
    api_key
  });
}

run();
