// Pour ajouter une question, copie-colle un bloc puis modifie les champs.
// type: "short" = réponse courte
// type: "qcm" = choix multiple
// Pour un QCM, answer: 0 signifie que la première réponse est correcte.
// feedback est facultatif : il affiche une aide après la réponse.

const questionsCalcul = [
  {
    id: "cal1",
    type: "short",
    theme: "Développer",
    question: "Développer : \\( 3(x + 4) \\)",
    answers: ["\\( 3x+12 \\)","3x+12", "12+3x"],
    feedback: "On distribue 3 sur chaque terme : \\( 3 \\times x \\) puis \\( 3 \\times 4\\)."
  },
  {
    id: "cal2",
    type: "short",
    theme: "Développer",
    question: "Développer : \\(5(2x - 3)\\)",
    answers: ["\\( 10x-15 \\)", "10x-15", "-15+10x"],
    feedback: "On distribue 5 sur chaque terme : \\( 5 \\times 2x \\) puis \\( 5 × (-3) = -15 \\)."
  },
  {
    id: "cal3",
    type: "short",
    theme: "Développer",
    question: "Développer : \\( -2(x + 6) \\)",
    answers: ["\\( -2x-12 \\)", "-2x-12", "-12-2x"],
    feedback: "On distribue -2 : \\(-2 \\times x \\) puis \\(-2 \\times 6 \\)."
  },
  {
    id: "cal4",
    type: "short",
    theme: "Réduire",
    question: "Réduire : \\( 4x + 7x \\)",
    answers: ["\\( 11x \\)", "11x"],
    feedback: "On additionne les coefficients des termes en \\( x \\) : 4 + 7 = 11."
  },
  {
    id: "cal5",
    type: "short",
    theme: "Réduire",
    question: "Réduire : \\( 8x - 3x + 2 \\)",
    answers: ["\\( 5x+2 \\)", "5x+2", "2+5x"],
    feedback: "\\( 8x - 3x = 5x \\) (famille des \\( x \\). Le 2 reste un terme constant (famille des nombres)."
  },
  {
    id: "cal6",
    type: "short",
    theme: "Réduire",
    question: "Réduire : \\( 5x + 3 - 2x + 7 \\)",
    answers: ["\\( 3x+10 \\)", "3x+10", "10+3x"],
    feedback: "Famille des \\( x \\) : \\( 5x - 2x = 3x \\) ; Famille des nombres : \\( 3 + 7  10 \\)."
  },
  {
    id: "cal7",
    type: "short",
    theme: "Factoriser",
    question: "Factoriser : \\( 7x + 14 \\)",
    answers: ["\\( 7(x+2) \\)", "7(x+2)"],
    feedback: "Le facteur commun est 7 : \\( 14 = 7 \\times 2 \\)."
  },
  {
    id: "cal8",
    type: "short",
    theme: "Factoriser",
    question: "Factoriser : \\( 9x - 9 \\)",
    answers: ["\\( 9(x-1) \\)", "9(x-1)"],
    feedback: "Le facteur commun est 9 : \\( 9 = 9 \\times 1 \\)."
  },
  {
    id: "cal9",
    type: "short",
    theme: "Factoriser",
    question: "Factoriser : \\( x² + 4x \\)",
    answers: ["\\( x(x+4) \\)", "x(x+4)"],
    feedback: "Le facteur commun est x car \\( x^2 = x \\times x \\)  ."
  },
  {
    id: "cal10",
    type: "qcm",
    theme: "Vocabulaire",
    question: "Que signifie développer une expression ?",
    choices: [
      "Transformer un produit en somme ou différence",
      "Transformer une somme ou différence en produit",
      "Remplacer x par un nombre",
      "Supprimer tous les nombres"
    ],
    answer: 0,
    feedback: "Développer, c'est enlever les parenthèses quand c'est possible."
  },
  {
    id: "cal11",
    type: "qcm",
    theme: "Vocabulaire",
    question: "Que signifie factoriser une expression ?",
    choices: [
      "Transformer une somme ou différence en produit",
      "Transformer un produit en somme ou différence",
      "Remplacer x par un nombre",
      "Changer le signe de tous les termes"
    ],
    answer: 0,
    feedback: "Factoriser, c'est faire apparaître un produit  (des facteurs !)."
  },
  {
    id: "eq1",
    type: "short",
    theme: "Équations",
    question: "Résoudre : \\( x + 7 = 12 \\)",
    answers: ["5"],
    feedback: "On soustrait 7 des deux côtés : \\( x = 12 - 7 = 5 \\)."
  },
  {
    id: "eq2",
    type: "short",
    theme: "Équations",
    question: "Résoudre : \\( x - 4 = 9 \\)",
    answers: ["13"],
    feedback: "On ajoute 4 des deux côtés : \\( x = 9 + 4 = 13\\)."
  },
  {
    id: "eq3",
    type: "short",
    theme: "Équations",
    question: "Résoudre : \\( 3x = 18 \\)",
    answers: ["6"],
    feedback: "On divise par 3 : \\(x = \\frac{18}{3} = 6 \\)."
  },
  {
    id: "eq4",
    type: "short",
    theme: "Équations",
    question: "Résoudre : \\( 2x + 5 = 17 \\)",
    answers: ["6"],
    feedback: "On commence par soustraire 5 : \\( 2x = 12 \\), puis on divise par 2 : \\( x = \\frac{12}{2} =6 \\)."
  },
  {
    id: "eq5",
    type: "qcm",
    theme: "Équations",
    question: "Résoudre \\( x^2 = 13\\)",
    choices: [
      "Les solutions sont \\( \\sqrt{13} \\) et \\( - \\sqrt{13} \\) ",
      "La solution est \\( \\sqrt{13} \\)",
      "La solution est 6,5",
      "Il n'y a pas de solution."
    ],
    answer: 0,
    feedback: "13 est positif, il y a deux solutions \\( \\sqrt{13} \\) et \\( - \\sqrt{13} = -13 \\)"
  },
  {
    id: "eq6",
    type: "qcm",
    theme: "Équations",
    question: "Résoudre \\( x^2 = 25\\)",
    choices: [
      "Les solutions sont 5 et - 5",
      "La solution est 5",
      "La solution est 12,5",
      "Il n'y a pas de solution."
    ],
    answer: 0,
    feedback: "25 est positif, il y a deux solutions \\( \\sqrt{25} = 5 \\) et \\( - \\sqrt{25} = -5 \\)"
  }
];
