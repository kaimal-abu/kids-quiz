/* Quiz data loaded dynamically from Quiz-Bank.xlsx */
let QUIZ_DATA = {};

async function loadQuizDataFromExcel() {
  try {
    const res = await fetch('Quiz-Bank.xlsx');
    if (!res.ok) {
      throw new Error(`Failed to fetch Quiz-Bank.xlsx: ${res.status} ${res.statusText}`);
    }
    const arrayBuffer = await res.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });

    QUIZ_DATA = {};
    workbook.SheetNames.forEach(sheetName => {
      const sheet = workbook.Sheets[sheetName];
      const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' });
      const bank = [];
      rows.forEach(row => {
        const q = String(row['Question'] ?? '')
          .replace(/^\s*\[Q\d+\]\s*/i, '')
          .trim();

        const opts = [row['Option 1'], row['Option 2'], row['Option 3'], row['Option 4']]
          .map(o => String(o ?? '').trim())
          .filter(o => o !== '');

        const correct = String(row['Correct answer'] ?? '').trim();

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
      QUIZ_DATA[sheetName.toLowerCase()] = bank;
    });
  } catch (err) {
    console.warn('Could not load Quiz-Bank.xlsx:', err.message);
  }
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

/* ===================== WORLD MODULE (Oceans, Seas & Continents) ===================== */
const WATER_BODIES = [
  { name: "Pacific Ocean", lat: 0, lon: -160, type: "ocean" },
  { name: "Atlantic Ocean", lat: 10, lon: -30, type: "ocean" },
  { name: "Indian Ocean", lat: -15, lon: 75, type: "ocean" },
  { name: "Arctic Ocean", lat: 78, lon: 0, type: "ocean" },
  { name: "Southern Ocean", lat: -62, lon: 0, type: "ocean" },
  { name: "Mediterranean Sea", lat: 35, lon: 18, type: "sea" },
  { name: "Arabian Sea", lat: 16, lon: 64, type: "sea" },
  { name: "Bay of Bengal", lat: 14, lon: 88, type: "sea" },
  { name: "South China Sea", lat: 14, lon: 114, type: "sea" },
  { name: "Caribbean Sea", lat: 15, lon: -75, type: "sea" },
  { name: "Bering Sea", lat: 58, lon: -175, type: "sea" },
  { name: "Coral Sea", lat: -18, lon: 155, type: "sea" },
  { name: "North Sea", lat: 56, lon: 3, type: "sea" },
  { name: "Red Sea", lat: 21, lon: 38, type: "sea" },
  { name: "Black Sea", lat: 43, lon: 35, type: "sea" }
];

const COUNTRY_TO_CONTINENT = {
  // Asia
  "Afghanistan": "Asia", "Armenia": "Asia", "Azerbaijan": "Asia", "Bangladesh": "Asia", "Bhutan": "Asia",
  "Brunei": "Asia", "Cambodia": "Asia", "China": "Asia", "Georgia": "Asia", "India": "Asia",
  "Indonesia": "Asia", "Iran": "Asia", "Iraq": "Asia", "Israel": "Asia", "Japan": "Asia",
  "Jordan": "Asia", "Kazakhstan": "Asia", "Kuwait": "Asia", "Kyrgyzstan": "Asia", "Laos": "Asia",
  "Lebanon": "Asia", "Malaysia": "Asia", "Mongolia": "Asia", "Myanmar": "Asia", "Nepal": "Asia",
  "North Korea": "Asia", "Oman": "Asia", "Pakistan": "Asia", "Palestine": "Asia", "Philippines": "Asia",
  "Qatar": "Asia", "Saudi Arabia": "Asia", "Singapore": "Asia", "South Korea": "Asia", "Sri Lanka": "Asia",
  "Syria": "Asia", "Taiwan": "Asia", "Tajikistan": "Asia", "Thailand": "Asia", "Timor-Leste": "Asia",
  "Turkey": "Asia", "Turkmenistan": "Asia", "United Arab Emirates": "Asia", "Uzbekistan": "Asia", "Vietnam": "Asia", "Yemen": "Asia",
  // Europe
  "Albania": "Europe", "Austria": "Europe", "Belarus": "Europe", "Belgium": "Europe", "Bosnia and Herz.": "Europe",
  "Bulgaria": "Europe", "Croatia": "Europe", "Cyprus": "Europe", "Czech Republic": "Europe", "Denmark": "Europe",
  "Estonia": "Europe", "Finland": "Europe", "France": "Europe", "Germany": "Europe", "Greece": "Europe",
  "Hungary": "Europe", "Iceland": "Europe", "Ireland": "Europe", "Italy": "Europe", "Kosovo": "Europe",
  "Latvia": "Europe", "Lithuania": "Europe", "Luxembourg": "Europe", "Moldova": "Europe", "Montenegro": "Europe",
  "Netherlands": "Europe", "North Macedonia": "Europe", "Norway": "Europe", "Poland": "Europe", "Portugal": "Europe",
  "Romania": "Europe", "Russia": "Europe", "Serbia": "Europe", "Slovakia": "Europe", "Slovenia": "Europe",
  "Spain": "Europe", "Sweden": "Europe", "Switzerland": "Europe", "Ukraine": "Europe", "United Kingdom": "Europe",
  // Africa
  "Algeria": "Africa", "Angola": "Africa", "Benin": "Africa", "Botswana": "Africa", "Burkina Faso": "Africa",
  "Burundi": "Africa", "Cameroon": "Africa", "Central African Rep.": "Africa", "Chad": "Africa", "Congo": "Africa",
  "Dem. Rep. Congo": "Africa", "Djibouti": "Africa", "Egypt": "Africa", "Eq. Guinea": "Africa", "Eritrea": "Africa",
  "Ethiopia": "Africa", "Gabon": "Africa", "Gambia": "Africa", "Ghana": "Africa", "Guinea": "Africa",
  "Guinea-Bissau": "Africa", "Ivory Coast": "Africa", "Kenya": "Africa", "Lesotho": "Africa", "Liberia": "Africa",
  "Libya": "Africa", "Madagascar": "Africa", "Malawi": "Africa", "Mali": "Africa", "Mauritania": "Africa",
  "Morocco": "Africa", "Mozambique": "Africa", "Namibia": "Africa", "Niger": "Africa", "Nigeria": "Africa",
  "Rwanda": "Africa", "Senegal": "Africa", "Sierra Leone": "Africa", "Somalia": "Africa", "Somaliland": "Africa",
  "South Africa": "Africa", "South Sudan": "Africa", "Sudan": "Africa", "Swaziland": "Africa", "Tanzania": "Africa",
  "Togo": "Africa", "Tunisia": "Africa", "Uganda": "Africa", "Zambia": "Africa", "Zimbabwe": "Africa",
  // North America
  "Canada": "North America", "United States of America": "North America", "Mexico": "North America", "Guatemala": "North America",
  "Belize": "North America", "Honduras": "North America", "El Salvador": "North America", "Nicaragua": "North America",
  "Costa Rica": "North America", "Panama": "North America", "Cuba": "North America", "Haiti": "North America",
  "Dominican Rep.": "North America", "Jamaica": "North America", "Bahamas": "North America", "Trinidad and Tobago": "North America",
  // South America
  "Argentina": "South America", "Bolivia": "South America", "Brazil": "South America", "Chile": "South America",
  "Colombia": "South America", "Ecuador": "South America", "Guyana": "South America", "Paraguay": "South America",
  "Peru": "South America", "Suriname": "South America", "Uruguay": "South America", "Venezuela": "South America",
  // Oceania
  "Australia": "Oceania", "New Zealand": "Oceania", "Fiji": "Oceania", "Papua New Guinea": "Oceania",
  "Solomon Is.": "Oceania", "Vanuatu": "Oceania", "New Caledonia": "Oceania",
  // Antarctica
  "Antarctica": "Antarctica"
};


/* Integrated full-screen learning UI. */
function learningFlash(parent,title,facts,options={}){
 const card=document.createElement('section');card.className='lfCard '+(options.type||'');const badge=document.createElement('small');badge.textContent=options.badge||'FUN FACT FLASHCARD';const h=document.createElement('h3');h.textContent=title;card.append(badge,h);if(options.before)options.before(card);
 const face=document.createElement('button');face.type='button';face.className='lfFace';const count=document.createElement('p');count.className='lfCount';const controls=document.createElement('div');controls.className='lfButtons';const prev=document.createElement('button'),next=document.createElement('button');prev.textContent='← Previous';next.textContent='Next →';controls.append(prev,next);card.append(face,count,controls);let i=0,back=false;const render=()=>{face.textContent=back?'Tap to reveal a fact!':facts[i]||'Information is unavailable.';count.textContent='Fact '+(i+1)+' of '+Math.max(1,facts.length)+' · tap to flip';};prev.onclick=()=>{i=(i+facts.length-1)%Math.max(1,facts.length);back=false;render();};next.onclick=()=>{i=(i+1)%Math.max(1,facts.length);back=false;render();};face.onclick=()=>{back=!back;render();};if(options.note){const n=document.createElement('small');n.textContent=options.note;card.append(n);}parent.append(card);render();return card;
}
const LEARNING_STATES={
andhrapradesh:['49.6','Kuchipudi','A long coastline faces the Bay of Bengal.','Visakhapatnam, Vijayawada, Tirupati, Guntur'],
arunachalpradesh:['1.4','Aji Lhamu, a Monpa masked performance','Arunachal Pradesh is a mountainous state in northeastern India.','Itanagar, Naharlagun, Pasighat'],
assam:['31.2','Bihu','Assam is famous for tea and one-horned rhinoceroses.','Guwahati, Dibrugarh, Silchar, Jorhat'],
bihar:['104.1','Jat-Jatin','Bodh Gaya is associated with Buddha’s enlightenment.','Patna, Gaya, Bhagalpur, Muzaffarpur'],
chhattisgarh:['25.5','Panthi','Chitrakote is a famous wide waterfall in this state.','Raipur, Bhilai, Bilaspur, Korba'],
goa:['1.5','Fugdi','Goa is India’s smallest state by area.','Panaji, Margao, Vasco da Gama, Mapusa'],
gujarat:['60.4','Garba','Gir Forest is home to wild Asiatic lions.','Ahmedabad, Surat, Vadodara, Rajkot'],
haryana:['25.4','Phag','Kurukshetra is traditionally linked with the Mahabharata.','Faridabad, Gurugram, Panipat, Hisar'],
himachalpradesh:['6.9','Nati','Shimla was the summer capital of British India.','Shimla, Dharamshala, Solan, Mandi'],
jharkhand:['33.0','Chhau','Jharkhand is rich in forests and minerals.','Ranchi, Jamshedpur, Dhanbad, Bokaro'],
karnataka:['61.1','Yakshagana, a dance-drama tradition','Bengaluru is a major technology centre.','Bengaluru, Mysuru, Mangaluru, Hubballi'],
kerala:['33.4','Kathakali','Kerala is known for its backwaters.','Thiruvananthapuram, Kochi, Kozhikode, Thrissur'],
madhyapradesh:['72.6','Tertali','Khajuraho is famous for its medieval temples.','Bhopal, Indore, Jabalpur, Gwalior'],
maharashtra:['112.4','Lavani','Ajanta and Ellora are famous cave sites.','Mumbai, Pune, Nagpur, Nashik'],
manipur:['2.9','Manipuri Ras Leela','Loktak Lake has floating islands called phumdis.','Imphal, Thoubal, Bishnupur'],
meghalaya:['3.0','Nongkrem','Meghalaya is famous for living root bridges.','Shillong, Tura, Jowai'],
mizoram:['1.1','Cheraw, the bamboo dance','Mizoram is a hilly northeastern state.','Aizawl, Lunglei, Champhai'],
nagaland:['2.0','Chang Lo','The Hornbill Festival celebrates Naga cultures.','Kohima, Dimapur, Mokokchung'],
odisha:['42.0','Odissi','Konark’s Sun Temple is designed like a great chariot.','Bhubaneswar, Cuttack, Rourkela, Sambalpur'],
punjab:['27.7','Bhangra','Punjab means land of five rivers.','Ludhiana, Amritsar, Jalandhar, Patiala'],
rajasthan:['68.5','Ghoomar','Rajasthan is India’s largest state by area.','Jaipur, Jodhpur, Kota, Udaipur'],
sikkim:['0.6','Singhi Chham, the snow lion dance','Kangchenjunga rises on Sikkim’s border.','Gangtok, Namchi, Gyalshing'],
tamilnadu:['72.1','Bharatanatyam','Thanjavur’s Brihadisvara Temple is a famous Chola monument.','Chennai, Coimbatore, Madurai, Tiruchirappalli'],
telangana:['35.0','Perini Thandavam','Telangana became a state in 2014.','Hyderabad, Warangal, Nizamabad, Karimnagar'],
tripura:['3.7','Hojagiri','Bamboo is important in Tripura’s crafts.','Agartala, Udaipur, Dharmanagar'],
uttarpradesh:['199.8','Kathak','The Taj Mahal is in Agra, Uttar Pradesh.','Lucknow, Kanpur, Varanasi, Agra'],
uttarakhand:['10.1','Chholiya','The Ganga’s sacred source region lies in Uttarakhand.','Dehradun, Haridwar, Haldwani, Roorkee'],
westbengal:['91.3','Purulia Chhau','The Sundarbans include mangrove forests and Bengal tigers.','Kolkata, Howrah, Durgapur, Siliguri']
};
const LEARNING_BODY={
Hair:['Hair grows from follicles in your skin.','Hair helps protect your head.','The visible hair shaft is made of cells that are no longer living.'],Head:['Your skull protects your brain.','Your brain helps you think, learn and remember.','Eyes, ears, nose and mouth help you explore the world.'],Eyes:['Your eyes send messages to your brain so you can see.','Your pupils change size to control how much light enters.','Blinking spreads tears over your eyes.'],Ears:['Your ears help you hear sounds.','Your inner ears help you balance.','Sound makes your eardrum vibrate.'],Nose:['Your nose helps you smell.','Hairs and mucus help trap dust.','Your nose warms and moistens the air you breathe.'],Cheeks:['Cheek muscles help you smile.','Cheeks help keep food between your teeth while chewing.','Cheekbones help give your face its shape.'],Mouth:['Teeth break food into smaller pieces.','Saliva softens food and starts digestion.','Your tongue helps you taste, speak and swallow.'],Neck:['Your neck supports your head and lets it turn.','Your neck contains part of your backbone.','Food and air travel through separate tubes in your neck.'],Shoulders:['Shoulder joints let your arms move in many directions.','Shoulder muscles help you lift and reach.','Collarbones help connect your arms to your body.'],Chest:['Ribs help protect your heart and lungs.','Your heart pumps blood around your body.','Your chest moves as you breathe.'],Stomach:['Your stomach mixes food with digestive juices.','Stomach muscles help churn food.','Your tummy area contains several organs, not just your stomach.'],Arms:['Your arms help you reach, carry and hug.','The upper arm has one long bone called the humerus.','The forearm has two bones: radius and ulna.'],Elbows:['Your elbow lets your arm bend and straighten.','It joins the upper arm and forearm.','It helps bring your hand towards your mouth.'],Hands:['Hands help you hold, draw and build.','Your thumb helps you grip things.','Fingertips have many touch receptors.'],Fingers:['Fingers help with careful movements.','Fingernails protect the tips of your fingers.','Most fingers have three bones; each thumb has two.'],Legs:['Legs help support your body.','The thighbone is called the femur.','Leg muscles help you walk, run and jump.'],Knees:['Knees let your legs bend and straighten.','The kneecap is called the patella.','Cartilage helps cushion your knee bones.'],Ankles:['Ankles join your legs and feet.','Ankle movement helps you walk on different surfaces.','Muscles and ligaments support your ankles.'],Feet:['Feet help you stand and balance.','Each adult foot usually has 26 bones.','Toes help with balance and pushing off while walking.']
};
function prepareLearningScreens(){
 const $=id=>document.getElementById(id);if($('learningAllStyles'))return;const style=document.createElement('style');style.id='learningAllStyles';style.textContent=`
html[data-learning-page="world"],html[data-learning-page="india"],html[data-learning-page="body"],html[data-learning-page="world"] body,html[data-learning-page="india"] body,html[data-learning-page="body"] body{height:100%!important;overflow:hidden!important}html[data-learning-page] body{display:flex!important;flex-direction:column!important}#pageNav{flex:0 0 auto!important;flex-wrap:wrap!important;padding:5px!important;gap:6px!important}
html[data-learning-page="world"] #pageWorldEl.visible,html[data-learning-page="india"] #pageIndiaEl.visible,html[data-learning-page="body"] #pageBodyEl.visible{display:flex!important;flex:1 1 0!important;min-height:0!important;overflow:hidden!important;width:100%!important;height:auto!important;padding:0!important}
.lfDesk{display:grid!important;grid-template-columns:minmax(0,1.45fr) minmax(340px,1fr);gap:16px;padding:12px 20px;width:100%;height:100%;min-height:0;flex:1 1 0;overflow:hidden}.lfMap{display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:0;min-height:0;overflow:hidden;background:#ffffff66;border:1px solid #b7d9e8;border-radius:26px}.lfSide{min-width:0;min-height:0;overflow:auto;overscroll-behavior:contain;padding:8px;background:#ffffffaa;border-radius:24px;font-family:Arial}.lfSide h2{text-align:center;color:#245b6b;margin:8px}.lfButtons{display:flex!important;justify-content:center;align-items:center;gap:7px;flex-wrap:wrap;margin:8px 0;flex:0 0 auto}.lfButtons button{border:1px solid #9fc6d5;border-radius:17px;background:white;color:#22576a;min-height:38px;padding:8px 12px;font:600 14px Arial;cursor:pointer}.lfButtons button.active{background:#117eaf;color:white}.lfButtons button:disabled{opacity:.5}.lfButtons select{max-width:100%;padding:9px;background:white;border:1px solid #9fc6d5;border-radius:12px;font-size:15px}
.lfCard{padding:14px;margin:12px 0;border:2px solid #bed6a8;border-radius:22px;background:linear-gradient(135deg,#eff9de,#fff);color:#36502d;text-align:center;font-family:Arial}.lfCard.water{border-color:#95cbe2;background:linear-gradient(135deg,#e1f3ff,#fff)}.lfCard.wonder{border-color:#e5bf65;background:linear-gradient(135deg,#fff5d2,#fff)}.lfCard h3{font-size:25px;margin:8px 0}.lfFace{display:block;width:100%;min-height:90px;border:1px dashed #a2bc83;border-radius:15px;background:#fffef5;padding:16px;color:#355439;font:600 18px/1.6 Arial;cursor:pointer}.lfCount,.lfCard small{font:12px/1.5 Arial;color:#637750}.lfPhoto{width:100%;height:clamp(140px,22vh,235px);object-fit:contain;background:#e8eff1;border-radius:12px;margin:10px 0}.lfBuilt{padding:10px;background:#eaf4e7;border-radius:14px;text-align:left;font:15px/1.5 Arial}.lfBuilt a,.lfCredit{font-size:11px}.lfHint{font:13px Arial;color:#3e6575;text-align:center;margin:4px 8px 10px}
#lfWorldCanvas{display:flex;align-items:center;justify-content:center;flex:1 1 0;width:100%;min-height:0;overflow:hidden}#lfWorldCanvas svg{display:block!important;width:100%!important;height:100%!important;max-width:none!important;max-height:none!important;min-height:0!important;touch-action:pan-y;cursor:grab;background:transparent!important}#lfWorldCanvas svg.spin{touch-action:none!important}#lfWorldCanvas text{pointer-events:none;stroke:none!important;visibility:visible!important;opacity:1!important}#lfWorldCanvas .lfMarker{cursor:pointer;pointer-events:all!important}#lfSummary{padding:12px;border:2px solid #bfdcc9;border-radius:20px;background:#fff;color:#245b40;text-align:center}#lfSummary h3{font-size:27px;margin:6px}#lfFlag{width:64px;height:42px;object-fit:contain}#lfDetails{font:17px/1.6 Arial}#lfQuestion,#lfClock,#lfStatus{text-align:center;font:16px/1.5 Arial;color:#655322;margin:10px 4px}
#lfIndiaMap .mapWrap,#lfIndiaMap #mapHolderIN{display:flex!important;align-items:center;justify-content:center;flex:1 1 0!important;width:100%!important;height:100%!important;min-height:0!important;max-height:none!important;margin:0!important;padding:4px!important;overflow:hidden!important}#lfIndiaMap svg{display:block!important;width:100%!important;height:100%!important;max-height:none!important;max-width:none!important}#lfIndiaSide #bannerIN,#lfBodySide #bannerBody{max-width:100%;padding:12px;margin:10px 0}#lfIndiaSide #factsGridIN{flex-direction:column;align-items:flex-start;gap:10px}.lfSide header h1{font-size:26px}.lfSide .stateName{font-size:27px}.lfSide .controls{flex-wrap:wrap}
#lfBodyDesk{grid-template-columns:minmax(320px,1fr) minmax(0,1.25fr)}#lfBodyPicture .bodyGraphicWrap{display:flex!important;width:100%!important;height:100%!important;min-height:0!important;padding:8px!important;align-items:center!important;justify-content:center!important;flex:1 1 0!important}#lfBodyPicture .bodyGraphicCard{max-width:none!important;flex:none!important;aspect-ratio:765/1024!important}#lfBodyPicture .bodyImg{width:100%!important;height:100%!important;object-fit:fill!important}
#pageQuizEl{width:100%!important;max-width:none!important}#quizSingleContainer,#arcadeContainer{width:100%!important;max-width:none!important;min-height:0!important;flex:1 1 0!important}#quizMainModePicker{width:100%!important;max-width:none!important;flex:1 1 0!important;min-height:0!important;padding:20px!important;gap:24px!important}#pageQuizEl .quizModeCard{flex:1 1 0!important;max-width:none!important;min-width:0!important;display:flex;flex-direction:column;align-items:center;justify-content:center}#pageQuizEl .modeTitle{font-size:clamp(24px,3vw,42px)!important}#pageQuizEl .modeIcon{font-size:clamp(50px,7vw,90px)!important}#lfHomeScreen{text-align:center;overflow:auto}#lfHomeScreen .lfButtons{margin:30px}#lfHomeScreen button{padding:20px;font-size:20px}[hidden]{display:none!important}
@media(max-width:760px){.lfDesk,#lfBodyDesk{grid-template-columns:minmax(0,1fr) minmax(230px,1fr);gap:7px;padding:6px}.lfButtons button{font-size:12px;padding:6px 8px}}@media(max-width:480px) and (orientation:portrait){.lfDesk,#lfBodyDesk{grid-template-columns:1fr;grid-template-rows:minmax(0,1fr) minmax(0,1fr)}#lfBodySide{grid-row:2}#lfBodyPicture{grid-row:1}.lfHint{display:none}}

/* Single source of truth: centred Flexbox subject rows. */
#pageQuizEl #quizTopicPicker.lfSubjectFlex,
#pageQuizEl #arcadeTopicPicker.lfSubjectFlex {
  --lf-subject-width: calc((100% - 54px) / 4);
  display: flex !important;
  flex-flow: row wrap !important;
  justify-content: center !important;
  align-items: center !important;
  align-content: safe center !important;
  gap: 18px !important;
  width: 100% !important;
  max-width: none !important;
  height: auto !important;
  min-height: 0 !important;
  flex: 1 1 0 !important;
  padding: 20px !important;
  margin: 0 !important;
  box-sizing: border-box !important;
  overflow: auto !important;
}
#pageQuizEl #quizTopicPicker.lfSubjectFlex .topicBtn,
#pageQuizEl #arcadeTopicPicker.lfSubjectFlex .topicBtn {
  display: flex !important;
  flex: 0 0 var(--lf-subject-width) !important;
  width: var(--lf-subject-width) !important;
  min-width: 0 !important;
  max-width: none !important;
  height: clamp(110px, 23vh, 200px) !important;
  min-height: 110px !important;
  max-height: 200px !important;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
  margin: 0 !important;
  padding: 14px !important;
  box-sizing: border-box !important;
  border-width: 3px !important;
  border-radius: 25px !important;
  white-space: normal !important;
  font: 700 clamp(20px, 2.1vw, 32px)/1.3 Arial, sans-serif !important;
  box-shadow: 0 8px 20px #a6337a18;
}
@media (max-width: 1000px) {
  #pageQuizEl #quizTopicPicker.lfSubjectFlex,
  #pageQuizEl #arcadeTopicPicker.lfSubjectFlex {
    --lf-subject-width: calc((100% - 36px) / 3);
  }
}
@media (max-width: 650px) {
  #pageQuizEl #quizTopicPicker.lfSubjectFlex,
  #pageQuizEl #arcadeTopicPicker.lfSubjectFlex {
    --lf-subject-width: calc((100% - 12px) / 2);
    gap: 12px !important;
    padding: 12px !important;
  }
}
`;document.head.append(style);
 document.documentElement.dataset.learningPage='india';const oldShow=window.showPage;window.showPage=function(route){if(window.cancelWorldQuestion)window.cancelWorldQuestion();document.documentElement.classList.remove('edWorld','geoIndia','wgScroll','worldLayoutScroll','learnWorld','learnIndia','learnBody');if(route==='home'){document.querySelectorAll('.app-page').forEach(p=>p.classList.remove('visible'));document.querySelectorAll('.pageNavBtn').forEach(p=>p.classList.remove('active'));$('lfHomeScreen')?.classList.add('visible');document.body.className='page-world';}else oldShow(route==='wonders'?'world':route);document.documentElement.dataset.learningPage=route==='wonders'?'world':route;if(route==='wonders'&&window.openLearningWonders)window.openLearningWonders();};
 const home=document.createElement('div');home.id='lfHomeScreen';home.className='app-page';home.innerHTML='<h1>🏠 Learning Home</h1><div class="lfButtons"></div>';document.body.append(home);[['🇮🇳 India Map','india'],['🌍 World Map','world'],['🧠 Quiz Time','quiz'],['🧍 Body Parts','body']].forEach(([label,route])=>{const b=document.createElement('button');b.textContent=label;b.onclick=()=>window.showPage(route);home.querySelector('div').append(b);});
 for(const id of ['quizTopicPicker','arcadeTopicPicker']){const picker=$(id);if(!picker)continue;const sync=()=>picker.classList.toggle('lfSubjectFlex',picker.style.display!=='none');new MutationObserver(sync).observe(picker,{attributes:true,attributeFilter:['style']});sync();}
 // Move live India DOM elements: the original map listeners are preserved.
 const india=$('pageIndiaEl'),map=$('mapHolderIN');if(india&&map){const desk=document.createElement('div');desk.className='lfDesk';const left=document.createElement('section');left.className='lfMap';left.id='lfIndiaMap';const right=document.createElement('aside');right.className='lfSide';right.id='lfIndiaSide';left.append(map.closest('.mapWrap')||map);while(india.firstChild)right.append(india.firstChild);desk.append(left,right);india.append(desk);const factsBox=document.createElement('div');factsBox.id='lfStateFacts';$('bannerIN')?.after(factsBox);let queued=false;const update=()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;const name=$('nameTextIN')?.textContent.trim(),key=String(name).toLowerCase().replace(/[^a-z]/g,'').replace('orissa','odisha').replace('uttaranchal','uttarakhand'),x=LEARNING_STATES[key];factsBox.replaceChildren();if(!x)return;learningFlash(factsBox,name,['👥 Population: about '+x[0]+' million (Census 2011).','💃 A dance tradition: '+x[1]+'.','⭐ '+x[2],'🏙️ Major cities / towns: '+x[3]+'.'],{type:'wonder',badge:'🇮🇳 STATE FLASHCARD',note:'Population is rounded Census 2011 data, not a current estimate. Andhra Pradesh and Telangana use their separated territories. Dance and city examples are not exhaustive.'});});};if($('bannerIN'))new MutationObserver(update).observe($('bannerIN'),{childList:true,characterData:true,subtree:true});}
 const body=$('pageBodyEl'),picture=body?.querySelector('.bodyGraphicWrap');if(body&&picture){const desk=document.createElement('div');desk.id='lfBodyDesk';desk.className='lfDesk';const left=document.createElement('aside');left.id='lfBodySide';left.className='lfSide';const right=document.createElement('section');right.id='lfBodyPicture';right.className='lfMap';right.append(picture);while(body.firstChild)left.append(body.firstChild);desk.append(left,right);body.append(desk);const box=document.createElement('div');$('bannerBody')?.after(box);const show=spot=>{const name=spot.dataset.name;box.replaceChildren();learningFlash(box,name,LEARNING_BODY[name]||[spot.dataset.fact||'This part helps your body work.'],{type:'water',badge:'🧍 BODY PART FLASHCARD',note:'Learning reference: Nemours KidsHealth.'});};body.addEventListener('click',e=>{const spot=e.target.closest('.bodyHotspot');if(spot)show(spot);});body.addEventListener('keydown',e=>{const spot=e.target.closest('.bodyHotspot');if(spot&&(e.key==='Enter'||e.key===' '))show(spot);});const fit=()=>{const card=right.querySelector('.bodyGraphicCard');if(card){const width=Math.max(1,Math.min(right.clientWidth-20,(right.clientHeight-20)*765/1024));card.style.width=width+'px';card.style.height=width*1024/765+'px';}};if(window.ResizeObserver)new ResizeObserver(fit).observe(right);window.addEventListener('resize',fit);new MutationObserver(()=>requestAnimationFrame(fit)).observe(body,{attributes:true,attributeFilter:['class']});}
}

function buildWorldModule(){
 const $=id=>document.getElementById(id),page=$('pageWorldEl');if(!page)return;$('navWonders')?.remove();$('pageWondersEl')?.remove();page.innerHTML=`<div class="lfDesk"><section class="lfMap"><div id="lfWorldCanvas">Loading Earth…</div><div class="lfButtons"><button id="lfPlus">＋</button><button id="lfMinus">−</button><button id="lfTouch">Touch: Scroll</button><button id="lfReset">Reset</button></div><p class="lfHint">Tap land, water or a continent label · Drag to rotate</p></section><aside class="lfSide"><div class="lfButtons"><button id="lfHome">🏠 Home</button><button id="lfSpeak">🔊 Read aloud</button></div><h2>🌍 Explore Our Earth</h2><div class="lfButtons" id="lfModes"><button data-mode="explore">Explore Earth</button><button data-mode="wonders">World Wonders</button></div><div id="lfChooser" class="lfButtons"></div><div id="lfQuizControls" class="lfButtons"><button id="lfExplore">Explore</button><button id="lfCountries">Find Country</button><button id="lfCapitals">Find by Capital</button></div><div id="lfSummary"><img id="lfFlag" alt="" hidden><h3 id="lfName">Tap land or water</h3><div id="lfDetails"></div></div><div id="lfCards"></div><div id="lfQuestion" aria-live="polite"></div><div id="lfClock" role="status"></div><div class="lfButtons"><button id="lfNext" hidden>Next Question ➜</button></div><div id="lfStatus" role="status"></div><small>Marine geometry: Marine Regions / IHO Sea Areas · CC BY 4.0. Approximate educational boundaries, not legal boundaries.</small></aside></div>`;
 const continents=[
 ['Asia',95,38,'44.6 million km²','about 48',['Asia is the largest continent.','Mount Everest is in Asia.','Ancient civilisations developed in the Indus Valley and China.']],
 ['Africa',20,5,'30.4 million km²','54',['Africa is the second-largest continent.','The Sahara is the largest hot desert.','Ancient Egyptian civilisation developed along the Nile.']],
 ['Europe',20,52,'10.2 million km²','about 44–50',['Europe and Asia share the Eurasian landmass.','Vatican City is the world’s smallest country.']],
 ['North America',-105,42,'24.7 million km²','23',['Greenland is geographically part of North America.','Columbus reached the Caribbean in 1492 and met the Taíno. Indigenous peoples had lived in the Americas for thousands of years before his arrival.']],
 ['South America',-60,-18,'17.8 million km²','12',['The Amazon is the world’s largest tropical rainforest.','The Inca built Machu Picchu in the Andes. People lived in South America long before European voyages.']],
 ['Oceania',140,-25,'about 8.5 million km²','14',['Oceania includes Australia and many Pacific islands.','Indigenous Australians and Pacific peoples lived here long before European explorers arrived.','The Great Barrier Reef lies off Australia’s coast.']],
 ['Antarctica',0,-78,'14.2 million km²','0',['Antarctica has no sovereign countries.','It has no permanent residents, but researchers work at stations.','Recorded mainland sightings occurred in 1820; claims to the earliest sighting are debated.','Penguins live here; polar bears do not.']]
 ].map(([name,lon,lat,area,count,facts])=>({name,lon,lat,continent:true,facts:['📏 Area: approximately '+area+'.','🗺️ Countries: '+count+'.',...facts]}));
 const wonders=[
 ['Taj Mahal','Agra, India',78.0421,27.1751,'Taj_Mahal','taj-mahal.jpg','Construction began in 1632 CE. The mausoleum was completed in 1648; surrounding buildings by 1653.','https://whc.unesco.org/en/list/252/',['It is made of white marble.','Shah Jahan built it in memory of his wife Mumtaz Mahal.','Its garden includes a reflecting pool.']],
 ['Great Wall of China','Mutianyu, China',116.5704,40.4319,'Great_Wall_of_China','great-wall.jpg','Built and rebuilt over centuries. The imperial defence system developed from the 3rd century BCE to the 17th century CE; earlier walls existed.','https://whc.unesco.org/en/list/438/',['It is a network of walls, towers and passes.','Different rulers built and repaired different sections.']],
 ['Petra','Jordan',35.4444,30.3285,'Petra','petra.jpg','Developed over centuries. Many Nabataean monuments date from the centuries around the beginning of the Common Era.','https://whc.unesco.org/en/list/326/',['Famous buildings were carved into sandstone cliffs.','Petra was an important trading centre.']],
 ['Colosseum','Rome, Italy',12.4922,41.8902,'Colosseum','colosseum.jpg','Construction began around 70–72 CE. It opened in 80 CE; an upper storey was added in 82 CE.','https://www.britannica.com/topic/Colosseum',['It could hold about 50,000 spectators.','Its builders used arches and vaults.']],
 ['Chichén Itzá','Yucatán, Mexico',-88.5678,20.6843,'Chichen_Itza','chichen-itza.jpg','Developed over centuries. Older Maya-style monuments date from the 6th to 10th centuries CE, with later buildings following.','https://whc.unesco.org/en/list/483/',['It was an important Maya city.','Its famous pyramid is called El Castillo, meaning The Castle.']],
 ['Machu Picchu','Peru',-72.545,-13.1631,'Machu_Picchu','machu-picchu.jpg','Built by the Inca in the 15th century CE, around the middle of the 1400s.','https://whc.unesco.org/en/list/274/',['It sits high in the Andes Mountains.','Its terraces provided places to grow crops.']],
 ['Christ the Redeemer','Rio de Janeiro, Brazil',-43.2105,-22.9519,'Christ_the_Redeemer_(statue)','christ-the-redeemer.jpg','Built from 1926 to 1931. Dedicated on 12 October 1931.','https://www.britannica.com/topic/Christ-the-Redeemer',['It stands on Mount Corcovado.','Its outstretched arms span about 28 metres.']]
 ].map(([name,place,lon,lat,wiki,local,built,source,facts])=>({name,place,lon,lat,wiki,local,built,source,facts}));
 let features=[],records=[],marine=[],mode='explore',quiz='',target=null,answered=false,selected=null,marineSelected=null,answerMarker=null,timer,tick,ready=false,svg,projection,path,land,water,boundary,markers,rotation=[-78,-20,0],scale=350,touchSpin=false,photoSerial=0;const photoCache=new Map();
 function cancel(){clearTimeout(timer);clearInterval(tick);$('lfClock').textContent='';}window.cancelWorldQuestion=()=>{cancel();if(quiz&&!answered){answered=true;$('lfNext').disabled=false;$('lfClock').textContent='Choose Next Question to continue.';}};
 function info(name,details='',flag=''){$('lfSummary').hidden=false;$('lfName').textContent=name;$('lfDetails').textContent=details;const im=$('lfFlag');im.hidden=true;if(flag){im.alt=name+' flag';im.onerror=()=>im.hidden=true;im.src=flag;im.hidden=false;}}
 function record(f){return records.find(r=>String(r.ccn3).padStart(3,'0')===String(f.id).padStart(3,'0'))||records.find(r=>r.name?.common===f.properties.name||r.name?.official===f.properties.name);}function countryName(f){return record(f)?.name?.common||f.properties.name;}function continentName(f){return record(f)?.continents?.[0]||COUNTRY_TO_CONTINENT[f.properties.name]||'Not available';}
 function currencyFact(r){let names;try{names=new Intl.DisplayNames(['en'],{type:'currency'});}catch(e){}const list=Array.isArray(r.currencies)?r.currencies.map(x=>typeof x==='string'?{code:x}:x):Object.entries(r.currencies||{}).map(([code,c])=>({code,...c}));return '💰 Currency: '+(list.map(c=>{const code=c.code||'';let name=c.name||code;try{if(!c.name&&names&&code)name=names.of(code);}catch(e){}return name+(code?' — '+code:'')+(c.symbol?' ('+c.symbol+')':'');}).join(' / ')||'not available in the loaded data.');}
 function countryFacts(r){const f=[];if(r.capital?.length)f.push('🏛️ Capital: '+r.capital.join(' / '));const l=Object.values(r.languages||{});if(l.length)f.push('🗣️ Languages: '+l.join(', '));f.push(currencyFact(r));if(r.region)f.push('🌍 Region: '+r.region+(r.subregion?' · '+r.subregion:''));if(typeof r.area==='number')f.push('📏 Area: approximately '+Math.round(r.area).toLocaleString()+' km².');if(typeof r.landlocked==='boolean')f.push(r.landlocked?'🧭 This country is landlocked: it has no ocean coastline.':'🌊 This country has a coastline.');return f;}
 function continentCard(c){learningFlash($('lfCards'),c.name,c.facts,{type:'water',badge:'🌐 CONTINENT FLASHCARD',note:'Areas are approximate. Country counts depend on how transcontinental and disputed countries are classified. Oceania includes Australia and Pacific island countries.'});}
 function selectCountry(f){selected=f.id;marineSelected=null;const r=record(f);info(countryName(f),'Continent: '+continentName(f)+' · Capital: '+(r?.capital?.join(' / ')||(f.properties.name==='Antarctica'?'No capital':'Data unavailable')),r?.cca2?(r.flags?.svg||'https://flagcdn.com/'+r.cca2.toLowerCase()+'.svg'):'');$('lfCards').replaceChildren();learningFlash($('lfCards'),countryName(f),r?countryFacts(r):['Country facts are loading or unavailable.'],{badge:'🌍 COUNTRY FLASHCARD'});const c=continents.find(c=>c.name===continentName(f));if(c)continentCard(c);draw();}
 function focus(coords){rotation=[-coords[0],-coords[1],0];if(ready){projection.rotate(rotation);draw();}}
 function selectContinent(c){selected=null;marineSelected=null;focus([c.lon,c.lat]);info(c.name);$('lfCards').replaceChildren();continentCard(c);speak(c.name);draw();}
 function waterFacts(feature,name){const f=[];if(feature){const a=d3.geoArea(feature)*6371.0088**2;if(Number.isFinite(a)&&a>0)f.push('📏 '+name+': mapped area approximately '+Math.round(a).toLocaleString()+' km², following the dataset region rather than a legal boundary.');}const n=name.toLowerCase(),sets=[
 ['pacific',['🌏 The Pacific is the largest ocean.','⬇️ Across the Pacific as a whole, Challenger Deep in the Mariana Trench reaches about 10.9 km — Earth’s deepest known ocean point.','🌋 Many volcanoes and earthquakes occur around the Pacific Ring of Fire.']],
 ['atlantic',['🌍 The Atlantic is the second-largest ocean.','⬇️ The Atlantic’s deepest region is the Puerto Rico Trench, about 8.4 km deep.','🔺 The Bermuda Triangle is an informally described area of the western North Atlantic. NOAA finds no evidence of an unusually high disappearance rate there.','🌊 The Mid-Atlantic Ridge is an underwater mountain chain.']],
 ['indian',['🧭 The Indian Ocean lies between Africa, Asia and Australia.','⬇️ Its deepest surveyed point lies in the Java Trench, about 7.2 km deep.','🌬️ Monsoon winds have helped sailors cross its northern waters for centuries.']],
 ['arctic',['🧊 The Arctic is the smallest of the five oceans.','⬇️ Its deepest region is Molloy Hole, about 5.6 km deep.','🧭 It surrounds the North Pole and has seasonal sea ice.']],
 ['southern',['🐧 The Southern Ocean surrounds Antarctica.','⬇️ Factorian Deep reaches about 7.4 km within the Southern Ocean.','🌊 The Antarctic Circumpolar Current flows around Antarctica.']],
 ['antarctic ocean',['🐧 This is another name for the Southern Ocean.','⬇️ Factorian Deep reaches about 7.4 km in the Southern Ocean.']],
 ['mediterranean',['🧭 The Mediterranean lies between Europe, Africa and Asia.','⬇️ Its deepest region is Calypso Deep in the Ionian Sea, more than 5 km below the surface.','🚢 The Strait of Gibraltar links it to the Atlantic.']],
 ['red sea',['🧭 The Red Sea lies between northeastern Africa and the Arabian Peninsula.','🚢 The Suez Canal connects it with the Mediterranean.','🐠 Its coral reefs support many marine animals.']],
 ['black sea',['🧭 The Black Sea lies near southeastern Europe.','💧 Its surface water is less salty than typical ocean water.','🌊 Its deep waters contain very little oxygen.']],
 ['bay of bengal',['🧭 The Bay of Bengal lies east of India.','🏞️ The Ganga and Brahmaputra river system drains into it.','🌪️ Tropical cyclones can form over its warm waters.']],
 ['arabian sea',['🧭 The Arabian Sea lies west of India.','🚢 It connects with the Gulf of Oman and Gulf of Aden.','🌬️ Monsoons influence its winds and sea conditions.']],
 ['caribbean',['🏝️ The Caribbean lies beside Central America, northern South America and Caribbean islands.','⬇️ The Cayman Trough is its deepest region.','🐠 Its reefs support colourful marine life.']],
 ['baltic',['🧭 The Baltic Sea is in northern Europe.','💧 Its brackish water mixes fresh and salty water.']],
 ['north sea',['🧭 The North Sea lies between Great Britain and mainland northern Europe.','🌬️ Large wind farms stand in parts of it.']],
 ['south china',['🧭 The South China Sea is in the western Pacific region.','🚢 Many international shipping routes cross it.']],
 ['bering',['🧭 The Bering Sea lies between Alaska and northeastern Asia.','🌊 The Bering Strait links the Pacific region with the Arctic Ocean.']],
 ['coral sea',['🐠 The Coral Sea lies northeast of Australia.','🪸 The Great Barrier Reef is along its western side.']],
 ['tasman',['🧭 The Tasman Sea lies between Australia and New Zealand.','⛵ It is named after navigator Abel Tasman.']],
 ['gulf of mexico',['🧭 The Gulf of Mexico is bordered by Mexico, the United States and Cuba.','🏞️ The Mississippi River flows into it.']],
 ['persian gulf',['🧭 The Persian Gulf lies between Iran and the Arabian Peninsula.','🚢 The Strait of Hormuz connects it to the Gulf of Oman.']],
 ['andaman',['🧭 The Andaman Sea lies east of the Andaman and Nicobar Islands.','🏝️ Its coasts include parts of Myanmar and Thailand.']],
 ['laccadive',['🧭 The Laccadive Sea is near southwestern India, Sri Lanka and the Maldives.','🏝️ Island chains and tropical waters feature in this region.']]
 ];const match=sets.find(([key])=>n.includes(key));if(match)f.push(...match[1]);else if(feature){const c=d3.geoCentroid(feature);if(c.every(Number.isFinite))f.push('🧭 A map reference point for '+name+' is near '+Math.abs(c[1]).toFixed(1)+'° '+(c[1]>=0?'N':'S')+', '+Math.abs(c[0]).toFixed(1)+'° '+(c[0]>=0?'E':'W')+'.');f.push('🗺️ Follow the highlighted outline of '+name+' as you rotate the globe beside nearby land.');}else f.push('Marine geometry is loading or unavailable. Try another point after it loads.');return f;}
 function selectWater(p){if(quiz&&!answered){$('lfClock').textContent='Look for the country on land!';return;}selected=null;marineSelected=marine.filter(f=>d3.geoContains(f,p)).sort((a,b)=>d3.geoArea(a)-d3.geoArea(b))[0]||null;const n=marineSelected&&(marineSelected.properties.NAME||marineSelected.properties.name||marineSelected.properties.Name)||'Open water';info(n,marineSelected?'Approximate marine region highlighted.':'Marine names / boundaries are loading or unavailable here.');$('lfCards').replaceChildren();learningFlash($('lfCards'),n,waterFacts(marineSelected,n),{type:'water',badge:'🌊 OCEAN / SEA FLASHCARD',note:'Depths are rounded and refer to the parent ocean where a subregion is selected. Sources: NOAA, British Geological Survey, Britannica. Not legal boundaries.'});draw();speak(n);}
 async function load(url){const c=new AbortController(),t=setTimeout(()=>c.abort(),9000);try{const r=await fetch(url,{signal:c.signal});if(!r.ok)throw Error('HTTP '+r.status);return await r.json();}finally{clearTimeout(t);}}async function sources(urls){let e;for(const u of urls){try{return await load(u);}catch(err){e=err;}}throw e;}
 async function showPhoto(w,img,status,credit,token){function display(src,link){if(token!==photoSerial)return;img.onload=()=>{if(token===photoSerial){img.hidden=false;status.textContent='';}};img.onerror=()=>{if(token===photoSerial)status.textContent='Photo could not load.';};img.src=src;if(link){const a=document.createElement('a');a.href=link;a.target='_blank';a.rel='noopener noreferrer';a.textContent='Photo author and licence';credit.append(a);}else credit.textContent='Local photo';}const local='images/wonders/'+w.local;const exists=await new Promise(resolve=>{let ended=false;const p=new Image();const finish=v=>{if(ended)return;ended=true;clearTimeout(t);p.onload=p.onerror=null;resolve(v);};const t=setTimeout(()=>finish(false),1500);p.onload=()=>finish(true);p.onerror=()=>finish(false);p.src=local;});if(token!==photoSerial)return;if(exists){display(local,'');return;}try{let p=photoCache.get(w.wiki);if(!p){const d=await load('https://en.wikipedia.org/api/rest_v1/page/summary/'+encodeURIComponent(w.wiki));const src=d.originalimage?.source||d.thumbnail?.source;if(!src)throw Error('No photo');const u=new URL(src),parts=u.pathname.split('/'),file=parts[u.pathname.includes('/thumb/')?parts.length-2:parts.length-1];p={src,link:'https://commons.wikimedia.org/wiki/File:'+encodeURIComponent(decodeURIComponent(file))};photoCache.set(w.wiki,p);}display(p.src,p.link);}catch(e){if(token===photoSerial)status.textContent='Photo unavailable. Connect to the internet or add '+local+'.';}}
 function selectWonder(w){focus([w.lon,w.lat]);$('lfSummary').hidden=true;$('lfCards').replaceChildren();const token=++photoSerial;learningFlash($('lfCards'),w.name,w.facts,{type:'wonder',badge:'🏛️ WONDER FLASHCARD',before(card){const loc=document.createElement('p');loc.textContent=w.place;const img=document.createElement('img');img.className='lfPhoto';img.alt=w.name;img.hidden=true;const status=document.createElement('p');status.textContent='Loading photo…';status.className='lfCount';const credit=document.createElement('div');credit.className='lfCredit';const built=document.createElement('div');built.className='lfBuilt';const strong=document.createElement('strong');strong.textContent='🛠️ When was it built?';const p=document.createElement('p');p.textContent=w.built;const a=document.createElement('a');a.href=w.source;a.target='_blank';a.rel='noopener noreferrer';a.textContent='History source';built.append(strong,p,a);card.append(loc,img,status,credit,built);showPhoto(w,img,status,credit,token);}});speak(w.name+'. '+w.built);}
 function setMode(m){cancel();mode=m;quiz='';target=null;answered=false;selected=null;marineSelected=null;answerMarker=null;photoSerial++;$('lfCards').replaceChildren();$('lfQuestion').textContent='';$('lfNext').hidden=true;$('lfChooser').hidden=m==='wonders';$('lfQuizControls').hidden=m==='wonders';$('lfModes').querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.mode===m));$('lfChooser').replaceChildren();if(m==='explore'){info('Tap land, water or a continent label');const sel=document.createElement('select');sel.setAttribute('aria-label','Select a country');sel.innerHTML='<option value="">Choose a country…</option>';features.slice().sort((a,b)=>countryName(a).localeCompare(countryName(b))).forEach(f=>{const o=document.createElement('option');o.value=f.id;o.textContent=countryName(f);sel.append(o);});sel.onchange=()=>{const f=features.find(f=>String(f.id)===sel.value);if(f){focus(d3.geoCentroid(f));selectCountry(f);}};$('lfChooser').append(sel);}else info('Discover World Wonders','Rotate Earth and tap a gold marker. No list: explore the globe!');draw();}window.openLearningWonders=()=>setMode('wonders');
 function reveal(correct){if(!target||answered||!page.classList.contains('visible'))return;answered=true;cancel();focus(d3.geoCentroid(target));selectCountry(target);const c=d3.geoCentroid(target);answerMarker={name:'✓ '+countryName(target),lon:c[0],lat:c[1],answer:true};draw();$('lfQuestion').textContent=(correct?'✅ Correct! ':'💡 Answer: ')+countryName(target)+(quiz==='capital'?' — Capital: '+record(target).capital.join(' / '):'');$('lfNext').disabled=false;$('lfClock').textContent='Choose Next Question when ready.';speak('The answer is '+countryName(target));if(correct)confettiBurst();}
 function question(){cancel();if(!ready){$('lfQuestion').textContent='Please wait for the globe.';return;}const pool=features.filter(f=>f.properties.name!=='Antarctica'&&(quiz!=='capital'||record(f)?.capital?.length));if(!pool.length){$('lfQuestion').textContent='Capital data unavailable. Try Find Country.';return;}target=pool[Math.floor(Math.random()*pool.length)];answered=false;selected=null;marineSelected=null;answerMarker=null;$('lfCards').replaceChildren();info('Find the correct country');$('lfQuestion').textContent=quiz==='capital'?'Which country has the capital '+record(target).capital.join(' / ')+'?':'Find: '+countryName(target);$('lfNext').disabled=true;let n=5;$('lfClock').textContent='Answer revealed in 5 seconds';timer=setTimeout(()=>reveal(false),5000);tick=setInterval(()=>{n--;if(n>0)$('lfClock').textContent='Answer revealed in '+n+' seconds';},1000);draw();speak($('lfQuestion').textContent);}
 function startQuiz(q){setMode('explore');quiz=q;$('lfNext').hidden=false;question();}function tapCountry(f){if(quiz){if(answered)return;if(target&&String(f.id)===String(target.id))reveal(true);else{$('lfClock').textContent='Not quite — keep looking!';speak('Try again');}}else{selectCountry(f);speak(countryName(f));}}
 function draw(){if(!ready)return;water.attr('d',path);boundary.attr('d',marineSelected?path(marineSelected):null);land.attr('d',path).attr('fill',f=>selected!==null&&String(f.id)===String(selected)?'#ffe253':f.properties.name==='Antarctica'?'#f0fbff':'url(#lfLand)');let list=mode==='wonders'?wonders.slice():quiz?[]:continents.slice();if(answerMarker)list.push(answerMarker);list=list.filter(p=>d3.geoDistance([p.lon,p.lat],[-rotation[0],-rotation[1]])<Math.PI/2-.02);const g=markers.selectAll('g').data(list,p=>p.name).join(enter=>{const g=enter.append('g').attr('class','lfMarker').attr('role','button').attr('tabindex',0);g.append('rect');g.append('text');return g;});g.attr('transform',p=>'translate('+projection([p.lon,p.lat])+')').attr('aria-label',p=>p.name).on('click',(e,p)=>{e.stopPropagation();if(p.answer)return;if(p.continent)selectContinent(p);else selectWonder(p);}).on('keydown',(e,p)=>{if((e.key==='Enter'||e.key===' ')&&!p.answer){e.preventDefault();if(p.continent)selectContinent(p);else selectWonder(p);}});g.select('rect').attr('x',p=>-(p.name.length*4.8+15)).attr('y',-19).attr('width',p=>p.name.length*9.6+30).attr('height',38).attr('rx',14).attr('fill',p=>p.continent?'#ffffffdc':'#ffd45a').attr('stroke','#fff');g.select('text').attr('text-anchor','middle').attr('dy','.35em').attr('fill','#17462c').style('font','700 16px Arial').text(p=>p.name);}
 $('lfModes').onclick=e=>{const b=e.target.closest('button[data-mode]');if(b)setMode(b.dataset.mode);};$('lfExplore').onclick=()=>setMode('explore');$('lfCountries').onclick=()=>startQuiz('country');$('lfCapitals').onclick=()=>startQuiz('capital');$('lfNext').onclick=question;$('lfSpeak').onclick=()=>speak($('lfCards').textContent||$('lfName').textContent);$('lfHome').onclick=()=>window.showPage('home');
 function zoom(f){scale=Math.max(280,Math.min(700,scale*f));if(ready){projection.scale(scale);draw();}}$('lfPlus').onclick=()=>zoom(1.2);$('lfMinus').onclick=()=>zoom(1/1.2);$('lfTouch').onclick=()=>{touchSpin=!touchSpin;$('lfTouch').textContent=touchSpin?'Touch: Spin globe':'Touch: Scroll';svg?.classed('spin',touchSpin);};$('lfReset').onclick=()=>{scale=350;if(ready)projection.scale(scale);focus([78,20]);setMode('explore');};
 function normalizeMarine(fc){return(fc.features||[]).filter(f=>f.geometry).map(f=>{if(d3.geoArea(f)>2*Math.PI){const g=f.geometry;if(g.type==='Polygon')g.coordinates.forEach(r=>r.reverse());if(g.type==='MultiPolygon')g.coordinates.forEach(p=>p.forEach(r=>r.reverse()));}return f;});}
 async function init(){try{if(!window.d3||!window.topojson)throw Error('Map libraries unavailable. Reload with internet.');const topo=await sources(['world-countries.json','https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json','https://unpkg.com/world-atlas@2/countries-110m.json']);features=topojson.feature(topo,topo.objects.countries).features;$('lfWorldCanvas').replaceChildren();svg=d3.select($('lfWorldCanvas')).append('svg').attr('viewBox','0 0 800 800').attr('preserveAspectRatio','xMidYMid meet').attr('aria-label','Interactive Earth: tap land, water or continent labels; drag to rotate.');const defs=svg.append('defs');let grad=defs.append('radialGradient').attr('id','lfWater').attr('cx','32%').attr('cy','28%').attr('r','75%');grad.append('stop').attr('offset','0').attr('stop-color','#35b6f2');grad.append('stop').attr('offset','1').attr('stop-color','#034781');grad=defs.append('linearGradient').attr('id','lfLand');grad.append('stop').attr('offset','0').attr('stop-color','#80cd6d');grad.append('stop').attr('offset','1').attr('stop-color','#247b48');projection=d3.geoOrthographic().translate([400,400]).scale(scale).rotate(rotation).clipAngle(90);path=d3.geoPath(projection);water=svg.append('path').datum({type:'Sphere'}).attr('fill','url(#lfWater)').attr('stroke','#9adeff').attr('stroke-width',2);boundary=svg.append('path').attr('fill','#ffe45d').attr('fill-opacity','.28').attr('stroke','#ffe14b').attr('stroke-width',3).attr('stroke-dasharray','8 5').attr('pointer-events','none');land=svg.append('g').selectAll('path').data(features).join('path').attr('stroke','#e4f4da').attr('stroke-width',.6);land.append('title').text(countryName);markers=svg.append('g');ready=true;
 const el=svg.node();let drag=null,suppressUntil=0;el.addEventListener('pointerdown',e=>{if(e.button>0||(e.pointerType==='touch'&&!touchSpin))return;drag={id:e.pointerId,x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY,moved:false};});el.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;if(Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)>7)drag.moved=true;if(drag.moved){const b=el.getBoundingClientRect(),factor=800/Math.min(b.width,b.height);rotation=[rotation[0]+(e.clientX-drag.x)*factor*.2,Math.max(-89,Math.min(89,rotation[1]-(e.clientY-drag.y)*factor*.2)),0];projection.rotate(rotation);draw();}drag.x=e.clientX;drag.y=e.clientY;});const end=()=>{if(drag?.moved)suppressUntil=Date.now()+300;drag=null;};el.addEventListener('pointerup',end);el.addEventListener('pointercancel',end);el.addEventListener('pointerleave',end);svg.on('click',e=>{if(Date.now()<suppressUntil||e.target.closest('.lfMarker')||mode==='wonders')return;const p=d3.pointer(e,el);if(Math.hypot(p[0]-400,p[1]-400)>scale)return;const geo=projection.invert(p);if(!geo)return;const f=features.find(f=>d3.geoContains(f,geo));if(f)tapCountry(f);else selectWater(geo);});setMode(mode);
 const messages={marine:'Loading water boundaries…',country:'Loading country facts…'};const status=()=>$('lfStatus').textContent=Object.values(messages).filter(Boolean).join(' · ');status();await Promise.allSettled([
 (async()=>{try{const fc=await sources(['oceans-seas.geo.json','https://raw.githubusercontent.com/alvinometric/oceans-seas.geojson/main/oceans-seas.geo.json','https://cdn.jsdelivr.net/gh/alvinometric/oceans-seas.geojson@main/oceans-seas.geo.json']);marine=normalizeMarine(fc);messages.marine='';}catch(e){messages.marine='Marine boundary data unavailable.';}status();})(),
 (async()=>{try{records=await sources(['country-details.json','https://raw.githubusercontent.com/mledoze/countries/master/countries.json','https://restcountries.com/v3.1/all?fields=name,ccn3,cca2,capital,continents,flags,languages,currencies,region,subregion,area,landlocked']);records.forEach(r=>{if(!r.continents)r.continents=[r.region==='Americas'?(r.subregion==='South America'?'South America':'North America'):r.region==='Antarctic'?'Antarctica':r.region];});messages.country='';if(mode==='explore'&&!quiz&&selected===null)setMode(mode);else if(selected!==null&&!quiz){const f=features.find(f=>String(f.id)===String(selected));if(f)selectCountry(f);}}catch(e){messages.country='Country fact data unavailable.';}status();})()
 ]);}catch(e){$('lfStatus').textContent=e.message;const b=document.createElement('button');b.textContent='Retry globe';b.onclick=init;$('lfWorldCanvas').replaceChildren(b);}}
 setMode('explore');init();
}

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

function showPage(page){
  document.querySelectorAll('.app-page').forEach(p => p.classList.remove('visible'));
  document.querySelectorAll('.pageNavBtn').forEach(b => b.classList.remove('active'));

  if(page === 'india'){
    document.getElementById('pageIndiaEl')?.classList.add('visible');
    document.getElementById('navIndia')?.classList.add('active');
    document.body.className = 'page-india';
  } else if(page === 'world'){
    document.getElementById('pageWorldEl')?.classList.add('visible');
    document.getElementById('navWorld')?.classList.add('active');
    document.body.className = 'page-world';
  } else if(page === 'body'){
    document.getElementById('pageBodyEl')?.classList.add('visible');
    document.getElementById('navBody')?.classList.add('active');
    document.body.className = 'page-body';
  } else if(page === 'quiz'){
    document.getElementById('pageQuizEl')?.classList.add('visible');
    document.getElementById('navQuiz')?.classList.add('active');
    document.body.className = 'page-quiz';
  } else if(page === 'solar'){
    document.getElementById("pageSolarEl")?.classList.add("visible");
    document.getElementById("navSolar")?.classList.add("active");
    document.body.className = "page-solar";
  }
}

document.getElementById('navIndia')?.addEventListener('click', () => showPage('india'));
document.getElementById('navWorld')?.addEventListener('click', () => showPage('world'));
document.getElementById('navBody')?.addEventListener('click', () => showPage('body'));
document.getElementById('navQuiz')?.addEventListener('click', () => showPage('quiz'));
document.getElementById("navSolar")?.addEventListener("click", () => showPage("solar"));

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
    holder.innerHTML = '<div class="loading error"><span>⚠️ Could not load the official India map.</span><br><button class="retryBtn" id="retryIndia">🔄 Retry</button></div>';
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

/* ===================== BODY PARTS MODULE ===================== */
function buildBodyModule(){
  let mode = 'explore';
  let currentTarget = null;
  let hintsVisible = false;

  const card = document.querySelector('.bodyGraphicCard');
  const hotspots = document.querySelectorAll('.bodyHotspot');
  const nameText = document.getElementById('nameTextBody');
  const funFact = document.getElementById('funFactBody');
  const factsGrid = document.getElementById('factsGridBody');
  const quizBar = document.getElementById('quizBarBody');
  const banner = document.getElementById('bannerBody');

  const availableParts = [...new Set([...hotspots].map(h => h.dataset.name))];

  function clearActive(){
    hotspots.forEach(h => h.classList.remove('active', 'wrong-tap'));
    hideTag();
  }
  const tagEl = document.getElementById('bodyTag');
  let tagTimer = null;
  function showTag(el, wrong){
    if(!tagEl) return;
    const b = el.getBBox();
    tagEl.textContent = el.dataset.name;
    tagEl.style.left = Math.min(Math.max((b.x + b.width/2)/765*100, 14), 86) + '%';
    tagEl.style.top = (Math.max(b.y/1024*100, 4) + 3.5) + '%';
    tagEl.classList.toggle('wrong', !!wrong);
    tagEl.classList.remove('show'); void tagEl.offsetWidth; tagEl.classList.add('show');
    clearTimeout(tagTimer);
    tagTimer = setTimeout(() => tagEl.classList.remove('show'), wrong ? 900 : 4000);
  }
  function hideTag(){ if(tagEl) tagEl.classList.remove('show'); }

  function onTap(el){
    const partName = el.dataset.name;
    const fact = el.dataset.fact;

    if(mode === 'quiz'){
      if(partName.toLowerCase() === currentTarget.toLowerCase()){
        clearActive();
        el.classList.add('active');
        showTag(el, false);
        quizBar.textContent = `✅ Correct! That's the ${currentTarget}!`;
        speak(`Awesome! You found the ${currentTarget}!`);
        confettiBurst();
        setTimeout(nextQuizQuestion, 1400);
      } else {
        el.classList.add('wrong-tap');
        showTag(el, true);
        quizBar.textContent = `❌ That's the ${partName}. Try finding the ${currentTarget}!`;
        speak(`That is the ${partName}. Can you find the ${currentTarget}?`);
        setTimeout(() => el.classList.remove('wrong-tap'), 800);
      }
      return;
    }

    clearActive();
    el.classList.add('active');
    showTag(el, false);
    nameText.textContent = partName;
    funFact.textContent = fact || '—';
    factsGrid.style.display = 'flex';
    banner.classList.remove('pop');
    void banner.offsetWidth;
    banner.classList.add('pop');
    speak(partName + '. ' + fact);
  }

  function nextQuizQuestion(){
    clearActive();
    const rand = availableParts[Math.floor(Math.random() * availableParts.length)];
    currentTarget = rand;
    quizBar.textContent = `Find the: ${currentTarget}! 🎯`;
    speak(`Can you find the ${currentTarget}?`);
  }

  function setMode(newMode){
    mode = newMode;
    clearActive();
    document.getElementById('modeExploreBody').classList.toggle('active', mode === 'explore');
    document.getElementById('modeQuizBody').classList.toggle('active', mode === 'quiz');

    if(mode === 'explore'){
      quizBar.style.display = 'none';
      nameText.textContent = 'Tap any body part to begin!';
      factsGrid.style.display = 'none';
    } else {
      factsGrid.style.display = 'none';
      quizBar.style.display = 'block';
      nameText.textContent = 'Quiz Time!';
      nextQuizQuestion();
    }
  }

  hotspots.forEach(spot => {
    spot.addEventListener('click', e => { e.preventDefault(); onTap(spot); });
    spot.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){ e.preventDefault(); onTap(spot); } });
  });

  document.getElementById('modeExploreBody')?.addEventListener('click', () => setMode('explore'));
  document.getElementById('modeQuizBody')?.addEventListener('click', () => setMode('quiz'));
  document.getElementById('resetBtnBody')?.addEventListener('click', () => setMode('explore'));
  
  document.getElementById('speakBtnBody')?.addEventListener('click', () => {
    if(mode === 'quiz' && currentTarget){
      speak(`Can you find the ${currentTarget}?`);
    } else {
      const t = nameText.textContent;
      const f = funFact.textContent;
      if(t && !t.includes('Tap any')) speak(t + '. ' + f);
    }
  });

  document.getElementById('toggleHintsBody')?.addEventListener('click', (e) => {
    hintsVisible = !hintsVisible;
    card.classList.toggle('show-hints', hintsVisible);
    e.target.textContent = hintsVisible ? '🟡 Hide Target Spots' : '💡 Show Target Spots';
  });
}

function buildSolarSystemModule() {
  const planets = {
    sun: {
      icon: "☀️",
      name: "The Sun",
      size: "About 109 Earths wide",
      moons: "8 planets orbit it",
      position: "Centre of our Solar System",
      intro: "The Sun is a star. Its light and heat make life possible on Earth.",
      trait: "Fun fact: The Sun holds more than 99% of all the mass in our Solar System."
    },
    mercury: {
      icon: "🩶",
      name: "Mercury",
      size: "0.38 times Earth’s width",
      moons: "0 moons",
      position: "1st from the Sun",
      intro: "Mercury is the smallest and fastest planet.",
      trait: "Fun fact: One year on Mercury lasts only 88 Earth days."
    },
    venus: {
      icon: "🟡",
      name: "Venus",
      size: "0.95 times Earth’s width",
      moons: "0 moons",
      position: "2nd from the Sun",
      intro: "Venus is almost Earth-sized, but it is extremely hot.",
      trait: "Fun fact: Venus spins in the opposite direction from most planets."
    },
    earth: {
      icon: "🌍",
      name: "Earth",
      size: "12,742 km wide",
      moons: "1 moon",
      position: "3rd from the Sun",
      intro: "Earth is our home planet and the only known world with life.",
      trait: "Fun fact: About 71% of Earth’s surface is covered by water."
    },
    mars: {
      icon: "🔴",
      name: "Mars",
      size: "About half Earth’s width",
      moons: "2 moons",
      position: "4th from the Sun",
      intro: "Mars is called the Red Planet because rusty iron minerals colour its soil.",
      trait: "Fun fact: Olympus Mons on Mars is the largest volcano in the Solar System."
    },
    jupiter: {
      icon: "🟠",
      name: "Jupiter",
      size: "About 11 times Earth’s width",
      moons: "95 known moons",
      position: "5th from the Sun",
      intro: "Jupiter is the largest planet in the Solar System.",
      trait: "Fun fact: Jupiter’s Great Red Spot is a huge storm larger than Earth."
    },
    saturn: {
      icon: "🪐",
      name: "Saturn",
      size: "About 9 times Earth’s width",
      moons: "146 known moons",
      position: "6th from the Sun",
      intro: "Saturn is famous for its wide, bright rings.",
      trait: "Fun fact: Saturn’s rings are mostly made of chunks of ice, dust, and rock."
    },
    uranus: {
      icon: "🔵",
      name: "Uranus",
      size: "About 4 times Earth’s width",
      moons: "28 known moons",
      position: "7th from the Sun",
      intro: "Uranus is a pale blue-green ice giant.",
      trait: "Fun fact: Uranus rotates on its side, like a rolling ball."
    },
    neptune: {
      icon: "🔷",
      name: "Neptune",
      size: "About 4 times Earth’s width",
      moons: "16 known moons",
      position: "8th from the Sun",
      intro: "Neptune is the farthest major planet from the Sun.",
      trait: "Fun fact: Neptune has some of the fastest winds in the Solar System."
    }
  };

  const page = document.getElementById("pageSolarEl");
  const card = document.getElementById("solarFactCard");
  const icon = card?.querySelector(".solarFactIcon");
  const name = document.getElementById("solarName");
  const intro = document.getElementById("solarIntro");
  const facts = document.getElementById("solarFacts");
  const size = document.getElementById("solarSize");
  const moons = document.getElementById("solarMoons");
  const position = document.getElementById("solarPosition");
  const trait = document.getElementById("solarTrait");
  const speakButton = document.getElementById("solarSpeakBtn");

  if (!page || !card) return;

  let selectedPlanet = null;

  function selectPlanet(key) {
    const planet = planets[key];
    if (!planet) return;

    selectedPlanet = planet;

    document.querySelectorAll(".page-solar .planetButton").forEach(button => {
      button.classList.toggle("active", button.dataset.planet === key);
    });

    icon.textContent = planet.icon;
    name.textContent = planet.name;
    intro.textContent = planet.intro;
    size.textContent = planet.size;
    moons.textContent = planet.moons;
    position.textContent = planet.position;
    trait.textContent = planet.trait;

    facts.hidden = false;
    trait.hidden = false;
    speakButton.hidden = false;
  }

  page.querySelectorAll(".planetButton").forEach(button => {
    button.addEventListener("click", () => selectPlanet(button.dataset.planet));
  });

  speakButton.addEventListener("click", () => {
    if (!selectedPlanet) return;

    speak(
      `${selectedPlanet.name}. ${selectedPlanet.intro} ` +
      `Size: ${selectedPlanet.size}. ` +
      `Moons: ${selectedPlanet.moons}. ` +
      `${selectedPlanet.trait}`
    );
  });

function makePlanetsDraggable() {
  const map = page.querySelector(".solarSystemMap");
  if (!map) return;

  let drag = null;
  let dragged = false;

  function movePlanet(button, clientX, clientY) {
    const orbit = button.closest(".orbit");
    if (!orbit) return;

    const orbitBox = orbit.getBoundingClientRect();
    const centreX = orbitBox.left + orbitBox.width / 2;
    const centreY = orbitBox.top + orbitBox.height / 2;

    const dx = clientX - centreX;
    const dy = clientY - centreY;

    const angle = Math.atan2(dy, dx);
    const radiusX = orbitBox.width / 2;
    const radiusY = orbitBox.height / 2;

    const x = radiusX + Math.cos(angle) * radiusX;
    const y = radiusY + Math.sin(angle) * radiusY;

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.style.right = "auto";
    button.style.bottom = "auto";
    button.style.transform = "translate(-50%, -50%)";
  }

  map.querySelectorAll(".orbit .planetButton").forEach((button) => {
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();

      drag = {
        button,
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY
      };

      dragged = false;
      button.setPointerCapture?.(event.pointerId);
      button.classList.add("dragging");
    });

    button.addEventListener("pointermove", (event) => {
      if (!drag || drag.pointerId !== event.pointerId) return;

      const distance = Math.hypot(
        event.clientX - drag.startX,
        event.clientY - drag.startY
      );

      if (distance > 6) dragged = true;

      if (dragged) {
        event.preventDefault();
        movePlanet(drag.button, event.clientX, event.clientY);
      }
    });

    function endDrag(event) {
      if (!drag || drag.pointerId !== event.pointerId) return;

      drag.button.classList.remove("dragging");
      drag.button.releasePointerCapture?.(event.pointerId);
      drag = null;
    }

    button.addEventListener("pointerup", endDrag);
    button.addEventListener("pointercancel", endDrag);

    button.addEventListener("click", (event) => {
      if (dragged) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }, true);
  });
}

makePlanetsDraggable();

  selectPlanet("earth");
}

/* ===================== CLOCK GRAPHIC RENDERER ===================== */
function setupClockSVG(svgId, ticksId, outerMinId, hoursId){
  const cx = 160, cy = 160;
  const tickGroup = document.getElementById(ticksId);
  const minGroup = document.getElementById(outerMinId);
  const hourGroup = document.getElementById(hoursId);

  if(!tickGroup || !minGroup || !hourGroup) return;

  tickGroup.innerHTML = '';
  minGroup.innerHTML = '';
  hourGroup.innerHTML = '';

  for(let i = 0; i < 60; i++){
    const angle = (i * 6) * (Math.PI / 180);
    const isHour = i % 5 === 0;
    const rInner = isHour ? 104 : 110;
    const rOuter = 118;

    const x1 = cx + rInner * Math.sin(angle);
    const y1 = cy - rInner * Math.cos(angle);
    const x2 = cx + rOuter * Math.sin(angle);
    const y2 = cy - rOuter * Math.cos(angle);

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('class', 'clock-tick');
    if(!isHour){
      line.style.strokeWidth = '1.5';
      line.style.opacity = '0.5';
    }
    tickGroup.appendChild(line);
  }

  for(let m = 5; m <= 60; m += 5){
    const angle = (m * 6) * (Math.PI / 180);
    const rText = 134;
    const x = cx + rText * Math.sin(angle);
    const y = cy - rText * Math.cos(angle);

    const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    txt.setAttribute('x', x);
    txt.setAttribute('y', y);
    txt.setAttribute('class', 'clock-min-text');
    txt.textContent = m === 60 ? '00' : m.toString();
    minGroup.appendChild(txt);
  }

  for(let h = 1; h <= 12; h++){
    const angle = (h * 30) * (Math.PI / 180);
    const rText = 84;
    const x = cx + rText * Math.sin(angle);
    const y = cy - rText * Math.cos(angle);

    const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    txt.setAttribute('x', x);
    txt.setAttribute('y', y);
    txt.setAttribute('class', 'clock-hour-text');
    txt.textContent = h.toString();
    hourGroup.appendChild(txt);
  }
}

function updateClockHands(hourHandId, minuteHandId, hours, minutes){
  const cx = 160, cy = 160;
  const hourAngle = ((hours % 12) * 30 + minutes * 0.5) * (Math.PI / 180);
  const minAngle = (minutes * 6) * (Math.PI / 180);

  const hourHand = document.getElementById(hourHandId);
  const minHand = document.getElementById(minuteHandId);

  if(hourHand){
    const x2 = cx + 55 * Math.sin(hourAngle);
    const y2 = cy - 55 * Math.cos(hourAngle);
    hourHand.setAttribute('x2', x2);
    hourHand.setAttribute('y2', y2);
  }

  if(minHand){
    const x2 = cx + 88 * Math.sin(minAngle);
    const y2 = cy - 88 * Math.cos(minAngle);
    minHand.setAttribute('x2', x2);
    minHand.setAttribute('y2', y2);
  }
}

function extractTimeFromText(text){
  const match = text.match(/\b(1[0-2]|0?[1-9]):([0-5][0-9])\b/);
  if(match){
    return { h: parseInt(match[1], 10), m: parseInt(match[2], 10) };
  }
  const oclockMatch = text.match(/\b(1[0-2]|0?[1-9])\s*o'?clock\b/i);
  if(oclockMatch){
    return { h: parseInt(oclockMatch[1], 10), m: 0 };
  }
  return null;
}

/* ===================== QUIZ MODULE (Single & 2-Player Arcade) ===================== */
function buildQuizModule(){
  setupClockSVG('clockSvg', 'clockTicks', 'clockOuterMinutes', 'clockHourNumbers');
  setupClockSVG('arcadeClockSvg', 'arcadeClockTicks', 'arcadeClockOuterMinutes', 'arcadeClockHourNumbers');

  let currentTopic = '';
  let singleQuestions = [];
  let singleIndex = 0;

  let arcadeQuestions = [];
  let arcadeIndex = 0;

  const mainPicker = document.getElementById('quizMainModePicker');
  const singleContainer = document.getElementById('quizSingleContainer');
  const arcadeContainer = document.getElementById('arcadeContainer');

  const quizSingleTopicPicker = document.getElementById('quizTopicPicker');
  const quizWrap = document.getElementById('quizWrap');
  const quizResultScreen = document.getElementById('quizResultScreen');
  const clockVisualWrap = document.getElementById('clockVisualWrap');

  const arcadeTopicPicker = document.getElementById('arcadeTopicPicker');
  const arcadeWrap = document.getElementById('arcadeWrap');
  const arcadeResultWrap = document.getElementById('arcadeResultWrap');
  const arcadeClockVisualWrap = document.getElementById('arcadeClockVisualWrap');

  document.getElementById('pickSingleMode')?.addEventListener('click', () => {
    mainPicker.style.display = 'none';
    singleContainer.style.display = 'flex';
  });

  document.getElementById('pickArcadeMode')?.addEventListener('click', () => {
    mainPicker.style.display = 'none';
    arcadeContainer.style.display = 'flex';
  });

  function prepareQuestionSet(topic, count = 10) {
    const source = QUIZ_DATA[topic] || [];
    if (!source.length) return [];

    let pool = source.slice();
    const selected = [];
    const totalToPick = Math.min(count, pool.length);
    for (let i = 0; i < totalToPick; i++) {
      const randomIndex = Math.floor(Math.random() * pool.length);
      const chosen = pool.splice(randomIndex, 1)[0];
      selected.push(chosen);
    }
    return selected;
  }

  /* Single Player */
  document.querySelectorAll('#quizTopicPicker .topicBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#quizTopicPicker .topicBtn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTopic = btn.dataset.topic;
      startSingleQuiz(currentTopic);
    });
  });

  function startSingleQuiz(topic){
    const selected = prepareQuestionSet(topic, 10);
    if(!selected.length){
      alert('No questions found for this topic!');
      return;
    }

    singleQuestions = selected.map(q => ({
      ...q,
      userAnswer: null
    }));

    singleIndex = 0;
    quizSingleTopicPicker.style.display = 'none';
    quizResultScreen.style.display = 'none';
    quizWrap.style.display = 'flex';
    renderSingleQuestion();
  }

  function renderSingleQuestion(){
    const q = singleQuestions[singleIndex];
    const isLastQuestion = singleIndex === singleQuestions.length - 1;

    document.getElementById('quizProgress').textContent = `Question ${singleIndex + 1} of ${singleQuestions.length}`;
    document.getElementById('quizQuestionText').textContent = q.q;

    const timeData = extractTimeFromText(q.correctText + ' ' + q.q);
    if(currentTopic === 'time' && timeData){
      clockVisualWrap.style.display = 'flex';
      updateClockHands('hourHand', 'minuteHand', timeData.h, timeData.m);
    } else {
      clockVisualWrap.style.display = 'none';
    }

    const optsContainer = document.getElementById('quizOptions');
    optsContainer.innerHTML = '';
    const fb = document.getElementById('quizFeedback');
    fb.textContent = '';

    const isAlreadyAnswered = q.userAnswer !== null;

    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quizOptBtn';
      btn.textContent = opt;

      const isThisSelected = q.userAnswer === opt;
      const isCorrect = String(opt).trim().toLowerCase() === String(q.correctText).trim().toLowerCase();

      if(isAlreadyAnswered){
        btn.disabled = true;
        if(isThisSelected){
          btn.classList.add(isCorrect ? 'correct' : 'wrong');
        } else if(isCorrect){
          btn.classList.add('correct');
        }
      } else {
        btn.addEventListener('click', () => handleSingleAnswer(opt, q.correctText, btn));
      }

      optsContainer.appendChild(btn);
    });

    if(isAlreadyAnswered){
      const isCorrect = String(q.userAnswer).trim().toLowerCase() === String(q.correctText).trim().toLowerCase();
      fb.textContent = isCorrect ? '🎉 Correct!' : `❌ Oops! The correct answer is: ${q.correctText}`;
      fb.style.color = isCorrect ? '#27ae60' : '#e74c3c';
    }

    const prevBtn = document.getElementById('quizPrevBtn');
    const nextBtn = document.getElementById('quizNextBtn');

    if(prevBtn) prevBtn.disabled = singleIndex === 0;
    if(nextBtn){
      nextBtn.disabled = false;
      nextBtn.textContent = isLastQuestion ? 'Submit 🏁' : (isAlreadyAnswered ? 'Next ➡️' : 'Skip / Next ➡️');
    }
  }

  function handleSingleAnswer(selected, correct, selectedBtn){
    const q = singleQuestions[singleIndex];
    q.userAnswer = selected;

    const fb = document.getElementById('quizFeedback');
    document.querySelectorAll('#quizOptions .quizOptBtn').forEach(b => b.disabled = true);

    const isCorrect = String(selected).trim().toLowerCase() === String(correct).trim().toLowerCase();

    if(isCorrect){
      selectedBtn.classList.add('correct');
      fb.textContent = '🎉 Correct!';
      fb.style.color = '#27ae60';
      confettiBurst();
    } else {
      selectedBtn.classList.add('wrong');
      document.querySelectorAll('#quizOptions .quizOptBtn').forEach(b => {
        if(b.textContent.trim().toLowerCase() === String(correct).trim().toLowerCase()){
          b.classList.add('correct');
        }
      });
      fb.textContent = `❌ Oops! The correct answer is: ${correct}`;
      fb.style.color = '#e74c3c';
    }

    if(singleIndex === singleQuestions.length - 1){
      setTimeout(() => { showSingleResults(); }, 1200);
    } else {
      const nextBtn = document.getElementById('quizNextBtn');
      if(nextBtn) nextBtn.textContent = 'Next ➡️';
    }
  }

  document.getElementById('quizNextBtn')?.addEventListener('click', () => {
    if(singleIndex < singleQuestions.length - 1){
      singleIndex++;
      renderSingleQuestion();
    } else {
      showSingleResults();
    }
  });

  document.getElementById('quizPrevBtn')?.addEventListener('click', () => {
    if(singleIndex > 0){
      singleIndex--;
      renderSingleQuestion();
    }
  });

  function showSingleResults(){
    quizWrap.style.display = 'none';
    quizResultScreen.style.display = 'flex';

    const finalScore = singleQuestions.filter(q => 
      q.userAnswer !== null && 
      String(q.userAnswer).trim().toLowerCase() === String(q.correctText).trim().toLowerCase()
    ).length;

    document.getElementById('quizFinalScore').textContent = `Score: ${finalScore} / ${singleQuestions.length}`;
    document.getElementById('quizFinalMessage').textContent =
      finalScore === singleQuestions.length ? '🌟 Outstanding work!' : '👍 Great effort! Play again to improve!';
  }

  document.getElementById('quizPlayAgainBtn')?.addEventListener('click', () => {
    startSingleQuiz(currentTopic);
  });

  window.singleQuizReset = () => {
    quizWrap.style.display = 'none';
    quizResultScreen.style.display = 'none';
    quizSingleTopicPicker.style.display = 'flex';
    document.querySelectorAll('#quizTopicPicker .topicBtn').forEach(b => b.classList.remove('active'));
  };

  /* Arcade 2-Player */
  document.querySelectorAll('#arcadeTopicPicker .topicBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#arcadeTopicPicker .topicBtn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTopic = btn.dataset.topic;
      startArcadeQuiz(currentTopic);
    });
  });

  function startArcadeQuiz(topic){
    const selected = prepareQuestionSet(topic, 10);
    if(!selected.length){
      alert('No questions found for this topic!');
      return;
    }

    arcadeQuestions = selected.map(q => ({
      ...q,
      answerP1: null,
      answerP2: null
    }));

    arcadeIndex = 0;
    arcadeTopicPicker.style.display = 'none';
    arcadeResultWrap.style.display = 'none';
    arcadeWrap.style.display = 'flex';
    renderArcadeQuestion();
  }

  function getArcadeScores(){
    let p1 = 0, p2 = 0;
    arcadeQuestions.forEach(q => {
      const correct = String(q.correctText).trim().toLowerCase();
      if(q.answerP1 !== null && String(q.answerP1).trim().toLowerCase() === correct) p1++;
      if(q.answerP2 !== null && String(q.answerP2).trim().toLowerCase() === correct) p2++;
    });
    return { p1, p2 };
  }

  function renderArcadeQuestion(){
    const q = arcadeQuestions[arcadeIndex];
    const scores = getArcadeScores();

    document.getElementById('arcadeScoreP1').textContent = `🔵 P1: ${scores.p1}`;
    document.getElementById('arcadeScoreP2').textContent = `🔴 P2: ${scores.p2}`;
    document.getElementById('arcadeProgress').textContent = `Question ${arcadeIndex + 1} of ${arcadeQuestions.length}`;
    document.getElementById('arcadeQuestionText').textContent = q.q;

    const fb1 = document.getElementById('arcadeFeedbackP1');
    const fb2 = document.getElementById('arcadeFeedbackP2');
    fb1.textContent = '';
    fb2.textContent = '';

    const timeData = extractTimeFromText(q.correctText + ' ' + q.q);
    if(currentTopic === 'time' && timeData){
      arcadeClockVisualWrap.style.display = 'flex';
      updateClockHands('arcadeHourHand', 'arcadeMinuteHand', timeData.h, timeData.m);
    } else {
      arcadeClockVisualWrap.style.display = 'none';
    }

    renderArcadeOptions('arcadeOptionsP1', q, 1);
    renderArcadeOptions('arcadeOptionsP2', q, 2);

    const bothDecided = q.answerP1 !== null && q.answerP2 !== null;

    if(bothDecided){
      revealBothAnswers();
    } else {
      if(q.answerP1 !== null){
        fb1.textContent = '🔒 Locked! Waiting for P2...';
        fb1.style.color = '#1d6fa5';
      }
      if(q.answerP2 !== null){
        fb2.textContent = '🔒 Locked! Waiting for P1...';
        fb2.style.color = '#d1402a';
      }
    }

    const prevBtn = document.getElementById('arcadePrevBtn');
    const nextBtn = document.getElementById('arcadeNextBtn');

    if(prevBtn) prevBtn.disabled = arcadeIndex === 0;
    if(nextBtn){
      nextBtn.disabled = false;
      nextBtn.textContent = arcadeIndex === arcadeQuestions.length - 1 ? 'Finish 🏁' : 'Next Question ➡️';
    }
  }

  function renderArcadeOptions(containerId, q, playerNum){
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    const selectedAns = playerNum === 1 ? q.answerP1 : q.answerP2;

    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quizOptBtn arcadeOptBtn';
      btn.textContent = opt;

      if(selectedAns !== null){
        btn.disabled = true;
        if(opt === selectedAns){
          btn.classList.add(playerNum === 1 ? 'pending-p1' : 'pending-p2');
        }
      } else {
        btn.addEventListener('click', () => handleArcadeAnswer(playerNum, opt, btn));
      }

      container.appendChild(btn);
    });
  }

  function handleArcadeAnswer(playerNum, selected, selectedBtn){
    const q = arcadeQuestions[arcadeIndex];
    if(playerNum === 1) q.answerP1 = selected;
    if(playerNum === 2) q.answerP2 = selected;

    const panelBtns = document.querySelectorAll(`#arcadeOptionsP${playerNum} .arcadeOptBtn`);
    panelBtns.forEach(b => b.disabled = true);
    selectedBtn.classList.add(playerNum === 1 ? 'pending-p1' : 'pending-p2');

    const fb = document.getElementById(`arcadeFeedbackP${playerNum}`);

    if(q.answerP1 === null || q.answerP2 === null){
      const otherP = playerNum === 1 ? 'Player 2' : 'Player 1';
      fb.textContent = `🔒 Locked! Waiting for ${otherP}...`;
      fb.style.color = playerNum === 1 ? '#1d6fa5' : '#d1402a';
      return;
    }

    revealBothAnswers();
    confettiBurst();
  }

  function revealBothAnswers(){
    const q = arcadeQuestions[arcadeIndex];
    const correct = String(q.correctText).trim().toLowerCase();

    const fb1 = document.getElementById('arcadeFeedbackP1');
    if(q.answerP1 === '__SKIPPED__'){
      fb1.textContent = `⏭️ Skipped (Wrong)! Ans: ${q.correctText}`;
      fb1.style.color = '#e74c3c';
    } else {
      const p1Correct = String(q.answerP1).trim().toLowerCase() === correct;
      fb1.textContent = p1Correct ? '🎉 Correct!' : `❌ Wrong! Ans: ${q.correctText}`;
      fb1.style.color = p1Correct ? '#27ae60' : '#e74c3c';
    }

    document.querySelectorAll('#arcadeOptionsP1 .arcadeOptBtn').forEach(b => {
      b.classList.remove('pending-p1');
      if(b.textContent.trim().toLowerCase() === String(q.answerP1).trim().toLowerCase()){
        const p1Correct = String(q.answerP1).trim().toLowerCase() === correct;
        b.classList.add(p1Correct ? 'correct' : 'wrong');
      }
      if(b.textContent.trim().toLowerCase() === correct){
        b.classList.add('correct');
      }
    });

    const fb2 = document.getElementById('arcadeFeedbackP2');
    if(q.answerP2 === '__SKIPPED__'){
      fb2.textContent = `⏭️ Skipped (Wrong)! Ans: ${q.correctText}`;
      fb2.style.color = '#e74c3c';
    } else {
      const p2Correct = String(q.answerP2).trim().toLowerCase() === correct;
      fb2.textContent = p2Correct ? '🎉 Correct!' : `❌ Wrong! Ans: ${q.correctText}`;
      fb2.style.color = p2Correct ? '#27ae60' : '#e74c3c';
    }

    document.querySelectorAll('#arcadeOptionsP2 .arcadeOptBtn').forEach(b => {
      b.classList.remove('pending-p2');
      if(b.textContent.trim().toLowerCase() === String(q.answerP2).trim().toLowerCase()){
        const p2Correct = String(q.answerP2).trim().toLowerCase() === correct;
        b.classList.add(p2Correct ? 'correct' : 'wrong');
      }
      if(b.textContent.trim().toLowerCase() === correct){
        b.classList.add('correct');
      }
    });

    const scores = getArcadeScores();
    document.getElementById('arcadeScoreP1').textContent = `🔵 P1: ${scores.p1}`;
    document.getElementById('arcadeScoreP2').textContent = `🔴 P2: ${scores.p2}`;
  }

  document.getElementById('arcadeNextBtn')?.addEventListener('click', () => {
    const q = arcadeQuestions[arcadeIndex];
    if(q.answerP1 === null) q.answerP1 = '__SKIPPED__';
    if(q.answerP2 === null) q.answerP2 = '__SKIPPED__';

    if(arcadeIndex < arcadeQuestions.length - 1){
      arcadeIndex++;
      renderArcadeQuestion();
    } else {
      showArcadeResults();
    }
  });

  document.getElementById('arcadePrevBtn')?.addEventListener('click', () => {
    if(arcadeIndex > 0){
      arcadeIndex--;
      renderArcadeQuestion();
    }
  });

  function showArcadeResults(){
    arcadeWrap.style.display = 'none';
    arcadeResultWrap.style.display = 'flex';

    const scores = getArcadeScores();
    let winnerMsg = "It's a Tie! 🤝";
    if(scores.p1 > scores.p2) winnerMsg = '🎉 Player 1 Wins! 🔵';
    if(scores.p2 > scores.p1) winnerMsg = '🎉 Player 2 Wins! 🔴';

    document.getElementById('arcadeFinalWinner').textContent = winnerMsg;
    document.getElementById('arcadeFinalScores').textContent = `P1 Score: ${scores.p1} / ${arcadeQuestions.length}  |  P2 Score: ${scores.p2} / ${arcadeQuestions.length}`;
  }

  document.getElementById('arcadePlayAgainBtn')?.addEventListener('click', () => {
    startArcadeQuiz(currentTopic);
  });

  window.arcadeQuizReset = () => {
    arcadeWrap.style.display = 'none';
    arcadeResultWrap.style.display = 'none';
    arcadeTopicPicker.style.display = 'flex';
    document.querySelectorAll('#arcadeTopicPicker .topicBtn').forEach(b => b.classList.remove('active'));
  };
}


/* ===================== APP STARTUP ===================== */
async function startApp(){
  prepareLearningScreens();
  try { buildIndiaModule(); } catch(e){ console.error('India map error:', e); }
  try { buildWorldModule(); } catch(e){ console.error('World map error:', e); }
  try { buildBodyModule(); } catch(e){ console.error('Body module error:', e); }
  try { buildSolarSystemModule(); } catch(e){ console.error('Solar System module error:', e); }

  try {
    await loadQuizDataFromExcel();
  } catch(e){
    console.warn('Excel load error:', e);
  }

  try {
    buildQuizModule();
  } catch(e){
    console.error('Quiz module error:', e);
  }
}

startApp();