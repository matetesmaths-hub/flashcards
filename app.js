const chapters = {
  calcul: {
    title: "Calcul littéral",
    storageKey: "leitner_calcul_litteral",
    themeKey: "leitner_calcul_theme",
    questions: questionsCalcul
  },
  geometrie: {
    title: "Géométrie brevet",
    storageKey: "leitner_geometrie",
    themeKey: "leitner_geometrie_theme",
    questions: questionsGeometrie
  },
  fonctions: {
    title: "Fonctions",
    storageKey: "leitner_fonctions",
    themeKey: "leitner_fonctions_theme",
    questions: questionsFonctions
  },
  probaStats: {
    title: "Probabilités / statistiques",
    storageKey: "leitner_proba_stats",
    themeKey: "leitner_proba_stats_theme",
    questions: questionsProbaStats
  },
  pav: {
    title: "Périmètres, aires, volumes",
    storageKey: "leitner_pav",
    themeKey: "leitner_pav_theme",
    questions: questionsPav
  },  
  puissances: {
    title: "Puissances",
    storageKey: "leitner_puissances",
    themeKey: "leitner_puissances_theme",
    questions: questionsPuissances
  },
};

const intervals = [0, 1, 2, 4, 7, 14];

let currentChapterId = null;
let currentChapter = null;
let questions = [];
let progress = {};
let selectedTheme = "Tous";
let currentQuestion = null;
let currentChoices = [];
let answered = false;
let revisionMode = false;
let revisionQuestions = [];
let revisionIndex = 0;
let revisionScore = 0;
let revisionErrors = {};

function todayNumber() {
  return Math.floor(Date.now() / (1000 * 60 * 60 * 24));
}

function normalize(text) {
  return text
    .toString()
    .toLowerCase()
    .replaceAll(" ", "")
    .replaceAll("×", "*")
    .replaceAll("−", "-")
    .replaceAll("²", "^2")
    .replaceAll(",", ".")
    .replaceAll("cm", "")
    .replaceAll("m", "");
}

function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function shuffledChoices(question) {
  return shuffleArray(question.choices.map((choice, index) => ({
    text: choice,
    isCorrect: index === question.answer
  })));
}

function escapeHtml(text) {
  return text
    .toString()
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


function allQuestions() {
  return [
    ...questionsCalcul.map(q => ({ ...q, chapterName: "Calcul littéral" })),
    ...questionsGeometrie.map(q => ({ ...q, chapterName: "Géométrie" })),
    ...questionsFonctions.map(q => ({ ...q, chapterName: "Fonctions" })),
    ...questionsProbaStats.map(q => ({ ...q, chapterName: "Probabilités / statistiques" })),
    ...questionsPav.map(q => ({ ...q, chapterName: "Périmètres, aires, volumes" })),
    ...questionsPuissances.map(q => ({ ...q, chapterName: "Puissances" }))
  ];
}

function startRevisionMode(count) {
  revisionMode = true;
  revisionIndex = 0;
  revisionScore = 0;
  revisionErrors = {};

  const pool = shuffleArray(allQuestions());
  revisionQuestions = pool.slice(0, Math.min(count, pool.length));

  currentChapterId = "revision";
  currentChapter = {
    title: "Révisions mixtes",
    storageKey: "leitner_revision_mixte",
    themeKey: "leitner_revision_mixte_theme",
    questions: revisionQuestions
  };

  questions = revisionQuestions;
  progress = {};
  selectedTheme = "Tous";

  document.getElementById("home").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
  document.getElementById("chapterTitle").textContent = "Révisions mixtes";

  renderRevisionQuestion();
}

function renderRevisionQuestion() {
  answered = false;
  const card = document.getElementById("card");

  if (revisionIndex >= revisionQuestions.length) {
    renderRevisionEnd();
    return;
  }

  currentQuestion = revisionQuestions[revisionIndex];
  const figureHtml = renderFigure(currentQuestion);
  const progressText = `Question ${revisionIndex + 1} / ${revisionQuestions.length}`;

  document.getElementById("badgeZone").style.display = "none";
document.getElementById("stats").style.display = "none";
document.querySelector(".progress").style.display = "none";
document.getElementById("dailyInfo").style.display = "none";

if (currentQuestion.type === "short") {
  card.innerHTML = `
    <div class="theme">
      ${progressText} — ${currentQuestion.chapterName} — ${currentQuestion.theme}
    </div>

    ${figureHtml}

    <div class="question">
      ${currentQuestion.question}

    <input type="text" id="answerInput" placeholder="Écris ta réponse ici"
      onkeydown="if(event.key === 'Enter') checkShortAnswer()" />

    <div class="actions">
      <button onclick="checkShortAnswer()">Valider</button>
    </div>

    <div id="feedback"></div>
  `;

  renderMath();
  document.getElementById("answerInput").focus();
}

  if (currentQuestion.type === "qcm") {
    currentChoices = shuffledChoices(currentQuestion);
    card.innerHTML = `
      <div class="theme">${progressText} — ${currentQuestion.chapterName} — ${currentQuestion.theme}</div>
      ${figureHtml}
      <div class="question">${currentQuestion.question}</div>
      <div class="choices">
        ${currentChoices.map((choice, index) =>
          `<button onclick="checkQcmAnswer(${index})">${escapeHtml(choice.text)}</button>`
        ).join("")}
      </div>
      <div id="feedback"></div>
    `;
    renderMath()
  }

  if (currentQuestion.type === "cours") {
    card.innerHTML = `
      <div class="theme">${progressText} — ${currentQuestion.chapterName} — ${currentQuestion.theme}</div>
      ${figureHtml}
      <div class="question">${currentQuestion.question}</div>
  
      <div class="actions">
        <button onclick="showCourseAnswer()">Voir la réponse</button>
      </div>
  
      <div id="feedback"></div>
    `;
    renderMath();
  }
}

function recordRevisionResult(isCorrect) {
  if (isCorrect) {
    revisionScore += 1;
  } else {
    const key = currentQuestion.chapterName + " — " + currentQuestion.theme;
    revisionErrors[key] = (revisionErrors[key] || 0) + 1;
  }
}

function nextRevisionQuestion() {
  revisionIndex += 1;
  renderRevisionQuestion();
}

function renderRevisionEnd() {
  document.getElementById("progressBar").style.width = "100%";
  document.getElementById("dailyInfo").textContent = "";
  const card = document.getElementById("card");

  const errors = Object.entries(revisionErrors).sort((a, b) => b[1] - a[1]);
  const errorHtml = errors.length
    ? `<p><strong>À retravailler :</strong></p><ul>${errors.map(([theme, count]) =>
        `<li>${theme} (${count} erreur${count > 1 ? "s" : ""})</li>`
      ).join("")}</ul>`
    : `<p>Bravo, aucune erreur dans cette série.</p>`;

  card.innerHTML = `
    <div class="revision-score">
      <p>Score final :</p>
      <strong>${revisionScore} / ${revisionQuestions.length}</strong>
    </div>
    ${errorHtml}
    <div class="actions">
      <button onclick="startRevisionMode(${revisionQuestions.length})">Refaire une série de ${revisionQuestions.length}</button>
      <button class="secondary" onclick="goHome()">Retour à l'accueil</button>
    </div>
  `;
}

function loadChapter(chapterId) {
  document.getElementById("badgeZone").style.display = "";
  document.getElementById("stats").style.display = "";
  document.querySelector(".progress").style.display = "";
  document.getElementById("dailyInfo").style.display = "";

  revisionMode = false;
  currentChapterId = chapterId;
  currentChapter = chapters[chapterId];
  questions = currentChapter.questions;

  progress = JSON.parse(localStorage.getItem(currentChapter.storageKey)) || {};
  selectedTheme = localStorage.getItem(currentChapter.themeKey) || "Tous";

  document.getElementById("home").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
  document.getElementById("chapterTitle").textContent = currentChapter.title;

  registerRevisionDay();
  renderCard();
}

function goHome() {
  document.getElementById("app").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}

function getQuestionProgress(id) {
  if (!progress[id]) {
    progress[id] = { box: 1, due: todayNumber(), attempts: 0, success: 0 };
  }
  return progress[id];
}

function saveProgress() {
  localStorage.setItem(currentChapter.storageKey, JSON.stringify(progress));
}

function filteredQuestions() {
  if (selectedTheme === "Tous") return questions;
  return questions.filter(q => q.theme === selectedTheme);
}

function selectQuestion() {
  const today = todayNumber();
  const pool = filteredQuestions();
  const dueQuestions = pool.filter(q => getQuestionProgress(q.id).due <= today);

  if (dueQuestions.length === 0) return null;

  let nextQuestion;

  do {
    nextQuestion =
      dueQuestions[Math.floor(Math.random() * dueQuestions.length)];
  } while (
    dueQuestions.length > 1 &&
    currentQuestion &&
    nextQuestion.id === currentQuestion.id
  );

  return nextQuestion;
}

function renderThemeFilter() {
  const themes = ["Tous", ...new Set(questions.map(q => q.theme))];
  const select = document.getElementById("themeFilter");

  select.innerHTML = themes
    .map(t => `<option value="${t}">${t}</option>`)
    .join("");

  select.value = selectedTheme;
}

function changeTheme() {
  selectedTheme = document.getElementById("themeFilter").value;
  localStorage.setItem(currentChapter.themeKey, selectedTheme);
  renderCard();
}


function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getRegularityKey() {
  return "leitner_global_revision_days";
}

function registerRevisionDay() {
  const key = "leitner_global_streak";
  const today = getTodayKey();

  const data = JSON.parse(localStorage.getItem(key)) || {
    lastDay: null,
    streak: 0
  };

  if (data.lastDay === today) {
    return;
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = yesterday.toISOString().slice(0, 10);

  if (data.lastDay === yesterdayKey) {
    data.streak += 1;
  } else {
    data.streak = 1;
  }

  data.lastDay = today;

  localStorage.setItem(key, JSON.stringify(data));
}

function getRevisionDaysCount() {
  const key = "leitner_global_streak";

  const data = JSON.parse(localStorage.getItem(key)) || {
    lastDay: null,
    streak: 0
  };

  return data.streak;
}

function themeMastered(themeName) {
  const themeQuestions = questions.filter(q => q.theme === themeName);
  return themeQuestions.length > 0 && themeQuestions.every(q => getQuestionProgress(q.id).box >= 5);
}

function getBadges() {
  const mastered = questions.filter(q => getQuestionProgress(q.id).box >= 5).length;
  const revisionDays = getRevisionDaysCount();

  return [
    {
      label: "🥉 Explorateur mathématique",
      unlocked: mastered >= 5,
      hint: "5 cartes maîtrisées"
    },
    {
      label: "✅ Prêt en " + currentChapter.title,
      unlocked: questions.length > 0 && questions.every(q => getQuestionProgress(q.id).box >= 5),
      hint: "Toutes les cartes du chapitre sont maîtrisées"
    },
    {
      label: "🌱 Persévérant",
      unlocked: revisionDays >= 3,
      hint: "3 jours de révision"
    },
    {
      label: "🔥 Série solide",
      unlocked: revisionDays >= 8,
      hint: "8 jours de révision"
    },
    {
      label: "💎 Champion de régularité",
      unlocked: revisionDays >= 15,
      hint: "15 jours de révision"
    },
    {
      label: "🎓 Prêt pour le brevet",
      unlocked: questions.length > 0 && mastered === questions.length,
      hint: "Toutes les cartes du chapitre maîtrisées"
    }
  ];
}

function renderBadges() {
  if (revisionMode) {
    document.getElementById("badgeZone").innerHTML = "";
    return;
  }
  const zone = document.getElementById("badgeZone");
  if (!zone) return;

  const badges = getBadges();
  const unlockedCount = badges.filter(b => b.unlocked).length;
  const streak = getRevisionDaysCount();

  zone.innerHTML = `
  <div class="badges-title">
    🏅 Badges débloqués : ${unlockedCount}/${badges.length}
  </div>
  <div class="badge-hint">
    🔥 Série actuelle : ${streak} jour${streak > 1 ? "s" : ""}
  </div>
    <div class="badge-list">
      ${badges.map(b => `
        <span class="badge ${b.unlocked ? "" : "locked"}" title="${b.hint}">
          ${b.label}
        </span>
      `).join("")}
    </div>
    <div class="badge-hint">Les badges grisés ne sont pas encore débloqués.</div>
  `;
}

function renderStats() {
  const pool = filteredQuestions();

  const stats = [1, 2, 3, 4, 5].map(box =>
    pool.filter(q => getQuestionProgress(q.id).box === box).length
  );

  document.getElementById("stats").innerHTML = stats.map((count, index) => `
    <div class="box">
      Boîte ${index + 1}
      <strong>${count}</strong>
    </div>
  `).join("");

  const mastered = pool.filter(q => getQuestionProgress(q.id).box === 5).length;
  const percent = pool.length === 0 ? 0 : Math.round((mastered / pool.length) * 100);
  document.getElementById("progressBar").style.width = percent + "%";

  const today = todayNumber();
  const due = pool.filter(q => getQuestionProgress(q.id).due <= today).length;
  document.getElementById("dailyInfo").textContent =
    `${due} carte(s) à revoir aujourd'hui sur ${pool.length}`;

  renderBadges();
}

function renderFigure(question) {
  if (question.image) {
    const width = question.imageWidth || "100%";

    return `
      <div class="figure">
        <img 
          src="${question.image}" 
          alt="Figure de la question"
          style="max-width:${width}; width:100%; height:auto;"
        >
      </div>
    `;
  }

  if (!question.figure) return "";
  return `<div class="figure">${question.figure}</div>`;
}

function renderMath() {
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetClear();
    MathJax.typesetPromise([document.getElementById("card")]);
  }
}

function renderCard() {
  renderThemeFilter();
  renderStats();

  answered = false;
  currentQuestion = selectQuestion();

  const card = document.getElementById("card");

  if (!currentQuestion) {
    card.innerHTML = `
      <div class="question">Bravo, tu n'as plus de carte à réviser dans ce sous-thème aujourd'hui.</div>
      <p>Tu peux choisir un autre sous-thème, revenir plus tard, ou utiliser le mode évaluation.</p>
    `;
    return;
  }

  const p = getQuestionProgress(currentQuestion.id);
  const figureHtml = renderFigure(currentQuestion);

  if (currentQuestion.type === "short") {
    card.innerHTML = `
      <div class="theme">${currentQuestion.theme} — boîte ${p.box}</div>
  
      ${figureHtml}
  
      <div class="question">
        ${currentQuestion.question}
        ${currentQuestion.note ? `<div class="note">${currentQuestion.note}</div>` : ""}
      </div>
  
      <input type="text" id="answerInput" placeholder="Écris ta réponse ici"
        onkeydown="if(event.key === 'Enter') checkShortAnswer()" />
  
      <div class="actions">
        <button onclick="checkShortAnswer()">Valider</button>
      </div>
  
      <div id="feedback"></div>
    `;
  
    renderMath();
    document.getElementById("answerInput").focus();
  }

  if (currentQuestion.type === "qcm") {
    currentChoices = shuffledChoices(currentQuestion);

    card.innerHTML = `
      <div class="theme">${currentQuestion.theme} — boîte ${p.box}</div>
      ${figureHtml}
      <div class="question">${currentQuestion.question}</div>
      <div class="choices">
        ${currentChoices.map((choice, index) =>
          `<button onclick="checkQcmAnswer(${index})">${escapeHtml(choice.text)}</button>`
        ).join("")}
      </div>
      <div id="feedback"></div>
    `;
    renderMath();
  }

  if (currentQuestion.type === "cours") {
    card.innerHTML = `
      <div class="theme">${currentQuestion.theme} — boîte ${p.box}</div>
      ${figureHtml}
      <div class="question">${currentQuestion.question}</div>
  
      <div class="actions">
        <button onclick="showCourseAnswer()">Voir la réponse</button>
      </div>
  
      <div id="feedback"></div>
    `;
  
    renderMath();
  }
}

function moveCard(isCorrect) {
  const p = getQuestionProgress(currentQuestion.id);
  p.attempts += 1;

  if (isCorrect) {
    p.success += 1;
    p.box = Math.min(5, p.box + 1);
    p.due = todayNumber() + intervals[p.box];
  } else {
    p.box = 1;

    // redemandée pendant la session
    p.due = todayNumber();
  }

  saveProgress();
}

function showFeedback(isCorrect, expectedText = "") {
  const validateButton = document.querySelector("#card .actions button");

if (validateButton) {
  validateButton.style.display = "none";
}

  const feedback = document.getElementById("feedback");
  feedback.className = "feedback " + (isCorrect ? "correct" : "wrong");

  let html = isCorrect
    ? "✅ Bonne réponse !"
    : "❌ À revoir. Réponse attendue : <strong>" + escapeHtml(expectedText) + "</strong>";

  if (currentQuestion.feedback) {
    html += `<div class="feedback-explanation">💡 ${currentQuestion.feedback}</div>`;
  }

  html += `<div class="actions"><button class="success" onclick="revisionMode ? nextRevisionQuestion() : renderCard()">Question suivante</button></div>`;
  feedback.innerHTML = html;
renderMath();
}

function showCourseAnswer() {
  const feedback = document.getElementById("feedback");

  feedback.className = "feedback";
  feedback.innerHTML = `
    <div><strong>Réponse attendue :</strong></div>
    <div class="feedback-explanation">
      ${currentQuestion.answerText}
    </div>

    ${
      currentQuestion.feedback
        ? `<div class="feedback-explanation">💡 ${currentQuestion.feedback}</div>`
        : ""
    }

    <div class="actions">
      <button class="success" onclick="validateCourseAnswer(true)">
        ✅ Ma réponse était correcte
      </button>
      <button class="secondary" onclick="validateCourseAnswer(false)">
        ❌ Ma réponse était fausse.
      </button>
    </div>
  `;

  renderMath();
}

function validateCourseAnswer(isCorrect) {
  if (answered) return;
  answered = true;

  const actions = document.querySelector("#feedback .actions");
  if (actions) {
    actions.style.display = "none";
  }

  moveCard(isCorrect);

  if (revisionMode) {
    recordRevisionResult(isCorrect);
  }

  const feedback = document.getElementById("feedback");

  feedback.innerHTML += `
    <div class="actions">
      <button class="success" onclick="revisionMode ? nextRevisionQuestion() : renderCard()">
        Question suivante
      </button>
    </div>
  `;

  renderMath();
  renderStats();
}

function checkShortAnswer() {
  if (answered) return;
  answered = true;

  const validateButton = document.querySelector("#card .actions button");
if (validateButton) {
  validateButton.style.display = "none";
}

  const userAnswer = normalize(document.getElementById("answerInput").value);
  const validAnswers = currentQuestion.answers.map(normalize);
  const isCorrect = validAnswers.includes(userAnswer);

  if (revisionMode) recordRevisionResult(isCorrect);
  else moveCard(isCorrect);
  showFeedback(isCorrect, currentQuestion.answers[0]);
  renderStats();
}

function checkQcmAnswer(index) {
  if (answered) return;
  answered = true;

  document.querySelectorAll("#card .choices button").forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = "0.5";
    btn.style.cursor = "not-allowed";
  });

  const chosen = currentChoices[index];
  const isCorrect = chosen.isCorrect;
  const expectedText = currentQuestion.choices[currentQuestion.answer];

  if (revisionMode) recordRevisionResult(isCorrect);
  else moveCard(isCorrect);
  showFeedback(isCorrect, expectedText);
  renderStats();
}

function resetProgress() {
  if (confirm("Voulez-vous vraiment réinitialiser votre progression pour ce chapitre ?")) {
    localStorage.removeItem(currentChapter.storageKey);
    progress = {};
    renderCard();
  }
}

function reviewAllToday() {
  if (confirm("Mettre toutes les cartes du chapitre à revoir aujourd'hui ?")) {
    questions.forEach(q => {
      const p = getQuestionProgress(q.id);
      p.due = todayNumber();
    });
    saveProgress();
    renderCard();
  }
}
