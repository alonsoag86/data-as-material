
let climatePromises = [];

for (let i = 1; i < 11; i++) {
    const request = $.get(`./climate_change/climate_data${i}.json`).then(data => {
      //console.log([i,data])
      return data
    });
    climatePromises.push(request)
  }

Promise.all(climatePromises).then(earthNews => {
    //console.log('All requests completed')
    earthNews.forEach(function(element) {
        for (let i = 0; i < 19; i++) {
        let earth = {}
        earth.title = element.articles[i].title
        earth.source = element.articles[i].source.name
        earth.date = element.articles[i].publishedAt.split('T')[0]
        $('.split.right.multipleslides').append(
            $('<h2/>')
                .addClass("centered")
                .append("<h2/>")
                .text(earth.title)
            );
        }
    })
    
    $('.multipleslides').each(function(){
        var $this = this;
        $('> :gt(0)', $this).hide();
        setInterval(function(){
        $('> :first-child',$this).fadeOut()
            .next().fadeIn().end()
            .appendTo($this);
        }, 6000);
    })
})


let marsPromises = [];

for (let i = 1; i < 11; i++) {
  const request = $.get(`./mars/mars_data${i}.json`).then(data => {
    //console.log([i,data])
    return data
  });
  marsPromises.push(request)
}


Promise.all(marsPromises).then(marsNews => {
//console.log('All requests completed')
  marsNews.forEach(function(element) {
        for (let i = 0; i < 19; i++) {
        let space = {}
        space.title = element.articles[i].title
        space.source = element.articles[i].source.name
        space.date = element.articles[i].publishedAt.split('T')[0]
        $('.split.left.multipleslides').append(
            $('<h2/>')
                .addClass("centered")
                .append("<h2/>")
                .text(space.title)
            );
        }
    })

    $('.multipleslides').each(function(){
        var $this = this;
        $('> :gt(0)', $this).hide();
        setInterval(function(){
        $('> :first-child',$this).fadeOut()
            .next().fadeIn().end()
            .appendTo($this);
        }, 6000);
    })
})


