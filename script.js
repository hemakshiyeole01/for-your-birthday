// ---------- entry flow ----------
const entryScreen = document.getElementById('entryScreen');
const boomScreen = document.getElementById('boomScreen');
const boomText = document.getElementById('boomText');
const mainScreen = document.getElementById('mainScreen');
const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const nameDisplay = document.getElementById('nameDisplay');

nameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const val = nameInput.value.trim();
  if(!val) return;
  nameDisplay.textContent = val;
  boomText.textContent = `HAPPY BIRTHDAY, ${val.toUpperCase()}!`;

  entryScreen.classList.add('hide');
  boomScreen.classList.add('show');

  setTimeout(() => {
    boomScreen.classList.remove('show');
    mainScreen.classList.add('reveal');
    burstConfetti(70);
  }, 900);
});

// ---------- candles with wishes ----------
const candleWishes = [
  "One for all the good things already on their way to you.",
  "One for the people who love you, showing up exactly when you need them.",
  "And one for you — for being exactly, unapologetically you. Make this year count. 🎉"
];
let candlesOut = 0;
const candles = document.querySelectorAll('.candle');
const cakeMsg = document.getElementById('cakeMsg');
const relightBtn = document.getElementById('relightBtn');

candles.forEach(c => {
  c.addEventListener('click', () => {
    if(c.classList.contains('out')) return;
    c.classList.add('out');
    candlesOut++;
    cakeMsg.textContent = candleWishes[Math.min(candlesOut-1, candleWishes.length-1)];
    if(candlesOut === candles.length){
      relightBtn.classList.add('show');
      burstConfetti(60);
    }
  });
});
relightBtn.addEventListener('click', () => {
  candles.forEach(c => c.classList.remove('out'));
  candlesOut = 0;
  cakeMsg.textContent = "";
  relightBtn.classList.remove('show');
});

// ---------- jokes ----------
const jokes = [
  { front: "Why did the birthday cake go to the doctor?", back: "It was feeling a little crumby." },
  { front: "What do you call a bear with no teeth?", back: "A gummy bear — happy birthday, you're one year gummier." },
  { front: "Why don't candles ever get invited to parties?", back: "They already know how to light one up." },
  { front: "What's a birthday's favorite exercise?", back: "Cake lifts." }
];
const jokeGrid = document.getElementById('jokeGrid');
jokes.forEach((j) => {
  const card = document.createElement('div');
  card.className = 'flip-card';
  card.innerHTML = `
    <div class="flip-inner">
      <div class="flip-face flip-front">${j.front}</div>
      <div class="flip-face flip-back">${j.back}</div>
    </div>`;
  card.addEventListener('click', () => card.classList.toggle('flipped'));
  jokeGrid.appendChild(card);
});

// ---------- confetti ----------
const colors = ['#ff4d8d','#ffce45','#35e6b0','#8c5bff','#ff9d3c'];
function burstConfetti(count){
  for(let i=0;i<count;i++){
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      const startX = Math.random()*window.innerWidth;
      el.style.left = startX + 'px';
      el.style.background = colors[Math.floor(Math.random()*colors.length)];
      el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      document.body.appendChild(el);
      const duration = 2200 + Math.random()*1400;
      const drift = (Math.random()-0.5) * 200;
      const rotate = Math.random()*720 - 360;
      el.animate([
        { transform: `translate(0,0) rotate(0deg)`, opacity:1 },
        { transform: `translate(${drift}px, ${window.innerHeight+40}px) rotate(${rotate}deg)`, opacity:0.9 }
      ], { duration, easing:'ease-in' }).onfinish = () => el.remove();
    }, i*18);
  }
}
document.getElementById('confettiBtn').addEventListener('click', () => burstConfetti(90));

// ---------- balloons (background, always running) ----------
const balloonColors = ['#ff4d8d','#ffce45','#35e6b0','#8c5bff','#ff9d3c','#ff8fc7'];
const balloonLayer = document.getElementById('balloonLayer');
function spawnBalloon(){
  const b = document.createElement('div');
  b.className = 'balloon';
  b.style.left = Math.random()*100 + 'vw';
  b.style.background = balloonColors[Math.floor(Math.random()*balloonColors.length)];
  const duration = 14 + Math.random()*10;
  b.style.animationDuration = duration + 's';
  balloonLayer.appendChild(b);
  setTimeout(() => b.remove(), duration*1000);
}
for(let i=0;i<6;i++) setTimeout(spawnBalloon, i*1200);
setInterval(spawnBalloon, 3200);
