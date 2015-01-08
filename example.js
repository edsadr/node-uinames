var uinames = require('./uiname.js');

uinames({
  country: 'Colombia',
  amount: 10
}, function(err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data);
});