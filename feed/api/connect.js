
const fs = require('fs');
const dotenv = require('dotenv').load();
const NewsAPI = require('newsapi');
//console.log(process.env.MY_KEY)
const newsapi = new NewsAPI(process.env.MY_KEY)


for (let i = 1; i < 11; i++) {

newsapi.v2.everything({
    q: 'mars, climate change',
    from: '2018-10-04',
    to: '2018-11-03',
    language: 'en',
    sortBy: 'relevancy',
    page: i
  }).then(response => {
    //console.log(response);
    fs.writeFileSync(`./data${i}.json`, JSON.stringify(response));
  });

}


