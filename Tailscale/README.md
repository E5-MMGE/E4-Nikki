<br/>
<p align="center">
  <h2 align="center">Veille Technologique WiFi 7</h2>
  <p align="center">
    Fait dans le cadre de l'épreuve E4 du BTS SIO 2022-2024
    <br/>
    <br/>
  </p>
</p>

[Télécharger en PDF](https://8e-couche.ovh/Portfolio/Wifi7/.pdf)

![Wifi](https://8e-couche.ovh/Portfolio/Wifi7/Img/Wifi.png?raw=true "Wifi")

<div style="page-break-after: always;"></div>

![E4 BTS Page](https://8e-couche.ovh/Portfolio/SIO_Garde_E4.png?raw=true "E4 BTS Page")

<div style="page-break-after: always;"></div>

## Sommaire

* [Histoire du WiFi](#Histoire-du-WiFi)
* [Pour Quand ?](#Pour-Quand-?)
* [Multilink Operation (MLO)](#Multilink-Operation-(MLO))
* [Modulation OFDMA](#Modulation-OFDMA)
* [Performances Attendues](#Performances-Attendues)
* [Applications Professionnelles](#Applications-Professionnelles)
  * [Evénementiel](#Evénementiel)
  * [Etablissements de Santé](#Etablissements-de-Santé)
  * [Industrie](#Industrie)

## Histoire du WiFi

![History](https://8e-couche.ovh/Portfolio/Wifi7/Img/History.png?raw=true "History")
<br/>

1. **WiFi 1 (802.11b, 1999) :**
- Première norme WiFi grand public
- Débit maximal de 11 Mbit/s dans la bande des 2,4 GHz

<div style="page-break-after: always;"></div>

2. **WiFi 2 (802.11a, 1999) :**
- Opère dans la bande des 5 GHz
- Débit maximal de 54 Mbit/s
- Moins sujet aux interférences que le WiFi 1
- Révisé en 2003 pour s'appeler le standard IEEE Std

3. **WiFi 3 (802.11g, 2003) :**
- Fonctionne dans la bande des 2,4 GHz
- Compatible avec le WiFi 1
- Débit maximal de 54 Mbit/s

4. **WiFi 4 (802.11n, 2009) :**
- Opère dans les bandes des 2,4 GHz et 5 GHz
- Technologie MIMO (Multiple Input Multiple Output) pour augmenter le débit
    </br>(permet de partager le débit radio et d'émettre des flux de données vers 2 (ou plusieurs) utilisateurs)
- Débit maximal théorique de 600 Mbit/s

5. **WiFi 5 (802.11ac, 2014) :**
- Utilise exclusivement la bande des 5 GHz
- Introduit la technologie MU-MIMO (Multi-User Multiple Input Multiple Output)
    </br>(Permettre à plusieurs utilisateurs d'envoyer et de recevoir des données simultanément, une évolution du MIMO)
- Débit maximal théorique de plusieurs gigabits par seconde

6. **WiFi 6 (802.11ax, 2019) :**
- Fonctionne dans les bandes des 2,4 GHz et 5 GHz
- Introduit l'OFDMA (Orthogonal Frequency Division Multiple Access)
    </br>(Améliore l'efficacité du réseau, en particulier dans des environnements à forte densité d'appareils)
- Utilise une technologie MU-MIMO améliorée
- Débit maximal théorique de plusieurs gigabits par seconde

<div style="page-break-after: always;"></div>

Le WiFi 6 sera également suivi du **WiFi 6E (802.11ax avec extension E, 2020) :**
- Le "E" signifie "Extended" et fait référence à l'extension de la bande de fréquences utilisée. Contrairement au WiFi 6 qui utilise les bandes des 2,4 GHz et 5 GHz, le WiFi 6E étend l'utilisation à la bande des 6 GHz   
- L'ajout de la bande des 6 GHz offre davantage de canaux disponibles et moins d'interférences, améliorant ainsi les performances globales du réseau sans fil   
- Cette extension est particulièrement bénéfique pour les environnements densément peuplés où le spectre des 2,4 GHz et 5 GHz peut être congestionné   
- Les avantages incluent une bande passante plus large, une latence réduite et une meilleure capacité pour gérer simultanément un plus grand nombre d'appareils connectés

## Pour Quand ?

Le WiFi 7, de norme "IEEE 802.11be Extremely High Throughput (EHT)", a été officialisé il y a déjà quelques années comme étant en développement avant que ses normes aient été finalisées en janvier 2024
</br>La spécification n'ayant que peu évolué depuis novembre 2023, certains téléphones et des routeurs sont déjà vendu comme compatible depuis fin 2023, alors que la norme en était presque à sa forme finale, bien que des modèles moins chers avaient été attendus après la sortie officielle de la norme

Certains opérateurs dans des pays précurseurs propesent déjà des box internet consommateurs équipés du WiFi 7, c'est le cas par exemple de Free en France
</br>Cependant, le marché le plus important à l'heure actuelle est celui pour les entreprises, le WiFi 7 répondant à plusieurs problématiques de différentes natures

## Multilink Operation (MLO)

Le WiFi 7 introduit une fonctionnalité clé appelée Multilink Operation (MLO) pour résoudre le problème de la fiabilité du signal à distance
</br>Contrairement aux versions précédentes du WiFi où un point d'accès se connectait à un dispositif client sur un seul canal avec une seule bande de fréquences, le MLO permet à un routeur de se connecter et d'envoyer des données à un dispositif sur plusieurs canaux en utilisant plusieurs bandes simultanément, y compris la nouvelle bande de 6 GHz introduite avec le WiFi 6E
</br>Cela conduit à une connexion plus rapide, une meilleure portée, et une fiabilité accrue, car le WiFi 7 peut ajuster automatiquement la fréquence en fonction de la distance entre le routeur et l'appareil client ainsi qu'en fonction de la saturation des bandes

</br>Pour compenser la portée limitée des signaux haute fréquence, le WiFi 7 utilise également une Coordination de Fréquences Automatisée (AFC), qui vérifie les bases de données des émetteurs enregistrés pour éviter les interférences
</br>Le WiFi 7 peut ainsi utiliser partiellement un canal même s'il est déjà utilisé à d'autres fin

</br>Un autre avantage du MLO est qu'il pourrait permettre une coordination automatique plus robuste entre les points d'accès, améliorant la transition entre eux dans des environnements à forte densité d'accès, évitant donc la problèmatique de l'éloignement d'un usagers par rapport à une borne dont l'appareil refuse de se déconnecter tandis que d'autres points relais sont pourtant à proximité, partageant la même connexion

## Modulation OFDMA

</br>Le WiFi 7 utilisera une modulation orthogonale numérique défini par la norme 4096-QAM OFDMA. Cette modulation permet de diviser les canaux en sous-canaux plus petits, appelés tons, pour augmenter la capacité du réseau et réduire la latence
</br>Chaque ton peut être utilisé pour envoyer des données à un appareil spécifique, ce qui permet au routeur de communiquer avec plusieurs appareils simultanément, améliorant ainsi l'efficacité du réseau, et ce, indépendamment de la bande de fréquence utilisée. Cette technique est donc difféciée du MLO et la complète

## Performances Attendues

En termes de performances, le WiFi 7 offre une vitesse théorique maximale élevée de 46Gb/s, mais dans des conditions réelles, cette vitesse ne reflètera pas la vitesse réelle qui dépend de divers facteurs, comme ça l'a été pour les normes avant elle
</br>Et bien que le WiFi 7 puisse utiliser des canaux larges allant jusqu'à 320 mégahertz sur la bande des 6 gigahertz. Cependant, la plupart des appareils utiliseront probablement des canaux de 160 mégahertz car n'étant pas apte à utiliser la totalité des canaux du WiFi 7 ou n'étant tout simplement pas compatible avec l'entièreté de la nouvelle norme, offrant une vitesse réelle d'environ 6 Gb/s de manière optimiste
</br>La spécification WiFi 7 intègre également des outils visant à réduire la latence, ce qui est particulièrement bénéfique pour des applications sensibles à la latence, bien que le fibré restera toujours la solution avec le moins de latence

## Applications Professionnelles

### Evénementiel

Lors d'événements professionnels, congrès ou salons, où de nombreux participants se connectent simultanément aux réseaux WiFi, la capacité de la norme WiFi 7 à gérer efficacement les multiples connexions sur des canaux différents est cruciale
</br>La fonction MLO permet une utilisation plus efficace des bandes de fréquences, réduisant les interférences et garantissant une connectivité fiable même dans des environnements hautement dynamiques

### Etablissements de Santé

Dans les hôpitaux et les établissements de soins de santé, où la connectivité sans fil est utilisée pour des applications critiques telles que la télémédecine, la surveillance des patients et les dispositifs médicaux connectés, la réduction de la latence offerte par le WiFi 7 est cruciale
</br>Les outils intégrés dans la norme WiFi 7 pour minimiser la latence garantissent des communications rapides et fiables, ce qui peut avoir un impact direct sur la prestation des soins de santé et la prise de décision médicale
</br>Mais il faut tout de même noter que cela n'aidera pas les établissements complètement fibrés

### Industrie

Un réseau de capteurs sans fil basé sur le WiFi 7 pourrait être utilisé pour surveiller en temps réel les conditions environnementales, les niveaux de production, ou les performances des machines dans une usine
</br>Les données collectées seraient intégrées dans des systèmes d'analyse avancée, contribuant à l'optimisation des opérations et à la prise de décisions éclairées
</br>Comparé au WiFi 6E, le WiFi 7 offrirait une meilleure portée, permettant le déploiement de capteurs dans des zones plus éloignées sans sacrifier la connectivité
</br>Tandis que par rapport au câblage fibre, le WiFi 7 offre une flexibilité accrue, réduisant les coûts et le temps nécessaires pour le déploiement physique d'une infrastructure, surtout dans des environnements industriels complexes où les zones peuvent être vastes et difficiles d'accès pour un réseau cablé
