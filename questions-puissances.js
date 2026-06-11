function expo(n) {
  return n >= 0 ? n : `{${n}}`;
}

const questionsPuissances = [

  {
    id: "puis1",
    type: "short",
    theme: "Règles de calcul",
    note: "Utiliser ^ devant l'exposant. Exemple : si ta réponse est  \\(2^3 \\), écrire 2^3",
  
    parameters: {
      a: [2,3,4,5,6,7,8,9],
      b: [2,3,4,5,6,7,8,9],
      c: [2,3,4,5,6,7,8,9]
    },
  
    generate({ a, b, c }) {
  
      const exponent = b + c;
  
      return {
        question:
          `Écrire sous la forme \\( ${a}^n \\) : ` +
          `\\( ${a}^{${b}} \\times ${a}^{${c}} \\)`,
  
        answers: [
          `${a}^${exponent}`,
          `${a}^(${exponent})`,
          `\\(${a}^{${exponent}}\\)`
        ],
  
        feedback:
          `Quand on multiplie des puissances de même base, on additionne les exposants : ` +
          `\\( ${a}^{${b}} \\times ${a}^{${c}} = ${a}^{${exponent}} \\).`
      };
    }
  },
  {
    id: "puis2",
    type: "qcm",
    theme: "Règles de calcul",
  
    parameters: {
      a: [2,3,4,5,6,7,8,9],
      b: [7,8,9,5,6],
      c: [-2,-3,-4,-5,-6]
    },
  
    generate({ a, b, c }) {
  
      return {
        question: `Écrire sous la forme d'une puissance : \\( ${a}^{${b}} \\times ${a}^{${c}} \\)`,
  
        choices: [
          `\\( ${a}^{${b+c}} \\)`,
          `\\( ${a}^{${b*c}} \\)`,
          `\\( ${a*a}^{${b+c}} \\)`,
          `\\( ${a}^{${b-c}} \\)`
        ],
  
        answer: 0,
  
        feedback:
          `Quand on multiplie des puissances de même base, on additionne les exposants : ` +
          `\\( ${a}^{${b}} \\times ${a}^{${c}} = ${a}^{${b+c}} \\).`
      };
    }
  },
  {
    id: "puis3",
    type: "short",
    theme: "Règles de calcul",
    note: "Utiliser ^ devant l'exposant. Exemple : si ta réponse est  \\(2^3 \\), écrire 2^3",
  
    parameters: {
      a: [2,3,4,5,6,7,8,9],
      b: [2,3,4,5,6,7,8,9],
      c: [-2,-3,-4,-5,-6,-7,-8,-9]
    },
  
    generate({ a, b, c }) {
  
      const exponent = b - c;
  
      return {
        question:
          `Écrire sous la forme \\( ${a}^n \\) : ` +
          `\\( \\dfrac{${a}^{${b}}}{${a}^{${c}}} \\)`,
  
        answers: [
          `${a}^${exponent}`,
          `${a}^(${exponent})`,
          `\\(${a}^{${exponent}}\\)`
        ],
  
        feedback:
          `Quand on multiplie des puissances de même base, on soustrait les exposants : ` +
          `\\( \\dfrac{${a}^{${b}}}{${a}^{${c}}} = ${a}^{${b} - (${c})} = ${a}^{${exponent}} \\).`
      };
    }
  },
  {
    id: "puis4",
    type: "short",
    theme: "Règles de calcul",
    note: "Utiliser ^ devant l'exposant. Exemple : si ta réponse est  \\(2^3 \\), écrire 2^3",
  
    parameters: {
      a: [2,3,4,5,6,7,8,9],
      b: [2,3,4,5,6,7,8,9],
      c: [2,3,4,5,6,7,8,9]
    },
  
    generate({ a, b, c }) {
  
      const exponent = b - c;
  
      return {
        question:
          `Écrire sous la forme \\( ${a}^n \\) : ` +
          `\\( \\dfrac{${a}^{${b}}}{${a}^{${c}}} \\)`,
  
        answers: [
          `${a}^${exponent}`,
          `${a}^(${exponent})`,
          `\\(${a}^{${exponent}}\\)`
        ],
  
        feedback:
          `Quand on multiplie des puissances de même base, on soustrait les exposants : ` +
          `\\( \\dfrac{${a}^{${b}}}{${a}^{${c}}} = ${a}^{${exponent}} \\).`
      };
    }
  },
  {
    id: "puis5",
    type: "short",
    theme: "Règles de calcul",
    note: "Utiliser ^ devant l'exposant. Exemple : si ta réponse est  \\(2^3 \\), écrire 2^3",
  
    parameters: {
      a: [2,3,4,5,6,7,8,9],
      b: [-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9],
      c: [-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9]
    },
  
    generate({ a, b, c }) {
  
      const exponent = b * c;
  
      return {
        question:
        `Écrire sous la forme \\( ${a}^n \\) : ` +
        `\\( (${a}^{${expo(b)}})^{${expo(c)}} \\)`,
  
        answers: [
          `${a}^${exponent}`,
          `${a}^(${exponent})`,
          `\\(${a}^{${exponent}}\\)`
        ],
  
        feedback:
          `Quand on prend la puissance d'une puissance, on multiplie les exposants : ` +
          `\\( \\left( ${a}^{${b}} \\right) ^{${c}} = ${a}^{${exponent}} \\).`
      };
    }
  },
  
  {
    id: "puis20",
    type: "short",
    theme: "Notation scientifique",
  
    note: "Utiliser * pour \\( \\times \\) et ^ pour l'exposant. Exemple : 4,2 * 10^3.",
  
    parameters: {
      a: [
        // nombre à 1, 2 ou 3 chiffres significatifs
        12, 15, 18, 25, 32, 45, 51, 63, 75, 88, 96,
        134, 163, 178, 248, 314, 463, 695, 736, 912
      ],
      n: [2, 3, 4, 5, 6]
    },
  
    generate({ a, n }) {
  
      const value = a * Math.pow(10, n);
  
      const formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  
      // calcul de la notation scientifique correcte
      const digits = a.toString().length;
      const exponent = n + (digits - 1);
      const coefficient = (a / Math.pow(10, digits - 1))
        .toString()
        .replace(".", ",");
  
      return {
        question: `Écrire ${formatted} en notation scientifique.`,
  
        answers: [
          `${coefficient}*10^${exponent}`,
          `${coefficient}×10^${exponent}`,
          `\\(${coefficient} \\times 10^{${exponent}}\\)`
        ],
  
        feedback:
          `${formatted} = \\( ${coefficient} × 10^${exponent}\\). ` +
          `On place la virgule après le premier chiffre non nul.`
      };
    }
  },
    {id: "puis30",
      type: "qcm",
      theme: "Notation scientifique",
      question: "Lequel de ces nombres est écrit en notation scientifique ?",
      choices: [
        "\\( 4 \\times 10^5 \\)",
        "\\( 0,9 \\times 10^3 \\)",
        "\\( 12 \\times 10^1 \\)"
      ],
      answer: 0,
      feedback: "Quand on multiplie des puissances de même base, on additionne les exposants."
    },
  ];