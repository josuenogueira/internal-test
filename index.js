var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send("{\"calculateOrderDataResponse\":{\"soldToParty\":\"100301968\",\"orderItemsCredit\":[{\"unitPrice\":4.0,\"taxes\":25.0,\"targetQuantity\":20,\"salesUnit\":\"CJ\",\"requiredQuantity\":20,\"requiredDate\":\"2015-08-12\",\"productId\":\"000000000003000022\",\"itemNumber\":\"10\",\"discount\":1.0},{\"unitPrice\":20.0,\"taxes\":15.0,\"targetQuantity\":10,\"salesUnit\":\"CJ\",\"requiredQuantity\":10,\"requiredDate\":\"2015-08-05\",\"productId\":\"000000000003000005\",\"itemNumber\":\"20\",\"discount\":5.0}],\"orderItemsCash\":[{\"unitPrice\":5.0,\"taxes\":20.0,\"targetQuantity\":20,\"salesUnit\":\"CJ\",\"requiredQuantity\":20,\"requiredDate\":\"2015-08-12\",\"productId\":\"000000000003000022\",\"itemNumber\":\"10\",\"discount\":2.0},{\"unitPrice\":15.0,\"taxes\":10.0,\"targetQuantity\":10,\"salesUnit\":\"CJ\",\"requiredQuantity\":10,\"requiredDate\":\"2015-08-05\",\"productId\":\"000000000003000005\",\"itemNumber\":\"20\",\"discount\":10.0}],\"billlingParty\":\"100301951\"}}");
});
//Jossa 3
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
