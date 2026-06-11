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
  
    parameters: {
      a: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
      b: [-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    },
  
    generate({ a, b }) {
  
      const solution = b - a;
  
      return {
        question: `Résoudre : \\( x + ${a} = ${b} \\)`,
  
        answers: [
          `${solution}`,
          `\\( ${solution} \\)`
        ],
  
        feedback:
          `On soustrait ${a} des deux côtés : \\( x = ${b} - ${a} = ${solution} \\).`
      };
    }
  },
  {
    id: "eq2",
    type: "short",
    theme: "Équations",
  
    parameters: {
      a: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
      b: [-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    },
  
    generate({ a, b }) {
  
      const solution = b + a;
  
      return {
        question: `Résoudre : \\( x - ${a} = ${b} \\)`,
  
        answers: [
          `${solution}`,
          `\\( ${solution} \\)`
        ],
  
        feedback:
          `On ajoute ${a} des deux côtés : \\( x = ${b} + ${a} = ${solution} \\).`
      };
    }
  },
  {
    id: "eq3",
    type: "short",
    theme: "Équations",
  
    parameters: {
      a: [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9,10],
      b: [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9,10]
    },
  
    generate({ a, b }) {
  
      const membreDroite = a * b;
  
      return {
        question: `Résoudre : \\( ${a}x = ${membreDroite} \\)`,
  
        answers: [
          `${b}`,
          `\\( ${b} \\)`
        ],
  
        feedback:
          `On divise les deux membres par ${a} : ` +
          `\\( x = \\dfrac{${membreDroite}}{${a}} = ${b} \\).`
      };
    }
  },
  {
    id: "eq4",
    type: "short",
    theme: "Équations",
  
    parameters: {
      a: [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9,10],
      b: [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10],
      solution: [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10]
    },
  
    generate({ a, b, solution }) {
  
      const c = a * solution + b;
  
      return {
        question: `Résoudre : \\( ${a}x ${b >= 0 ? "+" : ""}${b} = ${c} \\)`,
  
        answers: [
          `${solution}`,
          `\\( ${solution} \\)`
        ],
  
        feedback:
          `On soustrait ${b} puis on divise par ${a}. ` +
          `On obtient \\( x=${solution} \\).`
      };
    }
  },
  {
    id: "eq5",
    type: "qcm",
    theme: "Équations",
  
    parameters: {
      a: [2,3,5,7,11,13,17,19]
    },
  
    generate({ a }) {
  
      return {
        question: `Résoudre \\( x^2 = ${a} \\)`,
  
        choices: [
          `Les solutions sont \\( \\sqrt{${a}} \\) et \\( -\\sqrt{${a}} \\)`,
          `La solution est \\( \\sqrt{${a}} \\)`,
          `La solution est ${a/2}`,
          "Il n'y a pas de solution"
        ],
  
        answer: 0,
  
        feedback:
          `${a} est positif. Les solutions de \\( x^2=${a} \\) sont \\( x=\\sqrt{${a}} \\) et \\( x=-\\sqrt{${a}} \\).`
      };
    }
  },
  {
    id: "eq6",
    type: "qcm",
    theme: "Équations",
  
    parameters: {
      a: [2,3,4,5,6,7,8,9,10]
    },
  
    generate({ a }) {
  
      return {
        question: `Résoudre \\( x^2 = ${a*a} \\)`,
  
        choices: [
          `Les solutions sont ${a} et -${a}`,
          `La solution est ${a}`,
          `La solution est ${a*a/2}`,
          "Il n'y a pas de solution"
        ],
  
        answer: 0,
  
        feedback:
          `${a*a} est positif. Les solutions de \\( x^2=${a*a} \\) sont \\( x=${a} \\) et \\( x=-${a} \\).`
      };
    }
  },
  {
    id: "eq7",
    type: "qcm",
    theme: "Équations",
  
    parameters: {
      a: [-4,-3,5,7,11,13,17,19]
    },
  
    generate({ a }) {
  
      return {
        question: `Résoudre \\( x^2 = ${a} \\)`,
  
        choices: [
          `Les solutions sont \\( \\sqrt{${a}} \\) et \\( -\\sqrt{${a}} \\)`,
          `La solution est \\( \\sqrt{${a}} \\)`,
          `La solution est ${a/2}`,
          "Il n'y a pas de solution"
        ],
  
        answer: 0,
  
        feedback:
          `${a} est positif. Les solutions de \\( x^2=${a} \\) sont \\( x=\\sqrt{${a}} \\) et \\( x=-\\sqrt{${a}} \\).`
      };
    }
  },
  {
    id: "eq8",
    type: "qcm",
    theme: "Équations",
  
    parameters: {
      a: [-16,-11,-9,-5,-4,-2,-1]
    },
  
    generate({ a }) {
  
      const valeurAbsolue = Math.abs(a);
  
      let distracteur1;
      let distracteur2;
  
      if ([1,4,9,16].includes(valeurAbsolue)) {
  
        const racine = Math.sqrt(valeurAbsolue);
  
        distracteur1 =
          `Les solutions sont \\( ${racine} \\) et \\(-${racine}\\)`;
  
        distracteur2 =
          `La solution est \\(${racine}\\)`;
  
      } else {
  
        distracteur1 =
          `Les solutions sont \\( \\sqrt{${valeurAbsolue}} \\) et \\( -\\sqrt{${valeurAbsolue}} \\)`;
  
        distracteur2 =
          `La solution est \\( \\sqrt{${valeurAbsolue}} \\)`;
      }
  
      return {
        question: `Résoudre \\( x^2 = ${a} \\)`,
  
        choices: [
          "Il n'y a pas de solution",
          distracteur1,
          distracteur2,
          `La solution est \\(${a/2} \\)`
        ],
  
        answer: 0,
  
        feedback:
          `\\(${a} \\) est négatif. Or le carré d'un nombre est toujours positif ou nul. L'équation n'a donc aucune solution.`
      };
    }
  }
];
