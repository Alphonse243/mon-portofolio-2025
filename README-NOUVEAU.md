# Portfolio Alpha Tchibambe - Version HTML/Tailwind CSS

## Description

Ce portfolio personnel a été converti de PHP/Bootstrap vers HTML pur avec Tailwind CSS. Il présente les compétences, l'expérience et les projets d'Alpha Tchibambe, développeur web, infographe et étudiant en médecine.

## Caractéristiques

✅ **HTML pur** - Pas de PHP, uniquement HTML, CSS et JavaScript
✅ **Tailwind CSS** - Framework CSS moderne et responsive
✅ **Suivi des visiteurs** - Système de comptage avec localStorage
✅ **Design moderne** - Interface utilisateur attrayante et professionnelle
✅ **Animations fluides** - Utilisation de AOS (Animate On Scroll)
✅ **Responsive** - Compatible mobile, tablette et desktop
✅ **Performance optimisée** - Chargement rapide

## Structure des fichiers

```
my-portofolio-main/
│
├── index.html              # Page principale (nouveau)
├── visitors.json           # Données des visiteurs (nouveau)
│
├── css/
│   ├── custom-style.css    # Styles personnalisés (nouveau)
│   ├── bootstrap.min.css   # Ancien fichier Bootstrap (non utilisé)
│   └── style.css           # Ancien fichier de style (non utilisé)
│
├── js/
│   ├── app.js              # JavaScript principal (nouveau)
│   ├── jquery-3.4.1.min.js
│   └── main.js             # Ancien fichier (non utilisé)
│
├── img/                    # Images du portfolio
│   ├── profile.png
│   ├── profile copie.jpg
│   ├── project-*.jpg
│   └── ...
│
└── lib/                    # Bibliothèques externes (non utilisées)
```

## Technologies utilisées

### Frontend
- **HTML5** - Structure sémantique
- **Tailwind CSS** - Framework CSS utility-first
- **JavaScript ES6** - Interactivité
- **Font Awesome 6** - Icônes
- **Google Fonts** - Typographie (Open Sans)

### Bibliothèques JavaScript
- **AOS (Animate On Scroll)** - Animations au scroll
- **Typed.js** - Animation de texte dactylographié
- **Vanilla JavaScript** - Gestion des interactions

## Fonctionnalités principales

### 1. Navigation
- Menu responsive avec version mobile
- Navigation smooth scroll
- Highlight de la section active

### 2. Sections
- **Accueil** - Présentation avec animation de texte
- **À propos** - Expérience et parcours
- **Compétences** - Barres de progression animées
- **Services** - Offres de services
- **Projets** - Portfolio avec filtres
- **Contact** - Informations de contact

### 3. Suivi des visiteurs
Le système de suivi des visiteurs utilise **localStorage** au lieu d'une base de données :

```javascript
// Fonctionnement :
1. Génération d'un "fingerprint" unique basé sur :
   - Canvas fingerprinting
   - User agent
   - Langue du navigateur
   - Résolution de l'écran
   
2. Stockage dans localStorage
3. Vérification avant d'incrémenter le compteur
4. Affichage du nombre total de visiteurs
```

### 4. Animations
- Fade in au scroll (AOS)
- Barres de compétences animées
- Compteurs numériques animés
- Hover effects sur les projets
- Transitions fluides

## Installation et utilisation

### Méthode 1 : Ouverture directe
1. Double-cliquez sur `index.html`
2. Le portfolio s'ouvre dans votre navigateur par défaut

### Méthode 2 : Serveur local (recommandé)

#### Avec Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Avec Node.js
```bash
# Installer http-server globalement
npm install -g http-server

# Lancer le serveur
http-server -p 8000
```

#### Avec PHP
```bash
php -S localhost:8000
```

Puis ouvrez votre navigateur à l'adresse : `http://localhost:8000`

### Méthode 3 : Extension VSCode
Si vous utilisez Visual Studio Code :
1. Installez l'extension "Live Server"
2. Cliquez droit sur `index.html`
3. Sélectionnez "Open with Live Server"

## Personnalisation

### Modifier les informations personnelles

#### Dans `index.html` :
- Ligne 44 : Titre de la page
- Ligne 152 : Votre nom
- Lignes 154-156 : Vos rôles/métiers
- Lignes 716-730 : Informations de contact

### Modifier les couleurs

#### Dans `index.html` (Tailwind config) :
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#0d6efd',  // Changez cette couleur
                secondary: '#6c757d',
            }
        }
    }
}
```

### Ajouter/Modifier des projets

Cherchez la section `<!-- Projects Start -->` et ajoutez :
```html
<div class="project-item ui relative group overflow-hidden rounded-lg shadow-lg">
    <img class="w-full h-64 object-cover" src="img/votre-projet.jpg" alt="">
    <!-- Contenu du projet -->
</div>
```

### Modifier les compétences

Cherchez `<!-- Skills Start -->` et modifiez les barres de progression :
```html
<div class="skill-item">
    <div class="flex justify-between mb-2">
        <h6 class="font-bold text-gray-700">Nouvelle Compétence</h6>
        <h6 class="font-bold text-gray-700">85%</h6>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-3">
        <div class="bg-primary h-3 rounded-full" data-width="85%"></div>
    </div>
</div>
```

## Suivi des visiteurs - Détails techniques

### Fonctionnement du système

Le système utilise `localStorage` pour stocker les informations des visiteurs :

```json
{
  "visitors": [
    {
      "fingerprint": "hash_unique",
      "timestamp": "2025-10-18T12:00:00.000Z"
    }
  ],
  "totalVisitors": 1
}
```

### Avantages
✅ Pas besoin de serveur backend
✅ Pas de base de données
✅ Fonctionne en mode offline
✅ Respect de la vie privée (pas d'IP stockée)

### Limitations
⚠️ Données stockées localement (par navigateur)
⚠️ Effacées si l'utilisateur vide son cache
⚠️ Pas de statistiques globales entre utilisateurs

### Alternative avec API (optionnel)

Si vous souhaitez un suivi global, vous pouvez utiliser :
- **Firebase** (gratuit)
- **Supabase** (gratuit)
- **API REST personnalisée**

## Déploiement

### Sur GitHub Pages
1. Créez un dépôt GitHub
2. Poussez vos fichiers
3. Allez dans Settings > Pages
4. Sélectionnez la branche `main`
5. Votre site sera disponible à `https://username.github.io/repo-name`

### Sur Netlify
1. Créez un compte sur [Netlify](https://netlify.com)
2. Glissez-déposez le dossier du projet
3. Votre site est en ligne !

### Sur Vercel
1. Installez Vercel CLI : `npm install -g vercel`
2. Dans le dossier du projet : `vercel`
3. Suivez les instructions

## Optimisations recommandées

### Performance
- ✅ Minifier les fichiers CSS/JS
- ✅ Compresser les images (WebP)
- ✅ Utiliser un CDN pour les bibliothèques
- ✅ Activer la mise en cache

### SEO
- ✅ Balises meta configurées
- ✅ Balises Open Graph (Facebook)
- ✅ Balises Twitter Card
- ✅ Structure sémantique HTML5

### Accessibilité
- ✅ Attributs alt sur les images
- ✅ Navigation au clavier
- ✅ Contraste des couleurs
- ✅ Labels sur les formulaires

## Navigateurs supportés

| Navigateur | Version minimum |
|-----------|----------------|
| Chrome    | 90+            |
| Firefox   | 88+            |
| Safari    | 14+            |
| Edge      | 90+            |
| Opera     | 76+            |

## Dépendances externes (CDN)

```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Font Awesome -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">

<!-- AOS Animation -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<!-- Typed.js -->
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
```

## Maintenance

### Mises à jour
- Vérifier régulièrement les versions des CDN
- Mettre à jour les informations personnelles
- Ajouter de nouveaux projets
- Actualiser les compétences

### Sauvegarde
- ✅ Versionner avec Git
- ✅ Sauvegarder régulièrement
- ✅ Garder une copie des images originales

## Support et contact

Pour toute question concernant ce portfolio :

📧 Email : alphonsekatumbascience@gmail.com
📞 Téléphone : +243 972 049 788
🌍 Localisation : Goma, Nord-Kivu, RDC

## Licence

Ce portfolio est un projet personnel. Vous êtes libre de vous en inspirer pour votre propre portfolio.

---

**Version** : 2.0 (HTML/Tailwind)
**Date de conversion** : Octobre 2025
**Auteur** : Alpha Tchibambe

