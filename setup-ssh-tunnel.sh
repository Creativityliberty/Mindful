#!/bin/bash
# Script de configuration SSH pour Coolify - Tunnel MySQL
# À exécuter dans le terminal Coolify

set -e

echo "🚀 Configuration SSH pour le tunnel MySQL..."

# 1. Installer OpenSSH si nécessaire
if ! which sshd >/dev/null 2>&1; then
    echo "📦 Installation d'OpenSSH..."
    apt-get update -qq && apt-get install -y -qq openssh-server >/dev/null 2>&1
fi

# 2. Configurer le serveur SSH
echo "⚙️ Configuration du serveur SSH..."

# Créer le répertoire .ssh pour root
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# Configuration SSH
cat >> /etc/ssh/sshd_config << 'EOF'

# Coolify Tunnel Settings
PermitRootLogin yes
PubkeyAuthentication yes
AllowTcpForwarding yes
GatewayPorts yes
EOF

# 3. Démarrer le serveur SSH
echo "🔄 Démarrage du serveur SSH..."
if command -v service >/dev/null 2>&1; then
    service ssh start || /usr/sbin/sshd
else
    mkdir -p /run/sshd
    /usr/sbin/sshd
fi

# 4. Vérifier que tout est OK
if pgrep sshd >/dev/null 2>&1 || /usr/sbin/sshd -t 2>/dev/null; then
    echo "✅ Serveur SSH démarré avec succès !"
else
    echo "❌ Erreur: SSH ne démarre pas"
    exit 1
fi

# 5. Trouver l'IP et le port SSH
SSH_PORT=$(grep -E "^Port [0-9]" /etc/ssh/sshd_config | tail -1 | awk '{print $2}')
SSH_PORT=${SSH_PORT:-22}

echo ""
echo "=== Informations pour le tunnel SSH ==="
echo "📡 IP du serveur: $(hostname -I 2>/dev/null | awk '{print $1}')"
echo "🔌 Port SSH: $SSH_PORT"
echo "🗄️  Service MySQL: host.docker.internal:3306"
echo "========================================"
echo ""
echo " Depuis ton Mac, exécute cette commande:"
echo " ssh -L 3307:host.docker.internal:3306 root@$(hostname -I | awk '{print $1}') -p $SSH_PORT"
echo ""
echo "Puis configure ton .env Laravel:"
echo '   DB_CONNECTION=mysql'
echo '   DB_HOST=127.0.0.1'
echo '   DB_PORT=3307'
echo '   DB_DATABASE=default'
echo '   DB_USERNAME=mysql'
echo '   DB_PASSWORD=***'

# Garder le processus actif
echo ""
echo "🔒 SSH reste actif en arrière-plan..."
exec tail -f /dev/null