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
  "AN":"Andaman and Nicobar Islands","AP":"Andhra Pradesh","AR":"Arunachal Pradesh","AS":"Assam",
  "BR":"Bihar","CH":"Chandigarh","CT":"Chhattisgarh","CG":"Chhattisgarh","DD":"Daman and Diu",
  "DN":"Dadra and Nagar Haveli","DH":"Dadra and Nagar Haveli and Daman and Diu","DL":"Delhi",
  "GA":"Goa","GJ":"Gujarat","HP":"Himachal Pradesh","HR":"Haryana","JH":"Jharkhand","JK":"Jammu and Kashmir",
  "KA":"Karnataka","KL":"Kerala","LD":"Lakshadweep","LA":"Ladakh","MH":"Maharashtra","ML":"Meghalaya",
  "MN":"Manipur","MP":"Madhya Pradesh","MZ":"Mizoram","NL":"Nagaland","OR":"Odisha","OD":"Odisha",
  "PB":"Punjab","PY":"Puducherry","RJ":"Rajasthan","SK":"Sikkim","TN":"Tamil Nadu","TG":"Telangana",
  "TR":"Tripura","UP":"Uttar Pradesh","UT":"Uttarakhand","UK":"Uttarakhand","WB":"West Bengal"
};
const INDIA_STATE_INFO = {"Andhra Pradesh": {"capital": "Amaravati", "cm": "N. Chandrababu Naidu", "language": "Telugu"}, "Arunachal Pradesh": {"capital": "Itanagar", "cm": "Pema Khandu", "language": "English"}, "Assam": {"capital": "Dispur", "cm": "Himanta Biswa Sarma", "language": "Assamese"}, "Bihar": {"capital": "Patna", "cm": "Samrat Choudhary", "language": "Hindi"}, "Chhattisgarh": {"capital": "Raipur", "cm": "Vishnu Deo Sai", "language": "Hindi"}, "Goa": {"capital": "Panaji", "cm": "Pramod Sawant", "language": "Konkani"}, "Gujarat": {"capital": "Gandhinagar", "cm": "Bhupendra Patel", "language": "Gujarati"}, "Haryana": {"capital": "Chandigarh", "cm": "Nayab Singh Saini", "language": "Hindi"}, "Himachal Pradesh": {"capital": "Shimla", "cm": "Sukhvinder Singh Sukhu", "language": "Hindi"}, "Jharkhand": {"capital": "Ranchi", "cm": "Hemant Soren", "language": "Hindi"}, "Karnataka": {"capital": "Bengaluru", "cm": "D. K. Shivakumar", "language": "Kannada"}, "Kerala": {"capital": "Thiruvananthapuram", "cm": "V. D. Satheesan", "language": "Malayalam"}, "Madhya Pradesh": {"capital": "Bhopal", "cm": "Mohan Yadav", "language": "Hindi"}, "Maharashtra": {"capital": "Mumbai", "cm": "Devendra Fadnavis", "language": "Marathi"}, "Manipur": {"capital": "Imphal", "cm": "Yumnam Khemchand Singh", "language": "Manipuri (Meitei)"}, "Meghalaya": {"capital": "Shillong", "cm": "Conrad Sangma", "language": "English, Khasi and Garo"}, "Mizoram": {"capital": "Aizawl", "cm": "Lalduhoma", "language": "Mizo"}, "Nagaland": {"capital": "Kohima", "cm": "Neiphiu Rio", "language": "English"}, "Odisha": {"capital": "Bhubaneswar", "cm": "Mohan Charan Majhi", "language": "Odia"}, "Punjab": {"capital": "Chandigarh", "cm": "Bhagwant Mann", "language": "Punjabi"}, "Rajasthan": {"capital": "Jaipur", "cm": "Bhajan Lal Sharma", "language": "Hindi"}, "Sikkim": {"capital": "Gangtok", "cm": "Prem Singh Tamang", "language": "English and Nepali"}, "Tamil Nadu": {"capital": "Chennai", "cm": "C. Joseph Vijay", "language": "Tamil"}, "Telangana": {"capital": "Hyderabad", "cm": "A. Revanth Reddy", "language": "Telugu"}, "Tripura": {"capital": "Agartala", "cm": "Manik Saha", "language": "Bengali, English and Kokborok"}, "Uttar Pradesh": {"capital": "Lucknow", "cm": "Yogi Adityanath", "language": "Hindi"}, "Uttarakhand": {"capital": "Dehradun", "cm": "Pushkar Singh Dhami", "language": "Hindi"}, "West Bengal": {"capital": "Kolkata", "cm": "Suvendu Adhikari", "language": "Bengali"}};
const INDIA_STATES_ONLY = Object.keys(INDIA_STATE_INFO);
const INDIA_CAPITALS_GEO = {"Andaman and Nicobar Islands": {"lat": 11.6234, "lon": 92.7265}, "Andhra Pradesh": {"lat": 16.5149, "lon": 80.5163}, "Arunachal Pradesh": {"lat": 27.0844, "lon": 93.6053}, "Assam": {"lat": 26.1408, "lon": 91.7898}, "Bihar": {"lat": 25.5941, "lon": 85.1376}, "Chandigarh": {"lat": 30.7333, "lon": 76.7794}, "Chhattisgarh": {"lat": 21.2514, "lon": 81.6296}, "Dadra and Nagar Haveli and Daman and Diu": {"lat": 20.3974, "lon": 72.8328}, "Delhi": {"lat": 28.6139, "lon": 77.209}, "Goa": {"lat": 15.4909, "lon": 73.8278}, "Gujarat": {"lat": 23.2156, "lon": 72.6369}, "Himachal Pradesh": {"lat": 31.1048, "lon": 77.1734}, "Haryana": {"lat": 30.7333, "lon": 76.7794}, "Jharkhand": {"lat": 23.3441, "lon": 85.3096}, "Jammu and Kashmir": {"lat": 34.0837, "lon": 74.7973}, "Karnataka": {"lat": 12.9716, "lon": 77.5946}, "Kerala": {"lat": 8.5241, "lon": 76.9366}, "Lakshadweep": {"lat": 10.5669, "lon": 72.642}, "Ladakh": {"lat": 34.1526, "lon": 77.5771}, "Maharashtra": {"lat": 19.076, "lon": 72.8777}, "Meghalaya": {"lat": 25.5788, "lon": 91.8933}, "Manipur": {"lat": 24.817, "lon": 93.9368}, "Madhya Pradesh": {"lat": 23.2599, "lon": 77.4126}, "Mizoram": {"lat": 23.7271, "lon": 92.7176}, "Nagaland": {"lat": 25.6751, "lon": 94.1086}, "Odisha": {"lat": 20.2961, "lon": 85.8245}, "Punjab": {"lat": 30.7333, "lon": 76.7794}, "Puducherry": {"lat": 11.9416, "lon": 79.8083}, "Rajasthan": {"lat": 26.9124, "lon": 75.7873}, "Sikkim": {"lat": 27.3389, "lon": 88.6065}, "Tamil Nadu": {"lat": 13.0827, "lon": 80.2707}, "Telangana": {"lat": 17.385, "lon": 78.4867}, "Tripura": {"lat": 23.8315, "lon": 91.2868}, "Uttar Pradesh": {"lat": 26.8467, "lon": 80.9462}, "Uttarakhand": {"lat": 30.3165, "lon": 78.0322}, "West Bengal": {"lat": 22.5726, "lon": 88.3639}};
const WORLD_NAME_LOOKUP = {"Afghanistan": ["af", "Kabul"], "Albania": ["al", "Tirana"], "Algeria": ["dz", "Algiers"], "Argentina": ["ar", "Buenos Aires"], "Australia": ["au", "Canberra"], "Austria": ["at", "Vienna"], "Bangladesh": ["bd", "Dhaka"], "Belgium": ["be", "Brussels"], "Brazil": ["br", "Brasilia"], "Canada": ["ca", "Ottawa"], "China": ["cn", "Beijing"], "Egypt": ["eg", "Cairo"], "France": ["fr", "Paris"], "Germany": ["de", "Berlin"], "India": ["in", "New Delhi"], "Indonesia": ["id", "Jakarta"], "Italy": ["it", "Rome"], "Japan": ["jp", "Tokyo"], "Mexico": ["mx", "Mexico City"], "Nepal": ["np", "Kathmandu"], "Netherlands": ["nl", "Amsterdam"], "New Zealand": ["nz", "Wellington"], "Russia": ["ru", "Moscow"], "South Africa": ["za", "Pretoria"], "Spain": ["es", "Madrid"], "Sri Lanka": ["lk", "Sri Jayawardenepura Kotte"], "United Kingdom": ["gb", "London"], "United States of America": ["us", "Washington, D.C."]};
const NE_NAME_ALIASES = {"United States": "United States of America"};

/* ===================== SHARED HELPERS ===================== */
function flagImgUrl(code){ if(!code || code.length !== 2) return null; return 'https://flagcdn.com/w80/' + code.toLowerCase() + '.png'; }
function speak(text){ try{ if(!('speechSynthesis' in window)) return; window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = 'en-IN'; u.rate = 0.85; u.pitch = 1.1; window.speechSynthesis.speak(u); }catch(e){} }
function confettiBurst(){ const c = document.getElementById('confetti'); const emojis = ['🎉','⭐','🎊','✨','🥳','⏰']; for(let i=0;i<16;i++){ const span = document.createElement('span'); span.className = 'confetti-piece'; span.textContent = emojis[Math.floor(Math.random()*emojis.length)]; span.style.left = Math.random()*100 + 'vw'; span.style.animationDuration = (1.2 + Math.random()*1.2) + 's'; span.style.fontSize = (16 + Math.random()*18) + 'px'; c.appendChild(span); setTimeout(()=>span.remove(), 2600); } }
function shuffleArray(arr){ const a = arr.slice(); for(let i=a.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

// Universal Quit/Home Handler
function quitToQuizHome(){
  try{ if('speechSynthesis' in window) window.speechSynthesis.cancel(); }catch(e){}
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

/* ===================== INDIA MODULE ===================== */
function buildIndiaModule(){
  let activePath = null, mode = 'explore', quizTarget = null, regionPaths = [], svgRoot = null, dotsVisible = true;
  const holder = document.getElementById('mapHolderIN');
  const nameEl = document.getElementById('nameTextIN');
  const factsGrid = document.getElementById('factsGridIN');
  const capText = document.getElementById('capTextIN');
  const cmText = document.getElementById('cmTextIN');
  const langText = document.getElementById('langTextIN');
  const banner = document.getElementById('bannerIN');
  const qbar = document.getElementById('quizBarIN');

  function clearActive(){ if(activePath){ activePath.classList.remove('active'); activePath=null; } }
  function idToName(rawId, titleAttr){ let id = (rawId||'').replace(/^IN[-_]?/i,"").toUpperCase(); return STATE_NAMES[id] || titleAttr || rawId || null; }
  function showBanner(name, info){
    nameEl.textContent = name;
    if(info){ capText.textContent = 'Capital: ' + info.capital; cmText.textContent = 'CM: ' + info.cm; langText.textContent = 'Language: ' + info.language; factsGrid.style.display = 'flex'; }
    else { factsGrid.style.display = 'none'; }
    banner.classList.remove('pop'); void banner.offsetWidth; banner.classList.add('pop');
  }
  function onTap(el, name){
    if(mode === 'quizState'){ handleQuizAnswer(el, name); return; }
    clearActive(); el.classList.add('active'); activePath = el;
    const info = INDIA_STATE_INFO[name] || null;
    showBanner(name, info);
    if(info){ speak(name + '. Capital: ' + info.capital + '. Chief Minister: ' + info.cm + '. Language: ' + info.language + '.'); }
    else { speak(name); }
  }
  function attachHandlers(svg){
    const paths = svg.querySelectorAll('path[id], path[title]');
    regionPaths = [];
    paths.forEach(p=>{
      const rawId = p.getAttribute('id') || '';
      const titleAttr = p.getAttribute('title') || (p.querySelector('title') ? p.querySelector('title').textContent : '');
      let name = idToName(rawId, titleAttr);
      if(!name) return;
      p.style.pointerEvents = 'auto';
      regionPaths.push({el:p, name});
      const handler = (ev)=>{ ev.preventDefault(); onTap(p, name); };
      p.addEventListener('click', handler);
      p.addEventListener('touchstart', handler, {passive:false});
    });
  }
  function plotCapitalDots(svg){
    let bbox; try{ bbox = svg.getBBox(); }catch(e){ return; }
    const LAT_MIN = 6.5, LAT_MAX = 37.6, LON_MIN = 68.0, LON_MAX = 97.5;
    let dotsGroup = svg.querySelector('#capitalDotsGroup');
    if(!dotsGroup){ dotsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g'); dotsGroup.setAttribute('id', 'capitalDotsGroup'); svg.appendChild(dotsGroup); }
    dotsGroup.innerHTML = '';
    const rVal = Math.max(bbox.width, bbox.height) * 0.006;
    for(const stateName in INDIA_CAPITALS_GEO){
      const infoGeo = INDIA_CAPITALS_GEO[stateName];
      const xFrac = (infoGeo.lon - LON_MIN) / (LON_MAX - LON_MIN);
      const yFrac = 1 - (infoGeo.lat - LAT_MIN) / (LAT_MAX - LAT_MIN);
      const cx = bbox.x + xFrac * bbox.width, cy = bbox.y + yFrac * bbox.height;
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', cx); circle.setAttribute('cy', cy); circle.setAttribute('r', Math.max(rVal, 2.5)); circle.setAttribute('class', 'capDot');
      dotsGroup.appendChild(circle);
    }
    dotsGroup.style.display = dotsVisible ? '' : 'none';
  }

  // Reliable offline vector map fallback that always renders immediately
  const FALLBACK_SVG_INDIA = `<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg"><path id="JK" title="Jammu and Kashmir" d="M120,20 L200,10 L210,60 L150,70 Z"/><path id="PB" title="Punjab" d="M120,75 L160,72 L165,100 L125,105 Z"/><path id="RJ" title="Rajasthan" d="M60,110 L150,105 L160,220 L70,220 Z"/><path id="UP" title="Uttar Pradesh" d="M170,105 L280,100 L285,175 L175,180 Z"/><path id="MP" title="Madhya Pradesh" d="M150,190 L280,185 L285,260 L155,265 Z"/><path id="GJ" title="Gujarat" d="M40,225 L140,225 L130,300 L30,290 Z"/><path id="MH" title="Maharashtra" d="M150,270 L270,265 L265,340 L155,345 Z"/><path id="BR" title="Bihar" d="M290,185 L360,182 L362,225 L292,228 Z"/><path id="WB" title="West Bengal" d="M330,230 L380,228 L385,290 L335,295 Z"/><path id="OR" title="Odisha" d="M290,270 L350,268 L345,330 L285,335 Z"/><path id="KA" title="Karnataka" d="M160,350 L230,348 L225,420 L155,425 Z"/><path id="AP" title="Andhra Pradesh" d="M235,345 L300,342 L295,410 L230,415 Z"/><path id="TN" title="Tamil Nadu" d="M180,430 L250,428 L245,480 L175,485 Z"/><path id="KL" title="Kerala" d="M150,430 L175,428 L170,480 L148,482 Z"/></svg>`;

  async function loadMap(){
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000); // 2-second timeout protection
    const sources = ["https://cdn.jsdelivr.net/npm/@svg-maps/india@2/india.svg"];
    for(const url of sources){
      try{
        const res = await fetch(url, {mode:'cors', signal: controller.signal});
        clearTimeout(timeoutId);
        if(!res.ok) throw new Error('bad status');
        const text = await res.text();
        if(text.includes('<svg')){
          holder.innerHTML = text;
          const svg = holder.querySelector('svg');
          if(!svg) throw new Error('no svg');
          svg.removeAttribute('width'); svg.removeAttribute('height');
          if(!svg.getAttribute('viewBox')) svg.setAttribute('viewBox','0 0 1000 1000');
          svgRoot = svg; attachHandlers(svg); plotCapitalDots(svg);
          if(regionPaths.length > 0) return;
        }
      }catch(e){ /* Fall through immediately */ }
    }
    // Fallback renders instantly without network
    holder.innerHTML = FALLBACK_SVG_INDIA;
    const svg = holder.querySelector('svg');
    svgRoot = svg; attachHandlers(svg); plotCapitalDots(svg);
  }

  function handleQuizAnswer(el, name){
    const isCorrect = (name === quizTarget.name);
    if(isCorrect){ el.classList.add('active'); activePath = el; qbar.textContent = "✅ Correct! That's " + name + '!'; speak('Yes! That is ' + name + '!'); confettiBurst(); setTimeout(nextQuizQuestion, 1700); }
    else { qbar.textContent = "❌ Oops, that's " + name + '. Try again for ' + quizTarget.name + '!'; speak('Not quite. Try finding ' + quizTarget.name + '.'); }
  }
  function nextQuizQuestion(){
    clearActive();
    const pool = regionPaths.filter(r => INDIA_STATES_ONLY.includes(r.name));
    if(pool.length === 0) return;
    quizTarget = pool[Math.floor(Math.random()*pool.length)];
    qbar.textContent = 'Find: ' + quizTarget.name; speak('Can you find ' + quizTarget.name + '?');
  }
  function setMode(newMode){
    mode = newMode; clearActive();
    document.getElementById('modeExploreIN').classList.remove('active');
    document.getElementById('modeQuizStateIN').classList.remove('active');
    if(newMode === 'explore'){ document.getElementById('modeExploreIN').classList.add('active'); qbar.style.display = 'none'; nameEl.textContent = 'Tap a state to begin!'; factsGrid.style.display = 'none'; }
    else { document.getElementById('modeQuizStateIN').classList.add('active'); qbar.style.display = 'block'; nextQuizQuestion(); }
  }
  document.getElementById('modeExploreIN').addEventListener('click', ()=>setMode('explore'));
  document.getElementById('modeQuizStateIN').addEventListener('click', ()=>setMode('quizState'));
  document.getElementById('resetBtnIN').addEventListener('click', ()=>setMode('explore'));
  document.getElementById('speakBtnIN').addEventListener('click', ()=>{
    const t = nameEl.textContent;
    if(t && t !== 'Tap a state to begin!'){ const info = INDIA_STATE_INFO[t]; if(info) speak(t + '. Capital: ' + info.capital + '. Chief Minister: ' + info.cm + '. Language: ' + info.language + '.'); else speak(t); }
  });
  document.getElementById('dotsBtnIN').addEventListener('click', (ev)=>{
    dotsVisible = !dotsVisible;
    const g = svgRoot ? svgRoot.querySelector('#capitalDotsGroup') : null;
    if(g) g.style.display = dotsVisible ? '' : 'none';
    ev.target.textContent = dotsVisible ? '🟡 Hide Capital Dots' : '🟡 Show Capital Dots';
  });

  loadMap();
}

/* ===================== WORLD MODULE ===================== */
function buildWorldModule(){
  let activeSel = null, mode = 'explore', quizTarget = null, regionData = [];
  const holder = document.getElementById('mapHolderWO');
  const nameEl = document.getElementById('nameTextWO');
  const flagEl = document.getElementById('flagWO');
  const flagImgEl = document.getElementById('flagImgWO');
  const capRow = document.getElementById('capRowWO');
  const capText = document.getElementById('capTextWO');
  const banner = document.getElementById('bannerWO');
  const qbar = document.getElementById('quizBarWO');

  function resolveName(neName){ if(WORLD_NAME_LOOKUP[neName]) return neName; if(NE_NAME_ALIASES[neName]) return NE_NAME_ALIASES[neName]; return null; }
  function clearActive(){ if(activeSel){ activeSel.classList.remove('active'); activeSel=null; } }
  function showBanner(name, capital, code){
    nameEl.textContent = name;
    if(code){ flagImgEl.src = flagImgUrl(code); flagImgEl.style.display = 'inline-block'; flagEl.style.display = 'none'; }
    if(capital){ capText.textContent = 'Capital: ' + capital; capRow.style.display = 'flex'; } else { capRow.style.display = 'none'; }
    banner.classList.remove('pop'); void banner.offsetWidth; banner.classList.add('pop');
  }
  function onTap(el, name, capital, code){
    if(mode === 'quizState' || mode === 'quizCapital'){ handleQuizAnswer(el, name, capital); return; }
    clearActive(); el.classList.add('active'); activeSel = el;
    showBanner(name, capital, code);
    speak(capital ? (name + '. Its capital is ' + capital + '.') : name);
  }
  function handleQuizAnswer(el, name, capital){
    const isCorrect = (name === quizTarget.name);
    if(isCorrect){
      el.classList.add('active'); activeSel = el;
      if(mode === 'quizCapital'){ qbar.textContent = '✅ Correct! ' + quizTarget.capital + ' is the capital of ' + name + '!'; speak('Yes! ' + quizTarget.capital + ' is the capital of ' + name + '!'); }
      else { qbar.textContent = "✅ Correct! That's " + name + '!'; speak('Yes! That is ' + name + '!'); }
      confettiBurst(); setTimeout(nextQuizQuestion, 1700);
    } else {
      if(mode === 'quizCapital'){ qbar.textContent = "❌ That's " + name + '. Try again — find the one whose capital is ' + quizTarget.capital + '!'; speak('Not quite. Find the one whose capital is ' + quizTarget.capital + '.'); }
      else { qbar.textContent = "❌ Oops, that's " + name + '. Try again for ' + quizTarget.name + '!'; speak('Not quite. Try finding ' + quizTarget.name + '.'); }
    }
  }
  function nextQuizQuestion(){
    clearActive();
    let pool = regionData;
    if(mode === 'quizCapital') pool = pool.filter(r=>r.capital);
    if(pool.length === 0) return;
    quizTarget = pool[Math.floor(Math.random()*pool.length)];
    if(mode === 'quizCapital'){ qbar.textContent = 'Find the country whose capital is: ' + quizTarget.capital; speak('Which country has ' + quizTarget.capital + ' as its capital?'); }
    else { qbar.textContent = 'Find: ' + quizTarget.name; speak('Can you find ' + quizTarget.name + '?'); }
  }
  function setMode(newMode){
    mode = newMode; clearActive();
    document.getElementById('modeExploreWO').classList.remove('active');
    document.getElementById('modeQuizStateWO').classList.remove('active');
    document.getElementById('modeQuizCapitalWO').classList.remove('active');
    if(newMode === 'explore'){ document.getElementById('modeExploreWO').classList.add('active'); qbar.style.display = 'none'; nameEl.textContent = 'Tap a country to begin!'; flagEl.textContent = '👉'; flagEl.style.display = 'inline-block'; flagImgEl.style.display = 'none'; capRow.style.display = 'none'; }
    else if(newMode === 'quizState'){ document.getElementById('modeQuizStateWO').classList.add('active'); qbar.style.display = 'block'; nextQuizQuestion(); }
    else if(newMode === 'quizCapital'){ document.getElementById('modeQuizCapitalWO').classList.add('active'); qbar.style.display = 'block'; nextQuizQuestion(); }
  }
  document.getElementById('modeExploreWO').addEventListener('click', ()=>setMode('explore'));
  document.getElementById('modeQuizStateWO').addEventListener('click', ()=>setMode('quizState'));
  document.getElementById('modeQuizCapitalWO').addEventListener('click', ()=>setMode('quizCapital'));
  document.getElementById('resetBtnWO').addEventListener('click', ()=>setMode('explore'));
  document.getElementById('speakBtnWO').addEventListener('click', ()=>{
    const t = nameEl.textContent;
    const capVisible = capRow.style.display !== 'none';
    if(t && t !== 'Tap a country to begin!'){ if(capVisible){ const capTxt = capText.textContent.replace('Capital: ',''); speak(t + '. Its capital is ' + capTxt + '.'); } else { speak(t); } }
  });
  async function init(){
    try{
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const topoRes = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json", { signal: controller.signal });
      clearTimeout(timeoutId);
      if(!topoRes.ok) throw new Error('topo fetch failed');
      const worldTopo = await topoRes.json();
      const geo = topojson.feature(worldTopo, worldTopo.objects.countries);
      holder.innerHTML = '';
      const width = 1000, height = 620;
      const svgSel = d3.select(holder).append('svg').attr('viewBox', '0 0 ' + width + ' ' + height).attr('preserveAspectRatio', 'xMidYMid meet');
      const projection = d3.geoNaturalEarth1().fitSize([width, height], geo);
      const pathGen = d3.geoPath().projection(projection);
      regionData = [];
      svgSel.selectAll('path').data(geo.features).join('path').attr('d', pathGen).attr('data-name', d => d.properties.name)
        .each(function(d){
          const neName = d.properties.name;
          const canonicalName = resolveName(neName);
          let code = null, capital = null, displayName = neName;
          if(canonicalName && WORLD_NAME_LOOKUP[canonicalName]){ const pair = WORLD_NAME_LOOKUP[canonicalName]; code = pair[0]; capital = pair[1]; displayName = canonicalName; }
          regionData.push({ name: displayName, code, capital, element: this });
          this.style.pointerEvents = 'auto';
          const handler = (ev)=>{ ev.preventDefault(); onTap(this, displayName, capital, code); };
          this.addEventListener('click', handler);
          this.addEventListener('touchstart', handler, {passive:false});
        });
    }catch(e){
      holder.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#555;"><h3>🌍 World Map (Offline Mode)</h3><p>Please connect to the internet to load full world topology.</p></div>';
    }
  }
  init();
}

/* ===================== SINGLE-PLAYER QUIZ MODULE ===================== */
function buildQuizModule(){
  const TOPIC_LABELS = { mythology: "Mythology", sports: "Sports", animals: "Animals", history: "History", maths: "Maths", english: "English", science: "Science" };
  let currentTopic = null, queue = [], qIndex = 0, score = 0, answered = false, roundLength = 10;
  let timerInterval = null, advanceTimeout = null;

  const picker = document.getElementById('quizTopicPicker');
  const wrap = document.getElementById('quizWrap');
  const progress = document.getElementById('quizProgress');
  const emojiEl = document.getElementById('quizEmoji');
  const questionText = document.getElementById('quizQuestionText');
  const optionsEl = document.getElementById('quizOptions');
  const feedbackEl = document.getElementById('quizFeedback');
  const timerInfoEl = document.getElementById('quizTimerInfo');
  const resultScreen = document.getElementById('quizResultScreen');
  const finalScore = document.getElementById('quizFinalScore');
  const finalMessage = document.getElementById('quizFinalMessage');

  function clearTimers(){
    if(timerInterval){ clearInterval(timerInterval); timerInterval = null; }
    if(advanceTimeout){ clearTimeout(advanceTimeout); advanceTimeout = null; }
    timerInfoEl.style.display = 'none';
  }

  window.singleQuizReset = function(){
    clearTimers();
    wrap.style.display = 'none';
    resultScreen.style.display = 'none';
    picker.style.display = 'flex';
  };

  function startTopic(topic){
    if(topic === 'clock'){
      // Switch directly to embedded clock quiz
      document.getElementById('quizSingleContainer').style.display = 'none';
      document.getElementById('quizClockContainer').style.display = 'flex';
      window.startClockQuiz();
      return;
    }
    currentTopic = topic; score = 0; qIndex = 0;
    queue = shuffleArray(QUIZ_DATA[topic]).slice(0, roundLength);
    picker.style.display = 'none';
    wrap.style.display = 'flex';
    resultScreen.style.display = 'none';
    showQuestion();
  }

  function showQuestion(){
    clearTimers();
    answered = false;
    const q = queue[qIndex];
    progress.textContent = TOPIC_LABELS[currentTopic] + ' — Question ' + (qIndex+1) + ' of ' + queue.length + ' (Score: ' + score + ')';
    emojiEl.textContent = q.emoji || '❓';
    questionText.textContent = q.q;
    feedbackEl.textContent = '';
    optionsEl.innerHTML = '';
    const letters = ['A','B','C','D'];
    const correctText = q.options[q.answer];
    const shuffledOpts = shuffleArray(q.options);
    shuffledOpts.forEach((opt, idx)=>{
      const btn = document.createElement('button');
      btn.className = 'ctrl quizOptBtn';
      btn.style.background = '#4c6ef5';
      btn.textContent = letters[idx] + '. ' + opt;
      btn.addEventListener('click', ()=> onAnswer(opt === correctText, opt, correctText, btn));
      optionsEl.appendChild(btn);
    });
    speak(q.q);
  }

  function onAnswer(isCorrect, chosenText, correctText, btnEl){
    if(answered) return;
    answered = true;
    const allButtons = optionsEl.querySelectorAll('button');
    allButtons.forEach(b => b.disabled = true);

    if(isCorrect){
      score++;
      btnEl.style.background = '#2a9d8f';
      feedbackEl.textContent = '✅ Correct! Well done!';
      feedbackEl.style.color = '#2a9d8f';
      speak('Correct! Well done!');
      confettiBurst();

      advanceTimeout = setTimeout(()=>{
        qIndex++;
        if(qIndex < queue.length){ showQuestion(); } else { showResult(); }
      }, 1600);
    } else {
      btnEl.style.background = '#c0392b';
      allButtons.forEach(b => { if(b.textContent.slice(3) === correctText) b.style.background = '#2a9d8f'; });
      feedbackEl.textContent = '❌ Oops! The correct answer is: ' + correctText;
      feedbackEl.style.color = '#c0392b';
      speak('Not quite. The correct answer is ' + correctText + '.');

      // 10-second review countdown
      let secondsLeft = 10;
      timerInfoEl.style.display = 'inline-block';
      timerInfoEl.textContent = '⏳ Next question in ' + secondsLeft + 's…';

      timerInterval = setInterval(()=>{
        secondsLeft--;
        if(secondsLeft > 0){
          timerInfoEl.textContent = '⏳ Next question in ' + secondsLeft + 's…';
        } else {
          clearTimers();
        }
      }, 1000);

      advanceTimeout = setTimeout(()=>{
        clearTimers();
        qIndex++;
        if(qIndex < queue.length){ showQuestion(); } else { showResult(); }
      }, 10000);
    }
  }

  function showResult(){
    clearTimers();
    wrap.style.display = 'none';
    resultScreen.style.display = 'flex';
    const total = queue.length;
    finalScore.textContent = 'You scored ' + score + ' out of ' + total + '!';
    let msg = '';
    if(score === total) msg = "Amazing! You're a superstar! 🌟";
    else if(score >= total*0.7) msg = "Great job! You know a lot! 🎉";
    else if(score >= total*0.4) msg = "Good try! Keep learning! 💪";
    else msg = "Nice try! Let's learn more and try again! 😊";
    finalMessage.textContent = msg;
    speak('You scored ' + score + ' out of ' + total + '. ' + msg);
    if(score >= total*0.7) confettiBurst();
  }

  document.querySelectorAll('#quizTopicPicker .topicBtn').forEach(btn=>{
    btn.addEventListener('click', ()=> startTopic(btn.getAttribute('data-topic')));
  });
  document.getElementById('quizPlayAgainBtn').addEventListener('click', ()=>{
    resultScreen.style.display = 'none';
    picker.style.display = 'flex';
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
      
      // Dial Tick
      const x1 = cx + 120 * Math.sin(angle), y1 = cy - 120 * Math.cos(angle);
      const x2 = cx + 110 * Math.sin(angle), y2 = cy - 110 * Math.cos(angle);
      const tick = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      tick.setAttribute('x1', x1); tick.setAttribute('y1', y1);
      tick.setAttribute('x2', x2); tick.setAttribute('y2', y2);
      tick.setAttribute('class', 'clock-tick');
      ticksGroup.appendChild(tick);

      // Inner hour numbers (1 - 12)
      const hx = cx + 92 * Math.sin(angle), hy = cy - 92 * Math.cos(angle);
      const hText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      hText.setAttribute('x', hx); hText.setAttribute('y', hy);
      hText.setAttribute('class', 'clock-hour-text');
      hText.textContent = i;
      hoursGroup.appendChild(hText);

      // Outer minutes helper numbers (5, 10, 15... 55, 00)
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

    const hLen = 55;
    const mLen = 85;

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
      btn.addEventListener('click', ()=> onAnswer(opt === currentTarget.correctText, opt, btn));
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
      btnEl.style.bac	kground = '#2a9d8f';
      feedbackEl.textContent = '✅ Correct! Brilliant time-telling!';
      feedbackEl.style.color = '#2a9d8f';
      speak(