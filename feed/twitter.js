

const Twit = require('twit')
const config = require ('./config')
//console.log(config)


let T = new Twit(config);

var stream = T.stream('statuses/filter', { track: '#mars', language: 'en' })
 
stream.on('tweet', function (tweet) {
  console.log(tweet)
})