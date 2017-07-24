# bluemix-hubot

bluemix-hubot is a chat bot built on the [Hubot][hubot] framework.

## Setup

There is a `manifest.yml` file to work with `cf push` or `bluemix app push` commands.

### Environment Variables

* `HUBOT_SLACK_TOKEN` should contain the auth token that this bot uses to connect to slack
* `REDIS_URL` is the location of a Redis installation to enable the bot to store data
