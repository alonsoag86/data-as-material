

const Twit = require('twit')
const config = require ('./config')
//console.log(config)


let T = new Twit(config);

let params = {
  q : 'mars',
  lang: 'en',
  count: 500,
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  console.log(data)
};

// var stream = T.stream('statuses/filter', { track: '#mars, #climatechange', language: 'en' })
 
// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })