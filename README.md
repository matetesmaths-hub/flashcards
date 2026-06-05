# Revisions Brevet - 3e

Application web statique pour aider des eleves de 3e a reviser les mathematiques
du brevet avec une routine inspiree des boites de Leitner.

## Lancer l'application

Ouvrir `index.html` dans un navigateur.

L'application n'a pas besoin de serveur ni d'installation. MathJax est charge
depuis un CDN pour afficher les formules.

## Fonctionnalites

- choix d'un chapitre ;
- filtre par sous-theme ;
- cartes de type QCM, reponse courte ou auto-evaluation de cours ;
- progression par boites de Leitner stockee dans le navigateur ;
- statistiques par boite et barre de progression ;
- badges de progression et de regularite ;
- mode revisions mixtes avec score final.

## Ajouter une question

Ajouter un objet dans le fichier `questions-*.js` du chapitre concerne.

Exemple QCM :

```js
{
  id: "exemple1",
  type: "qcm",
  theme: "Vocabulaire",
  question: "La question ?",
  choices: ["Bonne reponse", "Erreur 1", "Erreur 2"],
  answer: 0,
  feedback: "Explication affichee apres la reponse."
}
```

Exemple reponse courte :

```js
{
  id: "exemple2",
  type: "short",
  theme: "Calcul",
  question: "Calculer \\( 2 + 3 \\).",
  answers: ["5"],
  feedback: "2 + 3 = 5."
}
```

Exemple cours :

```js
{
  id: "exemple3",
  type: "cours",
  theme: "Formules",
  question: "Ecrire la formule de l'aire d'un triangle.",
  answerText: "\\( A = \\frac{base \\times hauteur}{2} \\)",
  feedback: ""
}
```

Chaque `id` doit etre unique dans son chapitre, car il sert a enregistrer la
progression de la carte.
