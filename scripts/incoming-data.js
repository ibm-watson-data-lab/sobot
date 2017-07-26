module.exports = function(robot) {
  return robot.router.post('/hubot/stackoverflow/incoming', function(req, res) {
    var room;
    room = "advo-stack-overflow-t";
    console.log(req.body);
    var q;
    if(req.body.data.question) {
        q = req.body.data.question;
    }
    // robot.messageRoom(room, "A hook! value of " + req.body.a);

    var message = {
        attachments:
        [
            {
                title: q.title,
                color: "#e09900",
                text: "<" + q.link + "| view on stackoverflow> or <https://sodashboard.mybluemix.net/home.html#edit?" + q.question_id + "| view on the dashboard>",
                fields:
                    [
                    {
                        title: "Author",
                        value: "<" + q.owner.link + "|" + q.owner.display_name + ">",
                        short: true
                    },
                    {   title:"Tagged",
                        value: q.tags.join(", "),
                        short:true
                    }
                    ]
            
            }
        ]
    };
    robot.messageRoom(room, message);

    return res.send('OK');
  });
};
