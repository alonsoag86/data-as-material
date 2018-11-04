
// let fs = require('fs');

// let data = JSON.parse(fs.readFileSync('./news_data2/data1.json'));



for (let i = 1; i < 11; i++) {
    
    $.get(`./news_data2/data${i}.json`, function(data) {
        console.log(data)
     }, 'json');
}