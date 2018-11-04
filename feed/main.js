

for (let i = 1; i < 11; i++) {
    
    $.get(`./news_data2/data${i}.json`, function(data) {
        console.log(data)
     }, 'json');
}