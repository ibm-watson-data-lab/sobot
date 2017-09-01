# bluemix-hubot

bluemix-hubot is a chat bot built on the [Hubot][hubot] framework.

## Setup

This app is automatically deployed when new commits are pushed to the master branch.

### Developer Setup

Use the test bot and change the script `scripts/incoming-data.js` so that we're sending messages into the `advo-stack-overflow-t` channel.

You will need a slack token (see Environment variables section below), make sure you are using the one for the test version of the bot.  Then you can run the bot locally on your laptop and it will log into slack.  Make sure you are in the project's root directory when entering this command: 

`HUBOT_SLACK_TOKEN=[token] bin/hubot -a slack`

To test the notifications, we need to send a web request to `http://localhost:8080/hubot/stackoverflow/incoming` (if it doesn't work, try changing the port number).

If you're using CURL for your web request, it should look like this: 
`curl -H "Content-Type: application/json" -X POST http://localhost:8080/hubot/stackoverflow/incoming --data @data.json`

_(See the code block below for the content of that JSON file, which is a sample of data that might come in via the ingestor.)_

If you're using a tool such as Postman, you'll set up your request as follows: 

* Verb: `POST`
* URL: `http://localhost:8080/hubot/stackoverflow/incoming`
* Header Key: `Content-Type`
* Header Value: `application/json`
* Body: A sample of the data that might come in via the ingestor, such as the following (this is the content of the `data.json` file referenced in the CURL example above): 

```
{
    "type": "new-question",
    "data": { 
        "owner": null,
        "status": "new",
        "question": { 
            "last_activity_date": 1492075585,
            "view_count": 5,
            "is_answered": false,
            "tags": [ "node.js", "redis", "socket.io" ],
            "score": 0,
            "body": "Imagine some really interesting text that we'd pulled in correctly the first time, instead of having to amend our sample data later so that the tests would somehow work",
            "creation_date": 1492075585,
            "question_id": 43388438,
            "link": "http://stackoverflow.com/questions/43388438/approach-for-building-a-realtime-application-node-js-socket-io-redis",
            "owner": 
            { 
                "reputation": 33,
                "display_name": "enrichz",
                "user_id": 5961962,
                "user_type": "registered",
                "link": "http://stackoverflow.com/users/5961962/enrichz",
                "profile_image": "https://www.gravatar.com/avatar/9840e58df70f493a36c8554e3cc370d7?s=128&d=identicon&r=PG" 
            },
            "title": "Approach for building a realtime application [Node.js Socket.io Redis]",
            "answer_count": 0 
        }
    }
}
```

### Environment Variables

* `HUBOT_SLACK_TOKEN` should contain the auth token that this bot uses to connect to slack - authorized users can see the management page here https://ibm-cloudplatform.slack.com/services/B6ATR6CGP (the `@slacktesting-bot` account is here https://ibm-cloudplatform.slack.com/services/B6XTWAP2S)
* `REDIS_URL` is the location of a Redis installation to enable the bot to store data

## Behaviour

The bot _will_ do many things, so this list will grow over time.  These are its abilities so far:

### Notify of new questions

When we store a new question to the database, we also post it to `http://sobot.mybluemix.net/hubot/stackoverflow/incoming` and the bot then notifies the slack channel with a nicely formatted message including links.
