const request = require("request");
const notifier = require('node-notifier');

var isNotified = false;

setInterval(() => {
  request({uri: "http://www.realmadrid.com"}, 
  (_error, _response, body) => {
    if(body.toLowerCase().search("hazard") > 0 && !isNotified) {
      notifier.notify({
        title: 'Hazard has signed!',
        message: 'Hazard is a new player for Real Madrid!!!',
        sound: true
      });
      isNotified = true;
    }
  });
}, 60000);