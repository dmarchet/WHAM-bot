var _ = require('lodash');
var Client      = require('node-rest-client').Client;
var Twit        = require('twit');
var async       = require('async');
import * as library from 'library';

var t = new Twit({
  consumer_key:         : process.env.PICKTWOBOT_TWIT_CONSUMER_KEY,
  consumer_secret:      : process.env.PICKTWOBOT_TWIT_CONSUMER_SECRET,
  access_token          : process.env.PICKTWOBOT_TWIT_ACCESS_TOKEN,
  access_token_secret   : process.env.PICKTWOBOT_TWIT_ACCESS_TOKEN_SECRET
});


var ref_index = 0;

var post = t.post('statuses/update', printLine(), function(err, data, response){
  console.log(data);
});

var printLine = function(){
  var tweet = {
    status: library.lyrics[ref_index].toString();
  };
  if (ref_index < 20) {
  ref_index += 1;
  }
  else{
    ref_index = 0;
  };
};

setInterval(post, 180000);




