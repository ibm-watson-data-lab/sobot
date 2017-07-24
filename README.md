# bluemix-hubot

bluemix-hubot is a chat bot built on the [Hubot][hubot] framework.

## Setup

There is a `manifest.yml` file to work with `cf push` or `bluemix app push` commands.

### Environment Variables

* `HUBOT_SLACK_TOKEN` should contain the auth token that this bot uses to connect to slack
* `REDIS_URL` is the location of a Redis installation to enable the bot to store data

## Behaviour

The bot _will_ do many things, so this list will grow over time.  These are its abilities so far:

### Notify of new questions

When we store a new question to the database, we also post it to `http://sobot.mybluemix.net/hubot/stackoverflow/incoming` and the bot then notifies the slack channel with a nicely formatted message including links.
