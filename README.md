# 🤖 Mistral AI Chat Integration

Un projet de test et d'expérimentation utilisant l'API Mistral AI pour créer une interface de chat intelligente, développé avec Angular 20 et testé avec Cursor IDE.

## 🎯 Objectifs du Projet

Ce projet a été créé pour :

- **Tester l'API Mistral AI** : Expérimenter avec les modèles de langage Mistral pour la génération de texte
- **Évaluer Cursor IDE** : Tester les capacités de développement assisté par IA de Cursor
- **Démonstrer Angular 20** : Utiliser les dernières fonctionnalités d'Angular (Signals, Control Flow, etc.)

## ✨ Fonctionnalités

- 💬 **Chat en temps réel** avec l'API Mistral AI
- 🎨 **Interface moderne** avec Tailwind CSS et DaisyUI
- ⚡ **Performance optimisée** avec Angular 20 Signals
- 🔄 **Proxy configuré** pour éviter les problèmes CORS (mais il n'y a pas d'appel API 💩)
- 📱 **Design responsive** pour tous les appareils
- ⏳ **Indicateurs de chargement** pendant la génération

## 🛠️ Technologies Utilisées

- **Frontend** : Angular 20 (Signals, Control Flow, Standalone Components)
- **Styling** : CSS
- **API** : Mistral AI (@mistralai/mistralai)
- **IDE** : Cursor (développement assisté par IA)
- **Proxy** : Angular Dev Server Proxy
- **Linting** : ESLint + Prettier

## 🚀 Installation et Démarrage

### Prérequis

- Node.js 18+
- npm ou yarn
- Clé API Mistral AI

### Installation

1. **Cloner le repository**

```bash
git clone <votre-repo>
cd mistral-integration
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Configuration de l'API Mistral**
   - Créez un fichier `src/environments/environment.ts`
   - Ajoutez votre clé API :

```typescript
export const environment = {
  production: false,
  API_URL: '/v1/chat/completions',
  MISTRAL_API_KEY: 'votre-clé-api-ici',
};
```

4. **Démarrer le serveur de développement**

```bash
npm start
```

5. **Ouvrir l'application**
   - Naviguez vers `http://localhost:4200`
   - Le proxy est configuré pour rediriger `/api/*` vers `https://api.mistral.ai/*`

## 📁 Structure du Projet

```
src/
├── pages/
│   └── chat/                    # Feature de chat
│       ├── api/
│       │   └── mistral-api.service.ts
│       └── ui/
│           └── chat.component.ts
├── shared/
│   ├── models/
│   │   └── message.ts
│   └── ui/
│       └── message/
└── environments/
    └── environment.ts
```

## 🔧 Configuration

### Proxy Configuration

Le projet utilise un proxy pour éviter les problèmes CORS :

```json
{
  "/api": {
    "target": "https://api.mistral.ai",
    "secure": false,
    "changeOrigin": true,
    "pathRewrite": { "^/api": "" }
  }
}
```

### Modèles Mistral Supportés

- `mistral-large-latest` (par défaut)
- `mistral-medium-latest`
- `mistral-small-latest`

## 🧪 Tests

```bash
# Tests unitaires
npm test

# Linting
npm run lint

# Build de production
npm run build
```

## 🎨 Interface Utilisateur

L'interface comprend :

- **Header** avec titre et indicateur de statut
- **Zone de messages** avec défilement automatique
- **Indicateur de frappe** pendant la génération
- **Zone de saisie** avec bouton d'envoi
- **Design responsive** et animations fluides

## 🔍 Fonctionnalités Techniques

### Angular 20 Features Utilisées

- **Signals** pour la réactivité
- **Control Flow** (@if, @for) au lieu des directives structurelles
- **Standalone Components** sans NgModules
- **Modern DI** avec `inject()` function
- **httpResource** pour les requêtes HTTP réactives

### Gestion d'État

- Signaux réactifs pour les messages
- Gestion automatique du loading et des erreurs
- Persistance locale des conversations

## 🤝 Contribution

Ce projet est un projet de test et d'expérimentation. Les contributions sont les bienvenues !

## 📝 Notes sur Cursor IDE

Ce projet a été développé en utilisant Cursor IDE pour tester :

- La génération de code assistée par IA
- Les suggestions de refactoring
- L'aide à la résolution de bugs
- L'amélioration de la productivité développeur

## 📄 Licence

Ce projet est sous licence MIT.

## 🙏 Remerciements

- Merci Cursor

---

**Développé avec ❤️ et IA** 🤖
