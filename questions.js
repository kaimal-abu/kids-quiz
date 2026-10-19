
/* Quiz data loaded dynamically from Quiz-Bank.xlsx */
let QUIZ_DATA = {};

async function loadQuizDataFromExcel() {
  const res = await fetch('Quiz-Bank.xlsx');
  const arrayBuffer = await res.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: 'array' });

  QUIZ_DATA = {};
  workbook.SheetNames.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' });
    const bank = [];
    rows.forEach(row => {
      const q = row['Question'];
      const opts = [row['Option 1'], row['Option 2'], row['Option 3'], row['Option 4']].filter(o => o !== '');
      const correct = row['Correct answer'];
      if (!q || opts.length < 2 || !correct) return;
      const shuffled = shuffleArray(opts);
      bank.push({
        q: q,
        options: shuffled,
        correctText: correct,
        emoji: '',
        answer: shuffled.indexOf(correct)
      });
    });
    // Use sheet name (lowercase) as the topic key
    QUIZ_DATA[sheetName.toLowerCase()] = bank;
  });
  console.log('Quiz data loaded from Excel:', Object.keys(QUIZ_DATA).map(k => k + ': ' + QUIZ_DATA[k].length + ' questions'));
}

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

const INDIA_STATE_INFO = {
  "Andhra Pradesh": {"capital": "Amaravati", "cm": "N. Chandrababu Naidu", "language": "Telugu"},
  "Arunachal Pradesh": {"capital": "Itanagar", "cm": "Pema Khandu", "language": "English"},
  "Assam": {"capital": "Dispur", "cm": "Himanta Biswa Sarma", "language": "Assamese"},
  "Bihar": {"capital": "Patna", "cm": "Nitish Kumar", "language": "Hindi"},
  "Chhattisgarh": {"capital": "Raipur", "cm": "Vishnu Deo Sai", "language": "Hindi"},
  "Goa": {"capital": "Panaji", "cm": "Pramod Sawant", "language": "Konkani"},
  "Gujarat": {"capital": "Gandhinagar", "cm": "Bhupendra Patel", "language": "Gujarati"},
  "Haryana": {"capital": "Chandigarh", "cm": "Nayab Singh Saini", "language": "Hindi"},
  "Himachal Pradesh": {"capital": "Shimla", "cm": "Sukhvinder Singh Sukhu", "language": "Hindi"},
  "Jharkhand": {"capital": "Ranchi", "cm": "Hemant Soren", "language": "Hindi"},
  "Karnataka": {"capital": "Bengaluru", "cm": "Siddaramaiah", "language": "Kannada"},
  "Kerala": {"capital": "Thiruvananthapuram", "cm": "Pinarayi Vijayan", "language": "Malayalam"},
  "Madhya Pradesh": {"capital": "Bhopal", "cm": "Mohan Yadav", "language": "Hindi"},
  "Maharashtra": {"capital": "Mumbai", "cm": "Devendra Fadnavis", "language": "Marathi"},
  "Manipur": {"capital": "Imphal", "cm": "N. Biren Singh", "language": "Manipuri"},
  "Meghalaya": {"capital": "Shillong", "cm": "Conrad Sangma", "language": "English"},
  "Mizoram": {"capital": "Aizawl", "cm": "Lalduhoma", "language": "Mizo"},
  "Nagaland": {"capital": "Kohima", "cm": "Neiphiu Rio", "language": "English"},
  "Odisha": {"capital": "Bhubaneswar", "cm": "Mohan Charan Majhi", "language": "Odia"},
  "Punjab": {"capital": "Chandigarh", "cm": "Bhagwant Mann", "language": "Punjabi"},
  "Rajasthan": {"capital": "Jaipur", "cm": "Bhajan Lal Sharma", "language": "Hindi"},
  "Sikkim": {"capital": "Gangtok", "cm": "Prem Singh Tamang", "language": "Nepali, English"},
  "Tamil Nadu": {"capital": "Chennai", "cm": "M. K. Stalin", "language": "Tamil"},
  "Telangana": {"capital": "Hyderabad", "cm": "A. Revanth Reddy", "language": "Telugu"},
  "Tripura": {"capital": "Agartala", "cm": "Manik Saha", "language": "Bengali, Kokborok"},
  "Uttar Pradesh": {"capital": "Lucknow", "cm": "Yogi Adityanath", "language": "Hindi"},
  "Uttarakhand": {"capital": "Dehradun", "cm": "Pushkar Singh Dhami", "language": "Hindi"},
  "West Bengal": {"capital": "Kolkata", "cm": "Mamata Banerjee", "language": "Bengali"}
};

const INDIA_STATES_ONLY = Object.keys(INDIA_STATE_INFO);
const INDIA_CAPITALS_GEO = {
  "Andhra Pradesh": {"lat": 16.51, "lon": 80.51}, "Arunachal Pradesh": {"lat": 27.08, "lon": 93.60},
  "Assam": {"lat": 26.14, "lon": 91.78}, "Bihar": {"lat": 25.59, "lon": 85.13},
  "Chhattisgarh": {"lat": 21.25, "lon": 81.62}, "Delhi": {"lat": 28.61, "lon": 77.20},
  "Goa": {"lat": 15.49, "lon": 73.82}, "Gujarat": {"lat": 23.21, "lon": 72.63},
  "Himachal Pradesh": {"lat": 31.10, "lon": 77.17}, "Haryana": {"lat": 30.73, "lon": 76.77},
  "Jharkhand": {"lat": 23.34, "lon": 85.30}, "Jammu and Kashmir": {"lat": 34.08, "lon": 74.79},
  "Karnataka": {"lat": 12.97, "lon": 77.59}, "Kerala": {"lat": 8.52, "lon": 76.93},
  "Maharashtra": {"lat": 19.07, "lon": 72.87}, "Madhya Pradesh": {"lat": 23.25, "lon": 77.41},
  "Odisha": {"lat": 20.29, "lon": 85.82}, "Punjab": {"lat": 30.73, "lon": 76.77},
  "Rajasthan": {"lat": 26.91, "lon": 75.78}, "Tamil Nadu": {"lat": 13.08, "lon": 80.27},
  "Telangana": {"lat": 17.38, "lon": 78.48}, "Uttar Pradesh": {"lat": 26.84, "lon": 80.94},
  "Uttarakhand": {"lat": 30.31, "lon": 78.03}, "West Bengal": {"lat": 22.57, "lon": 88.36}
};

const WORLD_NAME_LOOKUP = {
  "Afghanistan": ["af", "Kabul"], "Australia": ["au", "Canberra"], "Bangladesh": ["bd", "Dhaka"],
  "Brazil": ["br", "Brasilia"], "Canada": ["ca", "Ottawa"], "China": ["cn", "Beijing"],
  "Egypt": ["eg", "Cairo"], "France": ["fr", "Paris"], "Germany": ["de", "Berlin"],
  "India": ["in", "New Delhi"], "Japan": ["jp", "Tokyo"], "Russia": ["ru", "Moscow"],
  "United Kingdom": ["gb", "London"], "United States of America": ["us", "Washington, D.C."]
};

/* ===================== SHARED HELPERS ===================== */
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

function quitToQuizHome(){
  try { if('speechSynthesis' in window) window.speechSynthesis.cancel(); } catch(e){}
  showPage('quiz');
  if(window.singleQuizReset) window.singleQuizReset();
  if(window.arcadeQuizReset) window.arcadeQuizReset();

  const mainPicker = document.getElementById('quizMainModePicker');
  const singleContainer = document.getElementById('quizSingleContainer');
  const arcadeContainer = document.getElementById('arcadeContainer');
  const headerSub = document.getElementById('quizHeaderSub');

  if(mainPicker) mainPicker.style.display = 'flex';
  if(singleContainer) singleContainer.style.display = 'none';
  if(arcadeContainer) arcadeContainer.style.display = 'none';
  if(headerSub) headerSub.textContent = 'Choose how you want to play!';
}

/* ===================== OFFICIAL HIGH-ACCURACY INDIA MAP ===================== */
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

  function clearActive(){ if(activePath){ activePath.classList.remove('active'); activePath = null; } }

  function showBanner(name, info){
    nameEl.textContent = name;
    if(info){
      capText.textContent = 'Capital: ' + (info.capital || '—');
      cmText.textContent = 'CM: ' + (info.cm || '—');
      langText.textContent = 'Language: ' + (info.language || '—');
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
    const pool = regionPaths.filter(r => INDIA_STATES_ONLY.includes(r.name));
    if(pool.length === 0) return;
    quizTarget = pool[Math.floor(Math.random() * pool.length)];
    qbar.textContent = 'Find: ' + quizTarget.name;
    speak('Can you find ' + quizTarget.name + '?');
  }

  function attachHandlers(svg){
    regionPaths = [];
    svg.querySelectorAll('path').forEach(p => {
      const rawId = (p.getAttribute('id') || '').replace(/^IN[-_]?/i, "").toUpperCase();
      const titleAttr = p.getAttribute('title') || p.getAttribute('name') || '';
      const name = STATE_NAMES[rawId] || titleAttr;
      if(!name) return;
      regionPaths.push({ el: p, name });
      p.style.pointerEvents = 'auto';
      const fn = (e) => { e.preventDefault(); onTap(p, name); };
      p.addEventListener('click', fn);
      p.addEventListener('touchstart', fn, {passive: false});
    });
  }

  function plotDots(svg){
    let bbox; try { bbox = svg.getBBox(); } catch(e){ return; }
    const LAT_MIN = 6.5, LAT_MAX = 37.6, LON_MIN = 68.0, LON_MAX = 97.5;
    let g = svg.querySelector('#capitalDotsGroup');
    if(!g){
      g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('id', 'capitalDotsGroup');
      svg.appendChild(g);
    }
    g.innerHTML = '';
    for(const st in INDIA_CAPITALS_GEO){
      const info = INDIA_CAPITALS_GEO[st];
      const xF = (info.lon - LON_MIN) / (LON_MAX - LON_MIN);
      const yF = 1 - (info.lat - LAT_MIN) / (LAT_MAX - LAT_MIN);
      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('cx', bbox.x + xF * bbox.width);
      c.setAttribute('cy', bbox.y + yF * bbox.height);
      c.setAttribute('r', '4');
      c.setAttribute('class', 'capDot');
      g.appendChild(c);
    }
    g.style.display = dotsVisible ? '' : 'none';
  }

  async function loadMap(){
    const sources = [
      "https://cdn.jsdelivr.net/npm/@svg-maps/india@2/india.svg",
      "https://unpkg.com/@svg-maps/india@2/india.svg",
      "https://cdn.jsdelivr.net/npm/@svg-maps/india@1.0.1/india.svg"
    ];
    for(const url of sources){
      try {
        const res = await fetch(url, {mode: 'cors'});
        if(!res.ok) continue;
        const text = await res.text();
        if(text.includes('<svg')){
          holder.innerHTML = text;
          const svg = holder.querySelector('svg');
          if(!svg) continue;
          svg.removeAttribute('width'); svg.removeAttribute('height');
          if(!svg.getAttribute('viewBox')) svg.setAttribute('viewBox', '0 0 1000 1000');
          attachHandlers(svg);
          plotDots(svg);
          if(regionPaths.length > 0) return;
        }
      } catch(e){}
    }
    holder.innerHTML = '<div class="loading error"><span>⚠️ Could not load the official India map.</span><span style="font-size:13px;">Please check your internet connection.</span><button class="retryBtn" id="retryIndia">🔄 Retry</button></div>';
    const retryBtn = document.getElementById('retryIndia');
    if(retryBtn) retryBtn.addEventListener('click', loadMap);
  }

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
    const g = holder.querySelector('#capitalDotsGroup');
    if(g) g.style.display = dotsVisible ? '' : 'none';
    e.target.textContent = dotsVisible ? '🟡 Hide Capital Dots' : '🟡 Show Capital Dots';
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

  function clearActive(){ if(activeSel){ activeSel.classList.remove('active'); activeSel=null; } }

  function showBanner(name, capital, code){
    nameEl.textContent = name;
    if(code){ 
      flagImgEl.src = 'https://flagcdn.com/w80/' + code.toLowerCase() + '.png'; 
      flagImgEl.style.display = 'inline-block'; 
      flagEl.style.display = 'none'; 
    }
    if(capital){ capText.textContent = 'Capital: ' + capital; capRow.style.display = 'flex'; } 
    else { capRow.style.display = 'none'; }
    banner.classList.remove('pop'); void banner.offsetWidth; banner.classList.add('pop');
  }

  function onTap(el, name, capital, code){
    if(mode === 'quizState' || mode === 'quizCapital'){ handleQuizAnswer(el, name); return; }
    clearActive(); el.classList.add('active'); activeSel = el;
    showBanner(name, capital, code);
    speak(capital ? (name + '. Capital: ' + capital) : name);
  }

  function handleQuizAnswer(el, name){
    if(name === quizTarget.name){
      el.classList.add('active'); activeSel = el;
      qbar.textContent = "✅ Correct! That's " + name + '!'; 
      speak('Yes! That is ' + name + '!');
      confettiBurst(); 
      setTimeout(nextQuizQuestion, 1600);
    } else {
      qbar.textContent = "❌ That's " + name + '. Try again for ' + quizTarget.name + '!'; 
      speak('Not quite. Try finding ' + quizTarget.name);
    }
  }

  function nextQuizQuestion(){
    clearActive();
    if(regionData.length === 0) return;
    quizTarget = regionData[Math.floor(Math.random()*regionData.length)];
    qbar.textContent = 'Find: ' + quizTarget.name; 
    speak('Can you find ' + quizTarget.name + '?');
  }

  function setMode(newMode){
    mode = newMode; clearActive();
    document.getElementById('modeExploreWO').classList.toggle('active', mode === 'explore');
    document.getElementById('modeQuizStateWO').classList.toggle('active', mode === 'quizState');
    document.getElementById('modeQuizCapitalWO').classList.toggle('active', mode === 'quizCapital');
    if(newMode === 'explore'){ 
      qbar.style.display = 'none'; 
      nameEl.textContent = 'Tap a country to begin!'; 
      flagEl.textContent = '👉'; 
      flagEl.style.display = 'inline-block'; 
      flagImgEl.style.display = 'none'; 
      capRow.style.display = 'none'; 
    } else { 
      qbar.style.display = 'block'; 
      nextQuizQuestion(); 
    }
  }

  document.getElementById('modeExploreWO').addEventListener('click', ()=>setMode('explore'));
  document.getElementById('modeQuizStateWO').addEventListener('click', ()=>setMode('quizState'));
  document.getElementById('modeQuizCapitalWO').addEventListener('click', ()=>setMode('quizCapital'));
  document.getElementById('resetBtnWO').addEventListener('click', ()=>setMode('explore'));
  document.getElementById('speakBtnWO').addEventListener('click', ()=>{
    const t = nameEl.textContent;
    if(t && t !== 'Tap a country to begin!') speak(t);
  });

  async function init(){
    try {
      const topoRes = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");
      if(!topoRes.ok) throw new Error();
      const worldTopo = await topoRes.json();
      const geo = topojson.feature(worldTopo, worldTopo.objects.countries);
      holder.innerHTML = '';
      const width = 1000, height = 620;
      const svgSel = d3.select(holder).append('svg').attr('viewBox', '0 0 ' + width + ' ' + height).attr('preserveAspectRatio', 'xMidYMid meet');
      const projection = d3.geoNaturalEarth1().fitSize([width, height], geo);
      const pathGen = d3.geoPath().projection(projection);
      regionData = [];
      svgSel.selectAll('path').data(geo.features).join('path').attr('d', pathGen)
        .each(function(d){
          const neName = d.properties.name;
          let code = null, capital = null, displayName = neName;
          if(WORLD_NAME_LOOKUP[neName]){
            code = WORLD_NAME_LOOKUP[neName][0];
            capital = WORLD_NAME_LOOKUP[neName][1];
            displayName = neName;
          }
          regionData.push({ name: displayName, code, capital, element: this });
          this.style.pointerEvents = 'auto';
          const handler = (ev)=>{ ev.preventDefault(); onTap(this, displayName, capital, code); };
          this.addEventListener('click', handler);
          this.addEventListener('touchstart', handler, {passive:false});
        });
    } catch(e){}
  }
  init();
}

/* ===================== APP STARTUP (Excel-driven) ===================== */
async function startApp() {
  await loadQuizDataFromExcel();
  buildIndiaModule();
  buildWorldModule();
  buildQuizModule();
}
startApp();

/* ===================== CLOCK GRAPHIC RENDERER ===================== */
function setupClockSVG(svgId, ticksId, outerMinId, hoursId){
  const cx = 160,