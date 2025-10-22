# Portfolio — Alpha Tchibambe

Bref: site statique enrichi d'une petite API Express exposée via Netlify Functions.

Prérequis
- Node.js (>= 16 recommandé)
- npm

Installation
1. À la racine du projet :
   npm install

Scripts utiles
- npm run dev  — lance Netlify Dev (npx netlify dev) pour développement local
- npm run start — idem
- npm run build — placeholder (aucune étape de build)

Fonction Express (Netlify Functions)
- L'API Express est empaquetée dans `netlify/functions/server.js`.
- Endpoint d'exemple pour le compteur : `/.netlify/functions/server/visitor`
- Attention : stockage actuel du compteur est éphémère (tmp). Pour persistance, connecter une base de données externe.

Déploiement sur Netlify
1. Pousser le dépôt sur Git (GitHub, GitLab, etc.)
2. Connecter le repo sur Netlify et définir:
   - Build directory: racine (publish = ".")
   - Functions directory: `netlify/functions`
Netlify utilisera `package.json` pour installer les dépendances.

HSTS / En-têtes
- Le projet contient `_headers` et `netlify.toml` pour contrôler les en-têtes HTTP (ex. désactiver HSTS via `Strict-Transport-Security: max-age=0; includeSubDomains`).
- Si votre domaine est préchargé dans la HSTS preload list, la suppression via en-tête ne fonctionnera pas tant que le domaine n'aura pas été retiré du preload.

Notes rapides
- Pour tester localement sans installer globalement Netlify CLI : npm run dev (utilise npx/netlify-cli en devDependencies).
- Pour une vraie production, remplacer le stockage temporaire du compteur par un service persistant (Firebase, Fauna, Supabase, etc.).

Contact
- Email: alphonsekatumbascience@gmail.com