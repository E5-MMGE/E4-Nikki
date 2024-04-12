<br/>
<p align="center">
  <h2 align="center">Mise en place d'un WikiJS (Debian 11)</h2>
  <p align="center">
    Fait en entreprise et dans le cadre de l'épreuve E4 du BTS SIO 2022-2024
    <br/>
    <br/>
  </p>
</p>

[Télécharger en PDF](https://8e-couche.ovh/Portfolio/WikiJS/Img/.pdf)

## Sommaire

* [Pour Commencer](#Pour-Commencer)
  * [Prérequis](#Prérequis)
    * [Installation PostgreSQL](#Installation-PostgreSQL)
    * [Installation NodeJS 20 (via NVM)](#Installation-NodeJS)
  * [Installation WikiJS](#Installation-WikiJS)
    * [Mise en place du sous-domaine](#Mise-en-place-du-sous-domaine)
    * [Configuration systemctl](#Configuration-systemctl)
    * [Configuration de WikiJS](#Configuration-de-WikiJS)
* [Utilisation](#Utilisation)

## Pour Commencer

Nous avons dans l'entreprise KNCO, eu beaucoup de problèmes récurents et plusieurs situations dont les actions à effectués étaient toujours les mêmes.
</br>Le besoin d'une documentation claire et accessible par l'équipe informatique était nécessaire. Cependant les documentations étaient obsolètes et disponible sur des fichiers en local, innaccessible sans les partager à chaque fois.
</br>Le besoin est donc de pouvoir éditer les documentations facilement pour les mettre à jour, d'avoir un accès simple dans l'idéal en temps réel ou sur un stockage partagé.
</br>Le choix s'est porté en premier lieu sur des documentations en format MD (Markdown) sur un github privé, mais le besoin de visualisation en temps réel des documentations lors de l'édition nous a mené sur la piste d'un WikiJS.
</br>Nous partons du postulat que le service informatique est sur un même réseau, que ce soit en local ou en VPN, celui-ci étant déjà configuré par une autre entreprise.

</br>Nous le ferons à l’aide d’un serveur sous Debian 11 déjà installé, et d'un nom de domaine disponible pour la configuration de WikiJS.

### Prérequis

* Serveur Debian 11 pré-installé avec minimum 1Go de RAM et 2 coeurs CPU
* Un compte utilisateur sur le serveur avec les droits sudo (ici nommé "wiki")
* Un compte Cloudflare
* Nom de domaine configurable sur Cloudflare

#### Installation PostgreSQL

WikiJS nécessite une base de données PostgreSQL pour fonctionner, nous allons donc l'installer.
1. Ajout du dépôt PostgreSQL

```bash
# Création du fichier de la configuration du repo
sudo sh -c 'echo "deb https://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

# Import de la clé de signature du repo
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
```

</br>![PostgreSQL Repo](https://8e-couche.ovh/Portfolio/WikiJS/Img/Postgre-1.png?raw=true "PostgreSQL Repo")

2. Installation de PostgreSQL

```bash
sudo apt update && sudo apt -y install postgresql
```

</br>![PostgreSQL Installation](https://8e-couche.ovh/Portfolio/WikiJS/Img/Postgre-2.png?raw=true "PostgreSQL Installation")

3. On entre dans PostgreSQL pour créer la base de données

```bash
sudo -u postgres psql
```

4. Création de la base de données et de l'utilisateur "wiki"

```bash
CREATE DATABASE wiki;
CREATE USER wiki WITH ENCRYPTED PASSWORD 'motdepasse';
GRANT ALL PRIVILEGES ON DATABASE wiki TO wiki;
ALTER DATABASE wiki OWNER TO wiki;
\q
```

</br>![PostgreSQL Database](https://8e-couche.ovh/Portfolio/WikiJS/Img/Postgre-3.png?raw=true "PostgreSQL Database")

#### Installation NodeJS

WikiJS nécessite NodeJS pour fonctionner, nous allons donc l'installer via NVM.

1. Installation de NVM

```bash
# Ajout du packet curl si non installé
sudo apt install curl -y
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash

# Recharger le fichier de configurationa bashrc
source ~/.bashrc
```

</br>![NVM Installation](https://8e-couche.ovh/Portfolio/WikiJS/Img/Node-1.png?raw=true "NVM Installation")

2. Installation de NodeJS 20

```bash
nvm install 20
```

</br>![NodeJS Installation](https://8e-couche.ovh/Portfolio/WikiJS/Img/Node-2.png?raw=true "NodeJS Installation")

3. Autoriser node à utiliser le port 80

```bash
sudo apt-get install libcap2-bin
sudo setcap cap_net_bind_service=+ep /home/wiki/.nvm/versions/node/v20.12.2/bin/node
```

</br>![NodeJS Port](https://8e-couche.ovh/Portfolio/WikiJS/Img/Node-3.png?raw=true "NodeJS Port")

### Installation WikiJS

1. Installation de WikiJS

```bash
wget https://github.com/Requarks/wiki/releases/latest/download/wiki-js.tar.gz
sudo mkdir /var/wiki
sudo chown -R $USER:$USER /var/wiki
sudo chmod -R 755 /var/wiki
tar xzf wiki-js.tar.gz -C /var/wiki
cd /var/wiki
mv config.sample.yml config.yml
```

Les commandes vont ici télécharger la dernière version de WikiJS, créer un dossier pour l'installation, décompresser l'archive et renommer le fichier de configuration par défaut.

</br>![WikiJS Installation](https://8e-couche.ovh/Portfolio/WikiJS/Img/Wiki-1.png?raw=true "WikiJS Installation")

2. Edition du fichier de configuration

```bash
nano config.yml
```

Nous allons modifier les informations du port d'écoute et de la base de données.

</br>![WikiJS Configuration](https://8e-couche.ovh/Portfolio/WikiJS/Img/Wiki-2.png?raw=true "WikiJS Configuration")

3. Installation des dépendances

```bash
npm rebuild sqlite3
```

</br>![WikiJS Dependencies](https://8e-couche.ovh/Portfolio/WikiJS/Img/Wiki-3.png?raw=true "WikiJS Dependencies")

#### Mise en place du sous-domaine

1. Configuration du sous-domaine sur Cloudflare

</br>![Cloudflare Subdomain](https://8e-couche.ovh/Portfolio/WikiJS/Img/Wiki-4.png?raw=true "Cloudflare Subdomain")

#### Configuration systemctl

Pour simplifier le lancement de WikiJS et l'activer au démarrage, nous allons créer un service systemd.

1. Création du fichier de service

```bash
sudo nano /etc/systemd/system/wiki.service
```

2. Ajout du contenu suivant (en modifiant les chemins si nécessaire)

```bash
[Unit]
Description=Wiki.js
After=network.target

[Service]
Type=simple
ExecStart=/home/wiki/.nvm/versions/node/v20.12.2/bin/node server
Restart=always
User=wiki
Environment=NODE_ENV=production
WorkingDirectory=/var/wiki

[Install]
WantedBy=multi-user.target
```

</br>![Systemd Service](https://8e-couche.ovh/Portfolio/WikiJS/Img/Wiki-5.png?raw=true "Systemd Service")

3. Activation et démarrage du service

```bash
sudo systemctl enable wiki
sudo systemctl start wiki
```

</br>![Systemd Start](https://8e-couche.ovh/Portfolio/WikiJS/Img/Wiki-6.png?raw=true "Systemd Start")

#### Configuration de WikiJS

1. Accès à l'interface de configuration, disponible à l'adresse https://SOUS.DOMAINE.WIKIJS/

</br>![WikiJS Configuration](https://8e-couche.ovh/Portfolio/WikiJS/Img/Wiki-7.png?raw=true "WikiJS Configuration")

2. Configuration de l'email administateur et son mot de passe (identifiant à utiliser pour la connexion) ainsi que le nom de domaine.

</br>![WikiJS Admin](https://8e-couche.ovh/Portfolio/WikiJS/Img/Wiki-8.png?raw=true "WikiJS Admin")

3. Une fois l'installation terminée, vous pouvez vous connecter à l'interface d'administration avec l'identifiant et le mot de passe définis.

</br>![WikiJS Admin](https://8e-couche.ovh/Portfolio/WikiJS/Img/Wiki-9.png?raw=true "WikiJS Admin")

Nous allons maintenant forcer la connexion utilisateur pour visionner les documentations.

4. Aller dans "Administration"

</br>![WikiJS Admin](https://8e-couche.ovh/Portfolio/WikiJS/Img/Wiki_Admin-1.png?raw=true "WikiJS Admin")

5. Aller dans "Groups"

</br>![WikiJS Admin](https://8e-couche.ovh/Portfolio/WikiJS/Img/Wiki_Admin-2.png?raw=true "WikiJS Admin")

6. Aller dans "Guest"

</br>![WikiJS Admin](https://8e-couche.ovh/Portfolio/WikiJS/Img/Wiki_Admin-3.png?raw=true "WikiJS Admin")

7. Aller dans "Permissions"

</br>![WikiJS Admin](https://8e-couche.ovh/Portfolio/WikiJS/Img/Wiki_Admin-4.png?raw=true "WikiJS Admin")

8. Décocher tout et faites "Update Group"

</br>![WikiJS Admin](https://8e-couche.ovh/Portfolio/WikiJS/Img/Wiki_Admin-5.png?raw=true "WikiJS Admin")

Il vous faudra désormais vous connecter pour accéder aux documentations.
Le lien de connexion est https://SOUS.DOMAINE.WIKIJS/login .

### Utilisation

Vous pouvez maintenant éditer vos documentations en voyant le résultat en temps réel ainsi que les visionner une fois connecté dessus.
</br>Vous pouvez également ajouter des utilisateurs et des groupes pour gérer les permissions de lecture et d'écriture.
</br>WikiJS est un outil très complet dont les pages sont écrites en Markdown, supporte l'ajout de fichiers et supporte également l'ajout d'addons officiels tel que la solutions d'écriture mathématique LaTeX Math, ce qui permet une grande flexibilité dans l'écriture des documentations dans un nombre de domaines très variés.
</br>Il est également possible de créer une documentation en plusieurs langues avec les options de localisation, ceci necessitant tout de même l'édition des documentations dans chaque langue, ne faisant pas de traduction automatique.
