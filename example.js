var uinames = require('./uiname.js');

uinames({
  country: 'Colombia',
  amount: 10
}, function(err, data) {
  if (err) {
    return console.err(err);
  }

  console.log(data);
});
