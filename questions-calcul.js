// Pour ajouter une question, copie-colle un bloc puis modifie les champs.
// type: "short" = réponse courte
// type: "qcm" = choix multiple
// Pour un QCM, answer: 0 signifie que la première réponse est correcte.
// feedback est facultatif : il affiche une aide après la réponse.

const questionsCalcul = [
  {
    id: "cal1",
    type: "short",
    theme: "test",
  
    parameters: {
      a: [-9, -8, -7, -6, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7, 8, 9],
      b: [2, 3, 4, 5, 6, 7, 8, 9]
    },
  
    generate({ a, b }) {
  
      const constant = a * b;
  
      const answer =
        constant >= 0
          ? `${a}x+${constant}`
          : `${a}x${constant}`;
  
      const reversed =
        constant >= 0
          ? `${constant}+${a}x`
          : `${constant}${a >= 0 ? "+" : ""}${a}x`;
  
      return {
        question: `Développer : \\( ${a}(x + ${b}) \\)`,
  
        answers: [
          `\\( ${answer} \\)`,
          answer,
          reversed,
          `\\( ${reversed} \\)`
        ],
  
        feedback:
          `On distribue ${a} sur chaque terme : ` +
          `\\( ${a}\\times x = ${a}x \\) puis ` +
          `\\( ${a}\\times ${b} = ${constant} \\).`
      };
    }
  },
  {
    id: "cal2",
    type: "short",
    theme: "Développer",
    parameters: {
      a: [2, 3, 4, 5, 6, 7, 8, 9],
      b: [2, 3, 4, 5, 6, 7, 8, 9]
    },
    generate({ a, b }) {
      const constant = a * b;

      return {
        question: `Développer : \\( ${a}(x - ${b}) \\)`,
        answers: [
          `\\( ${a}x - ${constant} \\)`,
          `${a}x - ${constant}`,
          `${constant} - ${a}x`,
          `\\( ${constant} - ${a}x \\)`
        ],
        feedback: `On distribue ${a} sur chaque terme : \\( ${a} \\times x = ${a}x \\) puis \\( ${a} \\times ${b} = ${constant} \\).`
      };
    }
  },
  {
    id: "cal3",
    type: "short",
    theme: "Développer",
    parameters: {
      a: [2, 3, 4, 5, 6, 7, 8, 9],
      b: [2, 3, 4, 5, 6, 7, 8, 9]
    },
    generate({ a, b }) {
      const constant = a * b;

      return {
        question: `Développer : \\( - ${a}(x - ${b}) \\)`,
        answers: [
          `\\( - ${a}x + ${constant} \\)`,
          ` - ${a}x + ${constant}`,
          ` ${constant} - ${a}x`,
          `\\( ${constant} - ${a}x \\)`
        ],
        feedback: `On distribue ${a} sur chaque terme : \\( - ${a} \\times x = - ${a}x \\) puis \\( - ${a} \\times (- ${b}) = + ${constant} \\).`
      };
    }
  },
  {
    id: "cal4",
    type: "short",
    theme: "Réduire",
    parameters: {
      a: [2, 3, 4, 5, 6, 7, 8, 9],
      b: [2, 3, 4, 5, 6, 7, 8, 9]
    },
    generate({ a, b }) {
      const constant = a + b;

      return {
        question: `Réduire : \\( ${a}x + ${b}x \\)`,
        answers: [
          `\\( ${constant}x \\)`,
          `${constant}x`
        ],
        feedback: `On additionne les coefficients des termes en \\( x \\) : \\( ${a} + ${b} = ${constant} \\).`
      };
    }
  },
  {
    id: "cal5",
    type: "short",
    theme: "Réduire",
    parameters: {
      a: [5, 6, 7, 8, 9],
      b: [2, 3, 4],
      c: [2, 3, 4, 5, 6, 7, 8, 9]
    },
    generate({ a, b, c }) {
      const termeX = a - b;

      return {
        question: `Réduire : \\( ${a}x + ${c} - ${b}x \\)`,
        answers: [
          `\\( ${termeX}x + ${c} \\)`,
          `${termeX}x + ${c}`,
          `\\(${c} + ${termeX}x  \\)`,
          `${c} + ${termeX}x + `
        ],
        feedback: `\\( ${a}x - ${b}x = ${termeX}x \\) (famille des \\( x \\)). Le \\( ${c} \\) reste un terme constant (famille des nombres).`
      };
    }
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
    theme: "Développer",
    question: "Que signifie développer une expression ?",
    choices: [
      "Transformer un produit en somme ou différence",
      "Transformer une somme ou différence en produit",
      "Remplacer x par un nombre",
      "Supprimer tous les nombres"
    ],
    answer: 0,
    feedback: "Développer, c'est enlever les parenthèses en distribuant le facteur aux nombres dans la parenthèse."
  },
  {
    id: "cal11",
    type: "qcm",
    theme: "Factoriser",
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
    id: "cal13",
    type: "short",
    theme: "Développer",
    parameters: {
      a: [2, 3, 4, 5],
      b: [2, 3, 4, 5],
      c: [1, 2, 3, 4, 5]
    },
    generate({ a, b, c }) {
      const xCoefficient = a * b;
      const constant = a * c;
  
      return {
        question: `Développer : \\( ${a}(${b}x + ${c}) \\)`,
        answers: [
          `\\( ${xCoefficient}x+${constant} \\)`,
          `${xCoefficient}x+${constant}`,
          `${constant}+${xCoefficient}x`,
          `\\( ${constant}+${xCoefficient}x \\)`
        ],
        feedback: `On distribue ${a} : \\( ${a} \\times ${b}x = ${xCoefficient}x \\) puis \\( ${a} \\times ${c} = ${constant} \\).`
      };
    }
  },
  {
    id: "cal14",
    type: "short",
    theme: "Développer",
    note: "Pour écrire \\( x^2 \\), écris x^2.",
    parameters: {
      a: [2, 3, 4, 5],
      b: [2, 3, 4, 5],
      c: [1, 2, 3, 4, 5]
    },
    generate({ a, b, c }) {
      const xCoefficient = a * b;
      const constant = a * c;
  
      return {
        question: `Développer : \\( ${a}x(${b}x + ${c}) \\)`,
        answers: [
          `\\( ${xCoefficient}x^2+${constant}x \\)`,
          `${xCoefficient}x^2+${constant}x`,
          `${constant}x+${xCoefficient}x^2`,
          `\\( ${constant}x +${xCoefficient}x^2 \\)`
        ],
        feedback: `On distribue ${a} : \\( ${a}x \\times ${b}x = ${xCoefficient}x^2 \\) puis \\( ${a}x \\times ${c} = ${constant}x \\).`
      };
    }
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
