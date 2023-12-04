<br/>
<p align="center">
  <h2 align="center">Installation PfSense</h2>
  <p align="center">
    Fait en entreprise et dans le cadre de l'épreuve E4 du BTS SIO 2022-2024
    <br/>
    <br/>
  </p>
</p>



## Sommaire

* [Pour Commencer](#Pour-Commencer)
  * [Prérequis](#Prérequis)
  * [Installation](#Installation)
    * [Formatage de la clé USB](#Formatage-de-la-clé-USB)
    * [Système](#Système)
    * [Installation des applications](#Installation-des-applications)
      * [Installation FTPd](#Installation-FTPd)
      * [Configuration FTPd](#Configuration-FTPd)
* [Sécurité](#Sécurité)
* [Roadmap](#Roadmap)

## Pour Commencer



### Prérequis

* [Rufus](https://github.com/pbatard/rufus/releases/latest/), [Balena Etcher](https://github.com/balena-io/etcher/releases/latest/) ou tout autre logiciel du genre
* Clé/Stockage USB de 4Go minimum
* ISO de [Debian 11](https://cdimage.debian.org/mirror/cdimage/archive/11.8.0/amd64/iso-cd/debian-11.8.0-amd64-netinst.iso)

### Installation

#### Formatage de la clé USB

1. Téléchargez l'ISO de Debian 11
2. Téléchargez Rufus
</br>![Rufus Website](/PfSense/Img/Rufus-1.png?raw=true "Rufus Website")
3. Branchez la clé USB sur le PC
4. Ouvrir Rufus
</br>![Rufus](/PfSense/Img/Rufus-2.png?raw=true "Rufus")
6. Sélectionnez la clé USB
</br>![Rufus USB](/PfSense/Img/Rufus-3.png?raw=true "Rufus USB")
5. Sélectionnez l'ISO de Debian 11, continuez si vous avez une erreur "ISOHybrid"
</br>![Rufus ISO error](/PfSense/Img/Rufus-4.png?raw=true "Rufus ISO error")
- NEED 3 IMAGES
</br>![Rufus ISO](/DebFTP/Img/Rufus-5.png?raw=true "Rufus ISO")
7. Lancez le formatage
</br>![Rufus Format](/DebFTP/Img/Rufus-6.png?raw=true "Rufus Format")
</br>![Rufus End](/DebFTP/Img/Rufus-7.png?raw=true "Rufus End")

#### Système

1. Branchez la clé USB sur le serveur
2. Démarrez le serveur
3. Appuyez sur F11 pour accéder au boot menu
4. Sélectionnez la clé USB
</br>![BIOS USB](/PfSense/Img/Bios_USB.png?raw=true "BIOS USB")
5. Faites entrer pour démarrer l'installation

#### Installation des applications

##### Installation FTPd

1. Connectez-vous en root
2. Installez FTPd
```sh
apt install vsftpd
```
3. Démarrez FTPd
```sh
systemctl start vsftpd
```
4. Activez FTPd au démarrage
```sh
systemctl enable vsftpd
```
5. Vérifiez que FTPd est bien démarré
```sh
systemctl status vsftpd
```

##### Configuration FTPd

1. Ouvrez le fichier de configuration
```sh
nano /etc/vsftpd.conf
```
2. Décommentez les lignes suivantes
```sh

```
3. Ajoutez les lignes suivantes
```sh

```
4. Créez l'utilisateur ou les utilisateurs
```sh
adduser <username>
```
5. Donnez les informations demandées
5. Redémarrez FTPd
```sh
systemctl restart vsftpd
```

##### Installation fail2ban

1. Installez Fail2Ban
```sh
apt install fail2ban
```
2. Démarrez Fail2Ban
```sh
systemctl start fail2ban
```
3. Activez Fail2Ban au démarrage
```sh
systemctl enable fail2ban
```
4. Vérifiez que Fail2Ban est bien démarré
```sh
systemctl status fail2ban
```


##### Configuration fail2ban

1. Copiez le fichier de configuration
```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```
2. Ouvrez le fichier de configuration
```sh
nano /etc/fail2ban/jail.local
```
3. Ajoutez les lignes suivantes
```sh
[vsftpd]
enabled = true
port = ftp
filter = vsftpd
logpath = /var/log/vsftpd.log
maxretry = 3
```
4. Redémarrez Fail2Ban
```sh
systemctl restart fail2ban
```

## Sécurité



## Roadmap

* Installation de Debian
* Installation de FTPd
* Configuration de FTPd
* Configuration de la sécurité
