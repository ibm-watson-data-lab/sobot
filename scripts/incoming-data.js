module.exports = function(robot) {
  var he = require('he');
  var striptags = require('striptags');

  return robot.router.post('/hubot/stackoverflow/incoming', function(req, res) {
    var room;
    room = "advo-stack-overflow-t";
    console.log(req.body);
    var q;
    if(req.body.data.question) {
      q = req.body.data.question;

      var text = "<" + q.link + "| view on stackoverflow> or <https://sodashboard.mybluemix.net/home.html#edit?" + q.question_id + "| view on the dashboard>";
      if(q.body) {
        text += "\n" + striptags(q.body.substring(0,300));
        if(q.body.length > 300) {
          text += " ...";
        }
      }

      var message = {
          attachments:
          [
              {
                  title: he.decode(q.title),
                  color: "#e09900",
                  text: text,
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
    } else {
      return res.send('Question was missing');
    }
  });
};
