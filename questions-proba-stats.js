// Questions sur probabilités et statistiques.
// type: "short" = réponse courte
// type: "qcm" = choix multiple
// feedback est facultatif.

const questionsProbaStats = [
  {
    id: "proba1",
    type: "qcm",
    theme: "Probabilités",
    question: "Avec une pièce équilibrée, la probabilité d'obtenir pile est...",
    choices: [
      "1/2",
      "1",
      "2",
      "0"
    ],
    answer: 0,
    feedback: "Il y a deux issues équiprobables : pile ou face."
  },
  {
    id: "proba2",
    type: "qcm",
    theme: "Probabilités",
    question: "Une probabilité est toujours comprise entre...",
    choices: [
      "0 et 1",
      "1 et 10",
      "-1 et 1",
      "0 et 100 uniquement"
    ],
    answer: 0,
    feedback: "Une probabilité peut aussi s'écrire en pourcentage, mais sa valeur est entre 0 et 1."
  },
  {
    id: "proba3",
    type: "short",
    theme: "Probabilités",
    question: "Dans un dé équilibré, quelle est la probabilité d'obtenir un 6 ?",
    answers: ["1/6"],
    feedback: "Il y a 1 issue favorable sur 6 issues possibles."
  },
  {
    id: "proba4",
    type: "short",
    theme: "Probabilités",
    question: "Dans un dé équilibré, quelle est la probabilité d'obtenir un nombre pair ?",
    answers: ["1/2", "3/6"],
    feedback: "Les nombres pairs sont 2, 4 et 6 : 3 issues favorables sur 6."
  },
  {
    id: "proba5",
    type: "qcm",
    theme: "Probabilités",
    question: "Si un événement est certain, sa probabilité vaut...",
    choices: [
      "1",
      "0",
      "1/2",
      "100"
    ],
    answer: 0,
    feedback: "Un événement certain a une probabilité égale à 1."
  },
  {
    id: "stats1",
    type: "short",
    theme: "Statistiques",
    question: "Calculer la moyenne de 5, 12 et 10.",
    answers: ["9"],
    feedback: "On additionne les valeurs puis on divise par 3 : \\( \\frac{5+12+10}{3} = \\frac{27}{3} = 9.\\)"
  },
  {
    id: "stats2",
    type: "short",
    theme: "Statistiques",
    question: "Calculer l'étendue de la série : 4 ; 7 ; 10 ; 13.",
    answers: ["9"],
    feedback: "Étendue = maximum - minimum = 13 - 4 = 9."
  },
  {
    id: "stats3",
    type: "qcm",
    theme: "Statistiques",
    question: "La médiane d'une série rangée est...",
    choices: [
      "une valeur qui partage la série en deux groupes de même effectif",
      "la plus grande valeur",
      "la moyenne des valeurs",
      "la différence entre maximum et minimum"
    ],
    answer: 0,
    feedback: "La médiane coupe la série ordonnée en deux parties de même effectif."
  },
  {
    id: "stats4",
    type: "short",
    theme: "Statistiques",
    question: "Quelle est la médiane de la série : 3 ; 5 ; 8 ; 10 ; 12 ?",
    answers: ["8"],
    feedback: "Il y a 5 valeurs rangées dans l'ordre croissant : la médiane est la 3e valeur."
  },
  {
    id: "stats5",
    type: "qcm",
    theme: "Statistiques",
    question: "L'étendue d'une série statistique mesure...",
    choices: [
      "l'écart entre la valeur maximale et la valeur minimale",
      "la moyenne des valeurs",
      "le nombre de valeurs",
      "la valeur centrale"
    ],
    answer: 0,
    feedback: "Étendue = maximum - minimum."
  },
  {
    id: "stats6",
    type: "qcm",
    theme: "Statistiques",
    question: "La médiane d'une série statistique est...",
    choices: [
      "la valeur centrale",
      "l'écart entre la valeur maximale et la valeur minimale",
      "la moyenne des valeurs",
      "le nombre de valeurs",
    ],
    answer: 0,
    feedback: "Étendue = maximum - minimum."
  }
];
