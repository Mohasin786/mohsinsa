var express = require('express');
var app = express();

app.get('/customers',function(req, res){
 
  var company = [
	{company:fabrikam},
	{total_office:24},
	{product:id=1,name:"computers",quantity:10},
	{product:id=2,name:"laptops",quantity:20},
	{product:id=3,name:"mobiles",quantity:15},
	{iaas:"Amazon webservice cloud"}
	
  ];
  res.send(customer);
});
app.listen(8087);