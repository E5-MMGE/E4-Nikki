<br/>
<p align="center">
  <h2 align="center">Mise en place d'un nouveau Windows</h2>
  <p align="center">
    Fait en entreprise et dans le cadre de l'épreuve E4 du BTS SIO 2022-2024
    <br/>
    <br/>
  </p>
</p>

[Télécharger en PDF](https://8e-couche.ovh/Portfolio/Poste/.pdf)

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
      * [Installation de Firefox](#Installation-de-Firefox)
      * [Installation de Office 2021](#Installation-de-Office-2021)
        * [Installation de Jitsi Meet Addon](#Installation-de-Jitsi-Meet-Addon)
      * [Installation de LogMeIn](#Installation-de-LogMeIn)
      * [Installation de OpenVPN](#Installation-de-OpenVPN)
      * [Update Windows](#Update-Windows)
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
</br>![Rufus Website](https://8e-couche.ovh/Portfolio/PfSense/Img/Rufus-1.png?raw=true "Rufus Website")

3. Branchez la clé USB sur le PC
4. Ouvrir Rufus
</br>![Rufus](https://8e-couche.ovh/Portfolio/PfSense/Img/Rufus-2.png?raw=true "Rufus")

5. Sélectionnez la clé USB
</br>![Rufus USB](https://8e-couche.ovh/Portfolio/PfSense/Img/Rufus-3.png?raw=true "Rufus USB")

6. Sélectionnez l'ISO de Windows 11, continuez si vous avez une erreur "ISOHybrid"
</br>![Rufus ISO error](https://8e-couche.ovh/Portfolio/PfSense/Img/Rufus-4.png?raw=true "Rufus ISO error")

7. Lancez le formatage

#### Système

1. Branchez la clé USB sur le poste
2. Démarrez le poste
3. Appuyez sur F11 pour accéder au boot menu
4. Sélectionnez la clé USB
</br>![BIOS USB](https://8e-couche.ovh/Portfolio/PfSense/Img/Bios_USB.png?raw=true "BIOS USB")
5. Faites "Suivant" une fois avoir bien sélectionné la langue et la disposition de clavier voulu (ici Français)
</br>![Start](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Install-1.png?raw=true "Start")
6. Cliquez sur "Installer maintenant"
</br>![Install](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Install-2.png?raw=true "Install")
7. Entrez la clé de produit
</br>![Key](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Install-3.png?raw=true "Key")
8. Séléctionnez la version de Windows 11 que vous voulez installer, ici "Windows 11 Pro"
</br>![Version](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Install-4.png?raw=true "Version")
9. Cochez la case "J'accepte les termes du contrat de licence" et cliquez sur "Suivant"
</br>![Terms](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Install-5.png?raw=true "Terms")
10. Sélectionnez "Personnalisée : Installer uniquement Windows (avancé)"
</br>![Custom](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Install-6.png?raw=true "Custom")
11. Sélectionnez le "lecteur" sur lequel vous voulez installer Windows 11 et cliquez sur "Suivant", s'il y a déjà une installation de Windows, sélectionnez une partition puis faites "Supprimer", celà pour toutes les partitions présentes, une fois avoir vérifié si les données ont déjà été copiées sur un autre support dans le cas où le poste ai déjà été utilisé
</br>![Drive](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Install-7.png?raw=true "Drive")
12. L'installation de Windows 11 va commencer, attendez que le poste redémarre
</br>![Install](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Install-8.png?raw=true "Install")

##### Premier démarrage

1. Une fois le poste redémarré, vous allez arriver sur l'écran de configuration de Windows 11, passez tout les écrans jusqu'à arriver sur celui de connexion au réseau, veillez à ce que le poste ne soit pas connecté au réseau
</br>![Network](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-1.png?raw=true "Network")
2. Faites la combinaison de touche "Shift + F10" pour ouvrir l'invite de commande
</br>![CMD](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-2.png?raw=true "CMD")
3. Tapez la commande suivante pour activer le skip OOBE (Permet de créer un compte local)
```sh
oobe\bypassnro
```
</br>![CMD](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-3.png?raw=true "CMD")
4. Windows va redémarrer, vous allez arriver à nouveau sur l'écran de configuration de Windows 11
5. Choisissez cette fois les paramètres voulu, puis avancez
</br>![Language](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-4.png?raw=true "Language")
</br>![Keyboard](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-5.png?raw=true "Keyboard")
</br>![Keyboard Not](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-6.png?raw=true "Keyboard Not")
6. Sélectionnez "Je n'ai pas internet" puis "Continuer avec l'installation limitée"
</br>![Network](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-7.png?raw=true "Network")
</br>![Network Not](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-8.png?raw=true "Network Not")
7. Entrez le nom d'utilisateur, ici "Representant" puis un mot de passe sécurisé
</br>![User](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-9.png?raw=true "User")
</br>![Password](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-10.png?raw=true "Password")
</br>![Password Said Yes](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-11.png?raw=true "Password Said Yes")
8. Pour les questions de sécurité, sélectionnez à chaque fois la première question et répondez avec une phrase de passe sécurisé, identique pour chaque question avant de l'enregistrer dans la fiche 1Password de l'utilisateur
</br>![Security](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-12.png?raw=true "Security")
9. Refusez toutes les options de Microsoft
</br>![Location](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-13.png?raw=true "Location")
</br>![Location Said No](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-14.png?raw=true "Location Said No")
</br>![Diagnostic](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-15.png?raw=true "Diagnostic")
</br>![Pen](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-16.png?raw=true "Pen")
</br>![Diagnostic Said No](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-17.png?raw=true "Diagnostic Said No")
</br>![Ads](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-18.png?raw=true "Ads")
10. Une fois sur le bureau, connectez le poste au réseau (ici en Ethernet)
</br>![Desktop](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Start-19.png?raw=true "Desktop")

##### Installation de B1

1. Connectez la clé USB contenant les installateurs à l'ordinateur
2. Ouvrez l'explorateur de fichier et copiez tout les fichiers de la clé USB sur le bureau
</br>![Copy](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-1.png?raw=true "Copy")
3. Ouvrez le dossier "B1" puis lancez "AccessDatabaseEngine_X64.exe"
</br>![Access](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-2.png?raw=true "Access")
4. Faites "Suivant" puis acceptez les termes du contrat de licence
</br>![Access](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-3.png?raw=true "Access")
5. Faites "Installer"
</br>![Access](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-4.png?raw=true "Access")
6. Fermez la fenêtre

###### Installation de Net 3.5

1. Ouvrez le menu démarrer puis tapez "Features"
</br>![Features](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-5.png?raw=true "Features")
2. Ouvrez "Activer ou désactiver des fonctionnalités Windows" et cochez la case "Net Framework 3.5" et faites "OK"
</br>![Net](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-6.png?raw=true "Net")
3. Acceptez le téléchargement via Windows Update
</br>![Net](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-7.png?raw=true "Net")
4. Une fois le téléchargement terminé faites "Fermer"
</br>![Net](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-8.png?raw=true "Net")

###### Installation de B1 (Application)

1. Lancez "Setup_B1MobileClient.exe" et faites "Suivant"
</br>![B1](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-9.png?raw=true "B1")
3. Faites de nouveau "Suivant"
</br>![B1](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-10.png?raw=true "B1")
4. Faites "Suivant" une dernière fois
</br>![B1](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-11.png?raw=true "B1")
5. Enfin, fermez la fenêtre
</br>![B1](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-12.png?raw=true "B1")
6. Allez maintenant dans le dossier `C:\Program Files\` et allez dans les propriétés du dossier "OPTI-ONE"
</br>![B1](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-13.png?raw=true "B1")
7. Allez dans l'onglet "Sécurité" puis cliquez sur "Modifier"
</br>![B1](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-14.png?raw=true "B1")
8. Cliquez sur "Ajouter"
</br>![B1](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-15.png?raw=true "B1")
9. Notez "representant" puis cliquez sur "Vérifier les noms" puis "OK"
</br>![B1](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-16.png?raw=true "B1")
10. Cochez la case "Contrôle total" puis faites "OK"
</br>![B1](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-17.png?raw=true "B1")
11. Faites "OK" une dernière fois
</br>![B1](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-18.png?raw=true "B1")
12. Allez maintenant dans le dossier `C:\Program Files\OPTI-ONE\B1 Mobile_x64` et faites un clic droit sur "B1-Mobile-Client.exe" puis lancez le en tant qu'administrateur
</br>![B1](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-19.png?raw=true "B1")
13. Une fois la pop-up affichée, faites "OK" et redémarrez le poste
</br>![B1](https://8e-couche.ovh/Portfolio/Poste/Img/Win_B1-20.png?raw=true "B1")

##### Installation de 7z

1. Lancez "7z2201-x64.exe" et faites "Install"
</br>![7z](https://8e-couche.ovh/Portfolio/Poste/Img/Win_7z-1.png?raw=true "7z")
2. Faites "Close" une fois l'installation terminée
</br>![7z](https://8e-couche.ovh/Portfolio/Poste/Img/Win_7z-2.png?raw=true "7z")

##### Installation de Chrome

1. Lancez "ChromeSetup.exe" et attendez que l'installation se termine
</br>![Chrome](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Chrome-1.png?raw=true "Chrome")
2. Lorsque Chrome s'ouvre, cliquez sur "Ne pas se connecter" puis "Passer"
</br>![Chrome](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Chrome-2.png?raw=true "Chrome")
</br>![Chrome](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Chrome-3.png?raw=true "Chrome")
3. Allez à la page de l'extension [Ublock Origin](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=fr) et cliquez sur "Ajouter à Chrome" et "Ajouter l'extension"
</br>![Chrome](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Chrome-4.png?raw=true "Chrome")
4. Fermez Chrome

##### Installation de Display Link Dock

1. Lancez "DisplayLink-Dock-Driver_5DF5P_WIN_10.2.7042.0_A02.exe" et faites "Install"
</br>![Display](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Display-1.png?raw=true "Display")
2. Acceptez les termes du contrat de licence puis faites "Installer"
</br>![Display](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Display-2.png?raw=true "Display")
</br>![Display](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Display-3.png?raw=true "Display")
3. Faites "Terminer" une fois l'installation terminée
</br>![Display](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Display-4.png?raw=true "Display")

##### Installation de Firefox

1. Lancez "Firefox Installer.exe" et attendez que Firefox s'ouvre
</br>![Firefox](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Firefox-1.png?raw=true "Firefox")
2. Décochez "Importer depuis un ancien navigateur" puis cliquez sur "Enregistrer et continuer"
</br>![Firefox](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Firefox-2.png?raw=true "Firefox")
3. Allez ensuite à la page de l'extension [Ublock Origin](https://addons.mozilla.org/fr/firefox/addon/ublock-origin/) et cliquez sur "Ajouter à Firefox" puis "Ajouter"
</br>![Firefox](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Firefox-3.png?raw=true "Firefox")
4. Fermez Firefox

##### Installation de Office 2021

1. Ouvrez l'ISO de Office 2021 et lancez "setup.exe"
</br>![Office](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Office-1.png?raw=true "Office")
2. Attendez que l'installation se termine et ouvrez Word
</br>![Office](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Office-2.png?raw=true "Office")
3. Entrez la clé de produit puis cliquez sur "Suivant"
</br>![Office](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Office-3.png?raw=true "Office")
4. Faites "Fermer"
</br>![Office](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Office-4.png?raw=true "Office")
5. Séléctionnez le format "Office Open XML" puis faites "OK"
</br>![Office](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Office-5.png?raw=true "Office")
6. Fermez Word

###### Installation de Jitsi Meet Addon

1. Lancez "JitsiMeetOutlook-v0.7.0-windows-anycpu.msi" et faites "Next"
</br>![Jitsi](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Jitsi-1.png?raw=true "Jitsi")
2. Acceptez les termes du contrat de licence puis faites "Next"
</br>![Jitsi](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Jitsi-2.png?raw=true "Jitsi")
3. Faites "Next" une dernière fois puis "Install"
</br>![Jitsi](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Jitsi-3.png?raw=true "Jitsi")
</br>![Jitsi](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Jitsi-4.png?raw=true "Jitsi")
4. Faites "Finish"
</br>![Jitsi](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Jitsi-5.png?raw=true "Jitsi")

##### Installation de LogMeIn

1. Lancez "LogMeIn.msi", acceptez les termes du contrat de licence puis faites "Suivant"
</br>![LogMeIn](https://8e-couche.ovh/Portfolio/Poste/Img/Win_LogMeIn-1.png?raw=true "LogMeIn")
2. Faites "Suivant" 2 fois
</br>![LogMeIn](https://8e-couche.ovh/Portfolio/Poste/Img/Win_LogMeIn-2.png?raw=true "LogMeIn")
</br>![LogMeIn](https://8e-couche.ovh/Portfolio/Poste/Img/Win_LogMeIn-3.png?raw=true "LogMeIn")
3. L'installateur se fermera une fois l'installation terminée

##### Installation de OpenVPN

1. Lancez "openvpn-install-2.5.9-i601-amd64.exe" et faites "Install Now"
</br>![OpenVPN](https://8e-couche.ovh/Portfolio/Poste/Img/Win_VPN-1.png?raw=true "OpenVPN")
2. Faites "Close" et double cliquez sur le certificat "client.ovpn" de l'utilisateur
</br>![OpenVPN](https://8e-couche.ovh/Portfolio/Poste/Img/Win_VPN-2.png?raw=true "OpenVPN")
</br>![OpenVPN](https://8e-couche.ovh/Portfolio/Poste/Img/Win_VPN-3.png?raw=true "OpenVPN")
3. Faites "Oui" puis connectez vous avec les identifiants de l'utilisateur en cochant "Se souvenir du mot de passe"
</br>![OpenVPN](https://8e-couche.ovh/Portfolio/Poste/Img/Win_VPN-4.png?raw=true "OpenVPN")
</br>![OpenVPN](https://8e-couche.ovh/Portfolio/Poste/Img/Win_VPN-5.png?raw=true "OpenVPN")

##### Update Windows

1. Ouvrez les paramètres de Windows 11 puis allez dans "Mise à jour et sécurité", cliquez sur "Rechercher des mises à jour" et installez les mises à jour
</br>![Update](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Update-1.png?raw=true "Update")
2. S'il y a des mises à jour facultatives, installez les aussi
3. Redémarrez le poste une fois les mises à jour installées

##### Update applications

1. Lancez le Microsoft Store puis cliquez sur les 3 tirets en bas à gauche puis sur "Téléchargements et mises à jour"
</br>![Store](https://8e-couche.ovh/Portfolio/Poste/Img/Win_App-1.png?raw=true "Store")
</br>![Store](https://8e-couche.ovh/Portfolio/Poste/Img/Win_App-2.png?raw=true "Store")
2. Installez les mises à jour des applications
</br>![Store](https://8e-couche.ovh/Portfolio/Poste/Img/Win_App-3.png?raw=true "Store")
3. Une fois les mises à jour installées, fermez le Microsoft Store
4. Lancez le CMD en tant qu'administrateur puis tapez la commande suivante
```sh
winget upgrade
```
5. Faites "y" puis "Entrée" pour accepter les conditions d'utilisation
</br>![Winget](https://8e-couche.ovh/Portfolio/Poste/Img/Win_App-4.png?raw=true "Winget")
6. Tapez cette fois-ci
```sh
winget upgrade --all
```
7. Attendez que toutes les mises à jour soient installées
</br>![Winget](https://8e-couche.ovh/Portfolio/Poste/Img/Win_App-5.png?raw=true "Winget")
8. Fermez le CMD et redémarrez le poste

###### Nettoyage de Windows

1. Désinstallez toutes les applications inutiles (Application Xbox, Application Courrier, etc...)
2. Supprimez les raccourcis inutiles sur le bureau
3. Supprimez les installateurs sur le bureau
4. Vérifiez les applications au démarrage et désactivez celles qui ne sont pas nécessaires
5. Vérifiez les applications dans la barre des tâches et mettez celles qui sont nécessaires en enlevant les autres
6. Lancez le PowerShell en tant qu'administrateur puis tapez la commande suivante
```sh
iwr -useb https://christitus.com/win | iex
```
</br>![PowerShell](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Clean-1.png?raw=true "PowerShell")
</br>![PowerShell](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Clean-2.png?raw=true "PowerShell")
</br>C'est un utilitaire qui va nous permettre de supprimer OneDrive afin d'éviter des erreurs et problèmes avec le nouveau système de fichiers de Windows 11 mais aussi de supprimer la télémétrie de Windows 11
7. L'utilitaire lancé, allez dans "Tweaks"
</br>![PowerShell](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Clean-3.png?raw=true "PowerShell")
8. Sélectionnez "Run OO Shutup", "Disable Telemetry", "Disable WiFi Sense", "Disable Location Tracking", "Remove OneDrive" puis faites "Run Tweaks"
</br>![PowerShell](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Clean-4.png?raw=true "PowerShell")
9. Une fois la pop-up de fin affichée, désactivez "Bing Search in Start Menu" et redémarrez une dernière fois le poste
</br>![PowerShell](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Clean-5.png?raw=true "PowerShell")
</br>![PowerShell](https://8e-couche.ovh/Portfolio/Poste/Img/Win_Clean-6.png?raw=true "PowerShell")
