# 🧩 Projet React - Tableau de Tâches (Static Page + Tests)

Ce projet est une **page statique de suivi de tâches**, construite avec **React** et **Vite**, puis déployée via **Netlify**.  
Il a été enrichi d’une infrastructure de **tests automatisés** avec **Vitest** et **React Testing Library**, dans le cadre d’un TP de pratique professionnelle.

---

## 🔗 Lien de déploiement

➡️ [Voir le projet sur Netlify](https://tachefacile.netlify.app)  
(_remplace par ton vrai lien si besoin_)

---

## ⚙️ Technologies utilisées

- React 18
- Vite
- Netlify (déploiement)
- Vitest (tests unitaires)
- Testing Library
- ESLint 9 avec `eslint.config.js`
- JSDOM (environnement de test navigateur)

---

## 📁 Structure du projet

```txt
todo-app-react/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx              # Page principale avec liste de tâches statiques
│   ├── App.test.jsx         # Test unitaire simple (présence du titre, tâches, statuts)
│   └── test/
│       ├── setup.js         # Configuration globale des tests (mock localStorage, jest-dom)
│       └── setup.test.js    # Vérifie que l'environnement de test fonctionne
├── .gitignore               # Ignore node_modules, .env, etc.
├── index.html               # Point d'entrée HTML (géré par Vite)
├── vite.config.js           # Configuration de Vite + tests
├── tsconfig.json            # Permet à l'éditeur de reconnaître les types de test (vi, etc.)
├── eslint.config.js         # Configuration ESLint moderne avec globals vitest
├── package.json             # Dépendances, scripts NPM
└── README.md                # Ce fichier 📄
