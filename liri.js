var Twit = require("twit");

var keys = require('./keys');
var T = new Twit(keys);

/*var params =  {
  q: 'coding',
  count: 2
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
var tweets = data.statuses;
for (var i = 0; i < tweets.length, i++) {
  console.log(tweets[i].text);
}*/


//  console.log(data);
//}
//posting function
var tweet = {
  status: '#coding homework from node.js'
}

T.post('statuses/update', { status: 'Hello Twitter World!' },
  function(err, data, response) {
    console.log(data)
  })

T.get('search/tweets', { q: 'rainbow', count: 5 },
  function(err, data, response) {
    console.log(data)
})
