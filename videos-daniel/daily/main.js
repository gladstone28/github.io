let fortunes = ['Psalm 1:1 Blessed is the man that walketh not in the counsel of the ungodly nor standeth in the way of sinners nor sitteth in the seat of the scornful.',
  'Psalm 100:2 Serve the LORD with gladness come before his presence with singing.',
  'As the deer longs for streams of water so my soul longs for you O God. (Ps. 42:2)',
  'Psalm 119:2 Blessed are they that keep his testimonies and that seek him with the whole heart',
  'As the deer longs for streams of water so my soul longs for you O God'
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = 'Please close window and return tomorrow for more!';
  button.style.cursor = 'default';

  //add your code here
  button.removeEventListener('click', showFortune);
}

button.addEventListener('click', showFortune);