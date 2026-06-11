function pgcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
  
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
  
    return a;
  }
  
  function simplifyFraction(num, den) {
    const diviseur = pgcd(num, den);
  
    return {
      num: num / diviseur,
      den: den / diviseur
    };
  }
  

const questionsFractions = [

  {
    id: "frac1",
    type: "short",
    theme: "Ecriture décimale",
  
    parameters: {
      a: [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10]
    },
  
    generate({ a }) {
  
      const decimal = (a / 2).toString().replace(".", ",");
  
      return {
        question: `Donner l'écriture décimale de \\( \\dfrac{${a}}{2} \\)`,
  
        answers: [
          decimal,
          decimal.replace(",", ".")
        ],
  
        feedback: `\\( \\dfrac{${a}}{2}=${decimal} \\).`
      };
    }
  },
      {
        id: "frac2",
        type: "short",
        theme: "Simplifier",
      
        parameters: {
          a: [2,3,4,5,6,7,8,9],
          b: [2,3,4,5,6,7,8,9]
        },
      
        generate({ a, b }) {
      
          const num = a * b;
          const den = a * 2;
      
          const simplifiee = simplifyFraction(num, den);
      
          let answers;
      
          if (simplifiee.den === 1) {
            answers = [
              `${simplifiee.num}`,
              `\\( ${simplifiee.num} \\)`
            ];
          } else {
            answers = [
              `${simplifiee.num}/${simplifiee.den}`,
              `\\dfrac{${simplifiee.num}}{${simplifiee.den}}`
            ];
          }
      
          return {
            question: `Simplifier : \\( \\dfrac{${num}}{${den}} \\)`,
      
            answers,
      
            feedback:
              `Le PGCD de ${num} et ${den} est ${pgcd(num, den)}. On divise le numérateur et le dénominateur par ce nombre.`
          };
        }
      },
      {
        id: "frac4",
        type: "short",
        theme: "AdditionSoustraction",
      
        parameters: {
          a: [1,2,3,4,5,6,7,8],
          b: [1,2,3,4,5,6,7,8],
          d: [2,3,4,5,6,7,8,9,10]
        },
      
        generate({ a, b, d }) {
      
          return {
            question:
              `Calculer : \\( \\dfrac{${a}}{${d}} + \\dfrac{${b}}{${d}} \\)`,
      
            answers: [
              `${a+b}/${d}`,
              `\\dfrac{${a+b}}{${d}}`
            ],
      
            feedback:
              `On conserve le dénominateur et on additionne les numérateurs.`
          };
        }
      },
      {
        id: "frac5",
        type: "short",
        theme: "AdditionSoustraction",
      
        parameters: {
          a: [4,5,6,7,8,9,10],
          b: [1,2,3],
          d: [2,3,4,5,6,7,8]
        },
      
        generate({ a, b, d }) {
      
          return {
            question:
              `Calculer : \\( \\dfrac{${a}}{${d}} - \\dfrac{${b}}{${d}} \\)`,
      
            answers: [
              `${a-b}/${d}`,
              `\\dfrac{${a-b}}{${d}}`
            ],
      
            feedback:
              `On conserve le dénominateur et on soustrait les numérateurs.`
          };
        }
      },
      {
        id: "frac5",
        type: "short",
        theme: "AdditionSoustraction",
      
        parameters: {
          a: [4,5,6,7,8,9,10],
          b: [1,2,3],
          d: [2,3,4,5,6,7,8]
        },
      
        generate({ a, b, d }) {
      
          return {
            question:
              `Calculer : \\( \\dfrac{${a}}{${d}} - \\dfrac{${b}}{${d}} \\)`,
      
            answers: [
              `${a-b}/${d}`,
              `\\dfrac{${a-b}}{${d}}`
            ],
      
            feedback:
              `On conserve le dénominateur et on soustrait les numérateurs.`
          };
        }
      },
      {
        id: "frac7",
        type: "short",
        theme: "MultiplicationDivision",
      
        parameters: {
          a: [1,2,3,4,5],
          b: [2,3,4,5,6],
          c: [1,2,3,4,5],
          d: [2,3,4,5,6]
        },
      
        generate({ a, b, c, d }) {
      
          return {
            question:
              `Calculer : \\( \\dfrac{${a}}{${b}} \\div \\dfrac{${c}}{${d}} \\)`,
      
            answers: [
              `${a*d}/${b*c}`,
              `\\dfrac{${a*d}}{${b*c}}`
            ],
      
            feedback:
              `Diviser par une fraction revient à multiplier par son inverse.`
          };
        }
      },
      {
        id: "frac8",
        type: "short",
        theme: "Ecriture décimale",
      
        parameters: {
          a: [-3,-1,1,3]
        },
      
        generate({ a }) {
      
          const decimal = (a / 4).toString().replace(".", ",");
      
          return {
            question: `Donner l'écriture décimale de \\( \\dfrac{${a}}{4} \\)`,
      
            answers: [
              decimal,
              decimal.replace(",", ".")
            ],
      
            feedback: `\\( \\dfrac{${a}}{4}=${decimal} \\).`
          };
        }
      },
      {
        id: "frac9",
        type: "short",
        theme: "Ecriture décimale",
      
        parameters: {
          a: [10,100,1000]
        },
      
        generate({ a }) {
      
          const decimal = (1 / a).toString().replace(".", ",");
      
          return {
            question: `Donner l'écriture décimale de \\( \\dfrac{1}{${a}} \\)`,
      
            answers: [
              decimal,
              decimal.replace(",", ".")
            ],
      
            feedback: `\\( \\dfrac{1}{${a}}=${decimal} \\).`
          };
        }
      },
      {
        id: "frac10",
        type: "short",
        theme: "Ecriture décimale",
      
        parameters: {
          a: [11,17,23,37,42,56,75,89,122,13,22,4,7,6,18]
        },
      
        generate({ a }) {
      
          return {
            question: `Donner l'écriture décimale de \\( \\dfrac{${a}}{${a}} \\)`,
      
            answers: [
              "1",
          
            ],
      
            feedback: `Tout nombre non nul divisé par lui-même vaut 1.`
          };
        }
      },
      {
        id: "frac11",
        type: "short",
        theme: "Ecriture décimale",
      
        parameters: {
          a: [12,18,25,37,48,56,72,85,99,5,1,7,9,15,4,48,19]
        },
      
        generate({ a }) {
      
          return {
            question: `Donner l'écriture décimale de \\( \\dfrac{${a}}{1} \\)`,
      
            answers: [
              `${a}`,
            ],
      
            feedback: `Diviser un nombre par 1 ne change pas sa valeur.`
          };
        }
      }
  ];
  