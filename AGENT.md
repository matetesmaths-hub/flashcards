# Contexte agent

Application de revision de mathematiques pour des eleves de 3e, orientee brevet.
Elle fonctionne comme une application statique HTML/CSS/JavaScript et utilise les
boites de Leitner pour organiser la repetition espacee.

## Architecture

- `index.html` contient l'ecran d'accueil, la zone d'application, les boutons de
  choix de theme et les imports des banques de questions.
- `style.css` gere toute l'apparence de l'application.
- `app.js` contient le moteur principal : navigation, selection des questions,
  progression Leitner, mode revisions mixtes, badges, statistiques et rendu des
  cartes.
- `questions-*.js` contient les banques de questions par chapitre.
- `images/` peut contenir des figures utilisees dans les questions via le champ
  `image`.

## Chapitres actuels

- Calcul litteral : `questions-calcul.js`
- Geometrie : `questions-geometrie.js`
- Fonctions : `questions-fonctions.js`
- Probabilites / statistiques : `questions-proba-stats.js`
- Perimetres, aires, volumes : `questions-pav.js`
- Puissances : `questions-puissances.js`

## Format des questions

Champs communs :

- `id` : identifiant unique de la carte dans son chapitre.
- `type` : `short`, `qcm` ou `cours`.
- `theme` : sous-theme utilise par le filtre.
- `question` : enonce affiche a l'eleve, avec MathJax possible.
- `feedback` : explication affichee apres la reponse, facultative.
- `figure` : SVG/HTML integre, facultatif.
- `image` et `imageWidth` : image locale ou distante, facultatif.
- `note` : petite consigne affichee sous l'enonce pour les reponses courtes.

Pour `short` :

- `answers` contient toutes les reponses acceptees.
- La comparaison normalise la casse, les espaces, `×`, `−`, `²`, les virgules et
  certaines unites.

Pour `qcm` :

- `choices` contient les choix.
- `answer` est l'index de la bonne reponse dans `choices`.
- Les choix sont melanges a l'affichage tout en conservant la bonne reponse.

Pour `cours` :

- `answerText` contient la reponse attendue.
- L'eleve s'auto-evalue ensuite avec "correcte" ou "fausse".

## Leitner et stockage

- Les progressions sont stockees dans `localStorage`, avec une cle par chapitre.
- Chaque carte a une progression `{ box, due, attempts, success }`.
- Les intervalles sont `[0, 1, 2, 4, 7, 14]`.
- Une bonne reponse fait monter la carte d'une boite, jusqu'a la boite 5.
- Une erreur renvoie la carte en boite 1 et la remet a revoir le jour meme.
- La selection tire une carte due au hasard dans le sous-theme courant, en evitant
  si possible de reprendre immediatement la meme carte.

## Mode revisions mixtes

`startRevisionMode(count)` lance une serie aleatoire de 5, 10 ou 20 questions.
Ce mode ne met pas a jour la progression Leitner des chapitres. Il calcule un
score et regroupe les erreurs par chapitre et sous-theme.

Attention actuelle : `allQuestions()` inclut calcul, geometrie, fonctions et
probabilites/statistiques, mais pas encore `pav` ni `puissances`.

## Points d'attention reperes

- Le projet contient des modifications non validees avant intervention. Ne pas
  les ecraser sans demande explicite.
- `questions-proba-stats.js` contient deux questions avec l'id `stats5`, ce qui
  peut fusionner leur progression Leitner.
- Certains textes/feedbacks semblent avoir de petites coquilles mathematiques ou
  typographiques, a verifier quand on enrichit les contenus.
- Les badges utilisent des emojis dans `app.js`; le reste de la documentation
  reste volontairement en ASCII.
- MathJax est charge depuis un CDN dans `index.html`.
