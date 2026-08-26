---
name: repo-changes
description: Permet de lister et de visualiser rapidement les modifications apportées au dépôt Git (fichiers modifiés, diffs) pour avancer en toute transparence.
---

# Suivi des modifications du dépôt (Git Diff & Status)

Ce skill est conçu pour permettre à l'agent (et à l'utilisateur) de suivre en temps réel l'ensemble des fichiers modifiés, ajoutés ou supprimés dans le répertoire de travail.

## 🛠️ Commandes pour l'agent

### 1. Voir le statut résumé des fichiers modifiés
Pour lister rapidement les fichiers impactés sans encombrer la console :
```bash
git status -s
```

### 2. Voir les statistiques des lignes modifiées
Pour mesurer l'importance des modifications par fichier :
```bash
git diff --stat
```

### 3. Voir le détail des modifications pour un fichier
Pour auditer le code modifié avant validation :
```bash
git diff <chemin_du_fichier>
```

---

## 👥 Utilisation partagée

En intégrant ce skill au dossier `.agents/` du dépôt, il devient accessible directement à l'IA lors de chaque session de pair programming sur ce projet.
