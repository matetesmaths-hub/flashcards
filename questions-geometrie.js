const figurePythagore = `
<svg viewBox="0 0 520 280" role="img" aria-label="Triangle rectangle ABC">
  <line x1="90" y1="220" x2="390" y2="220" stroke="#222" stroke-width="4"/>
  <line x1="90" y1="220" x2="90" y2="70" stroke="#222" stroke-width="4"/>
  <line x1="90" y1="70" x2="390" y2="220" stroke="#222" stroke-width="4"/>
  <path d="M90 195 L115 195 L115 220" fill="none" stroke="#222" stroke-width="3"/>
  <text x="70" y="238" font-size="24">A</text>
  <text x="70" y="62" font-size="24">B</text>
  <text x="398" y="238" font-size="24">C</text>
  <text x="220" y="248" font-size="22">4 cm</text>
  <text x="35" y="150" font-size="22">3 cm</text>
  <text x="240" y="130" font-size="22">?</text>
</svg>`;

const figureThales = `
<svg viewBox="0 0 520 300" role="img" aria-label="Configuration de Thalès">
  <line x1="70" y1="250" x2="440" y2="70" stroke="#222" stroke-width="4"/>
  <line x1="70" y1="250" x2="455" y2="250" stroke="#222" stroke-width="4"/>
  <line x1="205" y1="184" x2="210" y2="250" stroke="#1f6f8b" stroke-width="4"/>
  <line x1="405" y1="87" x2="410" y2="250" stroke="#1f6f8b" stroke-width="4"/>
  <text x="50" y="272" font-size="24">A</text>
  <text x="190" y="178" font-size="24">D</text>
  <text x="194" y="274" font-size="24">E</text>
  <text x="425" y="70" font-size="24">B</text>
  <text x="430" y="274" font-size="24">C</text>
  <text x="220" y="178" font-size="20">(DE)</text>
  <text x="415" y="160" font-size="20">(BC)</text>
  <text x="270" y="40" font-size="22">(DE) ∥ (BC)</text>
</svg>`;

const figureTrigo = `
<svg viewBox="0 0 520 290" role="img" aria-label="Triangle rectangle avec angle">
  <line x1="90" y1="230" x2="420" y2="230" stroke="#222" stroke-width="4"/>
  <line x1="420" y1="230" x2="420" y2="70" stroke="#222" stroke-width="4"/>
  <line x1="90" y1="230" x2="420" y2="70" stroke="#222" stroke-width="4"/>
  <path d="M420 205 L395 205 L395 230" fill="none" stroke="#222" stroke-width="3"/>
  <path d="M125 230 A40 40 0 0 1 139 198" fill="none" stroke="#d17b00" stroke-width="5"/>
  <text x="72" y="252" font-size="24">A</text>
  <text x="430" y="252" font-size="24">B</text>
  <text x="430" y="67" font-size="24">C</text>
  <text x="145" y="218" font-size="22" fill="#d17b00">35°</text>
  <text x="235" y="258" font-size="22">adjacent</text>
  <text x="430" y="155" font-size="22">opposé</text>
  <text x="230" y="130" font-size="22">hypoténuse</text>
</svg>`;

const questionsGeometrie = [
  {
    id: "outil1",
    type: "qcm",
    theme: "Choisir le bon outil",
    figure: figurePythagore,
    question: "Quel outil mathématique permet de calculer la longueur manquante ?",
    choices: [
      "Le théorème de Pythagore",
      "Le théorème de Thalès",
      "La trigonométrie",
      "La réciproque de Thalès"
    ],
    answer: 0,
    feedback: "Le triangle est rectangle et on connaît deux longueurs : c'est une situation de Pythagore."
  },
  {
    id: "outil2",
    type: "qcm",
    theme: "Choisir le bon outil",
    question: "Dans un triangle rectangle, pour calculer une longueur à partir de deux autres longueurs, on utilise plutôt…",
    choices: [
      "Le théorème de Pythagore",
      "Le théorème de Thalès",
      "La trigonométrie",
      "Les triangles semblables"
    ],
    answer: 0,
    feedback: "Pythagore sert à calculer une longueur dans un triangle rectangle quand on connaît deux longueurs."
  },
  {
    id: "outil3",
    type: "qcm",
    theme: "Choisir le bon outil",
    question: "Dans un triangle rectangle, si on connaît un angle et une longueur, on utilise plutôt…",
    choices: [
      "La trigonométrie",
      "La réciproque de Thalès",
      "Le théroème de Pythagore",
      "Le théorème de Thalès"
    ],
    answer: 0,
    feedback: "La trigonométrie relie un angle et des longueurs dans un triangle rectangle."
  },
  {
    id: "outil4",
    type: "qcm",
    theme: "Choisir le bon outil",
    image: "images/thales1.png",
    imageWidth: "300px",
    question: "Quel théorème peut-on utiliser sur cette figure ?",
    choices: [
      "Le théorème de Thalès",
      "Le théorème de Pythagore",
      "La trigonométrie",
      "La réciproque de Pythagore"
    ],
    answer: 0,
    feedback: "On observe des droites parallèles et des points alignés."
  },
  {
    id: "pyt1",
    type: "qcm",
    theme: "Pythagore",
    question: "Dans un triangle rectangle, le côté le plus long s'appelle…",
    choices: [
      "L'hypoténuse",
      "La médiane",
      "La hauteur",
      "Le rayon"
    ],
    answer: 0,
    feedback: "L'hypoténuse est toujours le côté opposé à l'angle droit."
  },
  {
    id: "pyt2",
    type: "short",
    theme: "Pythagore",
    question: "Un triangle rectangle a pour côtés de l'angle droit 3 cm et 4 cm. Quelle est la longueur de l'hypoténuse ?",
    answers: ["5", "5cm", "5 cm"],
    feedback: "3² + 4² = 9 + 16 = 25, donc l'hypoténuse mesure 5 cm."
  },
  {
    id: "tha1",
    type: "qcm",
    theme: "Thalès",
    question: "Pour appliquer le théorème de Thalès, il faut notamment…",
    choices: [
      "Deux droites parallèles",
      "Un triangle rectangle",
      "Un angle de 90°",
      "Un cercle"
    ],
    answer: 0,
    feedback: "La condition essentielle de Thalès est la présence de droites parallèles."
  },
  {
    id: "trigo1",
    type: "qcm",
    theme: "Trigonométrie",
    question: "Dans un triangle rectangle, quelle est l'expression du cosinus",
    choices: [
      "cosinus (angle) x hypoténuse = côté adjacent",
      "cosinus (angle) x hypoténuse = côté opposé",
      "cosinus (angle) x côté adjacent = côté opposé",
    ],
    answer: 0,
    feedback: "CAH : cosinus (angle) x hypoténuse = côté adjacent."
  },
  {
    id: "trigo2",
    type: "qcm",
    theme: "Trigonométrie",
    question: "Dans un triangle rectangle, quelle est l'expression du sinus",
    choices: [
      "sinus (angle) x hypoténuse = côté opposé",
      "sinus (angle) x hypoténuse = côté adjacent",
      "sinus (angle) x côté adjacent = côté opposé",
    ],
    answer: 0,
    feedback: "SOH : sinus (angle) x hypoténuse = côté opposé."
  },
  {
    id: "trigo3",
    type: "qcm",
    theme: "Trigonométrie",
    question: "Dans un triangle rectangle, quelle est l'expression de la tangente",
    choices: [
      "tangente (angle) x côté adjacent = côté opposé",
      "tangente (angle) x hypoténuse = côté adjacent",
      "tangente (angle) x hypoténuse = côté opposé",
    ],
    answer: 0,
    feedback: "TOA : tangente (angle) x côté adjacent = côté opposé."
  }
  
];
