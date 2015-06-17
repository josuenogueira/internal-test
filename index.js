var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send("{'calculateOrderDataResponse':{'orderItemsCredit':[{'unitPrice':500,'taxes':20,'targetQuantity':10000,'requiredQuantity':10000,'requiredDate':'2015-08-12','productId':'000000000003000022','itemNumber':'10','internalControl':'000000','discount':1},{'unitPrice':1000,'taxes':10,'targetQuantity':100,'requiredQuantity':100,'requiredDate':'2015-07-23','productId':'000000000003000005','itemNumber':'20','internalControl':'000000','discount':2}],'orderItemsCash':[{'unitPrice':400,'taxes':5,'targetQuantity':10000,'requiredQuantity':10000,'requiredDate':'2015-08-12','productId':'000000000003000022','itemNumber':'10','internalControl':'000000','discount':1},{'unitPrice':800,'taxes':7,'targetQuantity':100,'requiredQuantity':100,'requiredDate':'2015-07-23','productId':'000000000003000005','itemNumber':'20','internalControl':'000000','discount':2}]}}");
});
//Jossa 2
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
