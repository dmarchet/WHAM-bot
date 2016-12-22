var dotenv = require('dotenv').config()
var _ = require('lodash');
var Client      = require('node-rest-client').Client;
var Twit        = require('twit');
var async       = require('async');
var lyrics = [
["Last Christmas, I gave you my heart But the very next day, you gave it away"],
["This year, to save me from tears I'll give it to someone special"],
["Last Christmas, I gave you my heart But the very next day, you gave it away"],
["This year, to save me from tears I'll give it to someone special (special)"],
["Once bitten and twice shy I keep my distance but you still catch my eye"],
["Tell me baby do you recognize me? Well it's been a year, it doesn't surprise me"],
["I wrapped it up and sent it With a note saying 'I Love You' I meant it"],
["Now I know what a fool I've been But if you kissed me now I know you'd fool me again"],
["Last Christmas, I gave you my heart But the very next day, you gave it away"],
["This year, to save me from tears I'll give it to someone special (special)"],
["Last Christmas, I gave you my heart But the very next day, you gave it away"],
["This year, to save me from tears I'll give it to someone special (special)"],
["A face on a lover with a fire in his heart A man undercover but you tore him apart"],
["Maybe next year, I'll give it to someone, I'll give it to someone special"],
["Special, someone, someone I'll give it to someone, I'll give it to someone special"],
["Who'll give me something in return I'll give it to someone, hold my heart and watch it burn"],
["I'll give it to someone, I'll give it to someone special I thought you were here to stay"],
["How can love be for a day? I thought you were someone special, gave you my heart"],
["I'll give it to someone, I'll give it to someone"],
["Last Christmas I gave you my heart You gave it away"],
["I'll give it to someone, I'll give it to someone"]
];
console.log(process.env)
var t = new Twit({
  consumer_key:          process.env['12DAYSOFWHAM_TWIT_CONSUMER_KEY'],
  consumer_secret:      process.env['12DAYSOFWHAM_TWIT_CONSUMER_SECRET'],
  access_token          : process.env['12DAYSOFWHAM_TWIT_ACCESS_TOKEN'],
  access_token_secret   : process.env['12DAYSOFWHAM_TWIT_ACCESS_TOKEN_SECRET']
});


var ref_index = 0;


var printLine = function(){
  var tweet = {
    status: lyrics[ref_index].toString()
  };
  return tweet
  if (ref_index < 20) {
  ref_index += 1;
  }
  else{
    ref_index = 0;
  };
};

var post = function() {
  t.post('statuses/update', printLine(), function(err, data, response){
  console.log(data);
});
}

setInterval(post, 180000);




