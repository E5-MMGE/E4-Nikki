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
    * [Configuration Interne](#Configuration-Interne)
    * [Configuration GUI](#Configuration-GUI)
    * [Configuration Interfaces](#Configuration-Interfaces)
      * [Configuration VLANs](#Configuration-VLANs)
      * [Configuration DHCP](#Configuration-DHCP)
      * [Configuration Firewall](#Configuration-Firewall)
    * [Configuration Applications](#Configuration-Applications)
      * [Zabbix](#Zabbix)
      * [SSH](#SSH)
    * [Configuration ACL](#Configuration-ACL)
      * [ACL Vlan 100](#ACL-Vlan-100)
      * [ACL Vlan 200](#ACL-Vlan-200)
      * [ACL WAN](#ACL-WAN)
* [Roadmap](#Roadmap)

## Pour Commencer

L'installation du PfSense est importante car il s'agit du coeur de notre infrastructure. Il permet de gérer les VLANs, les DHCPs et les Firewall de l'entreprise.

### Prérequis

* [Rufus](https://github.com/pbatard/rufus/releases/latest/), [Balena Etcher](https://github.com/balena-io/etcher/releases/latest/) ou tout autre logiciel du genre
* Clé/Stockage USB de 4Go minimum
* ISO de [PfSense](https://www.pfsense.org/download/)
* Un serveur 2 coeurs et 2Go minimum **avec deux cartes réseaux ou plus**

### Installation

#### Formatage de la clé USB

1. Téléchargez l'ISO de PfSense (ici 2.7.0, AMD64, DVD Image)
</br>![PfSense Website](/PfSense/Img/Rufus-0.png?raw=true "PfSense Website")
2. Téléchargez Rufus
</br>![Rufus Website](/PfSense/Img/Rufus-1.png?raw=true "Rufus Website")
3. Branchez la clé USB sur le PC
4. Ouvrir Rufus
</br>![Rufus](/PfSense/Img/Rufus-2.png?raw=true "Rufus")
6. Sélectionnez la clé USB
</br>![Rufus USB](/PfSense/Img/Rufus-3.png?raw=true "Rufus USB")
5. Sélectionnez l'ISO de PfSense, continuez si vous avez une erreur "ISOHybrid"
</br>![Rufus ISO error](/PfSense/Img/Rufus-4.png?raw=true "Rufus ISO error")
</br>![Rufus ISO](/PfSense/Img/Pf_Rufus-5.png?raw=true "Rufus ISO")
7. Lancez le formatage
- NEED 2 IMAGES
</br>![Rufus Format](/PfSense/Img/Pf_Rufus-6.png?raw=true "Rufus Format")
</br>![Rufus End](/PfSense/Img/Pf_Rufus-7.png?raw=true "Rufus End")

#### Système

1. Branchez la clé USB sur le serveur
2. Démarrez le serveur
3. Appuyez sur F11 pour accéder au boot menu
4. Sélectionnez la clé USB
</br>![BIOS USB](/PfSense/Img/Bios_USB.png?raw=true "BIOS USB")
5. Faites entrer pour démarrer l'installation
</br>![PfSense Install Start](/PfSense/Img/Pf_Install-1.png?raw=true "PfSense Install Start")
6. Sélectionnez "Install"
</br>![PfSense Install](/PfSense/Img/Pf_Install-2.png?raw=true "PfSense Install")
7. Sélectionnez le clavier "Auto (ZFS)"
</br>![PfSense Install ZFS](/PfSense/Img/Pf_Install-3.png?raw=true "PfSense Install ZFS")
8. Faites entrer pour valider la configuration
</br>![PfSense Install Conf](/PfSense/Img/Pf_Install-4.png?raw=true "PfSense Install Conf")
9. Sélectionnez "Stripe"
</br>![PfSense Install Stripe](/PfSense/Img/Pf_Install-5.png?raw=true "PfSense Install Stripe")
10. Sélectionnez votre disque (touche espace pour sélectionner), ici "da0"
</br>![PfSense Install Disk](/PfSense/Img/Pf_Install-6.png?raw=true "PfSense Install Disk")
11. Sélectionnez "Yes"
</br>![PfSense Install Format](/PfSense/Img/Pf_Install-7.png?raw=true "PfSense Install Format")
12. L'installation commence, sélectionnez "Reboot" une fois terminé
</br>![PfSense Installing](/PfSense/Img/Pf_Install-8.png?raw=true "PfSense Installing")
</br>![PfSense Install Reboot](/PfSense/Img/Pf_Install-9.png?raw=true "PfSense Install Reboot")

#### Configuration Interne

0. Laissez le serveur démarrer
1. Faites "a" pour détecter automatiquement l'inteface WAN et LAN, en cas d'erreur, sélectionnez les manuellement
2. Appuyez sur 2 pour configurer l'interface WAN
</br>![PfSense Conf IntWAN](/PfSense/Img/Pf_Conf-1.png?raw=true "PfSense Conf IntWAN")
3. Sélectionnez l'interface WAN avec le numéro correspondant (ici 1)
</br>![PfSense Conf WAN](/PfSense/Img/Pf_Conf-2.png?raw=true "PfSense Conf WAN")
4. Faites "y" pour configurer l'interface WAN en DHCP pour l'IpV4
5. Faites de même pour l'IpV6
</br>![PfSense Conf WAN DHCP](/PfSense/Img/Pf_Conf-3.png?raw=true "PfSense Conf WAN DHCP")
6. Si demandé, refusez l'http pour le webconfigurator
</br>![PfSense Conf WebConf](/PfSense/Img/Pf_Conf-4.png?raw=true "PfSense Conf WebConf")
7. Faites "Entrer" pour valider la configuration
8. Appuyez sur 2 pour configurer l'interface LAN
9. Sélectionnez l'interface LAN avec le numéro correspondant (ici 2)
</br>![PfSense Conf LAN](/PfSense/Img/Pf_Conf-5.png?raw=true "PfSense Conf LAN")
10. Faites "n" pour configurer l'interface LAN en statique pour l'IpV4
11. L'adresse LAN est 192.168.1.1
12. Le masque est 24
13. Faites "Entrer" pour la Gateway car c'est le serveur PfSense lui-même
</br>![PfSense Conf LAN Static](/PfSense/Img/Pf_Conf-6.png?raw=true "PfSense Conf LAN Static")
15. Faites "y" pour configurer l'interface LAN en DHCP pour l'IpV6, la raison étant que nous n'en avons pas besoin en LAN dans cette infrastructure
16. Faites "y" pour configurer le serveur DHCP pour l'IpV4
</br>![PfSense Conf LAN DHCP4](/PfSense/Img/Pf_Conf-7.png?raw=true "PfSense Conf LAN DHCP4")
17. L'adresse de départ est 192.168.1.2
18. L'adresse de fin est 192.168.1.2
19. Nous gardons cette IP dans le cas où nous aurions besoin d'accéder au serveur PfSense en direct
20. Faites "Entrer" pour valider la configuration
</br>![PfSense Conf LAN Range](/PfSense/Img/Pf_Conf-8.png?raw=true "PfSense Conf LAN Range")

#### Configuration GUI

1. Connectez un ordinateur au port LAN du serveur, vous devriez ainsi obtenir l'adresse 192.168.1.2
2. Ouvrez un navigateur
3. Allez sur l'adresse https://192.168.1.1/
4. Acceptez et continuez malgré le certificat invalide
</br>![PfSense Gui Certif](/PfSense/Img/Pf_Gui-1.png?raw=true "PfSense Gui Certif")
4. Connectez-vous avec les identifiants par défaut (admin/pfsense)
</br>![PfSense Gui Connect](/PfSense/Img/Pf_Gui-2.png?raw=true "PfSense Gui Connect")
5. Faites "Next"
</br>![PfSense Gui Startup2](/PfSense/Img/Pf_Gui-3.png?raw=true "PfSense Gui Startup2")
6. Faites "Next"
</br>![PfSense Gui Startup3](/PfSense/Img/Pf_Gui-4.png?raw=true "PfSense Gui Startup3")
7. Remplissez les informations :
  * "Pf-Entreprise" pour le hostname
  * "1.1.1.1" pour le DNS principal
  * "8.8.8.8" pour le DNS secondaire
8. Faites "Next"
</br>![PfSense Gui Host](/PfSense/Img/Pf_Gui-5.png?raw=true "PfSense Gui Host")
9. Séléctionnez votre fuseau horaire (ici Europe/Paris)
10. Faites "Next"
</br>![PfSense Gui Date/Time](/PfSense/Img/Pf_Gui-6.png?raw=true "PfSense Gui Date/Time")
11. Faites "Next", aucune modification n'est nécessaire pour le WAN
</br>![PfSense Gui WAN1](/PfSense/Img/Pf_Gui-7.png?raw=true "PfSense Gui WAN1")
</br>![PfSense Gui WAN2](/PfSense/Img/Pf_Gui-8.png?raw=true "PfSense Gui WAN2")
12. Faites "Next", aucune modification n'est nécessaire pour le LAN
</br>![PfSense Gui LAN](/PfSense/Img/Pf_Gui-9.png?raw=true "PfSense Gui LAN")
13. Changez le mot de passe de l'admin ("admin" pour l'exemple, mais il se doit d'être sécurisé)
14. Faites "Next"
</br>![PfSense Gui Passwd](/PfSense/Img/Pf_Gui-10.png?raw=true "PfSense Gui Passwd")
15. Faites "Reload" et attendez que le serveur redémarre
</br>![PfSense Gui Reload](/PfSense/Img/Pf_Gui-11.png?raw=true "PfSense Gui Reload")
16. Une fois la page rechargée, faites "Check for updates" si l'ISO utilisée est ancienne, sinon faites "Finish"
</br>![PfSense Gui Update](/PfSense/Img/Pf_Gui-12.png?raw=true "PfSense Gui Update")
17. Acceptez les conditions d'utilisation
</br>![PfSense Gui Notice](/PfSense/Img/Pf_Gui-13.png?raw=true "PfSense Gui Notice")
18. Faites "Close"
</br>![PfSense Gui End](/PfSense/Img/Pf_Gui-14.png?raw=true "PfSense Gui End")

#### Configuration Interfaces

##### Configuration VLANs

1. Connectez un ordinateur au port LAN du serveur, vous devriez ainsi obtenir l'adresse 192.168.1.2
2. Ouvrez un navigateur
3. Allez sur l'adresse https://192.168.1.1/
4. Connectez-vous avec les identifiants défini (ici admin/admin)
</br>![PfSense Gui Connect](/PfSense/Img/Pf_Gui-2.png?raw=true "PfSense Gui Connect")
5. Allez dans "Interfaces" > "Assignments"
</br>![PfSense Gui Interfaces](/PfSense/Img/Pf_Int-1.png?raw=true "PfSense Gui Interfaces")
6. Allez dans "VLANs"
</br>![PfSense Gui VLANs](/PfSense/Img/Pf_Int-2.png?raw=true "PfSense Gui VLANs")
7. Cliquez sur "Add"
</br>![PfSense Gui VLANs Add](/PfSense/Img/Pf_Int-3.png?raw=true "PfSense Gui VLANs Add")
8. Sélectionnez l'interface LAN (ici em0)
9. Entrez le VLAN (ici 100)
10. Entrez une description (ici "Ethernet + Wifi")
11. Faites "Save"
</br>![PfSense Gui VLANs Add 100](/PfSense/Img/Pf_Int-4.png?raw=true "PfSense Gui VLANs 100")
12. Cliquez sur "Add"
</br>![PfSense Gui VLANs Add 2](/PfSense/Img/Pf_Int-5.png?raw=true "PfSense Gui VLANs Add 2")
13. Sélectionnez l'interface LAN (ici em0)
14. Entrez le VLAN (ici 200)
15. Entrez une description (ici "Wifi Invité")
16. Faites "Save"
</br>![PfSense Gui VLANs Add 200](/PfSense/Img/Pf_Int-6.png?raw=true "PfSense Gui VLANs 200")
17. Allez dans "Interfaces Assignments"
</br>![PfSense Gui Interfaces Assignments](/PfSense/Img/Pf_Int-7.png?raw=true "PfSense Gui Interfaces Assignments")
18. Faites "Add"
</br>![PfSense Gui Int Add 100](/PfSense/Img/Pf_Int-8.png?raw=true "PfSense Gui Int Add 100")
19. Faites à nouveau "Add"
</br>![PfSense Gui Int Add 200](/PfSense/Img/Pf_Int-9.png?raw=true "PfSense Gui Int Add 200")
20. Cliquez sur l'interface OPT1 (VLAN 100)
</br>![PfSense Gui Int OPT1](/PfSense/Img/Pf_Int-10.png?raw=true "PfSense Gui Int OPT1")
21. Activez l'interface
22. Passez l'IPv4 en statique
23. Entrez l'adresse IP (ici 192.168.100.254)
24. Précisez le masque (ici 24)
25. Faites "Save"
</br>![PfSense Gui Int OPT1 Conf](/PfSense/Img/Pf_Int-11.png?raw=true "PfSense Gui Int OPT1 On")
26. Retournez dans "Interfaces" > "Assignments"
</br>![PfSense Gui Interfaces Assignments 2](/PfSense/Img/Pf_Int-12.png?raw=true "PfSense Gui Interfaces Assignments 2")
20. Cliquez sur l'interface OPT2 (VLAN 200)
</br>![PfSense Gui Int OPT2](/PfSense/Img/Pf_Int-13.png?raw=true "PfSense Gui Int OPT2")
21. Activez l'interface
22. Passez l'IPv4 en statique
23. Entrez l'adresse IP (ici 192.168.200.254)
24. Précisez le masque (ici 24)
25. Faites "Save"
</br>![PfSense Gui Int OPT2 Conf](/PfSense/Img/Pf_Int-14.png?raw=true "PfSense Gui Int OPT2 On")

##### Configuration DHCP

1. Allez dans "Services" > "DHCP Server"
</br>![PfSense Gui DHCP](/PfSense/Img/Pf_DHCP-1.png?raw=true "PfSense Gui DHCP")
2. Allez dans "OPT1"
</br>![PfSense Gui DHCP OPT1](/PfSense/Img/Pf_DHCP-2.png?raw=true "PfSense Gui DHCP OPT1")
3. Activez le serveur DHCP
4. Entrez le range d'adresse (ici 192.168.100.1 - 192.168.100.5, adaptez en fonction de vos besoins, si vous avez plus d'ordinateurs et autres appareils ou que vous allez augmenter votre parc, augmentez le range. Préférez prendre une range adaptée avec une petite marge pour minimiser les risques)
5. Faites "Save"
</br>![PfSense Gui DHCP OPT1 Conf](/PfSense/Img/Pf_DHCP-3.png?raw=true "PfSense Gui DHCP OPT1 Conf")
6. Allez dans "OPT2"
</br>![PfSense Gui DHCP OPT2](/PfSense/Img/Pf_DHCP-4.png?raw=true "PfSense Gui DHCP OPT2")
7. Activez le serveur DHCP
8. Entrez le range d'adresse (ici 192.168.200.1 - 192.168.200.254, la range est plus grande car nous ne savons pas combien d'appareils vont se connecter au Wifi invité et que celui-ci sera plus contrôlé)
9. Faites "Save"
</br>![PfSense Gui DHCP OPT2 Conf](/PfSense/Img/Pf_DHCP-5.png?raw=true "PfSense Gui DHCP OPT2 Conf")

##### Configuration Firewall

1. Allez dans "Firewall" > "Rules"
</br>![PfSense Gui Rules](/PfSense/Img/Pf_Firewall-1.png?raw=true "PfSense Gui Rules")
2. Allez dans "OPT1"
</br>![PfSense Gui Rules OPT1](/PfSense/Img/Pf_Firewall-2.png?raw=true "PfSense Gui Rules OPT1")
3. Faites "Add"
</br>![PfSense Gui Rules OPT1 Add IPv4](/PfSense/Img/Pf_Firewall-3.png?raw=true "PfSense Gui Rules OPT1 Add IPv4")
4. Changer le "Protocol" en "Any"
5. Changer la "Source" en "OPT1 net"
6. Mettez "Default allow LAN to any rule" en description
7. Faites "Save"
</br>![PfSense Gui Rules OPT1 Add Conf IPv4](/PfSense/Img/Pf_Firewall-4.png?raw=true "PfSense Gui Rules OPT1 Add Conf IPv4")
8. Faites "Add"
</br>![PfSense Gui Rules OPT1 Add IPv6](/PfSense/Img/Pf_Firewall-5.png?raw=true "PfSense Gui Rules OPT1 Add IPv6")
9. Changer l' "Address Family" en "IPv6"
10. Changer le "Protocol" en "Any"
11. Changer la "Source" en "OPT1 net"
12. Mettez "Default allow LAN to any rule" en description
13. Faites "Save"
</br>![PfSense Gui Rules OPT1 Add Conf IPv6](/PfSense/Img/Pf_Firewall-6.png?raw=true "PfSense Gui Rules OPT1 Add Conf IPv6")
14. Allez dans "OPT2"
</br>![PfSense Gui Rules OPT2](/PfSense/Img/Pf_Firewall-7.png?raw=true "PfSense Gui Rules OPT2")
15. Faites "Add"
</br>![PfSense Gui Rules OPT2 Add IPv4](/PfSense/Img/Pf_Firewall-8.png?raw=true "PfSense Gui Rules OPT2 Add IPv4")
16. Changer le "Protocol" en "Any"
17. Changer la "Source" en "OPT2 net"
18. Mettez "Default allow LAN to any rule" en description
19. Faites "Save"
</br>![PfSense Gui Rules OPT2 Add Conf IPv4](/PfSense/Img/Pf_Firewall-9.png?raw=true "PfSense Gui Rules OPT2 Add Conf IPv4")
20. Faites "Add"
</br>![PfSense Gui Rules OPT2 Add IPv6](/PfSense/Img/Pf_Firewall-10.png?raw=true "PfSense Gui Rules OPT2 Add IPv6")
21. Changer l' "Address Family" en "IPv6"
22. Changer le "Protocol" en "Any"
23. Changer la "Source" en "OPT2 net"
24. Mettez "Default allow LAN to any rule" en description
25. Faites "Save"
</br>![PfSense Gui Rules OPT2 Add Conf IPv6](/PfSense/Img/Pf_Firewall-11.png?raw=true "PfSense Gui Rules OPT2 Add Conf IPv6")
26. Redémarrez le serveur PfSense pour que tout les changements soient pris en compte : "Diagnostics" > "Reboot"
</br>![PfSense Gui Reboot](/PfSense/Img/Pf_Firewall-12.png?raw=true "PfSense Gui Reboot")
27. Faites "Submit" pour confirmer le redémarrage
</br>![PfSense Gui Reboot YES](/PfSense/Img/Pf_Reboot.png?raw=true "PfSense Gui Reboot YES")

#### Configuration Applications

*

##### Zabbix

1. Allez dans "System" > "Package Manager"

##### SSH

*

#### Configuration ACL

*

##### ACL Vlan 100

*

##### ACL Vlan 200

*

##### ACL WAN

*

## Roadmap

* Ajout ACL pour le Vlan 200 (Wifi invité)
* Changement ACL pour le Vlan 100 et le WAN
* Installation de Zabbix
* Configuration SSH