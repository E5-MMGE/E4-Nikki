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
  * [Installation RustDesk Server](#Installation-RustDesk-Server)
  * [Installation Debian](#Installation-Debian)
    * [Création de la VM](#Création-de-la-VM)
    * [Installation de Debian](#Installation-de-Debian)
    * [Installation des applications](#Installation-des-applications)
      * [Installation de RustDesk](#Installation-de-RustDesk)
      * [Configuration de RustDesk](#Configuration-de-RustDesk)
      * [Installation de Tailscale](#Installation-de-Tailscale)
      * [Configuration de Tailscale](#Configuration-de-Tailscale)
      * [Installation de Chntpw](#Installation-de-Chntpw)
      * [Installation de memtest86+](#Installation-de-memtest86+)
      * [Installation de BleachBit](#Installation-de-BleachBit)
      * [Configuration de BleachBit](#Configuration-de-BleachBit)
* [Utilisation](#Utilisation)
* [Roadmap](#Roadmap)

## Pour Commencer

Installation d’une clé bootable sous Debian 11 pour faire du support spécialisé hors système.
Le but est de pouvoir détecter et réparer des problèmes sur des machines Windows si le système ne démarre pas ou s'il n'est pas accessible (perte de mot de passe, etc...) depuis la clé USB.

Nous le ferons à l’aide d’un ordinateur annexe sous Windows, et de VMware Workstation 17, mais nous pourrions
commencer avec un ordinateur sous Linux et un autre outil de virtualisation permettant d’utiliser une clé USB comme
volume pour les machines virtuelles.
Nous pourrions également utiliser une machine physique pour l'installation de Debian mais nous utiliserons une machine virtuelle pour des raisons de simplicité lorsqu'il est question de faire des mise à jour, tests ou d'ajouter des fonctionnalités sur la clé.

### Prérequis

* [VmWare Workstation](https://www.vmware.com/go/getworkstation-win) pré-installé
* Clé/Stockage USB de 8Go minimum
* ISO de [Debian 11](https://cdimage.debian.org/mirror/cdimage/archive/11.8.0/amd64/iso-cd/)
* Serveur Debian 11 pré-installé (Serveur RustDesk)

### Installation RustDesk Server



### Installation Debian

#### Création de la VM

1. Téléchargez l'ISO de Debian 11
Ici nous utiliserons un ordinateur sous l’architecture Amd64 en netinst pour correspondre aux postes les plus communs, l’iso
sera donc amd64 ou x86-64 mais le site propose également des iso d’architectures différentes tel que l'arm64 ou plus spécialisées [ici](https://cdimage.debian.org/mirror/cdimage/archive/11.8.0)
<br> ![Debian Website](/DebSupport/Img/Debian-1.png?raw=true "Debian Website")
2. Branchez votre clé USB
3. Ouvrez VmWare Workstation
</br>![VmWare](/DebSupport/Img/VmWare-2.png?raw=true "VmWare")
4. Créez une nouvelle machine virtuelle et sélectionnez « Custom »
</br>![VmWare Create](/DebSupport/Img/VmWare-3.png?raw=true "VmWare Create")
5. Faites next puis sélectionnez « I will install the operating
system later » et continuez
</br>![VmWare Create No OS](/DebSupport/Img/VmWare-4.png?raw=true "VmWare Create No OS")
6. Sélectionnez « Linux » et cherchez « Debian 11.x 64-bit » avant de continuer
</br>![VmWare Create OS](/DebSupport/Img/VmWare-5.png?raw=true "VmWare Create OS")
7. Nommez votre machine virtuelle et mettez là or des dossiers utilisateurs (dans C:/VM/nomdevm par exemple). Cela évitera des conflits de permissions avec VmWare
</br>![VmWare Create Name](/DebSupport/Img/VmWare-6.png?raw=true "VmWare Create Name")
8. Continuez, sélectionnez « Use a physical disk »
</br>![VmWare Create Disk](/DebSupport/Img/VmWare-7.png?raw=true "VmWare Create Disk")
9. Sélectionnez votre clé USB et continuez. Si vous n'êtes pas sûr du disque à sélectionner, vous pouvez sélectionner "Use Individual partitions" et "Next" pour voir les partitions de votre disque. Retournez en arrière et remettez "Use entire disk" une fois que vous avez trouvé votre disque
</br>![VmWare Create Disk USB](/DebSupport/Img/VmWare-8.png?raw=true "VmWare Create Disk USB")
</br>![VmWare Create Disk USB 2](/DebSupport/Img/VmWare-9.png?raw=true "VmWare Create Disk USB 2")
10. Continuez jusqu'à la fin de la création de la machine virtuelle
</br>![VmWare Create Options](/DebSupport/Img/VmWare-10.png?raw=true "VmWare Create Options")
</br>![VmWare Create Options 2](/DebSupport/Img/VmWare-11.png?raw=true "VmWare Create Options 2")
</br>![VmWare Create Options 3](/DebSupport/Img/VmWare-12.png?raw=true "VmWare Create Options 3")
11. Une fois la machine virtuelle créée, allez dans les paramètres de la machine virtuelle et sélectionnez "USB Controller" dans la liste de gauche
</br>![VmWare Settings](/DebSupport/Img/VmWare-13.png?raw=true "VmWare Settings")
12. Sélectionnez "USB Compatibility" et sélectionnez "USB 3.0" dans la liste déroulante
</br>![VmWare Settings USB](/DebSupport/Img/VmWare-14.png?raw=true "VmWare Settings USB")
13. Allez dans « CD/DVD (IDE) », sélectionnez « Use ISO image file : » et mettez l’Iso de Debian 11
</br>![VmWare Settings ISO](/DebSupport/Img/VmWare-15.png?raw=true "VmWare Settings ISO")
14. Démarrez la machine virtuelle. Si une erreur apparaît, relancer VMware Workstation en mode administrateur. Cela est dû à un problème de permissions avec la clé USB
</br>![VmWare Settings ISO](/DebSupport/Img/VmWare-16.png?raw=true "VmWare Settings ISO")


#### Système

1. Démarrez la Machine Virtuelle
2. Sélectionnez, en faisant « entrer », la première option « Graphical install »
</br>![Debian Graphical Install](/DebSupport/Img/Debian-2.png?raw=true "Debian Graphical Install")
3. Sélectionnez ensuite la langue voulue (ici Français) en utilisant les flèches ou la souris puis entrer ou « continue ».
</br>![Debian Language](/DebSupport/Img/Debian-3.png?raw=true "Debian Language")
4. Sélectionnez votre pays (ici France) puis continuez. Cela impactera les configurations fuseaux horaires, etc...
</br>![Debian Local](/DebSupport/Img/Debian-4.png?raw=true "Debian Local")
5. Sélectionnez votre disposition de clavier, un Azerty français sera « Français » ; pour un Qwerty, cela sera « Etats-Unis »
</br>![Debian Keyboard](/DebSupport/Img/Debian-5.png?raw=true "Debian Keyboard")
6. Nommez le serveur et faites « continuer » (nous l’appellerons ici « Support » pour l’exemple)
</br>![Debian Name](/DebSupport/Img/Debian-6.png?raw=true "Debian Name")
7. Laissez le domaine vide et continuez
</br>![Debian Domain](/DebSupport/Img/Debian-7.png?raw=true "Debian Domain")
8. Choisisez ensuite un mot de passe sécurisé pour le superuser. J’utiliserais ici un programme Python disponible sur mon [Github](https://github.com/Nikki-Devil/PassGen) pour le générer
</br>![PassGen](/DebSupport/Img/PassGen.png?raw=true "PassGen")
</br>![Debian Root Password](/DebSupport/Img/Debian-8.png?raw=true "Debian Root Password")
9. Confirmez le mot de passe et continuez
10. Choisissez ensuite un nom d’utilisateur (ici nous garderons le même que le nom de machine soit : « Support »)
</br>![Debian Username](/DebSupport/Img/Debian-9.png?raw=true "Debian Username")
11. Nous ferons continuer directement (gardant le même nom pour l’utilisateur) après mais vous pouvez changer ce qui
est marqué pour l’identifiant (devenant différent du nom affiché à l’écran)
</br>![Debian Username](/DebSupport/Img/Debian-10.png?raw=true "Debian Username")
12. Choisissez ensuite un mot de passe pour l’utilisateur.
</br>![Debian User Password](/DebSupport/Img/Debian-11.png?raw=true "Debian User Password")
13. Confirmez le mot de passe et continuez
14. Sélectionnez « Assisté – utiliser tout un disque entier », n'ayant pas besoin de partitionnement particulier ou de chiffrer le disque pour l'utilisation de la clé
</br>![Debian Partition](/DebSupport/Img/Debian-12.png?raw=true "Debian Partition")
15. Sélectionnez le disque sur lequel vous souhaitez installer Debian (ici sda) et continuez
</br>![Debian Disk](/DebSupport/Img/Debian-13.png?raw=true "Debian Disk")
16. Faites les modifications sur le disque en choisissant « Oui » dans la page suivante et continuez
</br>![Debian WriteDisk](/DebSupport/Img/Debian-14.png?raw=true "Debian WriteDisk")
17. Si Debian vous demande si vous avez un autre support d’installation pour installer des programmes supplémentaires,
cochez « non » et continuez
</br>![Debian OtherSupport](/DebSupport/Img/Debian-15.png?raw=true "Debian OtherSupport")
18. Faites continuer en sélectionnant le pays où est votre serveur l’outil de gestion des paquets (ici France)
</br>![Debian Package](/DebSupport/Img/Debian-16.png?raw=true "Debian Package")
19. Sélectionnez le miroir Debian (ici deb.debian.org) et continuez
</br>![Debian Mirror](/DebSupport/Img/Debian-17.png?raw=true "Debian Mirror")
20. Laissez vide pour le proxy et continuez
</br>![Debian Proxy](/DebSupport/Img/Debian-18.png?raw=true "Debian Proxy")
21. Si Debian vous demande si vous souhaitez participer à la « configuration popularity-contest » choisissez « non » et
continuez
</br>![Debian Popularity](/DebSupport/Img/Debian-19.png?raw=true "Debian Popularity")
22. Patientez et une fois l’apparition de la « selection des logiciels », sélectionnez « Environnement de bureau Debian », « …MATE » et « utilitaires usuels du système », décochez le reste.
</br>![Debian Software](/DebSupport/Img/Debian-20.png?raw=true "Debian Software")
23. Faites continuer et patientez jusqu’à la fin de l’installation
24. Une fois l’installation terminée, sélectionnez « Oui » pour installer le chargeur de démarrage GRUB sur la clé USB
</br>![Debian Grub](/DebSupport/Img/Debian-21.png?raw=true "Debian Grub")
25. Choisissez le disque sur lequel installer GRUB (ici /dev/sda) et continuez
</br>![Debian Grub Disk](/DebSupport/Img/Debian-22.png?raw=true "Debian Grub Disk")
26. Une fois l’installation terminée, redémarrez la machine virtuelle
</br>![Debian Finish](/DebSupport/Img/Debian-23.png?raw=true "Debian Finish")


#### Installation des applications

1. Démarrez la Machine Virtuelle
2. Avant de commencer, connectez vous sur le Debian avec le compte root et le mot de passe que vous avez choisi lors de l'installation
2. Nous allons mettre à jour Debian. Pour cela, ouvrez un terminal (CTRL+T) et tapez la commande suivante :
```bash
sudo apt update && sudo apt upgrade -y
```
![Debian Update](/DebSupport/Img/Debian-24.png?raw=true "Debian Update")
3. Nous allons ensuite ajouter l'utilisateur au groupe sudo. Pour cela, ouvrez un terminal (CTRL+T) et tapez la commande suivante :
```bash
sudo usermod -aG sudo NOM_DE_L_UTILISATEUR
```
![Debian Sudo](/DebSupport/Img/Debian-24.png?raw=true "Debian Sudo")
4. Déconnectez vous de la session root et reconnectez vous avec le compte utilisateur

##### Installation de RustDesk

1. Téléchargez l'archive deb de RustDesk sur le [Github officiel](https://github.com/rustdesk/rustdesk/releases/latest)
![RustDesk Github](/DebSupport/Img/RustDesk-1.png?raw=true "RustDesk Github")
2. Ouvrez un terminal (CTRL+T) et tapez la commande suivante :
```bash
sudo dpkg -i ~/Downloads/NOM_DE_L_ARCHIVE.deb
```
![RustDesk Terminal](/DebSupport/Img/RustDesk-3.png?raw=true "RustDesk Terminal")
3. Lancez ensuite RustDesk, il doit être disponible dans le menu des applications
![RustDesk Menu](/DebSupport/Img/RustDesk-2.png?raw=true "RustDesk Menu")

##### Configuration de RustDesk



##### Installation de Tailscale



##### Configuration de Tailscale

1. Reset la configuration de Tailscale en tapant la commande suivante dans un terminal (CTRL+T) :
```bash
sudo tailscale reset
```
![Tailscale Reset](/DebSupport/Img/Tailscale-1.png?raw=true "Tailscale Reset")
2. Connectez vous à votre compte Tailscale en tapant la commande suivante dans un terminal (CTRL+T) :
```bash
sudo tailscale up
```
![Tailscale Up](/DebSupport/Img/Tailscale-2.png?raw=true "Tailscale Up")
3. Allez sur le site pour vous connecter, et connectez vous à votre compte Tailscale
![Tailscale Site](/DebSupport/Img/Tailscale-3.png?raw=true "Tailscale Site")


##### Installation de Chntpw

1. Ouvrez un terminal (CTRL+T) et tapez la commande suivante :
```bash
sudo apt install chntpw
```
![Chntpw Terminal](/DebSupport/Img/Chntpw-1.png?raw=true "Chntpw Terminal")
2. Vérifiez que l'installation s'est bien déroulée en tapant la commande suivante :
```bash
chntpw -h
```
![Chntpw Terminal](/DebSupport/Img/Chntpw-2.png?raw=true "Chntpw Terminal")

##### Installation de memtest86+

1. Ouvrez un terminal (CTRL+T) et tapez la commande suivante :
```bash
sudo apt install memtest86+
```
![Memtest86+ Terminal](/DebSupport/Img/Memtest86+-1.png?raw=true "Memtest86+ Terminal")

##### Installation de BleachBit

1.  Ouvrez un terminal (CTRL+T) et tapez la commande suivante :
```bash
sudo apt install bleachbit
```
![BleachBit Terminal](/DebSupport/Img/BleachBit-1.png?raw=true "BleachBit Terminal")
2. Vérifiez que l'installation s'est bien déroulée en tapant la commande suivante :
```bash
bleachbit -h
```

##### Configuration de BleachBit

1. Lancez BleachBit en tant que root, soit dans le menu des applications, soit en tapant la commande suivante dans un terminal (CTRL+T) :
```bash
sudo bleachbit
```
![BleachBit Menu](/DebSupport/Img/BleachBit-2.png?raw=true "BleachBit Menu")
2. Cochez toutes les cases excepté "Free disk space" et "Memory" puis cliquez sur "Supprimer"

## Utilisation



## Roadmap

* Installation du serveur RustDesk
* Installation de Debian
* Installation de RustDesk
* Configuration de RustDesk
* Installation de TailScale
* Configuration de TailScale
* Installation de BleachBit
* Configuration de BleachBit
* Installation de Chntpw
* Installation de memtest86+
* Utilisation