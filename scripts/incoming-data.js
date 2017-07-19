module.exports = function(robot) {
  return robot.router.post('/hubot/stackoverflow/incoming', function(req, res) {
    var room;
    room = "advo-stack-overflow-t";
    // robot.messageRoom(room, "A hook! value of " + req.body.a);

    var message = {
        attachments:
        [
            {
                title: "Question about Cloudant",
                color: "#e09900",
                text: "this is my message, it contains more words and maybe the title?",
                fields:
                    [
                    {
                        title: "Author",
                        value: "Jane Doe",
                        short: true
                    }
                    ]
            
            }
        ]
    };
    robot.messageRoom(room, message);

    return res.send('OK');
  });
};
