<br/>
<p align="center">
  <h2 align="center">Installation Clé de support (Debian 11)</h2>
  <p align="center">
    Fait en entreprise et dans le cadre de l'épreuve E4 du BTS SIO 2022-2024
    <br/>
    <br/>
  </p>
</p>

## Sommaire

* [Pour Commencer](#Pour-Commencer)
  * [Prérequis](#Prérequis)
  * [Installation RustDesk Server](#Installation-RustDesk-Server)
  * [Installation Debian](#Installation-Debian)
    * [Création de la VM](#Création-de-la-VM)
    * [Installation de Debian](#Installation-de-Debian)
    * [Installation des applications](#Installation-des-applications)
      * [Installation de Tailscale](#Installation-de-Tailscale)
      * [Configuration de Tailscale](#Configuration-de-Tailscale)
      * [Installation de RustDesk](#Installation-de-RustDesk)
      * [Configuration de RustDesk](#Configuration-de-RustDesk)
      * [Installation de Chntpw](#Installation-de-Chntpw)
      * [Installation de memtest86+](#Installation-de-memtest86+)
      * [Installation de BleachBit](#Installation-de-BleachBit)
      * [Configuration de BleachBit](#Configuration-de-BleachBit)
* [Sécurité](#Sécurité)
* [Utilisation](#Utilisation)
* [Roadmap](#Roadmap)

## Pour Commencer

Installation d’une clé bootable sous Debian 11 pour faire du support spécialisé hors système.
</br>Le but est de pouvoir détecter et réparer des problèmes sur des machines Windows si le système ne démarre pas ou s'il n'est pas accessible (perte de mot de passe, etc...) depuis la clé USB.

</br>Nous le ferons à l’aide d’un ordinateur annexe sous Windows, et de VMware Workstation 17, mais nous pourrions
commencer avec un ordinateur sous Linux et un autre outil de virtualisation permettant d’utiliser une clé USB comme
volume pour les machines virtuelles.
</br>Nous pourrions également utiliser une machine physique pour l'installation de Debian mais nous utiliserons une machine virtuelle pour des raisons de simplicité lorsqu'il est question de faire des mise à jour, tests ou d'ajouter des fonctionnalités sur la clé.

</br>Nous partons également du postulat que les employés sont tous sur le même réseau, que ce soit en local ou en VPN, celui-ci étant fournis par une autre entreprise

### Prérequis

* [VmWare Workstation](https://www.vmware.com/go/getworkstation-win) pré-installé
* Clé/Stockage USB de 8Go minimum
* ISO de [Debian 11](https://cdimage.debian.org/mirror/cdimage/archive/11.8.0/amd64/iso-cd/)
* Serveur Debian 11 pré-installé (Serveur RustDesk)

### Installation RustDesk Server

1. Il faut tout d’abord installer et configurer ufws sur le serveur, pour cela, ouvrez un terminal (CTRL+T) et tapez les commandes suivantes :
```bash
sudo apt install ufw
sudo ufw allow 21115:21119/tcp
sudo ufw allow 8000/tcp
sudo ufw allow 21116/udp
sudo ufw enable
```
</br>![UFW Terminal](/DebSupport/Img/Deb_RustServ-0.png?raw=true "UFW Terminal")

2. Installez le serveur RustDesk avec les commandes suivante :
```bash
wget https://raw.githubusercontent.com/techahold/rustdeskinstall/master/install.sh
chmod +x install.sh
./install.sh
```
</br>![RustDesk Terminal](/DebSupport/Img/Deb_RustServ-1.png?raw=true "RustDesk Terminal")

3. Il va être demandé quelques informations, la première est la préférence entre la connexion par IP ou par Domaine, nous choisirons ici l'IP (1)
</br>![RustDesk Terminal](/DebSupport/Img/Deb_RustServ-2.png?raw=true "RustDesk Terminal")

4. Il va ensuite être demandé si nous souhaitons installer un serveur HTTP pour récupérer les fichiers de configuration, nous choisirons ici "Non" (2)
</br>![RustDesk Terminal](/DebSupport/Img/Deb_RustServ-3.png?raw=true "RustDesk Terminal")

5. Copiez la clé publique, nous en aurons besoin plus tard
</br>![RustDesk Terminal](/DebSupport/Img/Deb_RustServ-4.png?raw=true "RustDesk Terminal")

6. Installez ensuite Tailscale avec les commandes suivantes :
```bash
sudo apt install curl
curl -fsSL https://tailscale.com/install.sh | sh
```
</br>![Tailscale Terminal](/DebSupport/Img/Deb_Tailscale-0.png?raw=true "Tailscale Terminal")

7. Connectez vous à votre compte Tailscale en tapant la commande suivante dans un terminal (CTRL+T) :
```bash
sudo tailscale up
```
</br>![Tailscale Up](/DebSupport/Img/Deb_Tailscale-1.png?raw=true "Tailscale Up")

2. Allez sur le site pour vous connecter, et connectez vous à votre compte Tailscale
</br>![Tailscale Site](/DebSupport/Img/Deb_Tailscale-2.png?raw=true "Tailscale Site")

3. Cliquez sur "Connect" pour connecter le système à votre compte Tailscale
</br>![Tailscale Connect](/DebSupport/Img/Deb_Tailscale-3.png?raw=true "Tailscale Connect")

4. Désactivez l'expiration de la clé en cliquant sur "Disable key expiry" après avoir identifié le serveur nouvellement ajouté
</br>![Tailscale Disable Key](/DebSupport/Img/Deb_RustScale-4.png?raw=true "Tailscale Disable Key")

5. Retournez sur le terminal et tapez la commande suivante :
```bash
sudo systemctl enable tailscaled
sudo tailscale ip -4
```
</br>![Tailscale Terminal](/DebSupport/Img/Deb_RustScale-5.png?raw=true "Tailscale Terminal")
</br>Notez l'adresse IP qui vous est donnée, nous en aurons besoin plus tard

### Installation Debian

#### Création de la VM

1. Téléchargez l'ISO de Debian 11
Ici nous utiliserons un ordinateur sous l’architecture Amd64 en netinst pour correspondre aux postes les plus communs, l’iso
sera donc amd64 ou x86-64 mais le site propose également des iso d’architectures différentes tel que l'arm64 ou plus spécialisées [ici](https://cdimage.debian.org/mirror/cdimage/archive/11.8.0)
2. Branchez votre clé USB
3. Ouvrez VmWare Workstation
</br>![VmWare](/DebSupport/Img/VmWare-1.png?raw=true "VmWare")

4. Créez une nouvelle machine virtuelle et sélectionnez « Custom »
</br>![VmWare Create](/DebSupport/Img/VmWare-2.png?raw=true "VmWare Create")

5. Faites next et encore next, puis sélectionnez « I will install the operating system later » et continuez
</br>![VmWare Create](/DebSupport/Img/VmWare-3.png?raw=true "VmWare Create")
</br>![VmWare Create No OS](/DebSupport/Img/VmWare-4.png?raw=true "VmWare Create No OS")

6. Sélectionnez « Linux » et cherchez « Debian 11.x 64-bit » avant de continuer
</br>![VmWare Create OS](/DebSupport/Img/VmWare-5.png?raw=true "VmWare Create OS")

7. Nommez votre machine virtuelle et mettez là or des dossiers utilisateurs (dans C:/VM/nomdevm par exemple). Cela évitera des conflits de permissions avec VmWare
</br>![VmWare Create Name](/DebSupport/Img/VmWare-6.png?raw=true "VmWare Create Name")

9. Faites next ou changez le nombre de cœurs pour la VM selon la configuration de votre ordinateur pour accélérer les installations, de même pour la RAM
</br>![VmWare Create Cores](/DebSupport/Img/VmWare-7.png?raw=true "VmWare Create Cores")
</br>![VmWare Create RAM](/DebSupport/Img/VmWare-8.png?raw=true "VmWare Create RAM")

10. Laissez la carte réseau en NAT pour avoir un accès à internet lors de l’installation et continuez
</br>![VmWare Create Network](/DebSupport/Img/VmWare-9.png?raw=true "VmWare Create Network")

11. Laissez le controller de disque tel quel et continuez, de même pour le type de disque
</br>![VmWare Create Disk](/DebSupport/Img/VmWare-10.png?raw=true "VmWare Create Disk")
</br>![VmWare Create Disk 2](/DebSupport/Img/VmWare-11.png?raw=true "VmWare Create Disk 2")

12. Continuez, sélectionnez « Use a physical disk »
</br>![VmWare Create Disk](/DebSupport/Img/VmWare-12.png?raw=true "VmWare Create Disk")

13. Sélectionnez votre clé USB et continuez. Si vous n'êtes pas sûr du disque à sélectionner, vous pouvez sélectionner "Use Individual partitions" et "Next" pour voir les partitions de votre disque. Retournez en arrière et remettez "Use entire disk" une fois que vous avez trouvé votre disque
</br>![VmWare Create Disk USB](/DebSupport/Img/VmWare-13.png?raw=true "VmWare Create Disk USB")
</br>![VmWare Create Disk USB 2](/DebSupport/Img/VmWare-14.png?raw=true "VmWare Create Disk USB 2")

14. Continuez jusqu'à la fin de la création de la machine virtuelle
</br>![VmWare Create Options](/DebSupport/Img/VmWare-15.png?raw=true "VmWare Create Options")
</br>![VmWare Create Options 2](/DebSupport/Img/VmWare-16.png?raw=true "VmWare Create Options 2")

15. Une fois la machine virtuelle créée, allez dans les paramètres de la machine virtuelle et sélectionnez "USB Controller" dans la liste de gauche
</br>![VmWare Settings](/DebSupport/Img/VmWare-17.png?raw=true "VmWare Settings")

16. Sélectionnez "USB Compatibility" et sélectionnez "USB 3.1" dans la liste déroulante
</br>![VmWare Settings USB](/DebSupport/Img/VmWare-18.png?raw=true "VmWare Settings USB")

17. Allez dans « CD/DVD (IDE) », sélectionnez « Use ISO image file : » et mettez l’Iso de Debian 11
</br>![VmWare Settings ISO](/DebSupport/Img/VmWare-19.png?raw=true "VmWare Settings ISO")

18. Démarrez la machine virtuelle. Si une erreur apparaît, débranchez et rebranchez la clé, assurez-vous qu'elle ne soit pas utilisée d'une quelquonque manière par votre ordinateur et relancer VMware Workstation en mode administrateur. Cela est dû à un problème de permissions avec la clé USB et de conflit d'utilisation avec VmWare
</br>![VmWare Settings ISO](/DebSupport/Img/VmWare-20.png?raw=true "VmWare Settings ISO")


#### Système

1. Démarrez la Machine Virtuelle
2. Sélectionnez, en faisant « entrer », la première option « Graphical install »
</br>![Debian Graphical Install](/DebSFTP/Img/Deb_Install-1.png?raw=true "Debian Graphical Install")

3. Sélectionnez ensuite la langue voulue (ici Français) en utilisant les flèches ou la souris puis entrer ou « continue ».
</br>![Debian Language](/DebSFTP/Img/Deb_Install-2.png?raw=true "Debian Language")

4. Sélectionnez votre pays (ici France) puis continuez. Cela impactera les configurations fuseaux horaires, etc...
</br>![Debian Local](/DebSFTP/Img/Deb_Install-3.png?raw=true "Debian Local")

5. Sélectionnez votre disposition de clavier, un Azerty français sera « Français » ; pour un Qwerty, cela sera « Etats-Unis »
</br>![Debian Keyboard](/DebSFTP/Img/Deb_Install-4.png?raw=true "Debian Keyboard")

6. Nommez le serveur et faites « continuer » (nous l’appellerons ici « Support » pour l’exemple)
</br>![Debian Name](/DebSupport/Img/Deb_Install-5.png?raw=true "Debian Name")

7. Laissez le domaine vide et continuez
</br>![Debian Domain](/DebSFTP/Img/Deb_Install-6.png?raw=true "Debian Domain")

8. Choisisez ensuite un mot de passe sécurisé pour le superuser. J’utiliserais ici un programme Python disponible sur mon [Github](https://github.com/Nikki-Devil/PassGen) pour le générer
</br>![PassGen](/DebSFTP/Img/PassGen.png?raw=true "PassGen")
</br>![Debian Root Password](/DebSFTP/Img/Deb_Install-7.png?raw=true "Debian Root Password")

9. Confirmez le mot de passe et continuez
10. Choisissez ensuite un nom d’utilisateur (ici nous garderons le même que le nom de machine soit : « Support »)

</br>![Debian Username](/DebSupport/Img/Deb_Install-8.png?raw=true "Debian Username")
11. Nous ferons continuer directement (gardant le même nom pour l’utilisateur) après mais vous pouvez changer ce qui
est marqué pour l’identifiant (devenant différent du nom affiché à l’écran)
</br>![Debian Username 2](/DebSupport/Img/Deb_Install-9.png?raw=true "Debian Username 2")

12. Choisissez ensuite un mot de passe pour l’utilisateur.
</br>![Debian User Password](/DebSFTP/Img/Deb_Install-10.png?raw=true "Debian User Password")

13. Confirmez le mot de passe et continuez
14. Sélectionnez « Assisté – utiliser un disque entier », n'ayant pas besoin de partitionnement particulier ou de chiffrer le disque pour l'utilisation de la clé
</br>![Debian Partition](/DebSupport/Img/Deb_Install-11.png?raw=true "Debian Partition")

15. Sélectionnez le disque sur lequel vous souhaitez installer Debian (ici sda) et continuez
</br>![Debian Disk](/DebSFTP/Img/Deb_Install-12.png?raw=true "Debian Disk")

16. Sélectionnez « Tout dans une seule partition » et continuez
</br>![Debian Partition 2](/DebSFTP/Img/Deb_Install-13.png?raw=true "Debian Partition 2")

17. Choisissez « Continuer » pour valider les modifications sur le disque
</br>![Debian Partition Write](/DebSupport/Img/Deb_Install-17.png?raw=true "Debian Partition Write")

18. Choisissez « Oui » pour confirmer les écrire
</br>![Debian Partition Write Confirm](/DebSupport/Img/Deb_Install-18.png?raw=true "Debian Partition Write Confirm")

19. Si Debian vous demande si vous avez un autre support d’installation pour installer des programmes supplémentaires,
cochez « non » et continuez
</br>![Debian OtherSupport](/DebSFTP/Img/Deb_Install-19.png?raw=true "Debian OtherSupport")

20. Faites continuer en sélectionnant le pays où est votre serveur l’outil de gestion des paquets (ici France)
</br>![Debian Package](/DebSFTP/Img/Deb_Install-20.png?raw=true "Debian Package")

21. Sélectionnez le miroir Debian (ici deb.debian.org) et continuez
</br>![Debian Mirror](/DebSFTP/Img/Deb_Install-21.png?raw=true "Debian Mirror")

22. Laissez vide pour le proxy et continuez
</br>![Debian Proxy](/DebSFTP/Img/Deb_Install-22.png?raw=true "Debian Proxy")

23. Si Debian vous demande si vous souhaitez participer à la « configuration popularity-contest » choisissez « non » et
continuez
</br>![Debian Popularity](/DebSFTP/Img/Deb_Install-23.png?raw=true "Debian Popularity")

24. Patientez et une fois l’apparition de la « selection des logiciels », sélectionnez « Environnement de bureau Debian », « …MATE » et « utilitaires usuels du système », décochez le reste.
</br>![Debian Software](/DebSFTP/Img/Deb_Install-24.png?raw=true "Debian Software")

25. Faites continuer et patientez jusqu’à la fin de l’installation
26. Une fois l’installation terminée, sélectionnez « Oui » pour installer le chargeur de démarrage GRUB sur la clé USB
</br>![Debian Grub](/DebSFTP/Img/Deb_Install-25.png?raw=true "Debian Grub")

27. Choisissez le disque sur lequel installer GRUB (ici /dev/sda) et continuez
</br>![Debian Grub Disk](/DebSFTP/Img/Deb_Install-26.png?raw=true "Debian Grub Disk")

28. Une fois l’installation terminée, faites « Continuer » et retirez la clé USB une fois redémarré
</br>![Debian Finish](/DebSFTP/Img/Deb_Install-27.png?raw=true "Debian Finish")
</br>![Debian Finish 2](/DebSupport/Img/Deb_Install-28.png?raw=true "Debian Finish 2")


#### Installation des applications

1. Démarrez la Machine Virtuelle
2. Avant de commencer, connectez vous sur le Debian avec le compte root et le mot de passe que vous avez choisi lors de l'installation
</br>![Debian Root](/DebSupport/Img/Deb_Install-28.png?raw=true "Debian Root")

3. Nous allons mettre à jour Debian. Pour cela, ouvrez un terminal (CTRL+T) ou lancez le Terminal MATE
</br>![Debian Terminal](/DebSFTP/Img/Deb_Launch-2.png?raw=true "Debian Terminal")

4. Tapez la commande suivante :
```bash
sudo apt update && sudo apt upgrade -y
```
</br>![Debian Update](/DebSupport/Img/Deb_Launch-3.png?raw=true "Debian Update")

5. Nous allons ensuite ajouter l'utilisateur au groupe sudo. Pour cela, ouvrez un terminal (CTRL+T) et tapez la commande suivante :
```bash
sudo usermod -aG sudo NOM_DE_L_UTILISATEUR
```
</br>![Debian Sudo](/DebSupport/Img/Deb_Launch-4.png?raw=true "Debian Sudo")

6. Déconnectez vous de la session root et reconnectez vous avec le compte utilisateur
</br>![Debian User](/DebSupport/Img/Deb_Launch-5.png?raw=true "Debian User")
</br>![Debian User 2](/DebSupport/Img/Deb_Launch-6.png?raw=true "Debian User 2")

##### Installation de Tailscale

L'installation de Tailscale sur Debian 11 est assez simple, il suffit de lancez la commande suivante dans un terminal (CTRL+T) :
```sh
sudo apt install curl
curl -fsSL https://tailscale.com/install.sh | sh
```
<br>![Tailscale Terminal](/DebSupport/Img/Deb_Tailscale-0.png?raw=true "Tailscale Terminal")

##### Configuration de Tailscale

1. Connectez vous à votre compte Tailscale en tapant la commande suivante dans un terminal (CTRL+T) :
```bash
sudo tailscale up
```
</br>![Tailscale Up](/DebSupport/Img/Deb_Tailscale-1.png?raw=true "Tailscale Up")

2. Allez sur le site pour vous connecter, et connectez vous à votre compte Tailscale
</br>![Tailscale Site](/DebSupport/Img/Deb_Tailscale-2.png?raw=true "Tailscale Site")

3. Cliquez sur "Connect" pour connecter le système à votre compte Tailscale
</br>![Tailscale Connect](/DebSupport/Img/Deb_Tailscale-3.png?raw=true "Tailscale Connect")

4. Désactivez l'expiration de la clé en cliquant sur "Disable key expiry" après avoir identifié le système nouvellement ajouté
</br>![Tailscale Disable Key](/DebSupport/Img/Deb_Tailscale-4.png?raw=true "Tailscale Disable Key")

5. Retournez sur le terminal et tapez la commande suivante :
```bash
sudo tailscale down
sudo tailscale up --ssh
sudo systemctl enable tailscaled
```
</br>![Tailscale Terminal](/DebSupport/Img/Deb_Tailscale-5.png?raw=true "Tailscale Terminal")
</br>Cela nous permettra de connecter le système comme en VPN au serveur RustDesk et de pouvoir y accéder à distance via SSH dans le cas où RustDesk ne fonctionnerait pas

##### Installation de RustDesk

1. Téléchargez l'archive deb de RustDesk sur le [Github officiel](https://github.com/rustdesk/rustdesk/releases/latest)
</br>![RustDesk Github](/DebSupport/Img/Deb_RustDesk-1.png?raw=true "RustDesk Github")

2. Ouvrez un terminal (CTRL+T) et tapez les commandes suivantes :
```bash
sudo apt install libxdo3 curl gstreamer1.0-pipewire
sudo dpkg -i ~/Téléchargement/NOM_DE_L_ARCHIVE.deb
sudo systemctl enable rustdesk
```
Cela installera les dépendances de RustDesk et RustDesk lui même, entrez votre mot de passe lorsque cela vous est demandé
</br>![RustDesk Terminal Dependancies](/DebSupport/Img/Deb_RustDesk-2.png?raw=true "RustDesk Terminal Dependancies")
</br>![RustDesk Terminal Install](/DebSupport/Img/Deb_RustDesk-3.png?raw=true "RustDesk Terminal Install")

3. Lancez ensuite RustDesk en tapant la commande suivante dans un terminal (CTRL+T) :
```bash
rustdesk
```
</br>![RustDesk Launch](/DebSupport/Img/Deb_RustDesk-4.png?raw=true "RustDesk Launch")

##### Configuration de RustDesk

1. Une fois RustDesk lancé, cliquez sur les trois tirets en haut à droite
</br>![RustDesk Menu](/DebSupport/Img/Deb_RustDesk-5.png?raw=true "RustDesk Menu")

2. Allez dans "Sécurité" et "débloquez" les configurations de sécurité
</br>![RustDesk Security](/DebSupport/Img/Deb_RustDesk-6.png?raw=true "RustDesk Security")

3. Changez le mot de passe pour un mot de passe permanent et définissez-le
</br>![RustDesk Password](/DebSupport/Img/Deb_RustDesk-7.png?raw=true "RustDesk Password")

4. Allez dans "Réseau" et "débloquez" les configurations de réseau
</br>![RustDesk Network](/DebSupport/Img/Deb_RustDesk-8.png?raw=true "RustDesk Network")

5. Mettez dans "Serveur ID" et "Serveur Relay" l'adresse IP que vous avez noté lors de l'installation du serveur RustDesk ainsi que la clé publique que vous avez copié dans "Key" puis faites "Appliquer"
</br>![RustDesk Network](/DebSupport/Img/Deb_RustDesk-9.png?raw=true "RustDesk Network")

6. Revenez dans la page d'accueil et récupérez l'ID RustDesk du Debian
</br>![RustDesk ID](/DebSupport/Img/Deb_RustDesk-10.png?raw=true "RustDesk ID")
</br>Vous pouvez désormais vous connecter à distance à votre Debian via RustDesk en utilisant l'ID que vous avez récupéré
</br>Notez également que RustDesk se lancera automatiquement au démarrage de Debian, l'interface elle sera accessible en utilisant la commande `rustdesk` dans un terminal (CTRL+T)	

##### Installation de Chntpw

1. Ouvrez un terminal (CTRL+T) et tapez la commande suivante :
```bash
sudo apt install chntpw
```
</br>![Chntpw Terminal](/DebSupport/Img/Deb_Chntpw-1.png?raw=true "Chntpw Terminal")

2. Vérifiez que l'installation s'est bien déroulée en tapant la commande suivante :
```bash
sudo chntpw -h
```
</br>![Chntpw Terminal](/DebSupport/Img/Deb_Chntpw-2.png?raw=true "Chntpw Terminal")
</br>Cela nous permettra de réinitialiser le mot de passe d'un utilisateur Windows si celui-ci est perdu

##### Installation de memtest86+

1. Ouvrez un terminal (CTRL+T) et tapez la commande suivante :
```bash
sudo apt install memtest86+
```
</br>![Memtest86+ Terminal](/DebSupport/Img/Deb_Memtest86+-1.png?raw=true "Memtest86+ Terminal")
</br>Cela nous permettra de tester la RAM d'un ordinateur si celui-ci est lent ou si des erreurs apparaissent

##### Installation de BleachBit

1.  Ouvrez un terminal (CTRL+T) et tapez la commande suivante :
```bash
sudo apt install bleachbit
```
</br>![BleachBit Terminal](/DebSupport/Img/Deb_BleachBit-1.png?raw=true "BleachBit Terminal")

2. Vérifiez que l'installation s'est bien déroulée en tapant la commande suivante :
```bash
sudo bleachbit -h
```
</br>![BleachBit Terminal](/DebSupport/Img/Deb_BleachBit-2.png?raw=true "BleachBit Terminal")
</br>Cela nous permettra de nettoyer les fichiers temporaires du système Debian pour alléger la clé au maximum

##### Configuration de BleachBit

1. Lancez BleachBit en tant que root, soit dans le menu des applications, soit en tapant la commande suivante dans un terminal (CTRL+T) :
```bash
sudo bleachbit
```
</br>![BleachBit Menu](/DebSupport/Img/Deb_BleachBit-2.png?raw=true "BleachBit Menu")

2. Fermez la pop-up et cochez toutes les cases excepté "Free disk space" et "Memory" puis cliquez sur "Supprimer"
</br>![BleachBit Menu](/DebSupport/Img/Deb_BleachBit-3.png?raw=true "BleachBit Menu")
</br>![BleachBit Menu](/DebSupport/Img/Deb_BleachBit-4.png?raw=true "BleachBit Menu")
</br>![BleachBit Menu](/DebSupport/Img/Deb_BleachBit-5.png?raw=true "BleachBit Menu")


## Sécurité



## Utilisation



## Roadmap

* Sécurité
* Utilisation