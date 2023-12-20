<br/>
<p align="center">
  <h2 align="center">Installation SFTP Debian 11</h2>
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
      * [Installation SFTP](#Installation-SFTP)
      * [Configuration SFTP](#Configuration-SFTP)
* [Sécurité](#Sécurité)
* [Utilisation](#Utilisation)

## Pour Commencer

Nous avons dans l'entreprise KNCO le besoin de partager des fichiers entre les employés
</br>Cela passe par des excels contenant les bilans de chaque représentants (commerciaux se déplaçant chez les opticiens) ou encore les photos des produits utilisés par les représentants, le SAV mais aussi le service marketing
</br>Le besoin est donc de pouvoir partager des fichiers entre les employés de l'entreprise, de manière sécurisée et simple d'utilisation
</br>Nous partons également du postulat que les employés sont tous sur le même réseau, que ce soit en local ou en VPN, celui-ci étant déjà configuré par une autre entreprise
</br>

### Prérequis

* [Rufus](https://github.com/pbatard/rufus/releases/latest/), [Balena Etcher](https://github.com/balena-io/etcher/releases/latest/) ou tout autre logiciel du genre
* Clé/Stockage USB de 4Go minimum
* ISO de [Debian 11](https://cdimage.debian.org/mirror/cdimage/archive/11.8.0/amd64/iso-cd/debian-11.8.0-amd64-netinst.iso)
* Un serveur prêt à être installé

### Installation

#### Formatage de la clé USB

1. Téléchargez l'ISO de [Debian 11](https://cdimage.debian.org/mirror/cdimage/archive/11.8.0/amd64/iso-cd/debian-11.8.0-amd64-netinst.iso)
2. Téléchargez [Rufus](https://github.com/pbatard/rufus/releases/latest/)
</br>![Rufus Website](https://8e-couche.xyz/Portfoliohttps://8e-couche.xyz/Portfolio/PfSense/Img/Rufus-1.png?raw=true "Rufus Website")

3. Branchez la clé USB sur le PC
4. Ouvrir Rufus
</br>![Rufus](https://8e-couche.xyz/Portfolio/PfSense/Img/Rufus-2.png?raw=true "Rufus")

5. Sélectionnez la clé USB
</br>![Rufus USB](https://8e-couche.xyz/Portfolio/PfSense/Img/Rufus-3.png?raw=true "Rufus USB")

6. Sélectionnez l'ISO de Debian 11, continuez si vous avez une erreur "ISOHybrid"
</br>![Rufus ISO error](https://8e-couche.xyz/Portfolio/PfSense/Img/Rufus-4.png?raw=true "Rufus ISO error")

7. Lancez le formatage

#### Système

1. Branchez la clé USB sur le serveur
2. Démarrez le serveur
3. Appuyez sur F11 pour accéder au boot menu
4. Sélectionnez la clé USB et faites entrer
</br>![BIOS USB](https://8e-couche.xyz/Portfolio/PfSense/Img/Bios_USB.png?raw=true "BIOS USB")

5. Un nouveau menu apparaît, sélectionnez "Graphical Install" et faites entrer
</br>![Debian Graphical Install](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-1.png?raw=true "Debian Graphical Install")

6. Sélectionnez ensuite la langue voulue (ici Français) en utilisant les flèches ou la souris puis entrer ou "continue".
</br>![Debian Language](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-2.png?raw=true "Debian Language")

7. Sélectionnez votre pays (ici France) puis continuez. Cela impactera les configurations fuseaux horaires, etc...
</br>![Debian Local](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-3.png?raw=true "Debian Local")

8. Sélectionnez votre disposition de clavier, un Azerty français sera "Français" ; pour un Qwerty, cela sera "Etats-Unis"
</br>![Debian Keyboard](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-4.png?raw=true "Debian Keyboard")

9. Nommez le serveur et faites "continuer" (nous l’appellerons ici "FTP-Entreprise" pour l’exemple)
</br>![Debian Name](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-5.png?raw=true "Debian Name")

10. Laissez le domaine vide et continuez
</br>![Debian Domain](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-6.png?raw=true "Debian Domain")

11. Choisisez ensuite un mot de passe sécurisé pour le superuser. J’utiliserais ici un programme Python disponible sur mon [Github](https://github.com/Nikki-Devil/PassGen) pour le générer
</br>![PassGen](https://8e-couche.xyz/Portfolio/DebSFTP/Img/PassGen.png?raw=true "PassGen")
</br>![Debian Root Password](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-7.png?raw=true "Debian Root Password")

12. Confirmez le mot de passe et continuez
13. Choisissez ensuite un nom d’utilisateur (ici nous garderons le même que le nom de machine soit : "FTP-Entreprise")
</br>![Debian Username](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-8.png?raw=true "Debian Username")

14. Nous ferons continuer directement (gardant le même nom pour l’utilisateur) après mais vous pouvez changer ce qui
est marqué pour l’identifiant (devenant différent du nom affiché à l’écran)
</br>![Debian Username 2](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-9.png?raw=true "Debian Username 2")

15. Choisissez ensuite un mot de passe pour l’utilisateur.
</br>![Debian User Password](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-10.png?raw=true "Debian User Password")

16. Confirmez le mot de passe et continuez
17. Sélectionnez "Assisté – utiliser tout un disque avec LVM chiffré", n'ayant pas besoin de partitionnement particulier mais d'une protection des données
</br>![Debian Partition](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-11.png?raw=true "Debian Partition")

18. Sélectionnez le disque sur lequel vous souhaitez installer Debian (ici sda) et continuez
</br>![Debian Disk](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-12.png?raw=true "Debian Disk")

19. Sélectionnez "Tout dans une seule partition" et continuez
</br>![Debian Partition 2](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-13.png?raw=true "Debian Partition 2")

19. Faites les modifications sur le disque en choisissant "Continuer" dans la page suivante et continuez
</br>![Debian WriteDisk](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-14.png?raw=true "Debian WriteDisk")
20. Choisissez la phrase de chiffrement pour le disque et continuez, j'utilise ici mon programme une nouvelle fois
</br>![Debian Encryption](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-15.png?raw=true "Debian Encryption")

21. Il est maintenant demandé la taille de la partition, laissez la taille par défaut et continuez
</br>![Debian Partition Size](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-16.png?raw=true "Debian Partition Size")

22. Choisissez "Continuer" pour valider les modifications sur le disque
</br>![Debian Partition Write](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-17.png?raw=true "Debian Partition Write")

23. Choisissez "Oui" pour confirmer les écrire
</br>![Debian Partition Write Confirm](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-18.png?raw=true "Debian Partition Write Confirm")

24. Si Debian vous demande si vous avez un autre support d’installation pour installer des programmes supplémentaires,
cochez "non" et continuez
</br>![Debian OtherSupport](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-19.png?raw=true "Debian OtherSupport")

25. Faites continuer en sélectionnant le pays où est votre serveur l’outil de gestion des paquets (ici France)
</br>![Debian Package](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-20.png?raw=true "Debian Package")

26. Sélectionnez le miroir Debian (ici deb.debian.org) et continuez
</br>![Debian Mirror](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-21.png?raw=true "Debian Mirror")

27. Laissez vide pour le proxy et continuez
</br>![Debian Proxy](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-22.png?raw=true "Debian Proxy")

28. Si Debian vous demande si vous souhaitez participer à la "configuration popularity-contest" choisissez "non" et
continuez
</br>![Debian Popularity](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-23.png?raw=true "Debian Popularity")

29. Patientez et une fois l’apparition de la "selection des logiciels", sélectionnez "Environnement de bureau Debian", "…MATE" et "utilitaires usuels du système", décochez le reste.
</br>![Debian Software](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-24.png?raw=true "Debian Software")

30. Faites continuer et patientez jusqu’à la fin de l’installation
31. Une fois l’installation terminée, sélectionnez "Oui" pour installer le chargeur de démarrage GRUB sur la clé USB
</br>![Debian Grub](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-25.png?raw=true "Debian Grub")

32. Choisissez le disque sur lequel installer GRUB (ici /dev/sda) et continuez
</br>![Debian Grub Disk](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-26.png?raw=true "Debian Grub Disk")

33. Une fois l’installation terminée, faites "Continuer" et retirez la clé USB une fois le serveur redémarré
</br>![Debian Finish](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-27.png?raw=true "Debian Finish")
</br>![Debian Finish 2](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-28.png?raw=true "Debian Finish 2")


#### Installation des applications

1. Démarrez le serveur, vous devriez arriver sur un écran noir avec quelques lignes de texte, entrez la clé de chiffrement que vous avez choisi lors de l'installation
</br>![Debian Uncrypted](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Install-28.png?raw=true "Debian Uncrypted")

2. Avant de commencer, connectez vous sur le Debian avec le compte root et le mot de passe que vous avez choisi lors de l'installation
</br>![Debian Root](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Launch-1.png?raw=true "Debian Root")

3. Nous allons mettre à jour Debian. Pour cela, ouvrez un terminal (CTRL+T) ou lancez le Terminal MATE
</br>![Debian Terminal](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Launch-2.png?raw=true "Debian Terminal")

4. Tapez la commande suivante :
```bash
sudo apt update && sudo apt upgrade -y
```
</br>![Debian Update](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Launch-3.png?raw=true "Debian Update")

5. Nous allons ensuite ajouter l'utilisateur au groupe sudo. Pour cela, ouvrez un terminal (CTRL+T) et tapez la commande suivante :
```bash
sudo usermod -aG sudo NOM_DE_L_UTILISATEUR
```
</br>![Debian Sudo](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Launch-4.png?raw=true "Debian Sudo")

6. Déconnectez vous de la session root et reconnectez vous avec le compte utilisateur
</br>![Debian User](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Launch-5.png?raw=true "Debian User")
</br>![Debian User 2](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Launch-6.png?raw=true "Debian User 2")

##### Installation SFTP

2. Installez SFTP et démarrez SFTP
```sh
sudo apt install openssh-server
sudo systemctl start sshd
```
</br>![Debian SFTP Install](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_sftp-1.png?raw=true "Debian SFTP Install")

3. Vérifiez que SFTP est bien démarré
```sh
sudo systemctl status sshd
```
</br>![Debian SFTP Status](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_sftp-2.png?raw=true "Debian SFTP Status")
</br>Notez que pour sortir de la commande status, vous pouvez appuyer sur la touche Q ou CTRL+C

##### Configuration SFTP

1. Créez l'utilisateur ou les utilisateurs</br>
```sh
sudo adduser <username>
```
</br>Donnez les informations demandées
</br>![Debian SFTP User](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_sftp-3.png?raw=true "Debian SFTP User")

2. Installez ufw (un pare-feu logiciel) et ouvrez le port 22 (Port SSH, uniquement en TCP) :
```sh
sudo apt install ufw
sudo ufw allow 22/tcp
```
</br>![Debian SFTP UFW](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_sftp-4.png?raw=true "Debian SFTP UFW")

3. Redémarrez SFTP
```sh
sudo systemctl restart sshd
```
</br>![Debian SFTP Restart](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_sftp-5.png?raw=true "Debian SFTP Restart")

##### Installation fail2ban

1. Installez et démarrez Fail2Ban
```sh
sudo apt install fail2ban
sudo systemctl start fail2ban
```
3. Activez Fail2Ban au démarrage
```sh
sudo systemctl enable fail2ban
```
</br>![Debian Fail2Ban Install](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_fail2ban-1.png?raw=true "Debian Fail2Ban Install")

4. Vérifiez que Fail2Ban est bien démarré
```sh
sudo systemctl status fail2ban
```
</br>![Debian Fail2Ban Status](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_fail2ban-2.png?raw=true "Debian Fail2Ban Status")

##### Configuration fail2ban

1. Créez le fichier de configuration
```sh
sudo nano /etc/fail2ban/jail.local
```
2. Ajoutez les lignes suivantes à la fin du fichier
```sh
[sftp]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
```
</br>![Debian Fail2Ban Config 3](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_fail2ban-3.png?raw=true "Debian Fail2Ban Config 3")

3. Redémarrez Fail2Ban
```sh
sudo systemctl restart fail2ban
```
</br>![Debian Fail2Ban Restart](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_fail2ban-4.png?raw=true "Debian Fail2Ban Restart")

## Sécurité

L'utilisation d'ufw et de fail2ban permet de sécuriser le serveur contre les attaques de type brute-force et de bloquer les ports non utilisés
</br>Les connexions sont aussi limitées aux utilisateurs inscrits dans le serveur et sont donc sécurisé à la hauteur de la sécurité du mot de passe de l'utilisateur
</br>On peut également noter que de par sa nature, le sftp ouvre la possibilité de se connecter au serveur avec un client SSH comme Putty pour un accès à distance au sain du réseau local
</br>Il est aussi important de noter que le serveur n'est normalement pas accessible en dehors du réseau local, ce qui limite les risques d'attaques extérieures

## Utilisation

Pour utiliser le serveur, il vous suffit de vous connecter avec un client FTP (FileZilla, WinSCP, etc...) avec l'adresse IP du serveur, le nom d'utilisateur et le mot de passe de l'utilisateur
</br>Pour savoir quelle est l'adresse IP du serveur, vous pouvez utiliser la commande suivante :
```sh
ip a
```
</br>![Debian IP](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Use-1.png?raw=true "Debian IP")
</br>Notez que l'adresse IP ici est 192.168.202.166
</br>Nous allons ici prendre l'exemple de FileZilla

1. Ouvrez FileZilla
2. Entrez l'adresse IP du serveur dans "Hôte"
3. Entrez le nom d'utilisateur dans "Identifiant"
4. Entrez le mot de passe dans "Mot de passe"
5. Entrez le port 22 dans "Port"
6. Cliquez sur "Connexion rapide"
7. Acceptez le certificat
</br>![FileZilla](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Use-2.png?raw=true "FileZilla")
</br>![FileZilla](https://8e-couche.xyz/Portfolio/DebSFTP/Img/Deb_Use-3.png?raw=true "FileZilla")
