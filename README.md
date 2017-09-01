# bluemix-hubot

bluemix-hubot is a chat bot built on the [Hubot][hubot] framework.

## Setup

This app is automatically deployed when new commits are pushed to the master branch.

### Developer Setup

Use the test bot and change the script `scripts/incoming-data.js` so that we're sending messages into the `advo-stack-overflow-t` channel.

You will need a slack token (see Environment variables section below), make sure you are using the one for the test version of the bot.  Then you can run the bot locally on your laptop and it will log into slack.  The command looks like this: 

`HUBOT_SLACK_TOKEN=[token] bin/hubot`

To test the notifications, we need to send a web request to `[local-url]/hubot/stackoverflow/incoming` where `[local-url]` is _probably_ http://localhost:4000

### Environment Variables

* `HUBOT_SLACK_TOKEN` should contain the auth token that this bot uses to connect to slack - authorized users can see the management page here https://ibm-cloudplatform.slack.com/services/B6ATR6CGP (the `@slacktesting-bot` account is here https://ibm-cloudplatform.slack.com/services/B6XTWAP2S)
* `REDIS_URL` is the location of a Redis installation to enable the bot to store data

## Behaviour

The bot _will_ do many things, so this list will grow over time.  These are its abilities so far:

### Notify of new questions

When we store a new question to the database, we also post it to `http://sobot.mybluemix.net/hubot/stackoverflow/incoming` and the bot then notifies the slack channel with a nicely formatted message including links.
