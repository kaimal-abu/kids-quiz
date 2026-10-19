/* ===================== QUESTION BANK ===================== */
const QUIZ_DATA = {
  mythology: [
    {"q": "Who is known as the 'Monkey God' in Indian mythology?", "options": ["Hanuman", "Ganesha", "Krishna", "Shiva"], "answer": 0, "emoji": "🐒"},
    {"q": "Which god has the head of an elephant?", "options": ["Vishnu", "Ganesha", "Indra", "Brahma"], "answer": 1, "emoji": "🐘"},
    {"q": "Who was kidnapped by the demon king Ravana?", "options": ["Sita", "Radha", "Draupadi", "Parvati"], "answer": 0, "emoji": "👑"},
    {"q": "How many heads did the demon king Ravana have?", "options": ["Five", "Ten", "Three", "Seven"], "answer": 1, "emoji": "😈"},
    {"q": "Which bird carries the god Vishnu?", "options": ["Peacock", "Garuda (eagle)", "Owl", "Swan"], "answer": 1, "emoji": "🦅"},
    {"q": "Who is Lord Krishna's best friend in the Mahabharata?", "options": ["Arjuna", "Ravana", "Hanuman", "Bhishma"], "answer": 0, "emoji": "🏹"},
    {"q": "What is the name of Lord Shiva's mighty weapon?", "options": ["Sudarshan Chakra", "Trishul (trident)", "Bow", "Mace"], "answer": 1, "emoji": "🔱"},
    {"q": "Who is the goddess of wealth and good fortune?", "options": ["Saraswati", "Lakshmi", "Durga", "Kali"], "answer": 1, "emoji": "🪷"},
    {"q": "In the Ramayana, who helped Rama build a bridge to Lanka?", "options": ["Elephants", "The monkey army (vanaras)", "Fish", "Birds"], "answer": 1, "emoji": "🌉"},
    {"q": "Which animal does the goddess Durga ride?", "options": ["Horse", "Lion (or tiger)", "Elephant", "Peacock"], "answer": 1, "emoji": "🦁"}
  ],
  sports: [
    {"q": "What sport is India most famous for playing?", "options": ["Cricket", "Baseball", "Ice hockey", "Rugby"], "answer": 0, "emoji": "🏏"},
    {"q": "What is the national sport of India?", "options": ["Cricket", "Hockey", "Football", "Kabaddi"], "answer": 1, "emoji": "🏑"},
    {"q": "In cricket, how many players are on one team on the field?", "options": ["9", "11", "13", "7"], "answer": 1, "emoji": "🏏"},
    {"q": "Which shape is a cricket ball?", "options": ["Square", "Round", "Oval", "Triangle"], "answer": 1, "emoji": "⚾"},
    {"q": "What do you call it when a batsman hits the ball out of the ground for 6 runs?", "options": ["A six", "A goal", "A touchdown", "A strike"], "answer": 0, "emoji": "🎯"},
    {"q": "In badminton, what do players hit back and forth?", "options": ["A ball", "A shuttlecock", "A puck", "A disc"], "answer": 1, "emoji": "🏸"},
    {"q": "How many rings are there in the Olympic symbol?", "options": ["4", "5", "6", "3"], "answer": 1, "emoji": "🔗"},
    {"q": "Which sport is played on ice with a puck?", "options": ["Ice hockey", "Basketball", "Cricket", "Golf"], "answer": 0, "emoji": "🏒"},
    {"q": "Chess is a game played on a board with how many squares?", "options": ["32", "64", "16", "100"], "answer": 1, "emoji": "♟️"},
    {"q": "A marathon is a race of about how many kilometers?", "options": ["5 km", "10 km", "42 km", "100 km"], "answer": 2, "emoji": "🏃"}
  ],
  animals: [
    {"q": "What is the national animal of India?", "options": ["Lion", "Elephant", "Tiger", "Leopard"], "answer": 2, "emoji": "🐯"},
    {"q": "What is the national bird of India?", "options": ["Parrot", "Peacock", "Eagle", "Sparrow"], "answer": 1, "emoji": "🦚"},
    {"q": "Which big animal in India has a long trunk?", "options": ["Elephant", "Giraffe", "Rhino", "Hippo"], "answer": 0, "emoji": "🐘"},
    {"q": "Which Indian animal is famous for its black and orange stripes?", "options": ["Zebra", "Tiger", "Cheetah", "Leopard"], "answer": 1, "emoji": "🐅"},
    {"q": "Where do the Asiatic lions of India mainly live?", "options": ["Gir Forest, Gujarat", "Kerala backwaters", "Thar Desert", "Himalayas"], "answer": 0, "emoji": "🦁"},
    {"q": "Which insect makes honey?", "options": ["Bee", "Ant", "Fly", "Mosquito"], "answer": 0, "emoji": "🐝"},
    {"q": "Which sea creature has eight arms?", "options": ["Octopus", "Fish", "Crab", "Shark"], "answer": 0, "emoji": "🐙"},
    {"q": "Which farm animal gives us wool?", "options": ["Sheep", "Cow", "Pig", "Hen"], "answer": 0, "emoji": "🐑"},
    {"q": "Which nocturnal animal has wings but is a mammal, not a bird?", "options": ["Bat", "Owl", "Sparrow", "Moth"], "answer": 0, "emoji": "🦇"},
    {"q": "Which slow-moving animal spends most of its life hanging from trees?", "options": ["Sloth", "Cheetah", "Rabbit", "Deer"], "answer": 0, "emoji": "🦥"}
  ],
  history: [
    {"q": "On which date does India celebrate Independence Day?", "options": ["15 August", "26 January", "2 October", "15 September"], "answer": 0, "emoji": "🇮🇳"},
    {"q": "Who is known as the 'Father of the Nation' in India?", "options": ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Subhas Chandra Bose"], "answer": 1, "emoji": "🕊️"},
    {"q": "In which year did India get independence from British rule?", "options": ["1947", "1950", "1930", "1965"], "answer": 0, "emoji": "📅"},
    {"q": "Who was India's first Prime Minister?", "options": ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Sardar Patel"], "answer": 1, "emoji": "🎤"},
    {"q": "On which date is Republic Day celebrated every year?", "options": ["26 January", "15 August", "2 October", "14 November"], "answer": 0, "emoji": "🎉"},
    {"q": "Who built the Taj Mahal?", "options": ["Emperor Shah Jahan", "Akbar", "Ashoka", "Chandragupta"], "answer": 0, "emoji": "👑"},
    {"q": "Who is called the 'Father of the Indian Constitution'?", "options": ["Dr. B.R. Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"], "answer": 0, "emoji": "⚖️"},
    {"q": "Who wrote India's national anthem?", "options": ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Mahatma Gandhi", "Jawaharlal Nehru"], "answer": 0, "emoji": "✍️"},
    {"q": "How many spokes does the Ashoka Chakra on the Indian flag have?", "options": ["24", "12", "6", "30"], "answer": 0, "emoji": "☸️"},
    {"q": "What special day is celebrated on 14 November in India?", "options": ["Children's Day", "Teacher's Day", "Independence Day", "Republic Day"], "answer": 0, "emoji": "🎈"}
  ],
  maths: [
    {"q": "What is 2 + 3?", "options": ["4", "5", "6", "7"], "answer": 1, "emoji": "➕"},
    {"q": "What is 10 - 4?", "options": ["5", "6", "7", "8"], "answer": 1, "emoji": "➖"},
    {"q": "Which number comes after 9?", "options": ["8", "10", "11", "7"], "answer": 1, "emoji": "🔢"},
    {"q": "How many sides does a triangle have?", "options": ["2", "3", "4", "5"], "answer": 1, "emoji": "🔺"},
    {"q": "How many sides does a square have?", "options": ["3", "4", "5", "6"], "answer": 1, "emoji": "🟦"},
    {"q": "How many days are there in a week?", "options": ["5", "6", "7", "8"], "answer": 2, "emoji": "📅"},
    {"q": "How many hours are there in a day?", "options": ["12", "24", "48", "60"], "answer": 1, "emoji": "🕐"},
    {"q": "How many minutes are there in one hour?", "options": ["30", "60", "100", "12"], "answer": 1, "emoji": "⏰"},
    {"q": "What shape has 8 sides?", "options": ["Octagon", "Hexagon", "Pentagon", "Square"], "answer": 0, "emoji": "🛑"},
    {"q": "What is 100 - 50?", "options": ["25", "40", "50", "60"], "answer": 2, "emoji": "➖"}
  ],
  english: [
    {"q": "Which word means the opposite of 'big'?", "options": ["Tall", "Small", "Fast", "Loud"], "answer": 1, "emoji": "🔤"},
    {"q": "Which of these is a fruit?", "options": ["Carrot", "Apple", "Potato", "Onion"], "answer": 1, "emoji": "🍎"},
    {"q": "How many letters are there in the word 'CAT'?", "options": ["2", "3", "4", "5"], "answer": 1, "emoji": "🐱"},
    {"q": "Which word rhymes with 'HAT'?", "options": ["Dog", "Cat", "Sun", "Fish"], "answer": 1, "emoji": "🎩"},
    {"q": "What is the plural of 'dog' (more than one dog)?", "options": ["Dogs", "Doges", "Dogies", "Dogss"], "answer": 0, "emoji": "🐕"},
    {"q": "How many letters are in the English alphabet?", "options": ["24", "25", "26", "27"], "answer": 2, "emoji": "🔤"},
    {"q": "What is the opposite of 'hot'?", "options": ["Cold", "Warm", "Dry", "Wet"], "answer": 0, "emoji": "❄️"},
    {"q": "What punctuation mark goes at the end of a question?", "options": ["Period (.)", "Question mark (?)", "Comma (,)", "Exclamation mark (!)"], "answer": 1, "emoji": "❓"},
    {"q": "Which word describes a person who flies an airplane?", "options": ["Pilot", "Chef", "Farmer", "Doctor"], "answer": 0, "emoji": "✈️"},
    {"q": "Which word means the same as 'start'?", "options": ["Begin", "Stop", "End", "Finish"], "answer": 0, "emoji": "🏁"}
  ],
  science: [
    {"q": "What do plants need to grow well?", "options": ["Sunlight and water", "Only darkness", "Only sand", "Only ice"], "answer": 0, "emoji": "🌱"},
    {"q": "How many legs does a spider have?", "options": ["6", "8", "10", "4"], "answer": 1, "emoji": "🕷️"},
    {"q": "What do we call water that has turned into solid ice?", "options": ["Steam", "Solid ice", "Gas", "Liquid"], "answer": 1, "emoji": "🧊"},
    {"q": "Which part of our body do we use to see?", "options": ["Ears", "Eyes", "Nose", "Hands"], "answer": 1, "emoji": "👁️"},
    {"q": "Which planet do we live on?", "options": ["Mars", "Earth", "Moon", "Sun"], "answer": 1, "emoji": "🌍"},
    {"q": "Which organ in the body pumps blood?", "options": ["The heart", "The ear", "The nose", "The elbow"], "answer": 0, "emoji": "❤️"},
    {"q": "How many planets are there in our solar system?", "options": ["7", "8", "9", "10"], "answer": 1, "emoji": "🪐"},
    {"q": "Which planet is known as the Red Planet?", "options": ["Mars", "Venus", "Jupiter", "Saturn"], "answer": 0, "emoji": "🔴"},
    {"q": "What force pulls objects down toward the Earth?", "options": ["Gravity", "Wind", "Light", "Sound"], "answer": 0, "emoji": "⬇️"},
    {"q": "What travels faster: light or sound?", "options": ["Light", "Sound", "They are the same speed", "Neither travels"], "answer": 0, "emoji": "⚡"}
  ]
};

/* ===================== MAPS DATA ===================== */
const STATE_NAMES = {
  "JK":"Jammu and Kashmir","PB":"Punjab","HP":"Himachal Pradesh","HR":"Haryana","UT":"Uttarakhand",
  "RJ":"Rajasthan","UP":"Uttar Pradesh","BR":"Bihar","GJ":"Gujarat","MP":"Madhya Pradesh",
  "JH":"Jharkhand","WB":"West Bengal","MH":"Maharashtra","CG":"Chhattisgarh","OR":"Odisha",
  "TG":"Telangana","AP":"Andhra Pradesh","KA":"Karnataka","GA":"Goa","KL":"Kerala","TN":"Tamil Nadu",
  "AS":"Assam","AR":"Arunachal Pradesh","ML":"Meghalaya","MN":"Manipur","MZ":"Mizoram","TR":"Tripura","NL":"Nagaland"
};

const INDIA_STATE_INFO = {
  "Jammu and Kashmir": {"capital": "Srinagar / Jammu", "cm": "Omar Abdullah", "language": "Kashmiri, Dogri, Urdu"},
  "Punjab": {"capital": "Chandigarh", "cm": "Bhagwant Mann", "language": "Punjabi"},
  "Himachal Pradesh": {"capital": "Shimla", "cm": "Sukhvinder Singh Sukhu", "language": "Hindi"},
  "Haryana": {"capital": "Chandigarh", "cm": "Nayab Singh Saini", "language": "Hindi"},
  "Uttarakhand": {"capital": "Dehradun", "cm": "Pushkar Singh Sharma", "language": "Hindi"},
  "Rajasthan": {"capital": "Jaipur", "cm": "Bhajan Lal Sharma", "language": "Hindi"},
  "Uttar Pradesh": {"capital": "Lucknow", "cm": "Yogi Adityanath", "language": "Hindi"},
  "Bihar": {"capital": "Patna", "cm": "Nitish Kumar", "language": "Hindi"},
  "Gujarat": {"capital": "Gandhinagar", "cm": "Bhupendra Patel", "language": "Gujarati"},
  "Madhya Pradesh": {"capital": "Bhopal", "cm": "Mohan Yadav", "language": "Hindi"},
  "Jharkhand": {"capital": "Ranchi", "cm": "Hemant Soren", "language": "Hindi"},
  "West Bengal": {"capital": "Kolkata", "cm": "Mamata Banerjee", "language": "Bengali"},
  "Maharashtra": {"capital": "Mumbai", "cm": "Devendra Fadnavis", "language": "Marathi"},
  "Chhattisgarh": {"capital": "Raipur", "cm": "Vishnu Deo Sai", "language": "Hindi"},
  "Odisha": {"capital": "Bhubaneswar", "cm": "Mohan Charan Majhi", "language": "Odia"},
  "Telangana": {"capital": "Hyderabad", "cm": "A. Revanth Reddy", "language": "Telugu"},
  "Andhra Pradesh": {"capital": "Amaravati", "cm": "N. Chandrababu Naidu", "language": "Telugu"},
  "Karnataka": {"capital": "Bengaluru", "cm": "Siddaramaiah", "language": "Kannada"},
  "Goa": {"capital": "Panaji", "cm": "Pramod Sawant", "language": "Konkani"},
  "Kerala": {"capital": "Thiruvananthapuram", "cm": "Pinarayi Vijayan", "language": "Malayalam"},
  "Tamil Nadu": {"capital": "Chennai", "cm": "M. K. Stalin", "language": "Tamil"},
  "Assam": {"capital": "Dispur", "cm": "Himanta Biswa Sarma", "language": "Assamese"}
};

const WORLD_NAME_LOOKUP = {
  "Afghanistan": ["af", "Kabul"], "Australia": ["au", "Canberra"], "Bangladesh": ["bd", "Dhaka"],
  "Brazil": ["br", "Brasilia"], "Canada": ["ca", "Ottawa"], "China": ["cn", "Beijing"],
  "Egypt": ["eg", "Cairo"], "France": ["fr", "Paris"], "Germany": ["de", "Berlin"],
  "India": ["in", "New Delhi"], "Japan": ["jp", "Tokyo"], "Russia": ["ru", "Moscow"],
  "United Kingdom": ["gb", "London"], "United States of America": ["us", "Washington, D.C."]
};

/* ===================== SHARED HELPERS ===================== */
function flagImgUrl(code){ return 'https://flagcdn.com/w80/' + code.toLowerCase() + '.png'; }
function speak(text){ 
  try {
    if(!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  } catch(e){} 
}
function confettiBurst(){
  const c = document.getElementById('confetti');
  if(!c) return;
  const emojis = ['🎉','⭐','🎊','✨','🥳','⏰'];
  for(let i=0; i<16; i++){
    const span = document.createElement('span');
    span.className = 'confetti-piece';
    span.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    span.style.left = Math.random()*100 + 'vw';
    span.style.animationDuration = (1.2 + Math.random()*1.2) + 's';
    span.style.fontSize = (16 + Math.random()*18) + 'px';
    c.appendChild(span);
    setTimeout(() => span.remove(), 2600);
  }
}
function shuffleArray(arr){
  const a = arr.slice();
  for(let i=a.length-1; i>0; i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Universal Quit to Home Function
function quitToQuizHome(){
  try { if('speechSynthesis' in window) window.speechSynthesis.cancel(); } catch(e){}
  showPage('quiz');
  if(window.singleQuizReset) window.singleQuizReset();
  if(window.arcadeQuizReset) window.arcadeQuizReset();
  if(window.clockQuizReset) window.clockQuizReset();

  const mainPicker = document.getElementById('quizMainModePicker');
  const singleContainer = document.getElementById('quizSingleContainer');
  const arcadeContainer = document.getElementById('arcadeContainer');
  const clockContainer = document.getElementById('quizClockContainer');
  const headerSub = document.getElementById('quizHeaderSub');

  if(mainPicker) mainPicker.style.display = 'flex';
  if(singleContainer) singleContainer.style.display = 'none';
  if(arcadeContainer) arcadeContainer.style.display = 'none';
  if(clockContainer) clockContainer.style.display = 'none';
  if(headerSub) headerSub.textContent = 'Choose how you want to play!';
}

/* ===================== INDIA MODULE (OFFLINE SAFE) ===================== */
function buildIndiaModule(){
  let activePath = null, mode = 'explore', quizTarget = null, regionPaths = [], dotsVisible = true;
  const holder = document.getElementById('mapHolderIN');
  const nameEl = document.getElementById('nameTextIN');
  const factsGrid = document.getElementById('factsGridIN');
  const capText = document.getElementById('capTextIN');
  const cmText = document.getElementById('cmTextIN');
  const langText = document.getElementById('langTextIN');
  const banner = document.getElementById('bannerIN');
  const qbar = document.getElementById('quizBarIN');

  // Interactive embedded SVG map (100% offline, guaranteed instant load)
  const SVG_DATA = `
  <svg viewBox="0 0 500 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <g id="statesGroup">
      <path id="JK" title="Jammu and Kashmir" d="M165,30 L230,25 L245,75 L180,95 L150,75 Z" />
      <path id="PB" title="Punjab" d="M150,100 L190,95 L195,135 L155,140 Z" />
      <path id="HP" title="Himachal Pradesh" d="M195,85 L240,80 L245,120 L200,125 Z" />
      <path id="HR" title="Haryana" d="M160,145 L200,140 L205,180 L165,185 Z" />
      <path id="RJ" title="Rajasthan" d="M85,150 L160,140 L170,260 L75,250 Z" />
      <path id="UP" title="Uttar Pradesh" d="M210,140 L315,135 L320,220 L205,225 Z" />
      <path id="BR" title="Bihar" d="M325,185 L395,180 L400,235 L330,240 Z" />
      <path id="GJ" title="Gujarat" d="M50,260 L145,255 L135,340 L40,325 Z" />
      <path id="MP" title="Madhya Pradesh" d="M155,245 L290,235 L285,325 L150,335 Z" />
      <path id="JH" title="Jharkhand" d="M320,245 L380,240 L375,300 L315,305 Z" />
      <path id="WB" title="West Bengal" d="M385,245 L420,240 L415,340 L380,335 Z" />
      <path id="MH" title="Maharashtra" d="M145,345 L270,335 L255,420 L135,410 Z" />
      <path id="CG" title="Chhattisgarh" d="M275,310 L325,305 L315,405 L265,390 Z" />
      <path id="OR" title="Odisha" d="M325,315 L385,310 L365,395 L315,390 Z" />
      <path id="TG" title="Telangana" d="M215,395 L285,385 L275,445 L210,440 Z" />
      <path id="AP" title="Andhra Pradesh" d="M245,435 L320,410 L285,510 L235,485 Z" />
      <path id="KA" title="Karnataka" d="M155,420 L225,415 L215,510 L150,490 Z" />
      <path id="GA" title="Goa" d="M140,445 L155,445 L150,465 L138,460 Z" />
      <path id="KL" title="Kerala" d="M175,515 L205,510 L195,580 L170,570 Z" />
      <path id="TN" title="Tamil Nadu" d="M205,505 L265,495 L250,585 L190,580 Z" />
      <path id="AS" title="Assam" d="M425,190 L485,185 L480,225 L420,230 Z" />
    </g>
    <g id="capitalDotsGroup">
      <circle cx="205" cy="55" r="4" class="capDot"/>
      <circle cx="170" cy="115" r="4" class="capDot"/>
      <circle cx="120" cy="205" r="4" class="capDot"/>
      <circle cx="260" cy="180" r="4" class="capDot"/>
      <circle cx="95" cy="295" r="4" class="capDot"/>
      <circle cx="220" cy="285" r="4" class="capDot"/>
      <circle cx="360" cy="210" r="4" class="capDot"/>
      <circle cx="345" cy="275" r="4" class="capDot"/>
      <circle cx="400" cy="290" r="4" class="capDot"/>
      <circle cx="195" cy="375" r="4" class="capDot"/>
      <circle cx="185" cy="465" r="4" class="capDot"/>
      <circle cx="225" cy="545" r="4" class="capDot"/>
      <circle cx="185" cy="550" r="4" class="capDot"/>
    </g>
  </svg>`;

  holder.innerHTML = SVG_DATA;
  const svg = holder.querySelector('svg');

  function clearActive(){ if(activePath){ activePath.classList.remove('active'); activePath = null; } }

  function showBanner(name, info){
    nameEl.textContent = name;
    if(info){
      capText.textContent = 'Capital: ' + info.capital;
      cmText.textContent = 'CM: ' + info.cm;
      langText.textContent = 'Language: ' + info.language;
      factsGrid.style.display = 'flex';
    } else {
      factsGrid.style.display = 'none';
    }
    banner.classList.remove('pop'); void banner.offsetWidth; banner.classList.add('pop');
  }

  function onTap(el, name){
    if(mode === 'quizState'){ handleQuizAnswer(el, name); return; }
    clearActive(); el.classList.add('active'); activePath = el;
    const info = INDIA_STATE_INFO[name] || null;
    showBanner(name, info);
    if(info) speak(name + '. Capital: ' + info.capital);
    else speak(name);
  }

  function handleQuizAnswer(el, name){
    if(name === quizTarget.name){
      el.classList.add('active'); activePath = el;
      qbar.textContent = "✅ Correct! That's " + name + "!";
      speak("Yes! That is " + name + "!");
      confettiBurst();
      setTimeout(nextQuizQuestion, 1600);
    } else {
      qbar.textContent = "❌ Oops, that's " + name + ". Try again for " + quizTarget.name + "!";
      speak("Not quite. Try finding " + quizTarget.name);
    }
  }

  function nextQuizQuestion(){
    clearActive();
    if(regionPaths.length === 0) return;
    quizTarget = regionPaths[Math.floor(Math.random()*regionPaths.length)];
    qbar.textContent = 'Find: ' + quizTarget.name;
    speak('Can you find ' + quizTarget.name + '?');
  }

  regionPaths = [];
  svg.querySelectorAll('path').forEach(p => {
    const id = p.getAttribute('id');
    const name = STATE_NAMES[id] || p.getAttribute('title');
    if(!name) return;
    regionPaths.push({ el: p, name });
    const fn = (e) => { e.preventDefault(); onTap(p, name); };
    p.addEventListener('click', fn);
    p.addEventListener('touchstart', fn, {passive: false});
  });

  function setMode(newMode){
    mode = newMode; clearActive();
    document.getElementById('modeExploreIN').classList.toggle('active', mode === 'explore');
    document.getElementById('modeQuizStateIN').classList.toggle('active', mode === 'quizState');
    if(mode === 'explore'){
      qbar.style.display = 'none';
      nameEl.textContent = 'Tap a state to begin!';
      factsGrid.style.display = 'none';
    } else {
      qbar.style.display = 'block';
      nextQuizQuestion();
    }
  }

  document.getElementById('modeExploreIN').addEventListener('click', () => setMode('explore'));
  document.getElementById('modeQuizStateIN').addEventListener('click', () => setMode('quizState'));
  document.getElementById('resetBtnIN').addEventListener('click', () => setMode('explore'));
  document.getElementById('speakBtnIN').addEventListener('click', () => {
    const t = nameEl.textContent;
    if(t && t !== 'Tap a state to begin!') speak(t);
  });
  document.getElementById('dotsBtnIN').addEventListener('click', (e) => {
    dotsVisible = !dotsVisible;
    const g = svg.querySelector('#capitalDotsGroup');
    if(g) g.style.display = dotsVisible ? '' : 'none';
    e.target.textContent = dotsVisible ? '🟡 Hide Capital Dots' : '🟡 Show Capital Dots';
  });
}

/* ===================== CLOCK MODULE (INSIDE QUIZ TAB) ===================== */
function buildClockModule(){
  let qIndex = 0, score = 0, roundLength = 10, answered = false;
  let currentTarget = null, timerInterval = null, advanceTimeout = null;

  const cx = 160, cy = 160;
  const hourHand = document.getElementById('hourHand');
  const minuteHand = document.getElementById('minuteHand');
  const progressEl = document.getElementById('clockProgress');
  const optionsEl = document.getElementById('clockOptions');
  const feedbackEl = document.getElementById('clockFeedback');
  const timerInfoEl = document.getElementById('clockTimerInfo');
  const cardBody = document.getElementById('clockCardBody');
  const resultScreen = document.getElementById('clockResultScreen');
  const finalScoreEl = document.getElementById('clockFinalScore');
  const finalMsgEl = document.getElementById('clockFinalMessage');

  function drawClockFace(){
    const ticksGroup = document.getElementById('clockTicks');
    const outerGroup = document.getElementById('clockOuterMinutes');
    const hoursGroup = document.getElementById('clockHourNumbers');
    ticksGroup.innerHTML = ''; outerGroup.innerHTML = ''; hoursGroup.innerHTML = '';

    for(let i = 1; i <= 12; i++){
      const angle = (i * 30) * (Math.PI / 180);
      const x1 = cx + 120 * Math.sin(angle), y1 = cy - 120 * Math.cos(angle);
      const x2 = cx + 110 * Math.sin(angle), y2 = cy - 110 * Math.cos(angle);
      const tick = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      tick.setAttribute('x1', x1); tick.setAttribute('y1', y1);
      tick.setAttribute('x2', x2); tick.setAttribute('y2', y2);
      tick.setAttribute('class', 'clock-tick');
      ticksGroup.appendChild(tick);

      const hx = cx + 92 * Math.sin(angle), hy = cy - 92 * Math.cos(angle);
      const hText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      hText.setAttribute('x', hx); hText.setAttribute('y', hy);
      hText.setAttribute('class', 'clock-hour-text');
      hText.textContent = i;
      hoursGroup.appendChild(hText);

      const mx = cx + 134 * Math.sin(angle), my = cy - 134 * Math.cos(angle);
      const mText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      mText.setAttribute('x', mx); mText.setAttribute('y', my);
      mText.setAttribute('class', 'clock-min-text');
      const minVal = (i * 5) % 60;
      mText.textContent = minVal === 0 ? "00" : (minVal < 10 ? "0" + minVal : minVal);
      outerGroup.appendChild(mText);
    }
  }

  function setClockHands(hour, minute){
    const minuteAngle = minute * 6;
    const hourAngle = ((hour % 12) * 30) + (minute * 0.5);

    const hLen = 55, mLen = 85;
    const hRad = (hourAngle - 90) * (Math.PI / 180);
    const mRad = (minuteAngle - 90) * (Math.PI / 180);

    hourHand.setAttribute('x2', cx + hLen * Math.cos(hRad));
    hourHand.setAttribute('y2', cy + hLen * Math.sin(hRad));
    minuteHand.setAttribute('x2', cx + mLen * Math.cos(mRad));
    minuteHand.setAttribute('y2', cy + mLen * Math.sin(mRad));
  }

  function clearTimers(){
    if(timerInterval){ clearInterval(timerInterval); timerInterval = null; }
    if(advanceTimeout){ clearTimeout(advanceTimeout); advanceTimeout = null; }
    timerInfoEl.style.display = 'none';
  }

  window.clockQuizReset = function(){
    clearTimers();
    cardBody.style.display = 'block';
    resultScreen.style.display = 'none';
    qIndex = 0; score = 0;
  };

  window.startClockQuiz = function(){
    window.clockQuizReset();
    showQuestion();
  };

  function generateTimeQuestion(){
    const hours = Math.floor(Math.random() * 12) + 1;
    const possibleMinutes = [0, 15, 30, 45, 10, 20, 50];
    const minutes = possibleMinutes[Math.floor(Math.random() * possibleMinutes.length)];
    const formatTime = (h, m) => `${h}:${m < 10 ? '0' + m : m}`;
    
    const correctStr = formatTime(hours, minutes);
    const distractors = new Set();
    while(distractors.size < 3){
      const dh = Math.floor(Math.random() * 12) + 1;
      const dm = possibleMinutes[Math.floor(Math.random() * possibleMinutes.length)];
      const ds = formatTime(dh, dm);
      if(ds !== correctStr) distractors.add(ds);
    }
    const options = shuffleArray([correctStr, ...Array.from(distractors)]);
    return { hour: hours, minute: minutes, correctText: correctStr, options };
  }

  function showQuestion(){
    clearTimers();
    answered = false;
    cardBody.style.display = 'block';
    resultScreen.style.display = 'none';

    currentTarget = generateTimeQuestion();
    setClockHands(currentTarget.hour, currentTarget.minute);

    progressEl.textContent = `Clock Quiz — Question ${qIndex + 1} of ${roundLength} (Score: ${score})`;
    feedbackEl.textContent = '';
    optionsEl.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    currentTarget.options.forEach((opt, idx)=>{
      const btn = document.createElement('button');
      btn.className = 'ctrl';
      btn.style.background = '#4c6ef5';
      btn.style.width = '100%';
      btn.textContent = `${letters[idx]}. ${opt}`;
      btn.addEventListener('click', () => onAnswer(opt === currentTarget.correctText, opt, btn));
      optionsEl.appendChild(btn);
    });

    speak(`What time is the clock showing?`);
  }

  function onAnswer(isCorrect, chosenText, btnEl){
    if(answered) return;
    answered = true;
    const allButtons = optionsEl.querySelectorAll('button');
    allButtons.forEach(b => b.disabled = true);

    if(isCorrect){
      score++;
      btnEl.style.background = '#2a9d8f';
      feedbackEl.textContent = '✅ Correct! Brilliant time-telling!';
      feedbackEl.style.color = '#2a9d8f';
      speak(`Yes! The time is ${currentTarget.correctText}!`);
      confettiBurst();

      advanceTimeout = setTimeout(()=>{
        qIndex++;
        if(qIndex < roundLength) showQuestion();
        else showResult();
      }, 1600);
    } else {
      btnEl.style.background = '#c0392b';
      allButtons.forEach(b => {
        if(b.textContent.slice(3) === currentTarget.correctText) b.style.background = '#2a9d8f';
      });
      feedbackEl.textContent = `❌ Oops! The correct time is ${currentTarget.correctText}`;
      feedbackEl.style.color = '#c0392b';
      speak(`Not quite. The clock shows ${currentTarget.correctText}.`);

      let secondsLeft = 10;
      timerInfoEl.style.display = 'inline-block';
      timerInfoEl.textContent = `⏳ Next clock in ${secondsLeft}s…`;

      timerInterval = setInterval(()=>{
        secondsLeft--;
        if(secondsLeft > 0){
          timerInfoEl.textContent = `⏳ Next clock in ${secondsLeft}s…`;
        } else {
          clearTimers();
        }
      }, 1000);

      advanceTimeout = setTimeout(()=>{
        clearTimers();
        qIndex++;
        if(qIndex < roundLength) showQuestion();
        else showResult();
      }, 10000);
    }
  }

  function showResult(){
    clearTimers();
    cardBody.style.display = 'none';
    resultScreen.style.display = 'flex';
    finalScoreEl.textContent = `You scored ${score} out of ${roundLength}!`;
    let msg = score >= 8 ? "You're a master of time! ⏰🌟" : (score >= 5 ? "Good job! Keep practicing the clock! 👏" : "Keep practicing! You will master telling time soon! 😊");
    finalMsgEl.textContent = msg;
    speak(`You scored ${score} out of ${roundLength}. ${msg}`);
    if(score >= 7) confettiBurst();
  }

  document.getElementById('clockPlayAgainBtn').addEventListener('click', () => {
    window.clockQuizReset();
    showQuestion();
  });

  drawClockFace();
}

/* ===================== ARCADE (2-PLAYER) MODULE ===================== */
function buildArcadeModule(){
  const TOPIC_LABELS = { mythology: "Mythology", sports: "Sports", animals: "Animals", history: "History", maths: "Maths", english: "English", science: "Science" };
  let currentTopic = null, queue = [], qIndex = 0, scoreP1 = 0, scoreP2 = 0, roundLength = 10;
  let answeredP1 = false, answeredP2 = false, p1Correct = false, p2Correct = false;
  let timerInterval = null, advanceTimeout = null;

  const picker = document.getElementById('arcadeTopicPicker');
  const wrap = document.getElementById('arcadeWrap');
  const resultWrap = document.getElementById('arcadeResultWrap');
  const progress = document.getElementById('arcadeProgress');
  const emojiEl = document.getElementById('arcadeEmoji');
  const questionText = document.getElementById('arcadeQuestionText');
  const timerInfoEl = document.getElementById('arcadeTimerInfo');
  const optsP1 = document.getElementById('arcadeOptionsP1');
  const optsP2 = document.getElementById('arcadeOptionsP2');
  const fbP1 = document.getElementById('arcadeFeedbackP1');
  const fbP2 = document.getElementById('arcadeFeedbackP2');
  const scoreP1El = document.getElementById('arcadeScoreP1');
  const scoreP2El = document.getElementById('arcadeScoreP2');
  const finalWinner = document.getElementById('arcadeFinalWinner');
  const finalScores = document.getElementById('arcadeFinalScores');

  function clearTimers(){
    if(timerInterval){ clearInterval(timerInterval); timerInterval = null; }
    if(advanceTimeout){ clearTimeout(advanceTimeout); advanceTimeout = null; }
    timerInfoEl.style.display = 'none';
  }

  window.arcadeQuizReset = function(){
    clearTimers();
    wrap.style.display = 'none';
    resultWrap.style.display = 'none';
    picker.style.display = 'flex';
  };

  function startTopic(topic){
    currentTopic = topic; scoreP1 = 0; scoreP2 = 0; qIndex = 0;
    queue = shuffleArray(QUIZ_DATA[topic]).slice(0, roundLength);
    picker.style.display = 'none';
    wrap.style.display = 'flex';
    resultWrap.style.display = 'none';
    updateScores();
    showQuestion();
  }

  function updateScores(){
    scoreP1El.textContent = '🔵 P1: ' + scoreP1;
    scoreP2El.textContent = '🔴 P2: ' + scoreP2;
  }

  function renderOptionsFor(container, correctText, options, feedbackEl, onPick){
    container.innerHTML = '';
    const letters = ['A','B','C','D'];
    const shuffled = shuffleArray(options);
    shuffled.forEach((opt, idx)=>{
      const btn = document.createElement('button');
      btn.className = 'ctrl arcadeOptBtn';
      btn.style.background = '#4c6ef5';
      btn.textContent = letters[idx] + '. ' + opt;
      btn.addEventListener('click', () => onPick(opt === correctText, opt, btn, container, feedbackEl));
      container.appendChild(btn);
    });
  }

  function showQuestion(){
    clearTimers();
    answeredP1 = false; answeredP2 = false; p1Correct = false; p2Correct = false;
    const q = queue[qIndex];
    progress.textContent = TOPIC_LABELS[currentTopic] + ' — Question ' + (qIndex+1) + ' of ' + queue.length;
    emojiEl.textContent = q.emoji || '❓';
    questionText.textContent = q.q;
    fbP1.textContent = ''; fbP2.textContent = '';
    const correctText = q.options[q.answer];

    renderOptionsFor(optsP1, correctText, q.options, fbP1, (isCorrect, chosen, btn, container)=>{
      if(answeredP1) return; answeredP1 = true; p1Correct = isCorrect;
      Array.from(container.children).forEach(b => b.disabled = true);
      if(isCorrect){ scoreP1++; btn.style.background = '#2a9d8f'; fbP1.textContent = '✅ Correct!'; fbP1.style.color = '#2a9d8f'; confettiBurst(); }
      else { btn.style.background = '#c0392b'; Array.from(container.children).forEach(b=>{ if(b.textContent.slice(3) === correctText) b.style.background = '#2a9d8f'; }); fbP1.textContent = '❌ Correct: ' + correctText; fbP1.style.color = '#c0392b'; }
      updateScores();
      checkBothAnswered();
    });
    renderOptionsFor(optsP2, correctText, q.options, fbP2, (isCorrect, chosen, btn, container)=>{
      if(answeredP2) return; answeredP2 = true; p2Correct = isCorrect;
      Array.from(container.children).forEach(b => b.disabled = true);
      if(isCorrect){ scoreP2++; btn.style.background = '#2a9d8f'; fbP2.textContent = '✅ Correct!'; fbP2.style.color = '#2a9d8f'; confettiBurst(); }
      else { btn.style.background = '#c0392b'; Array.from(container.children).forEach(b=>{ if(b.textContent.slice(3) === correctText) b.style.background = '#2a9d8f'; }); fbP2.textContent = '❌ Correct: ' + correctText; fbP2.style.color = '#c0392b'; }
      updateScores();
      checkBothAnswered();
    });

    speak(q.q);
  }

  function checkBothAnswered(){
    if(answeredP1 && answeredP2){
      const anyWrong = (!p1Correct || !p2Correct);
      if(anyWrong){
        let secondsLeft = 10;
        timerInfoEl.style.display = 'inline-block';
        timerInfoEl.textContent = '⏳ Reviewing answer… next in ' + secondsLeft + 's';

        timerInterval = setInterval(()=>{
          secondsLeft--;
          if(secondsLeft > 0){
            timerInfoEl.textContent = '⏳ Reviewing answer… next in ' + secondsLeft + 's';
          } else {
            clearTimers();
          }
        }, 1000);

        advanceTimeout = setTimeout(()=>{
          clearTimers();
          qIndex++;
          if(qIndex < queue.length){ showQuestion(); } else { showResult(); }
        }, 10000);
      } else {
        advanceTimeout = setTimeout(()=>{
          qIndex++;
          if(qIndex < queue.length){ showQuestion(); } else { showResult(); }
        }, 1600);
      }
    }
  }

  function showResult(){
    clearTimers();
    wrap.style.display = 'none';
    resultWrap.style.display = 'flex';
    if(scoreP1 > scoreP2){ finalWinner.textContent = '🏆 Player 1 Wins! 🔵'; speak('Player 1 wins!'); }
    else if(scoreP2 > scoreP1){ finalWinner.textContent = '🏆 Player 2 Wins! 🔴'; speak('Player 2 wins!'); }
    else { finalWinner.textContent = "🤝 It's a Tie!"; speak("It's a tie!"); }
    finalScores.textContent = 'Player 1: ' + scoreP1 + '  |  Player 2: ' + scoreP2 + '  (out of ' + queue.length + ')';
    confettiBurst();
  }

  document.querySelectorAll('#arcadeTopicPicker .topicBtn').forEach(btn=>{
    btn.addEventListener('click', () => startTopic(btn.getAttribute('data-topic')));
  });
  document.getElementById('arcadePlayAgainBtn').addEventListener('click', () => {
    resultWrap.style.display = 'none';
    picker.style.display = 'flex';
  });
}

/* ===================== QUIZ MODE SWITCH ===================== */
function setupQuizModeSwitch(){
  const mainPicker = document.getElementById('quizMainModePicker');
  const singleContainer = document.getElementById('quizSingleContainer');
  const arcadeContainer = document.getElementById('arcadeContainer');
  const clockContainer = document.getElementById('quizClockContainer');
  const headerSub = document.getElementById('quizHeaderSub');

  document.getElementById('pickSingleMode').addEventListener('click', () => {
    mainPicker.style.display = 'none';
    singleContainer.style.display = 'flex';
    arcadeContainer.style.display = 'none';
    clockContainer.style.display = 'none';
    headerSub.textContent = 'Pick a topic and answer 10 fun questions!';
  });
  document.getElementById('pickClockMode').addEventListener('click', () => {
    mainPicker.style.display = 'none';
    singleContainer.style.display = 'none';
    arcadeContainer.style.display = 'none';
    clockContainer.style.display = 'flex';
    headerSub.textContent = 'Look at the hands of the clock and tell the time!';
    window.startClockQuiz();
  });
  document.getElementById('pickArcadeMode').addEventListener('click', () => {
    mainPicker.style.display = 'none';
    arcadeContainer.style.display = 'flex';
    singleContainer.style.display = 'none';
    clockContainer.style.display = 'none';
    headerSub.textContent = 'Two players, one question each round — good luck!';
  });
}

/* ===================== PAGE NAVIGATION ===================== */
function showPage(pageKey){
  const pages = { india: 'pageIndiaEl', world: 'pageWorldEl', quiz: 'pageQuizEl' };
  const navs = { india: 'navIndia', world: 'navWorld', quiz: 'navQuiz' };
  const bodyClasses = { india: 'page-india', world: 'page-world', quiz: 'page-quiz' };

  Object.keys(pages).forEach(key => {
    const el = document.getElementById(pages[key]);
    const btn = document.getElementById(navs[key]);
    if(el) el.classList.toggle('visible', key === pageKey);
    if(btn) btn.classList.toggle('active', key === pageKey);
    document.body.classList.toggle(bodyClasses[key], key === pageKey);
  });
}

// Global button setup
document.getElementById('navIndia').addEventListener('click', () => showPage('india'));
document.getElementById('navWorld').addEventListener('click', () => showPage('world'));
document.getElementById('navQuiz').addEventListener('click', () => showPage('quiz'));
document.getElementById('globalHomeBtn').addEventListener('click', quitToQuizHome);

/* ===================== RUN ===================== */
buildIndiaModule();
buildWorldModule();
buildQuizModule();
buildArcadeModule();
buildClockModule();
setupQuizModeSwitch();