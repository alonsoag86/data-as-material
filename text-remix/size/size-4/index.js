let sourceText =  "I have emotions that are like newspapers that read themselves. I go for days at a time trapped in the want ads. I feel as if I am an ad for the sale of a haunted house: 18 rooms $37,000 I'm yours ghosts and all";


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
  }
  function draw() {
    background('black');
    fill('pink');
    textSize(10);
    textAlign(CENTER, CENTER);
    var middle = sourceText.length / 2;
    var left = middle - ((mouseX / width) * middle);
    var right = middle + ((mouseX / width) * middle);
    text(
      sourceText.substring(left, right+1),
      width/2, height/2);
  }

