// Core essential words for conversation
const CORE_WORDS = [
  { en: "I", ru: "я", example: "I am happy." },
  { en: "you", ru: "ты / вы", example: "You are my friend." },
  { en: "he", ru: "он", example: "He is tall." },
  { en: "she", ru: "она", example: "She is kind." },
  { en: "it", ru: "это / оно", example: "It is a book." },
  { en: "we", ru: "мы", example: "We live here." },
  { en: "they", ru: "они", example: "They are students." },
  { en: "me", ru: "мне / меня", example: "Give it to me." },
  { en: "him", ru: "ему / его", example: "I see him." },
  { en: "her", ru: "ей / её", example: "I know her." },
  { en: "us", ru: "нам / нас", example: "Come with us." },
  { en: "them", ru: "им / их", example: "I like them." },
  { en: "my", ru: "мой", example: "This is my bag." },
  { en: "your", ru: "твой / ваш", example: "What is your name?" },
  { en: "what", ru: "что", example: "What is this?" },
  { en: "where", ru: "где", example: "Where is the station?" },
  { en: "when", ru: "когда", example: "When do you arrive?" },
  { en: "why", ru: "почему", example: "Why are you late?" },
  { en: "how", ru: "как", example: "How are you?" },
  { en: "who", ru: "кто", example: "Who is that?" },
  { en: "where to", ru: "куда", example: "Where to go?" },
  { en: "want", ru: "хотеть", example: "I want coffee." },
  { en: "give", ru: "давать", example: "Give me the menu, please." },
  { en: "need", ru: "нуждаться", example: "I need help." },
  { en: "have", ru: "иметь", example: "Do you have water?" },
  { en: "can", ru: "мочь", example: "Can you help me?" },
  { en: "please", ru: "пожалуйста", example: "Please give me that." },
  { en: "thank you", ru: "спасибо", example: "Thank you very much." },
  { en: "sorry", ru: "извините", example: "Sorry, I don't understand." },
  { en: "yes", ru: "да", example: "Yes, please." },
  { en: "no", ru: "нет", example: "No, thank you." },
  { en: "help", ru: "помощь / помогать", example: "Can you help me?" },
  { en: "know", ru: "знать", example: "I don't know." },
  { en: "understand", ru: "понимать", example: "I don't understand." },
  { en: "speak", ru: "говорить", example: "Do you speak English?" },
];

// Speaking practice scenarios — pure speaking with opponent
const SCENARIOS = [
  {
    id: "cafe",
    title: "Заказать кофе",
    level: "Легко",
    character: "Официант",
    image: "waiter.jpg",
    steps: [
      { opponent: "Hello! Welcome. What would you like?", task: "Скажи, что хочешь кофе", model: "I want a coffee, please." },
      { opponent: "Good choice! Anything else?", task: "Скажи, что больше ничего не нужно", model: "No, thank you. Just coffee." },
      { opponent: "Ok. Here is your coffee. Enjoy!", task: "Поблагодари", model: "Thank you!" }
    ]
  },
  {
    id: "pharmacy",
    title: "В аптеке",
    level: "Легко",
    character: "Аптекарь",
    image: "pharmacist.jpg",
    steps: [
      { opponent: "Hello, how can I help you?", task: "Скажи, что нужна таблетка от головы", model: "I need something for a headache, please." },
      { opponent: "We have this. Do you want it?", task: "Спроси сколько стоит", model: "Yes, please. How much is it?" },
      { opponent: "It is 5 dollars.", task: "Согласись и поблагодари", model: "Ok, thank you. Here is the money." }
    ]
  },
  {
    id: "taxi",
    title: "Такси",
    level: "Средне",
    character: "Таксист",
    image: "taxi.jpg",
    steps: [
      { opponent: "Where to?", task: "Скажи куда ехать (аэропорт)", model: "To the airport, please." },
      { opponent: "Ok. How do you want to go?", task: "Попроси самый быстрый путь", model: "The fastest way, please." },
      { opponent: "Sure. It will take about 30 minutes.", task: "Поблагодари", model: "Ok, thank you." }
    ]
  },
  {
    id: "shop",
    title: "В магазине",
    level: "Средне",
    character: "Продавец",
    image: "shop.jpg",
    steps: [
      { opponent: "Can I help you?", task: "Спроси есть ли футболка размера M", model: "Yes, I want this T-shirt. Do you have it in medium?" },
      { opponent: "Yes, we do. Here it is.", task: "Спроси цену", model: "Thank you. How much is it?" },
      { opponent: "It is 20 dollars.", task: "Скажи что берёшь", model: "Ok, I'll take it. Thank you." }
    ]
  },
  {
    id: "directions",
    title: "Спросить дорогу",
    level: "Средне",
    character: "Прохожий",
    image: "directions.jpg",
    steps: [
      { opponent: "Excuse me, can I help you?", task: "Спроси где станция", model: "Yes, please. Where is the station?" },
      { opponent: "Go straight, then turn left. It's near the park.", task: "Спроси далеко ли", model: "Thank you! Is it far?" },
      { opponent: "No, about 5 minutes walk.", task: "Поблагодари", model: "Ok, thank you very much!" }
    ]
  },
  {
    id: "hotel",
    title: "В отеле",
    level: "Сложнее",
    character: "Администратор",
    image: "hotel.jpg",
    steps: [
      { opponent: "Good evening. Do you have a reservation?", task: "Скажи своё имя и что есть бронь", model: "Yes, my name is Anna. I have a reservation." },
      { opponent: "Yes, here it is. Room 305.", task: "Спроси во сколько завтрак", model: "Thank you. What time is breakfast?" },
      { opponent: "Breakfast is from 7 to 10.", task: "Спроси где ресторан", model: "Ok, thank you. Where is the restaurant?" }
    ]
  },
  {
    id: "doctor",
    title: "У врача",
    level: "Сложнее",
    character: "Врач",
    image: "doctor.jpg",
    steps: [
      { opponent: "Hello. What's the problem?", task: "Скажи что болит голова и устал", model: "I have a headache and I feel tired." },
      { opponent: "How long have you had this?", task: "Скажи что со вчера и нужна помощь", model: "Since yesterday. I need help, please." },
      { opponent: "Ok. Take this medicine and rest.", task: "Спроси когда вернуться", model: "Thank you, doctor. When should I come back?" }
    ]
  }
];

// Tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab + '-tab').classList.add('active');
  });
});

// Render words
function renderWords() {
  const list = document.getElementById('word-list');
  list.innerHTML = '';
  CORE_WORDS.forEach(w => {
    const div = document.createElement('div');
    div.className = 'word-item';
    div.innerHTML = `<span class="en">${w.en}</span><span class="ru">${w.ru}</span>`;
    list.appendChild(div);
  });
}

// Learn mode
let learnIndex = 0;
function openLearn() {
  learnIndex = 0;
  showCard();
  document.getElementById('learn-modal').classList.add('active');
}
function showCard() {
  const w = CORE_WORDS[learnIndex];
  document.getElementById('card-en').textContent = w.en;
  document.getElementById('card-ru').textContent = w.ru;
  document.getElementById('card-example').textContent = w.example;
  document.getElementById('card-ru').style.display = 'none';
  document.getElementById('card-example').style.display = 'none';
  document.getElementById('next-card').textContent = learnIndex === CORE_WORDS.length - 1 ? 'Закончить' : 'Далее →';
}
document.getElementById('learn-btn').addEventListener('click', openLearn);
document.getElementById('close-learn').addEventListener('click', () => {
  document.getElementById('learn-modal').classList.remove('active');
});
document.getElementById('show-btn').addEventListener('click', () => {
  document.getElementById('card-ru').style.display = 'block';
  document.getElementById('card-example').style.display = 'block';
});
document.getElementById('speak-btn').addEventListener('click', () => {
  speak(document.getElementById('card-en').textContent);
});
document.getElementById('next-card').addEventListener('click', () => {
  learnIndex++;
  if (learnIndex >= CORE_WORDS.length) {
    document.getElementById('learn-modal').classList.remove('active');
    return;
  }
  showCard();
});

document.getElementById('quiz-btn').addEventListener('click', () => {
  alert('Тест пока простой. Лучше практикуй говорение в Speaking Club.');
});

// Render scenarios
function renderScenarios() {
  const container = document.getElementById('scenarios');
  container.innerHTML = '';
  SCENARIOS.forEach(s => {
    const div = document.createElement('div');
    div.className = 'scenario';
    div.innerHTML = `
      <img src="${s.image}" alt="${s.character}">
      <div class="scenario-info">
        <div class="scenario-title">${s.title}</div>
        <div class="scenario-level">${s.level} • ${s.character}</div>
      </div>
    `;
    div.addEventListener('click', () => startDialogue(s));
    container.appendChild(div);
  });
}

// Speaking practice engine with speech recognition
let currentScenario = null;
let currentStep = 0;
let recognition = null;

function speak(text) {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-US';
    utter.rate = 0.95;
    speechSynthesis.speak(utter);
  }
}

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
}

function isCloseEnough(heard, model) {
  const h = normalize(heard);
  const m = normalize(model);
  if (!h) return false;
  if (h.includes(m) || m.includes(h)) return true;
  // simple word overlap
  const hWords = h.split(/\s+/);
  const mWords = m.split(/\s+/);
  const common = hWords.filter(w => mWords.includes(w)).length;
  return common >= Math.min(2, mWords.length * 0.5);
}

function startDialogue(scenario) {
  currentScenario = scenario;
  currentStep = 0;
  document.getElementById('char-img').src = scenario.image;
  document.getElementById('char-name').textContent = scenario.character;
  showStep();
  document.getElementById('dialogue-modal').classList.add('active');
}

function showStep() {
  document.getElementById('heard').style.display = 'none';
  document.getElementById('listen-status').textContent = '';
  document.getElementById('next-step').style.display = 'none';
  document.getElementById('mic-btn').classList.remove('listening');

  if (currentStep >= currentScenario.steps.length) {
    document.getElementById('speech').textContent = "Отлично! Диалог закончен. Молодец!";
    document.getElementById('task').textContent = "Можешь повторить ещё раз или выбрать другой сценарий.";
    document.getElementById('model-answer').style.display = 'none';
    document.getElementById('play-model').style.display = 'none';
    document.getElementById('show-model').style.display = 'none';
    document.getElementById('mic-btn').style.display = 'none';
    document.getElementById('next-step').style.display = 'block';
    document.getElementById('next-step').textContent = 'Закрыть';
    return;
  }

  const step = currentScenario.steps[currentStep];
  document.getElementById('speech').textContent = step.opponent;
  document.getElementById('task').textContent = step.task;
  document.getElementById('model-answer').textContent = step.model;
  document.getElementById('model-answer').style.display = 'none';
  document.getElementById('play-model').style.display = 'none';
  document.getElementById('show-model').style.display = 'block';
  document.getElementById('mic-btn').style.display = 'block';
  document.getElementById('next-step').textContent = 'Дальше →';

  setTimeout(() => speak(step.opponent), 400);
}

document.getElementById('play-opponent').addEventListener('click', () => {
  if (currentScenario && currentStep < currentScenario.steps.length) {
    speak(currentScenario.steps[currentStep].opponent);
  }
});

document.getElementById('show-model').addEventListener('click', () => {
  document.getElementById('model-answer').style.display = 'block';
  document.getElementById('play-model').style.display = 'block';
});

document.getElementById('play-model').addEventListener('click', () => {
  if (currentScenario && currentStep < currentScenario.steps.length) {
    speak(currentScenario.steps[currentStep].model);
  }
});

// Speech recognition
document.getElementById('mic-btn').addEventListener('click', () => {
  if (!currentScenario || currentStep >= currentScenario.steps.length) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    document.getElementById('listen-status').textContent = 'Распознавание речи не поддерживается в этом браузере. Попробуй Chrome.';
    return;
  }

  if (recognition) recognition.abort();
  recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  const btn = document.getElementById('mic-btn');
  const status = document.getElementById('listen-status');
  const heardEl = document.getElementById('heard');

  btn.classList.add('listening');
  status.textContent = 'Слушаю... говори сейчас';
  heardEl.style.display = 'none';

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    heardEl.textContent = 'Услышал: "' + transcript + '"';
    heardEl.style.display = 'block';

    const model = currentScenario.steps[currentStep].model;
    if (isCloseEnough(transcript, model)) {
      status.textContent = 'Отлично! Понял. Молодец!';
      status.style.color = '#10b981';
      document.getElementById('next-step').style.display = 'block';
      setTimeout(() => {
        currentStep++;
        showStep();
      }, 900);
    } else {
      status.textContent = 'Не совсем понял. Попробуй ещё раз или посмотри образец.';
      status.style.color = '#f59e0b';
    }
    btn.classList.remove('listening');
  };

  recognition.onerror = () => {
    status.textContent = 'Не расслышал. Нажми и скажи ещё раз.';
    status.style.color = '#f59e0b';
    btn.classList.remove('listening');
  };

  recognition.onend = () => {
    btn.classList.remove('listening');
  };

  recognition.start();
});

document.getElementById('next-step').addEventListener('click', () => {
  if (currentStep >= currentScenario.steps.length) {
    document.getElementById('dialogue-modal').classList.remove('active');
    return;
  }
  currentStep++;
  showStep();
});

document.getElementById('close-dialogue').addEventListener('click', () => {
  document.getElementById('dialogue-modal').classList.remove('active');
  speechSynthesis.cancel();
  if (recognition) recognition.abort();
});

// Init
renderWords();
renderScenarios();
