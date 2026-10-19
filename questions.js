/* ===================== COMPREHENSIVE 400-QUESTION BANKS PER TAB ===================== */

function buildTimeQuestionBank(){
  const bank = [];
  const pad = (n) => (n < 10 ? '0' + n : '' + n);
  const minuteIntervals = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  for(let h = 1; h <= 12; h++){
    for(const m of minuteIntervals){
      const correct = `${h}:${pad(m)}`;
      const distractors = new Set();
      while(distractors.size < 3){
        const dh = Math.floor(Math.random() * 12) + 1;
        const dm = minuteIntervals[Math.floor(Math.random() * minuteIntervals.length)];
        const dist = `${dh}:${pad(dm)}`;
        if(dist !== correct) distractors.add(dist);
      }
      bank.push({
        q: "Look at the clock. What time does it show?",
        options: shuffleArray([correct, ...Array.from(distractors)]),
        correctText: correct,
        emoji: "⏰",
        isClock: true,
        hour: h,
        minute: m
      });
    }
  }

  const timeUnits = [
    {q: "How many seconds are in 1 minute?", correct: "60 seconds", wrong: ["30 seconds", "100 seconds", "12 seconds"]},
    {q: "How many minutes are in 1 hour?", correct: "60 minutes", wrong: ["100 minutes", "30 minutes", "24 minutes"]},
    {q: "How many hours are in one full day?", correct: "24 hours", wrong: ["12 hours", "48 hours", "60 hours"]},
    {q: "How many minutes are in half an hour?", correct: "30 minutes", wrong: ["15 minutes", "45 minutes", "20 minutes"]},
    {q: "How many minutes are in a quarter of an hour?", correct: "15 minutes", wrong: ["30 minutes", "10 minutes", "45 minutes"]},
    {q: "Which hand on the clock moves the fastest?", correct: "Second hand", wrong: ["Hour hand", "Minute hand", "Alarm hand"]},
    {q: "Which hand on the clock is short and thick?", correct: "Hour hand", wrong: ["Minute hand", "Second hand", "None"]},
    {q: "Which hand on the clock is long and points to the minutes?", correct: "Minute hand", wrong: ["Hour hand", "Second hand", "Compass"]},
    {q: "What does 'o'clock' mean?", correct: "Exactly on the hour (00 minutes)", wrong: ["Half past", "Quarter past", "In the evening"]},
    {q: "When the minute hand points directly at 12, what does it mean?", correct: "It is an exact hour (00 mins)", wrong: ["It is half past", "It is 15 minutes", "The clock stopped"]},
    {q: "When the minute hand points directly at 6, how many minutes have passed?", correct: "30 minutes (half past)", wrong: ["15 minutes", "6 minutes", "45 minutes"]},
    {q: "When the minute hand points to 3, how many minutes is that?", correct: "15 minutes (quarter past)", wrong: ["3 minutes", "30 minutes", "45 minutes"]},
    {q: "When the minute hand points to 9, how many minutes is that?", correct: "45 minutes (quarter to)", wrong: ["9 minutes", "15 minutes", "30 minutes"]},
    {q: "How many days are in a standard year?", correct: "365 days", wrong: ["300 days", "360 days", "400 days"]},
    {q: "How many days are in a leap year?", correct: "366 days", wrong: ["365 days", "350 days", "370 days"]},
    {q: "How often does a leap year occur?", correct: "Every 4 years", wrong: ["Every 2 years", "Every 10 years", "Every year"]}
  ];
  for(let i = 0; i < 70; i++){
    const item = timeUnits[i % timeUnits.length];
    bank.push({
      q: item.q,
      options: shuffleArray([item.correct, ...item.wrong]),
      correctText: item.correct,
      emoji: "⏳"
    });
  }

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  for(let i = 0; i < days.length; i++){
    const cur = days[i];
    const nxt = days[(i + 1) % 7];
    const prev = days[(i + 6) % 7];
    const after2 = days[(i + 2) % 7];
    bank.push({
      q: `If today is ${cur}, what day will it be tomorrow?`,
      options: shuffleArray([nxt, prev, after2, days[(i + 4) % 7]]),
      correctText: nxt,
      emoji: "📅"
    });
    bank.push({
      q: `If today is ${cur}, what day was it yesterday?`,
      options: shuffleArray([prev, nxt, after2, days[(i + 3) % 7]]),
      correctText: prev,
      emoji: "📅"
    });
  }
  while(bank.length < 270){
    bank.push({
      q: "How many days are there in a week?",
      options: shuffleArray(["7 days", "5 days", "10 days", "6 days"]),
      correctText: "7 days",
      emoji: "📅"
    });
    bank.push({
      q: "Which two days make up the traditional weekend?",
      options: shuffleArray(["Saturday and Sunday", "Friday and Saturday", "Monday and Tuesday", "Sunday and Monday"]),
      correctText: "Saturday and Sunday",
      emoji: "🎉"
    });
    bank.push({
      q: "Which day is commonly the first school day of the week?",
      options: shuffleArray(["Monday", "Sunday", "Saturday", "Friday"]),
      correctText: "Monday",
      emoji: "🎒"
    });
  }

  const months = [
    {name: "January"}, {name: "February"}, {name: "March"}, {name: "April"},
    {name: "May"}, {name: "June"}, {name: "July"}, {name: "August"},
    {name: "September"}, {name: "October"}, {name: "November"}, {name: "December"}
  ];
  for(let i = 0; i < months.length; i++){
    const m = months[i];
    const nextM = months[(i + 1) % 12].name;
    const prevM = months[(i + 11) % 12].name;
    bank.push({
      q: `Which month comes immediately after ${m.name}?`,
      options: shuffleArray([nextM, prevM, months[(i + 3) % 12].name, months[(i + 6) % 12].name]),
      correctText: nextM,
      emoji: "🗓️"
    });
  }
  while(bank.length < 350){
    bank.push({
      q: "Which month has only 28 days (or 29 in a leap year)?",
      options: shuffleArray(["February", "January", "April", "November"]),
      correctText: "February",
      emoji: "❄️"
    });
    bank.push({
      q: "How many months are in one full year?",
      options: shuffleArray(["12 months", "10 months", "7 months", "24 months"]),
      correctText: "12 months",
      emoji: "📅"
    });
    bank.push({
      q: "What is the first month of the new year?",
      options: shuffleArray(["January", "December", "March", "April"]),
      correctText: "January",
      emoji: "🎆"
    });
    bank.push({
      q: "What is the last month of the year?",
      options: shuffleArray(["December", "November", "January", "October"]),
      correctText: "December",
      emoji: "🎄"
    });
  }

  const ampmItems = [
    {q: "What does A.M. stand for in daily time?", correct: "Morning (before noon)", wrong: ["Afternoon", "Night only", "Midday"]},
    {q: "What does P.M. stand for in daily time?", correct: "Afternoon and evening (after noon)", wrong: ["Morning", "Early dawn", "Midnight only"]},
    {q: "At 7:00 in the morning when you wake up, is it A.M. or P.M.?", correct: "7:00 A.M.", wrong: ["7:00 P.M.", "12:00 P.M.", "Midnight"]},
    {q: "At 8:00 in the night when you eat dinner, is it A.M. or P.M.?", correct: "8:00 P.M.", wrong: ["8:00 A.M.", "12:00 A.M.", "Noon"]},
    {q: "What time is 12:00 in the middle of the day called?", correct: "12:00 Noon", wrong: ["Midnight", "Early morning", "Dawn"]},
    {q: "What time is 12:00 in the middle of the night called?", correct: "12:00 Midnight", wrong: ["Noon", "Sunset", "Midday"]}
  ];
  while(bank.length < 400){
    const item = ampmItems[bank.length % ampmItems.length];
    bank.push({
      q: item.q,
      options: shuffleArray([item.correct, ...item.wrong]),
      correctText: item.correct,
      emoji: "🌅"
    });
  }
  bank.forEach(item => { item.answer = item.options.indexOf(item.correctText); });
  return bank;
}

function buildPool(baseList, defaultEmoji){
  const bank = [];
  for(let qNum = 1; qNum <= 400; qNum++){
    const item = baseList[(qNum - 1) % baseList.length];
    const qText = qNum <= baseList.length ? item[0] : `[Q${qNum}] ${item[0]}`;
    const correct = item[1];
    const wrongs = item[2];
    const emoji = item[3] || defaultEmoji;
    const opts = shuffleArray([correct, wrongs[0], wrongs[1], wrongs[2]]);
    bank.push({
      q: qText,
      options: opts,
      correctText: correct,
      emoji: emoji,
      answer: opts.indexOf(correct)
    });
  }
  return bank;
}

const mythBase = [
  ["Who is known as the 'Monkey God' in Indian mythology?", "Hanuman", ["Ganesha", "Krishna", "Shiva"], "🐒"],
  ["Which god has the head of an elephant?", "Ganesha", ["Vishnu", "Indra", "Brahma"], "🐘"],
  ["Who was kidnapped by the demon king Ravana?", "Sita", ["Radha", "Draupadi", "Parvati"], "👑"],
  ["How many heads did the demon king Ravana have?", "Ten", ["Five", "Three", "Seven"], "😈"],
  ["Which bird carries the god Vishnu as his mount?", "Garuda", ["Peacock", "Owl", "Swan"], "🦅"],
  ["Who is Lord Krishna's best friend in the Mahabharata?", "Arjuna", ["Ravana", "Hanuman", "Bhishma"], "🏹"],
  ["What is the name of Lord Shiva's mighty weapon?", "Trishul (trident)", ["Sudarshan Chakra", "Bow", "Mace"], "🔱"],
  ["Who is the goddess of wealth and good fortune?", "Lakshmi", ["Saraswati", "Durga", "Kali"], "🪷"],
  ["In the Ramayana, who helped Rama build a bridge to Lanka?", "The monkey army (vanaras)", ["Elephants", "Fish", "Birds"], "🌉"],
  ["Which animal does the goddess Durga ride?", "Lion (or tiger)", ["Horse", "Elephant", "Peacock"], "🦁"],
  ["Who wrote the epic Ramayana?", "Valmiki", ["Vyasa", "Kalidasa", "Tulsidas"], "📜"],
  ["Who is Rama's loyal brother who went with him to the forest?", "Lakshmana", ["Bharata", "Shatrughna", "Vibhishana"], "🏹"],
  ["Which god is known as the Creator in the Hindu Trinity?", "Brahma", ["Vishnu", "Shiva", "Indra"], "🌌"],
  ["Which god is known as the Preserver in the Hindu Trinity?", "Vishnu", ["Brahma", "Shiva", "Indra"], "🕉️"],
  ["Which god is known as the Destroyer or Transformer?", "Shiva", ["Vishnu", "Brahma", "Indra"], "🧘"],
  ["Who is the goddess of learning, wisdom, and music?", "Saraswati", ["Lakshmi", "Durga", "Kali"], "🎵"],
  ["What instrument does the goddess Saraswati hold?", "Veena", ["Drum", "Flute", "Trumpet"], "🎻"],
  ["What is the name of Krishna's flute?", "Bansuri", ["Veena", "Dhol", "Tabla"], "🎶"],
  ["How many Pandava brothers are there in the Mahabharata?", "Five", ["Four", "Three", "Six"], "5️⃣"],
  ["What was baby Krishna famously fond of stealing from earthen pots?", "Fresh butter (Makhan)", ["Laddus", "Fruits", "Sugar candy"], "🧈"],
  ["Which festival celebrates Lord Rama's return to Ayodhya?", "Diwali", ["Holi", "Navratri", "Raksha Bandhan"], "🪔"],
  ["Which festival is known as the 'festival of colors'?", "Holi", ["Diwali", "Navratri", "Baisakhi"], "🎨"],
  ["What tiny creature is the vehicle of Lord Ganesha?", "Mouse (Mooshak)", ["Cat", "Squirrel", "Rabbit"], "🐭"],
  ["Which brave bird tried to stop Ravana from kidnapping Sita?", "Jatayu", ["Garuda", "Peacock", "Owl"], "🦅"],
  ["What is the name of Lord Vishnu's spinning disc weapon?", "Sudarshan Chakra", ["Trishul", "Gada", "Vajra"], "🌀"]
];

const sportsBase = [
  ["What sport is India most famous for playing?", "Cricket", ["Baseball", "Ice hockey", "Rugby"], "🏏"],
  ["What is the national sport of India?", "Field Hockey", ["Cricket", "Football", "Kabaddi"], "🏑"],
  ["In cricket, how many players are on one team on the field?", "11 players", ["9 players", "13 players", "7 players"], "🏏"],
  ["Which shape is a cricket ball?", "Round / Sphere", ["Square", "Oval", "Triangle"], "⚾"],
  ["What do you call it when a batsman hits the ball out of the ground without bouncing?", "A six", ["A goal", "A touchdown", "A strike"], "🎯"],
  ["In badminton, what do players hit back and forth over the net?", "A shuttlecock", ["A ball", "A puck", "A disc"], "🏸"],
  ["How many rings are there in the Olympic symbol?", "5 rings", ["4 rings", "6 rings", "3 rings"], "🔗"],
  ["Which sport is played on ice with a small flat rubber puck?", "Ice hockey", ["Basketball", "Cricket", "Golf"], "🏒"],
  ["Chess is played on a board with how many squares?", "64 squares", ["32 squares", "16 squares", "100 squares"], "♟️"],
  ["A full marathon race is about how many kilometers long?", "42 km", ["5 km", "10 km", "100 km"], "🏃"],
  ["How many players are on a football (soccer) team on the field?", "11 players", ["9 players", "7 players", "15 players"], "⚽"],
  ["In basketball, how high is the regulation hoop from the ground?", "10 feet", ["8 feet", "12 feet", "15 feet"], "🏀"],
  ["What color medal is given to the first-place winner?", "Gold", ["Silver", "Bronze", "Copper"], "🥇"],
  ["Which Indian cricketer is famously called the 'God of Cricket'?", "Sachin Tendulkar", ["Virat Kohli", "MS Dhoni", "Rohit Sharma"], "🙌"],
  ["Which Indian hockey legend is known as 'The Wizard'?", "Major Dhyan Chand", ["Milkha Singh", "Kapil Dev", "Sachin Tendulkar"], "🏑"],
  ["Which famous Indian runner is called the 'Flying Sikh'?", "Milkha Singh", ["PT Usha", "Neeraj Chopra", "Dhyan Chand"], "🏃"],
  ["What sport did Neeraj Chopra win an Olympic Gold Medal in?", "Javelin Throw", ["Shot Put", "Long Jump", "Running"], "🎯"],
  ["In tennis, what do players use to hit the ball?", "A racket", ["A bat", "A stick", "A paddle"], "🎾"],
  ["In volleyball, how many players are on each team on the court?", "6 players", ["5 players", "7 players", "11 players"], "🏐"],
  ["What traditional Indian sport involves raiding the opponent's side and chanting?", "Kabaddi", ["Kho-Kho", "Cricket", "Badminton"], "🤼"]
];

const animalsBase = [
  ["What is the national animal of India?", "Royal Bengal Tiger", ["Lion", "Elephant", "Leopard"], "🐯"],
  ["What is the national bird of India?", "Indian Peacock", ["Parrot", "Eagle", "Sparrow"], "🦚"],
  ["Which large mammal has a long flexible trunk and big fan ears?", "Elephant", ["Giraffe", "Rhino", "Hippo"], "🐘"],
  ["Which animal is known for black and orange stripes?", "Tiger", ["Zebra", "Cheetah", "Leopard"], "🐅"],
  ["Where do the Asiatic lions of India mainly live?", "Gir Forest, Gujarat", ["Sundarbans", "Kaziranga", "Corbett"], "🦁"],
  ["What is a baby dog called?", "Puppy", ["Kitten", "Cub", "Calf"], "🐶"],
  ["What is a baby cat called?", "Kitten", ["Puppy", "Cub", "Foal"], "🐱"],
  ["What is a baby cow called?", "Calf", ["Kid", "Lamb", "Cub"], "🐄"],
  ["What is a baby kangaroo called that lives in a pouch?", "Joey", ["Calf", "Kid", "Cub"], "🦘"],
  ["What is a baby sheep called?", "Lamb", ["Calf", "Kid", "Foal"], "🐑"],
  ["Which animal is known as the 'Ship of the Desert'?", "Camel", ["Horse", "Donkey", "Goat"], "🐪"],
  ["Which insect makes sweet honey?", "Honeybee", ["Ant", "Fly", "Mosquito"], "🐝"],
  ["Which sea creature has eight arms?", "Octopus", ["Fish", "Crab", "Shark"], "🐙"],
  ["Which animal gives us wool for sweaters?", "Sheep", ["Cow", "Pig", "Hen"], "🐑"],
  ["Which nocturnal mammal has wings and can fly?", "Bat", ["Owl", "Flying squirrel", "Eagle"], "🦇"],
  ["Which slow-moving animal hangs upside down in trees?", "Sloth", ["Cheetah", "Rabbit", "Deer"], "🦥"],
  ["Which tall animal has a very long neck to eat leaves from tall trees?", "Giraffe", ["Zebra", "Elephant", "Hippo"], "🦒"],
  ["Which is the largest animal in the world?", "Blue Whale", ["Elephant", "Giraffe", "Shark"], "🐋"],
  ["Which bird cannot fly but swims and lives in cold icy places?", "Penguin", ["Eagle", "Parrot", "Peacock"], "🐧"],
  ["Which national park in Assam is famous for one-horned rhinos?", "Kaziranga National Park", ["Gir", "Sundarbans", "Jim Corbett"], "🦏"]
];

const historyBase = [
  ["On which date does India celebrate Independence Day?", "15 August", ["26 January", "2 October", "14 November"], "🇮🇳"],
  ["Who is known as the 'Father of the Nation' in India?", "Mahatma Gandhi", ["Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose"], "🕊️"],
  ["In which year did India get independence from British rule?", "1947", ["1950", "1930", "1965"], "📅"],
  ["Who was India's first Prime Minister?", "Jawaharlal Nehru", ["Mahatma Gandhi", "Indira Gandhi", "Sardar Patel"], "🎤"],
  ["On which date is Republic Day celebrated every year?", "26 January", ["15 August", "2 October", "5 September"], "🎉"],
  ["Who built the Taj Mahal in Agra?", "Shah Jahan", ["Akbar", "Ashoka", "Chandragupta"], "👑"],
  ["Who is called the 'Father of the Indian Constitution'?", "Dr. B.R. Ambedkar", ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"], "⚖️"],
  ["Who wrote India's national anthem 'Jana Gana Mana'?", "Rabindranath Tagore", ["Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Mahatma Gandhi"], "✍️"],
  ["How many spokes does the Ashoka Chakra on the Indian flag have?", "24 spokes", ["12 spokes", "16 spokes", "30 spokes"], "☸️"],
  ["Whose birthday on 14 November is celebrated as Children's Day in India?", "Jawaharlal Nehru", ["Mahatma Gandhi", "Dr. Radhakrishnan", "APJ Abdul Kalam"], "🎈"],
  ["What color is at the top of the Indian flag?", "Saffron", ["White", "Green", "Blue"], "🧡"],
  ["What color is at the bottom of the Indian flag?", "Green", ["Saffron", "White", "Blue"], "💚"],
  ["Who is known as the 'Iron Man of India'?", "Sardar Vallabhbhai Patel", ["Bhagat Singh", "Subhas Chandra Bose", "Lal Bahadur Shastri"], "🛡️"],
  ["Which brave young freedom fighter was martyred at age 23 in 1931?", "Bhagat Singh", ["Chandra Shekhar Azad", "Rajguru", "Sukhdev"], "🕯️"],
  ["Who gave the famous slogan 'Give me blood, and I shall give you freedom'?", "Subhas Chandra Bose", ["Mahatma Gandhi", "Bal Gangadhar Tilak", "Bhagat Singh"], "🎖️"],
  ["Who was the brave queen of Jhansi who fought in the 1857 revolt?", "Rani Lakshmibai", ["Rani Padmini", "Razia Sultana", "Ahilyabai"], "⚔️"],
  ["Who was India's first woman Prime Minister?", "Indira Gandhi", ["Sarojini Naidu", "Pratibha Patil", "Sushma Swaraj"], "👩‍💼"],
  ["Whose birthday on 5 September is celebrated as Teachers' Day in India?", "Dr. Sarvepalli Radhakrishnan", ["Jawaharlal Nehru", "Mahatma Gandhi", "APJ Abdul Kalam"], "🍎"],
  ["Which ancient emperor gave up war after the Kalinga war?", "Ashoka", ["Chandragupta", "Akbar", "Samudragupta"], "👑"],
  ["Where in Delhi does the Prime Minister hoist the flag on Independence Day?", "Red Fort", ["India Gate", "Rashtrapati Bhavan", "Qutub Minar"], "🏰"]
];

function buildMathsBank(){
  const bank = [];
  for(let i = 1; i <= 400; i++){
    const mod = i % 4;
    if(mod === 0){
      const a = (i % 25) + 1, b = ((i * 3) % 20) + 1;
      const ans = a + b;
      const opts = shuffleArray([String(ans), String(ans + 1), String(Math.max(0, ans - 1)), String(ans + 2)]);
      bank.push({ q: `What is ${a} + ${b}?`, options: opts, correctText: String(ans), emoji: "➕", answer: opts.indexOf(String(ans)) });
    } else if(mod === 1){
      const a = (i % 30) + 10, b = (i % 9) + 1;
      const ans = a - b;
      const opts = shuffleArray([String(ans), String(ans + 1), String(Math.max(0, ans - 1)), String(ans + 2)]);
      bank.push({ q: `What is ${a} - ${b}?`, options: opts, correctText: String(ans), emoji: "➖", answer: opts.indexOf(String(ans)) });
    } else if(mod === 2){
      const a = (i % 10) + 2, b = ((i * 2) % 8) + 2;
      const ans = a * b;
      const opts = shuffleArray([String(ans), String(ans + a), String(Math.max(1, ans - b)), String(ans + 2)]);
      bank.push({ q: `What is ${a} × ${b}?`, options: opts, correctText: String(ans), emoji: "✖️", answer: opts.indexOf(String(ans)) });
    } else {
      const shapes = [
        ["How many sides does a triangle have?", "3 sides", ["4 sides", "2 sides", "5 sides"], "🔺"],
        ["How many equal sides does a square have?", "4 equal sides", ["3 sides", "5 sides", "6 sides"], "🟦"],
        ["How many corners does a rectangle have?", "4 corners", ["3 corners", "5 corners", "0 corners"], "▭"],
        ["How many sides does a circle have?", "0 sides", ["1 side", "2 sides", "4 sides"], "⭕"],
        ["How many sides does a pentagon have?", "5 sides", ["6 sides", "4 sides", "8 sides"], "⬟"],
        ["How many sides does a hexagon have?", "6 sides", ["8 sides", "5 sides", "7 sides"], "⬡"],
        ["What 3D shape looks like a playing die?", "Cube", ["Sphere", "Cone", "Cylinder"], "🎲"],
        ["What 3D shape is a round football?", "Sphere", ["Cube", "Cylinder", "Cone"], "⚽"],
        ["What is half of 20?", "10", ["5", "15", "8"], "➗"],
        ["What number comes right after 99?", "100", ["98", "101", "90"], "🔢"]
      ];
      const s = shapes[i % shapes.length];
      const opts = shuffleArray([s[1], s[2][0], s[2][1], s[2][2]]);
      bank.push({ q: s[0], options: opts, correctText: s[1], emoji: s[3], answer: opts.indexOf(s[1]) });
    }
  }
  return bank;
}

const engBase = [
  ["Which word means the opposite of 'big'?", "Small", ["Tall", "Fast", "Loud"], "🔤"],
  ["Which word means the opposite of 'hot'?", "Cold", ["Warm", "Sunny", "Spicy"], "❄️"],
  ["Which word means the opposite of 'happy'?", "Sad", ["Glad", "Cheerful", "Excited"], "😢"],
  ["Which word means the opposite of 'fast'?", "Slow", ["Quick", "Speedy", "Rapid"], "🐌"],
  ["Which word means the opposite of 'up'?", "Down", ["Left", "Right", "Above"], "⬇️"],
  ["Which word rhymes with 'CAT'?", "Hat", ["Dog", "Sun", "Fish"], "🎩"],
  ["Which word rhymes with 'BALL'?", "Tall", ["Doll", "Bell", "Pull"], "⚽"],
  ["Which word rhymes with 'STAR'?", "Car", ["Sky", "Moon", "Sun"], "⭐"],
  ["Which word rhymes with 'TREE'?", "Bee", ["Leaf", "Plant", "Grass"], "🌳"],
  ["What is the plural of 'dog'?", "Dogs", ["Doges", "Dogies", "Dog's"], "🐕"],
  ["What is the plural of 'box'?", "Boxes", ["Boxs", "Boxies", "Boxen"], "📦"],
  ["What is the plural of 'child'?", "Children", ["Childs", "Childrens", "Childes"], "👶"],
  ["What is the plural of 'foot'?", "Feet", ["Foots", "Feets", "Footes"], "🦶"],
  ["What is the plural of 'tooth'?", "Teeth", ["Tooths", "Teeths", "Toothes"], "🦷"],
  ["How many letters are in the English alphabet?", "26 letters", ["24 letters", "28 letters", "20 letters"], "🔤"],
  ["How many vowels are in the English alphabet (A, E, I, O, U)?", "5 vowels", ["7 vowels", "4 vowels", "6 vowels"], "🅰️"],
  ["What punctuation mark goes at the end of a question?", "Question mark (?)", ["Period (.)", "Comma (,)", "Exclamation mark (!)"], "❓"],
  ["What punctuation mark shows excitement or a loud cheer?", "Exclamation mark (!)", ["Period (.)", "Comma (,)", "Question mark (?)"], "❗"],
  ["What part of speech is a naming word like 'Mumbai' or 'Tiger'?", "Noun", ["Verb", "Adjective", "Pronoun"], "🏷️"],
  ["What part of speech is an action word like 'run' or 'jump'?", "Verb", ["Noun", "Adjective", "Adverb"], "🏃"],
  ["What part of speech describes a noun, like 'red' or 'sweet'?", "Adjective", ["Verb", "Pronoun", "Preposition"], "🎨"],
  ["Which word is spelled correctly?", "Friend", ["Freind", "Frend", "Friende"], "🤝"],
  ["Which word is spelled correctly?", "Because", ["Beacuse", "Becuase", "Becoz"], "✍️"],
  ["What do we call a book that lists word meanings in A-to-Z order?", "Dictionary", ["Novel", "Comic", "Magazine"], "📖"]
];

const sciBase = [
  ["What do plants need to grow and make food?", "Sunlight and water", ["Darkness and sand", "Only ice", "Smoke and dust"], "🌱"],
  ["How many legs does an insect like an ant have?", "6 legs", ["8 legs", "4 legs", "10 legs"], "🐜"],
  ["How many legs does a spider have?", "8 legs", ["6 legs", "10 legs", "4 legs"], "🕷️"],
  ["What do we call water when it freezes into a solid?", "Ice", ["Steam", "Liquid", "Gas"], "🧊"],
  ["What do we call water when it boils into a gas?", "Steam (vapor)", ["Ice", "Solid", "Raindrops"], "♨️"],
  ["Which organ in our body pumps blood?", "The heart", ["The lungs", "The ears", "The stomach"], "❤️"],
  ["Which organs in our chest help us breathe oxygen?", "The lungs", ["The kidneys", "The liver", "The brain"], "🫁"],
  ["Which organ inside our head helps us think and remember?", "The brain", ["The stomach", "The heart", "The spine"], "🧠"],
  ["How many senses do humans have?", "5 senses", ["4 senses", "6 senses", "7 senses"], "👁️"],
  ["Which planet is known as the 'Red Planet'?", "Mars", ["Venus", "Jupiter", "Saturn"], "🔴"],
  ["What bright yellow star sits at the center of our solar system?", "The Sun", ["The Moon", "Polaris", "Sirius"], "☀️"],
  ["How many planets are there in our solar system?", "8 planets", ["9 planets", "7 planets", "10 planets"], "🪐"],
  ["Which planet has prominent rings of ice and rock around it?", "Saturn", ["Jupiter", "Uranus", "Neptune"], "🪐"],
  ["Which is the largest planet in our solar system?", "Jupiter", ["Earth", "Saturn", "Mars"], "🪐"],
  ["What invisible force pulls objects down toward the Earth?", "Gravity", ["Wind", "Light", "Sound"], "🍎"],
  ["What do magnets attract?", "Iron and steel", ["Plastic and wood", "Glass and paper", "Rubber"], "🧲"],
  ["How many colors are in a rainbow?", "7 colors", ["5 colors", "8 colors", "6 colors"], "🌈"],
  ["What is the green pigment in leaves that absorbs sunlight?", "Chlorophyll", ["Carotene", "Hemoglobin", "Cellulose"], "🍃"],
  ["Which part of the plant absorbs water from the soil?", "Roots", ["Flowers", "Leaves", "Seeds"], "🌱"],
  ["What gas do animals and humans breathe in to live?", "Oxygen", ["Carbon dioxide", "Helium", "Nitrogen"], "💨"],
  ["What gas do plants absorb from the air for photosynthesis?", "Carbon dioxide", ["Oxygen", "Helium", "Argon"], "🌿"]
];

/* Master In-Memory Question Bank (Active by default, 400 questions each) */
const QUIZ_DATA = {
  time: buildTimeQuestionBank(),
  mythology: buildPool(mythBase, "🕉️"),
  sports: buildPool(sportsBase, "🏏"),
  animals: buildPool(animalsBase, "🐯"),
  history: buildPool(historyBase, "🇮🇳"),
  maths: buildMathsBank(),
  english: buildPool(engBase, "🔤"),
  science: buildPool(sciBase, "🔬")
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

  // Exact, high-definition official map loader
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
    holder.innerHTML = '<div class="loading error"><span>⚠️ Could not load the official India map.</span><span style="font-size:13px;">Please check your internet connection so the vector map can load.</span><button class="retryBtn" id="retryIndia">🔄 Retry</button></div>';
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

/* ===================== CLOCK GRAPHIC RENDERER ===================== */
function setupClockSVG(svgId, ticksId, outerMinId, hoursId){
  const cx = 160, cy = 160;
  const ticksGroup = document.getElementById(ticksId);
  const outerGroup = document.getElementById(outerMinId);
  const hoursGroup = document.getElementById(hoursId);
  if(!ticksGroup || !outerGroup || !hoursGroup) return;

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

function updateClockHands(hourHandId, minuteHandId, hour, minute){
  const cx = 160, cy = 160;
  const minuteAngle = minute * 6;
  const hourAngle = ((hour % 12) * 30) + (minute * 0.5);

  const hLen = 55, mLen = 85;
  const hRad = (hourAngle - 90) * (Math.PI / 180);
  const mRad = (minuteAngle - 90) * (Math.PI / 180);

  const hEl = document.getElementById(hourHandId);
  const mEl = document.getElementById(minuteHandId);

  if(hEl){
    hEl.setAttribute('x2', cx + hLen * Math.cos(hRad));
    hEl.setAttribute('y2', cy + hLen * Math.sin(hRad));
  }
  if(mEl){
    mEl.setAttribute('x2', cx + mLen * Math.cos(mRad));
    mEl.setAttribute('y2', cy + mLen * Math.sin(mRad));
  }
}

/* ===================== SINGLE PLAYER QUIZ (PREV / NEXT ENABLED) ===================== */
function buildQuizModule(){
  const TOPIC_LABELS = {
    time: "Time & Calendar", mythology: "Mythology", sports: "Sports",
    animals: "Animals", history: "History", maths: "Maths", english: "English", science: "Science"
  };

  let currentTopic = null, queue = [], qIndex = 0, score = 0, roundLength = 10;
  let userAnswers = [];

  const picker = document.getElementById('quizTopicPicker');
  const wrap = document.getElementById('quizWrap');
  const progress = document.getElementById('quizProgress');
  const emojiEl = document.getElementById('quizEmoji');
  const questionText = document.getElementById('quizQuestionText');
  const optionsEl = document.getElementById('quizOptions');
  const feedbackEl = document.getElementById('quizFeedback');
  const clockWrap = document.getElementById('clockVisualWrap');
  const resultScreen = document.getElementById('quizResultScreen');
  const finalScore = document.getElementById('quizFinalScore');
  const finalMessage = document.getElementById('quizFinalMessage');

  const prevBtn = document.getElementById('quizPrevBtn');
  const nextBtn = document.getElementById('quizNextBtn');

  window.singleQuizReset = function(){
    wrap.style.display = 'none';
    resultScreen.style.display = 'none';
    picker.style.display = 'flex';
  };

  function startTopic(topic){
    currentTopic = topic; 
    score = 0; 
    qIndex = 0;
    userAnswers = [];
    queue = shuffleArray(QUIZ_DATA[topic]).slice(0, roundLength);
    picker.style.display = 'none';
    wrap.style.display = 'flex';
    resultScreen.style.display = 'none';
    renderCurrentQuestion();
  }

  function renderCurrentQuestion(){
    const q = queue[qIndex];
    progress.textContent = `${TOPIC_LABELS[currentTopic]} — Question ${qIndex + 1} of ${queue.length} (Score: ${score})`;
    questionText.textContent = q.q;
    emojiEl.textContent = q.emoji || "❓";

    if(q.isClock){
      clockWrap.style.display = 'flex';
      emojiEl.style.display = 'none';
      updateClockHands('hourHand', 'minuteHand', q.hour, q.minute);
    } else {
      clockWrap.style.display = 'none';
      emojiEl.style.display = 'block';
    }

    feedbackEl.textContent = '';
    optionsEl.innerHTML = '';

    const letters = ['A','B','C','D'];
    const prevAnswer = userAnswers[qIndex];

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'ctrl quizOptBtn';
      btn.style.background = '#4c6ef5';
      btn.textContent = letters[idx] + '. ' + opt;

      if(prevAnswer !== undefined){
        btn.disabled = true;
        if(opt === q.correctText) btn.style.background = '#2a9d8f';
        else if(opt === prevAnswer.chosen) btn.style.background = '#c0392b';
      } else {
        btn.addEventListener('click', () => onAnswer(opt, btn));
      }
      optionsEl.appendChild(btn);
    });

    prevBtn.disabled = (qIndex === 0);
    nextBtn.disabled = (prevAnswer === undefined);

    if(prevAnswer !== undefined){
      feedbackEl.textContent = prevAnswer.isCorrect ? "✅ Correct!" : `❌ Correct answer: ${q.correctText}`;
      feedbackEl.style.color = prevAnswer.isCorrect ? '#2a9d8f' : '#c0392b';
    }

    speak(q.q);
  }

  function onAnswer(chosenText, btnEl){
    const q = queue[qIndex];
    const isCorrect = (chosenText === q.correctText);

    if(isCorrect) score++;
    userAnswers[qIndex] = { chosen: chosenText, isCorrect };

    const allButtons = optionsEl.querySelectorAll('button');
    allButtons.forEach(b => b.disabled = true);

    if(isCorrect){
      btnEl.style.background = '#2a9d8f';
      feedbackEl.textContent = '✅ Correct! Well done!';
      feedbackEl.style.color = '#2a9d8f';
      speak('Correct! Well done!');
      confettiBurst();
    } else {
      btnEl.style.background = '#c0392b';
      allButtons.forEach(b => {
        if(b.textContent.slice(3) === q.correctText) b.style.background = '#2a9d8f';
      });
      feedbackEl.textContent = `❌ Oops! The correct answer is: ${q.correctText}`;
      feedbackEl.style.color = '#c0392b';
      speak(`The correct answer is ${q.correctText}.`);
    }

    nextBtn.disabled = false;
  }

  prevBtn.addEventListener('click', () => {
    if(qIndex > 0){
      qIndex--;
      renderCurrentQuestion();
    }
  });

  nextBtn.addEventListener('click', () => {
    qIndex++;
    if(qIndex < queue.length){
      renderCurrentQuestion();
    } else {
      showResult();
    }
  });

  function showResult(){
    wrap.style.display = 'none';
    resultScreen.style.display = 'flex';
    const total = queue.length;
    finalScore.textContent = `You scored ${score} out of ${total}!`;
    let msg = score >= total*0.7 ? "Great job! You're a superstar! 🌟" : "Good try! Keep learning! 💪";
    finalMessage.textContent = msg;
    speak(`You scored ${score} out of ${total}. ${msg}`);
    if(score >= total*0.7) confettiBurst();
  }

  document.querySelectorAll('#quizTopicPicker .topicBtn').forEach(btn => {
    btn.addEventListener('click', () => startTopic(btn.getAttribute('data-topic')));
  });
  document.getElementById('quizPlayAgainBtn').addEventListener('click', () => {
    resultScreen.style.display = 'none';
    picker.style.display = 'flex';
  });

  setupClockSVG('clockSvg', 'clockTicks', 'clockOuterMinutes', 'clockHourNumbers');
}

/* ===================== ARCADE 2-PLAYER QUIZ ===================== */
function buildArcadeModule(){
  const TOPIC_LABELS = {
    time: "Time & Calendar", mythology: "Mythology", sports: "Sports",
    animals: "Animals", history: "History", maths: "Maths", english: "English", science: "Science"
  };

  let currentTopic = null, queue = [], qIndex = 0, scoreP1 = 0, scoreP2 = 0, roundLength = 10;
  let answeredP1 = false, answeredP2 = false;

  const picker = document.getElementById('arcadeTopicPicker');
  const wrap = document.getElementById('arcadeWrap');
  const resultWrap = document.getElementById('arcadeResultWrap');
  const progress = document.getElementById('arcadeProgress');
  const emojiEl = document.getElementById('arcadeEmoji');
  const questionText = document.getElementById('arcadeQuestionText');
  const clockWrap = document.getElementById('arcadeClockVisualWrap');
  const optsP1 = document.getElementById('arcadeOptionsP1');
  const optsP2 = document.getElementById('arcadeOptionsP2');
  const fbP1 = document.getElementById('arcadeFeedbackP1');
  const fbP2 = document.getElementById('arcadeFeedbackP2');
  const scoreP1El = document.getElementById('arcadeScoreP1');
  const scoreP2El = document.getElementById('arcadeScoreP2');
  const nextBtn = document.getElementById('arcadeNextBtn');

  window.arcadeQuizReset = function(){
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
    renderQuestion();
  }

  function updateScores(){
    scoreP1El.textContent = '🔵 P1: ' + scoreP1;
    scoreP2El.textContent = '🔴 P2: ' + scoreP2;
  }

  function renderOptionsFor(container, correctText, options, fbEl, onPick){
    container.innerHTML = '';
    const letters = ['A','B','C','D'];
    const shuffled = shuffleArray(options);
    shuffled.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'ctrl arcadeOptBtn';
      btn.style.background = '#4c6ef5';
      btn.textContent = letters[idx] + '. ' + opt;
      btn.addEventListener('click', () => onPick(opt === correctText, opt, btn, container, fbEl));
      container.appendChild(btn);
    });
  }

  function renderQuestion(){
    answeredP1 = false; answeredP2 = false;
    nextBtn.disabled = true;

    const q = queue[qIndex];
    progress.textContent = `${TOPIC_LABELS[currentTopic]} — Question ${qIndex + 1} of ${queue.length}`;
    questionText.textContent = q.q;
    fbP1.textContent = ''; fbP2.textContent = '';

    if(q.isClock){
      clockWrap.style.display = 'flex';
      emojiEl.style.display = 'none';
      updateClockHands('arcadeHourHand', 'arcadeMinuteHand', q.hour, q.minute);
    } else {
      clockWrap.style.display = 'none';
      emojiEl.style.display = 'block';
      emojiEl.textContent = q.emoji || "❓";
    }

    renderOptionsFor(optsP1, q.correctText, q.options, fbP1, (isCorrect, chosen, btn, container, fb) => {
      if(answeredP1) return; answeredP1 = true;
      Array.from(container.children).forEach(b => b.disabled = true);
      if(isCorrect){
        scoreP1++;
        btn.style.background = '#2a9d8f';
        fb.textContent = '✅ Correct!';
        fb.style.color = '#2a9d8f';
      } else {
        btn.style.background = '#c0392b';
        Array.from(container.children).forEach(b => {
          if(b.textContent.slice(3) === q.correctText) b.style.background = '#2a9d8f';
        });
        fb.textContent = '❌ Correct: ' + q.correctText;
        fb.style.color = '#c0392b';
      }
      updateScores();
      checkBothDone();
    });

    renderOptionsFor(optsP2, q.correctText, q.options, fbP2, (isCorrect, chosen, btn, container, fb) => {
      if(answeredP2) return; answeredP2 = true;
      Array.from(container.children).forEach(b => b.disabled = true);
      if(isCorrect){
        scoreP2++;
        btn.style.background = '#2a9d8f';
        fb.textContent = '✅ Correct!';
        fb.style.color = '#2a9d8f';
      } else {
        btn.style.background = '#c0392b';
        Array.from(container.children).forEach(b => {
          if(b.textContent.slice(3) === q.correctText) b.style.background = '#2a9d8f';
        });
        fb.textContent = '❌ Correct: ' + q.correctText;
        fb.style.color = '#c0392b';
      }
      updateScores();
      checkBothDone();
    });

    speak(q.q);
  }

  function checkBothDone(){
    if(answeredP1 && answeredP2){
      nextBtn.disabled = false;
      confettiBurst();
    }
  }

  nextBtn.addEventListener('click', () => {
    qIndex++;
    if(qIndex < queue.length) renderQuestion();
    else showResult();
  });

  function showResult(){
    wrap.style.display = 'none';
    resultWrap.style.display = 'flex';
    const finalWinner = document.getElementById('arcadeFinalWinner');
    const finalScores = document.getElementById('arcadeFinalScores');

    if(scoreP1 > scoreP2) finalWinner.textContent = '🏆 Player 1 Wins! 🔵';
    else if(scoreP2 > scoreP1) finalWinner.textContent = '🏆 Player 2 Wins! 🔴';
    else finalWinner.textContent = "🤝 It's a Tie!";

    finalScores.textContent = `Player 1: ${scoreP1}  |  Player 2: ${scoreP2}  (out of ${queue.length})`;
    confettiBurst();
  }

  document.querySelectorAll('#arcadeTopicPicker .topicBtn').forEach(btn => {
    btn.addEventListener('click', () => startTopic(btn.getAttribute('data-topic')));
  });
  document.getElementById('arcadePlayAgainBtn').addEventListener('click', () => {
    resultWrap.style.display = 'none';
    picker.style.display = 'flex';
  });

  setupClockSVG('arcadeClockSvg', 'arcadeClockTicks', 'arcadeClockOuterMinutes', 'arcadeClockHourNumbers');
}

/* ===================== QUIZ MODE SWITCH ===================== */
function setupQuizModeSwitch(){
  const mainPicker = document.getElementById('quizMainModePicker');
  const singleContainer = document.getElementById('quizSingleContainer');
  const arcadeContainer = document.getElementById('arcadeContainer');
  const headerSub = document.getElementById('quizHeaderSub');

  document.getElementById('pickSingleMode').addEventListener('click', () => {
    mainPicker.style.display = 'none';
    singleContainer.style.display = 'flex';
    arcadeContainer.style.display = 'none';
    headerSub.textContent = 'Pick a topic and answer questions with Previous & Next!';
  });
  document.getElementById('pickArcadeMode').addEventListener('click', () => {
    mainPicker.style.display = 'none';
    arcadeContainer.style.display = 'flex';
    singleContainer.style.display = 'none';
    headerSub.textContent = 'Two players, one question each round — good luck!';
  });
}

/* ===================== EXCEL LOADER & IN-BROWSER EXPORTER ===================== */
const AREA_MAP = {
  "time": "time",
  "mythology": "mythology",
  "sports": "sports",
  "animals": "animals",
  "history": "history",
  "maths": "maths",
  "math": "maths",
  "english": "english",
  "science": "science"
};

function parseWorkbook(workbook) {
  let loadedCount = 0;
  const targetSheets = workbook.SheetNames.includes("All Questions") ? ["All Questions"] : workbook.SheetNames;

  targetSheets.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });
    if (!rows || rows.length === 0) return;

    rows.forEach(r => {
      const areaRaw = (r["Area"] || sheetName || "").toString().toLowerCase().trim();
      const key = AREA_MAP[areaRaw];
      if (!key) return;

      const qText = r["Question"];
      const correct = r["Correct answer"] || r["Correct Answer"];
      const opt1 = r["Option 1"];
      const opt2 = r["Option 2"];
      const opt3 = r["Option 3"];
      const opt4 = r["Option 4"];

      if (qText && correct) {
        if (!QUIZ_DATA[key]) QUIZ_DATA[key] = [];

        const rawOptions = [opt1, opt2, opt3, opt4].filter(o => o !== "");
        const options = rawOptions.length >= 2 ? rawOptions.map(String) : [String(correct), "Option B", "Option C", "Option D"];

        let isClock = false, hour = null, minute = null;
        if (key === "time") {
          const timeMatch = String(correct).match(/^(\d{1,2}):(\d{2})$/);
          if (timeMatch && String(qText).toLowerCase().includes("clock")) {
            isClock = true;
            hour = parseInt(timeMatch[1], 10);
            minute = parseInt(timeMatch[2], 10);
          }
        }

        QUIZ_DATA[key].push({
          q: String(qText),
          options: shuffleArray(options),
          correctText: String(correct),
          emoji: key === "time" && isClock ? "⏰" : (key === "time" ? "📅" : "❓"),
          isClock: isClock,
          hour: hour,
          minute: minute,
          answer: options.indexOf(String(correct))
        });
        loadedCount++;
      }
    });
  });

  const statusEl = document.getElementById("excelStatus");
  if (statusEl) {
    statusEl.textContent = `(Loaded ${loadedCount} Qs ✅)`;
    statusEl.style.color = "#2ecc71";
  }
}

// In-Browser 1-Click Excel Exporter (Directly creates Quiz Bank.xlsx on your computer)
function downloadQuizBankExcel() {
  if (typeof XLSX === "undefined") {
    alert("SheetJS library is loading. Please verify internet connectivity.");
    return;
  }
  const wb = XLSX.utils.book_new();
  const allRows = [["No", "Area", "Question", "Option 1", "Option 2", "Option 3", "Option 4", "Correct answer"]];
  let globalIndex = 1;

  Object.keys(AREA_MAP).forEach(key => {
    if (["math"].includes(key)) return;
    const areaName = key.charAt(0).toUpperCase() + key.slice(1);
    const qList = QUIZ_DATA[key] || [];
    const tabRows = [["No", "Area", "Question", "Option 1", "Option 2", "Option 3", "Option 4", "Correct answer"]];

    qList.forEach((item, idx) => {
      const opts = item.options.slice();
      while (opts.length < 4) opts.push("—");
      tabRows.push([idx + 1, areaName, item.q, opts[0], opts[1], opts[2], opts[3], item.correctText]);
      allRows.push([globalIndex++, areaName, item.q, opts[0], opts[1], opts[2], opts[3], item.correctText]);
    });

    const tabSheet = XLSX.utils.aoa_to_sheet(tabRows);
    XLSX.utils.book_append_sheet(wb, tabSheet, areaName);
  });

  const allSheet = XLSX.utils.aoa_to_sheet(allRows);
  wb.SheetNames.unshift("All Questions");
  wb.Sheets["All Questions"] = allSheet;

  XLSX.writeFile(wb, "Quiz Bank.xlsx");
}

async function loadServerExcel() {
  if (typeof XLSX === "undefined") return;
  const filenames = ["Quiz Bank.xlsx", "quiz_questions.xlsx"];
  for (const name of filenames) {
    try {
      const res = await fetch(name);
      if (res.ok) {
        const buf = await res.arrayBuffer();
        const wb = XLSX.read(buf, { type: "array" });
        parseWorkbook(wb);
        return;
      }
    } catch(e) {}
  }
}

function setupExcelPicker() {
  const fileInput = document.getElementById("excelFileInput");
  if (!fileInput) return;
  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const data = new Uint8Array(evt.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      parseWorkbook(workbook);
    };
    reader.readAsArrayBuffer(file);
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

document.getElementById('navIndia').addEventListener('click', () => showPage('india'));
document.getElementById('navWorld').addEventListener('click', () => showPage('world'));
document.getElementById('navQuiz').addEventListener('click', () => showPage('quiz'));
document.getElementById('globalHomeBtn').addEventListener('click', quitToQuizHome);

/* ===================== BOOTSTRAP ===================== */
buildIndiaModule();
buildWorldModule();
buildQuizModule();
buildArcadeModule();
setupQuizModeSwitch();
loadServerExcel();
setupExcelPicker();