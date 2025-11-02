# Netflix Clone - Projet Frontend React

![React](https://img.shields.io/badge/React-19.0.0-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Firebase](https://img.shields.io/badge/Firebase-Auth%20%26%20Storage-orange)
![TMDB](https://img.shields.io/badge/TMDB-API-green)
![Netflix Clone](https://img.shields.io/badge/Netflix-Clone-red)

Une reproduction fidèle de l'interface Netflix construite avec React 19 et JavaScript, avec système d'authentification Firebase et données des films provenant de l'API TMDB.

## 🚀 Fonctionnalités

### 🔐 Authentification
- **Inscription et connexion** avec email/mot de passe
- **Gestion des profils utilisateurs**
- **Persistance de session** avec Firebase Auth
- **Protection des routes** privées

### 🎬 Contenu et Navigation
- **Page d'accueil** avec bannière principale dynamique
- **Navigation par catégories** (Tendances, Populaires, Séries, Films)
- **Carrousels interactifs** avec défilement horizontal
- **Model de détails** avec bande-annonce et informations
- **Design responsive** mobile-first

### 📱 Expérience Utilisateur
- **Interface moderne** et intuitive
- **Animations fluides** et transitions
- **Loading states** et gestion des erreurs
- **Optimisation des performances**

## 🛠 Stack Technique

- **Frontend:** React 19, JavaScript (ES6+)
- **Authentication:** Firebase Auth
- **Storage:** Firebase Firestore
- **API:** TMDB (The Movie Database)
- **Routing:** React Router DOM
- **Styling:** CSS
- **HTTP Client:** Fetch API
- **Build Tool:** Vite

### Détails des Routes

#### `/` - Page d'Accueil
- **Accès:** Public
- **Description:** Page de présentation avec appel à l'action pour s'inscrire ou se connecter
- **Composants:** Header, Hero section, Features, Footer

#### `/login` - Page de Connexion
- **Accès:** Public
- **Description:** Formulaire d'authentification (login/signup)
- **Fonctionnalités:**
  - Connexion avec email/mot de passe
  - Inscription de nouveaux utilisateurs
  - Redirection vers `/` après connexion réussie

## 📦 Installation et Configuration

### Prérequis
- Node.js (version 18 ou supérieure)
- npm, yarn ou pnpm
- Compte Firebase et TMDB

### 1. Cloner le projet
```bash
git clone https://github.com/zikoelj/Netflix-clone.git
cd Netflix-clone
```

### 2. Installer les dépendances
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Démarrer l'application
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```
#### L'application sera accessible sur http://localhost:5173