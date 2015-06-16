var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send("{'export' : {'RETURN' : {'TYPE' : null,'CODE' : null,'MESSAGE' : null,'LOG_NO' : null,'LOG_MSG_NO' : '000000','MESSAGE_V1' : null,'MESSAGE_V2' : null,'MESSAGE_V3' : null,'MESSAGE_V4' : null}}");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
