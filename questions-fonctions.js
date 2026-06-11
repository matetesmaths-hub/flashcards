// Questions sur les fonctions.
// type: "short" = réponse courte
// type: "qcm" = choix multiple
// feedback est facultatif.

const questionsFonctions = [
  {
    id: "fonc1",
    type: "qcm",
    theme: "Vocabulaire",
    question: "Si \\( f(3) = 7 \\), alors 7 est...",
    choices: [
      "l'image de 3 par la fonction f",
      "un antécédent de 3",
      "la fonction",
      "le coefficient directeur"
    ],
    answer: 0,
    feedback: "Dans \\( f(3)=7 \\), le nombre 7 est l'image de 3."
  },
  {
    id: "fonc2",
    type: "qcm",
    theme: "Vocabulaire",
    question: "Si \\( f(3) = 7 \\), alors 3 est...",
    choices: [
      "un antécédent de 7 par la fonction f",
      "l'image de 7",
      "la valeur de la fonction",
      "l'ordonnée à l'origine"
    ],
    answer: 0,
    feedback: "Le nombre que l'on met entre parenthèses est un antécédent."
  },
  {
    id: "fonc3",
    type: "short",
    theme: "Calculer une image",
    question: "On donne \\( f(x) = 2x + 3 \\). Calculer \\( f(4) \\).",
    answers: ["11"],
    feedback: "On remplace \\( x \\) par 4 : \\( f(4)=2 \\times 4+3=11 \\)."
  },
  {
    id: "fonc4",
    type: "short",
    theme: "Calculer une image",
    question: "On donne \\(g(x) = x^2 - 1\\). Calculer \\( g(5) \\).",
    answers: ["24"],
    feedback: "On remplace \\( x \\) par 5 : \\( 5^2 - 1 = 25 - 1 = 24 \\)."
  },
  {
    id: "fonc5",
    type: "short",
    theme: "Calculer une image",
    question: "On donne \\( h(x) = 3x - 7 \\). Calculer \\( h(2) \\).",
    answers: ["-1"],
    feedback: "On remplace \\( x \\) par 2 : \\( h(2)= 3 \\times 2-7=6-7=-1 \\)."
  },
  {
    id: "fonc6",
    type: "qcm",
    theme: "Fonctions affines",
    question: "Une fonction affine s'écrit sous la forme...",
    choices: [
      "\\( f(x) = ax + b \\)",
      "\\( f(x) = ax^2 + b \\)",
      "\\( f(x) = \\frac{a}{x} \\)",
    ],
    answer: 0,
    feedback: "Une fonction affine est de la forme f(x)=ax+b."
  },
  {
    id: "fonc7",
    type: "qcm",
    theme: "Fonctions affines",
  
    parameters: {
      a: [-9,-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9],
      b: [-9,-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9]
    },
  
    generate({ a, b }) {
  
      const ecriture = b >= 0
        ? `${a}x + ${b}`
        : `${a}x - ${Math.abs(b)}`;
  
      return {
        question: `Dans \\( f(x) = ${ecriture} \\), le coefficient directeur est...`,
  
        choices: [
          `\\( ${a} \\)`,
          `\\( ${b} \\)`,
          `\\( - ${b} \\)`,
          `\\( ${a}x \\)`
        ],
  
        answer: 0,
  
        feedback:
          `Dans une fonction affine de la forme \\( ax+b \\), le coefficient directeur est \\( a \\). Ici \\( a=${a} \\).`
      };
    }
  },
  {
    id: "fonc8",
    type: "qcm",
    theme: "Fonctions affines",
  
    parameters: {
      a: [-9,-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9],
      b: [-9,-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9]
    },
  
    generate({ a, b }) {
  
      const ecriture = b >= 0
        ? `${a}x + ${b}`
        : `${a}x - ${Math.abs(b)}`;
  
      return {
        question: `Dans \\( f(x) = ${ecriture} \\), l'ordonnée à l'origine est...`,
  
        choices: [
          `\\( ${b} \\)`,
          `\\( ${a} \\)`,
          `\\( - ${b} \\)`,
          `\\( ${a}x \\)`
        ],
  
        answer: 0,
  
        feedback:
          `Dans une fonction affine de la forme \\( ax+b \\), l'ordonnée à l'origine est \\( b \\). Ici \\( b=${b} \\).`
      };
    }
  }
];
