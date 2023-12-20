<br/>
<p align="center">
  <h2 align="center">Installation d'un nouveau Windows</h2>
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
      * [Premier démarrage](#Premier-démarrage)
      * [Installation de B1](#Installation-de-B1)
        * [Installation de Net 3.5](#Installation-de-Net-3.5)
        * [Installation de B1 (Application)](#Installation-de-B1-(Application))
      * [Installation de 7z](#Installation-de-7z)
      * [Installation de Chrome](#Installation-de-Chrome)
      * [Installation de Display Link Dock](#Installation-de-Display-Link-Dock)
      * [Installation de Dropbox](#Installation-de-Dropbox)
      * [Installation de Firefox](#Installation-de-Firefox)
      * [Installation de Office 2021](#Installation-de-Office-2021)
        * [Installation de Jitsi Meet Addon](#Installation-de-Jitsi-Meet-Addon)
      * [Installation de LogMeIn](#Installation-de-LogMeIn)
      * [Installation de OpenVPN](#Installation-de-OpenVPN)
      * [Installation de Acrobat Reader](#Installation-de-Acrobat-Reader)
      * [Installation de VLC](#Installation-de-VLC)
      * [Update Windows](#Update-Windows)
      * [Update drivers](#Update-drivers)
      * [Update applications](#Update-applications)
      * [Nettoyage de Windows](#Nettoyage-de-Windows)

## Pour Commencer

Nous avons dans l'entreprise KNCO, de nouveaux commerciaux chaque mois, il est donc normal que l'on ai besoin de mettre en place une procédure d'installation générique telle que celle-ci
</br>Le besoin est donc de pouvoir donner la procédure à un nouvel IT s'il y en a et surtout de pouvoir s'assurer de ne rien oublier lors des installations
</br>Nous partons du postulat que les employés sont tous sur le même réseau, que ce soit en local ou en VPN, celui-ci étant déjà configuré par une autre entreprise
</br>Nous n'avons pas à nous soucier d'une AD, car l'entreprise n'a pas de Domaine, la raison avancée étant que 90% des employés sont des représentants commerciaux dont le travail est de se déplacer d'opticiens en opticiens pour passer des commandes de branches de lunettes

### Prérequis

* [Rufus](https://github.com/pbatard/rufus/releases/latest/), [Balena Etcher](https://github.com/balena-io/etcher/releases/latest/) ou tout autre logiciel du genre
* Clé/Stockage USB de 8Go minimum
* Une ISO Windows 11 créé via [Windows Media Creation Tool](https://www.microsoft.com/fr-fr/software-download/windows11)
* Un ordinateur portable utilisable

### Installation

#### Formatage de la clé USB

1. Récupérez l'ISO de Windows 11 ou créez la via [Windows Media Creation Tool](https://www.microsoft.com/fr-fr/software-download/windows11)
2. Téléchargez [Rufus](https://github.com/pbatard/rufus/releases/latest/)
</br>![Rufus Website](https://8e-couche.xyz/Portfolio/PfSense/Img/Rufus-1.png?raw=true "Rufus Website")

3. Branchez la clé USB sur le PC
4. Ouvrir Rufus
</br>![Rufus](https://8e-couche.xyz/Portfolio/PfSense/Img/Rufus-2.png?raw=true "Rufus")

5. Sélectionnez la clé USB
</br>![Rufus USB](https://8e-couche.xyz/Portfolio/PfSense/Img/Rufus-3.png?raw=true "Rufus USB")

6. Sélectionnez l'ISO de Windows 11, continuez si vous avez une erreur "ISOHybrid"
</br>![Rufus ISO error](https://8e-couche.xyz/Portfolio/PfSense/Img/Rufus-4.png?raw=true "Rufus ISO error")

7. Lancez le formatage

#### Système

1. Branchez la clé USB sur le poste
2. Démarrez le poste
3. Appuyez sur F11 pour accéder au boot menu
4. Sélectionnez la clé USB
</br>![BIOS USB](https://8e-couche.xyz/Portfolio/PfSense/Img/Bios_USB.png?raw=true "BIOS USB")
5. Faites "Suivant" une fois avoir bien sélectionné la langue et la disposition de clavier voulu (ici Français)
</br>![Start](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Install-1.png?raw=true "Start")
6. Cliquez sur "Installer maintenant"
</br>![Install](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Install-2.png?raw=true "Install")
7. Entrez la clé de produit
</br>![Key](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Install-3.png?raw=true "Key")
8. Séléctionnez la version de Windows 11 que vous voulez installer, ici "Windows 11 Pro"
</br>![Version](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Install-4.png?raw=true "Version")
9. Cochez la case "J'accepte les termes du contrat de licence" et cliquez sur "Suivant"
</br>![Terms](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Install-5.png?raw=true "Terms")
10. Sélectionnez "Personnalisée : Installer uniquement Windows (avancé)"
</br>![Custom](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Install-6.png?raw=true "Custom")
11. Sélectionnez le "lecteur" sur lequel vous voulez installer Windows 11 et cliquez sur "Suivant", s'il y a déjà une installation de Windows, sélectionnez une partition puis faites "Supprimer", celà pour toutes les partitions présentes, une fois avoir vérifié si les données ont déjà été copiées sur un autre support dans le cas où le poste ai déjà été utilisé
</br>![Drive](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Install-7.png?raw=true "Drive")
12. L'installation de Windows 11 va commencer, attendez que le poste redémarre
</br>![Install](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Install-8.png?raw=true "Install")

##### Premier démarrage

1. Une fois le poste redémarré, vous allez arriver sur l'écran de configuration de Windows 11, passez tout les écrans jusqu'à arriver sur celui de connexion au réseau, veillez à ce que le poste ne soit pas connecté au réseau
</br>![Network](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-1.png?raw=true "Network")
2. Faites la combinaison de touche "Shift + F10" pour ouvrir l'invite de commande
</br>![CMD](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-2.png?raw=true "CMD")
3. Tapez la commande suivante pour activer le skip OOBE (Permet de créer un compte local)
```sh
oobe\bypassnro
```
</br>![CMD](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-3.png?raw=true "CMD")
4. Windows va redémarrer, vous allez arriver à nouveau sur l'écran de configuration de Windows 11
5. Choisissez cette fois les paramètres voulu, puis avancez
</br>![Language](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-4.png?raw=true "Language")
</br>![Keyboard](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-5.png?raw=true "Keyboard")
</br>![Keyboard Not](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-6.png?raw=true "Keyboard Not")
6. Sélectionnez "Je n'ai pas internet" puis "Continuer avec l'installation limitée"
</br>![Network](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-7.png?raw=true "Network")
</br>![Network Not](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-8.png?raw=true "Network Not")
7. Entrez le nom d'utilisateur, ici "Representant" puis un mot de passe sécurisé
</br>![User](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-9.png?raw=true "User")
</br>![Password](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-10.png?raw=true "Password")
</br>![Password Said Yes](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-11.png?raw=true "Password Said Yes")
8. Pour les questions de sécurité, sélectionnez à chaque fois la première question et répondez avec une phrase de passe sécurisé, identique pour chaque question avant de l'enregistrer dans la fiche 1Password de l'utilisateur
</br>![Security](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-12.png?raw=true "Security")
9. Refusez toutes les options de Microsoft
</br>![Location](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-13.png?raw=true "Location")
</br>![Location Said No](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-14.png?raw=true "Location Said No")
</br>![Diagnostic](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-15.png?raw=true "Diagnostic")
</br>![Pen](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-16.png?raw=true "Pen")
</br>![Diagnostic Said No](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-17.png?raw=true "Diagnostic Said No")
</br>![Ads](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-18.png?raw=true "Ads")
10. Une fois sur le bureau, connectez le poste au réseau (ici en Ethernet)
</br>![Desktop](https://8e-couche.xyz/Portfolio/Poste/Img/Win_Start-19.png?raw=true "Desktop")

##### Installation de B1

1. Connectez la clé USB contenant les installateurs à l'ordinateur
2. Ouvrez l'explorateur de fichier et copiez tout les fichiers de la clé USB sur le bureau
</br>![Copy](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-1.png?raw=true "Copy")
3. Ouvrez le dossier "B1" puis lancez "AccessDatabaseEngine_X64.exe"
</br>![Access](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-2.png?raw=true "Access")
4. Faites "Suivant" puis acceptez les termes du contrat de licence
</br>![Access](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-3.png?raw=true "Access")
5. Faites "Installer"
</br>![Access](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-4.png?raw=true "Access")
6. Fermez la fenêtre

###### Installation de Net 3.5

1. Ouvrez le menu démarrer puis tapez "Features"
</br>![Features](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-5.png?raw=true "Features")
2. Ouvrez "Activer ou désactiver des fonctionnalités Windows" et cochez la case "Net Framework 3.5" et faites "OK"
</br>![Net](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-6.png?raw=true "Net")
3. Acceptez le téléchargement via Windows Update
</br>![Net](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-7.png?raw=true "Net")
4. Une fois le téléchargement terminé faites "Fermer"
</br>![Net](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-8.png?raw=true "Net")

###### Installation de B1 (Application)

1. Lancez "Setup_B1MobileClient.exe"
</br>![B1](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-9.png?raw=true "B1")
2. Faites "Suivant"
3. Faites de nouveau "Suivant"
</br>![B1](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-10.png?raw=true "B1")
4. Faites "Suivant" une dernière fois
</br>![B1](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-11.png?raw=true "B1")
5. Enfin, fermez la fenêtre
</br>![B1](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-11.png?raw=true "B1")
6. Allez maintenant dans le dossier `C:\Program Files\` et allez dans les propriétés du dossier "OPTI-ONE"
</br>![B1](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-12.png?raw=true "B1")
7. Allez dans l'onglet "Sécurité" puis cliquez sur "Modifier"
</br>![B1](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-13.png?raw=true "B1")
8. Cliquez sur "Ajouter"
</br>![B1](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-14.png?raw=true "B1")
9. Notez "representant" puis cliquez sur "Vérifier les noms" puis "OK"
</br>![B1](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-15.png?raw=true "B1")
10. Cochez la case "Contrôle total" puis faites "OK"
</br>![B1](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-16.png?raw=true "B1")
11. Faites "OK" une dernière fois
</br>![B1](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-17.png?raw=true "B1")
12. Allez maintenant dans le dossier `C:\Program Files\OPTI-ONE\B1 Mobile_x64` et faites un clic droit sur "B1-Mobile-Client.exe" puis lancez le en tant qu'administrateur
</br>![B1](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-18.png?raw=true "B1")
13. Une fois la pop-up affichée, faites "OK" et redémarrez le poste
</br>![B1](https://8e-couche.xyz/Portfolio/Poste/Img/Win_B1-19.png?raw=true "B1")

##### Installation de 7z



##### Installation de Chrome



##### Installation de Display Link Dock



##### Installation de Dropbox



##### Installation de Firefox



##### Installation de Office 2021



###### Installation de Jitsi Meet Addon



##### Installation de LogMeIn



##### Installation de OpenVPN



##### Installation de Acrobat Reader



##### Installation de VLC



##### Update Windows



##### Update drivers



##### Update applications



###### Nettoyage de Windows
