
# Flow Github Actions

Github action workflow that keeps Pivotal Tracker stories in sync with development throughout your SDLC.

## Why?

Because developers like to push code, not status updates.  By adding Flow Actions to your repo your Tracker story state will always be up to date to where the developers are in the development cycle.

## Usage

```
name: Sync Story Status
on:
  push
  pull_request
  pull_request_review

jobs:
  sync_story_status:
    runs-on: ubuntu-latest
    steps:
      - name: Sync Story Status
        uses: webflint/flow-github-actions@v0.1.0
        env:
          TRACKER_API_KEY: ${{ secrets.TRACKER_API_KEY }}
```
