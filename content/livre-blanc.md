---
header_brand: "Livre blanc"
header_tagline_paragraph: "Une ville et une technologie résiliente pour un avenir durable au service de tous."

header_button_cta:
  url: ".."
  title: "Page d'accueil"

header_button_more:
  url: "/PDF/"
  title: "PDF"
---


## Table des matières

- [Introduction à la résilience](#1-introduction-à-la-résilience)
- [La résilience d’une ville](#2-la-résilience-dune-ville)
  - [Les différents axes](#21-les-différents-axes)
  - [Vers une résilience informatique](#22-vers-une-résilience-informatique)
- [Description des usages communs de l’informatique](#3-description-des-usages-communs-de-linformatique)
  - [Communication](#31-communication)
- [Les technologies résilientes du cloud computing](#4-les-technologies-résilientes-du-cloud-computing)
  - [L’histoire d’internet](#41-lhistoire-dinternet)
  - [Les Technologies et techniques](#42-les-technologies-et-techniques)
    - [Répondre à la demande](#421-répondre-à-la-demande)
      - [Scalabilité](#4211-scalabilité)
      - [Répartition de charge](#4212-répartition-de-charge--le-load-balancing)
    - [Virtualisation](#422-virtualisation)
    - [Containerisation](#423-conteneurisation)
      - [Orchestration](#4231-orchestration)
    - [Grappe de serveur - Cluster](#424-grappe-serveur---clusterisation)
      - [La virtualisation et conteneurisation dans un cluster](#4241-la-virtualisation-et-conteneurisation-dans-un-cluster)
    - [Du paradigme monolithique vers le micro-service](#425-du-paradigme-monolithique-vers-le-micro-service)
      - [Architecture monolithique](#4251-architecture-monolithique)
      - [Architecture micro service](#4252-architecture-micro-service)
    - [Réseau de diffusion de contenu - cdn](#426-réseau-de-diffusion-de-contenu---cdn)
    - [L'hyper-convergence](#427-lhyper-convergence)
      - [Système de fichier distribué](#4271-système-de-fichiers-distribué-dfs)
  - [Aujourd’hui](#43-aujourdhui)
- [Mise en avant du ou des problèmes que cela soulève](#5-mise-en-avant-du-ou-des-problèmes-que-cela-soulève)
  - [Les problèmes liés au cloud](#51-les-problèmes-liés-au-cloud)
  - [L’histoire des échecs de la centralisation](#52-lhistoire-des-échecs-de-la-centralisation)
- [Une solution : la décentralisation](#6-une-solution-la-décentralisation)
  - [Concept historique](#61-concept-historique)
  - [Concept appliqué à la technologie](#62concept-appliqué-à-la-technologie)
  - [Fédération](#63-fédération)
  - [Les logiciels décentralisés](#64les-logiciels-décentralisés)
- [Proposition : l’informatique hébergé au niveau la ville ou de la région](#7-proposition-linformatique-hébergé-au-niveau-la-ville-ou-de-la-région)
  - [Solution maisons](#71-solution-maisons)
  - [Pour nos villes](#72-pour-nos-villes)
  - [Chatons](#73-chatons)
  - [Assodev](#74-assodev)
- [Conclusion](#8-conclusion)

## 1. Introduction à la résilience

La résilience est un concept ayant plusieurs définitions possibles.

La première, et aussi la plus parlante reste celle de la psycologie.
La résilience est un phénomène psychologique qui consiste, pour un individu affecté par un traumatisme, à prendre acte de l'événement traumatique de manière à ne pas, ou plus, vivre dans le malheur et à se reconstruire d'une façon socialement acceptable. La résilience serait rendue possible grâce à la structuration de la personnalité, par des expériences constructives de l'enfance et parfois par la réflexion, ou la parole, plus rarement par l'encadrement médical d'une thérapie.

Plus concrettement, la résilience est le processus qui conduit les individus, les sociétés, les territoires à ne pas sombrer, à se maintenir et à perdurer malgré les aléas de l’histoire et de l’existence , malgré les épreuves, la désorganisation, les dommages… et même les morts.

Gardons ce concept en tête et appliquons le à une ville, qui serait de ce fait une ville durable.

La résilience\ville *villeresiliente* remet en question la façon de penser le système urbain et ses perturbations. Il peut être défini comme la capacité de la ville à absorber une perturbation, puis à récupérer ses fonctions à la suite de celle-ci. La résilience évoque ainsi la capacité à faire face, à rebondir, à se reconstruire après un choc. C’est le processus qui conduit les individus, les sociétés, les territoires à ne pas sombrer, à se maintenir et à perdurer, malgré les aléas de l’histoire ou de l’existence, malgré les épreuves, la désorganisation, les dommages et les morts.

Dans le cas de la résilience appliquée à l'informatique, celle-ci désigne la capacité d'un système informatique à continuer de fonctionner en cas de panne, d'incident, de piratage ou de pic d'activité.  
Cela peut prendre la formed de mesures "de secours" pour que les systèmes pâtissent le moins possible des conséquences d'un problème informatique.

Pour concrétiser cette idéologie de résilience par la pratique la résilience pour un "système" ce serait qu’il soit:

- Pensé robuste et construit en fonction de perturbations prévisibles ou pas (incertitudes).
- Capable de récupérer ses fonctions après avoir subi des perturbations.
- Capable d’évoluer, de se maintenir efficace au fil du temps et des aléas.

Nous avons choisi d’illustrer ce concept moderne de la résilience autour de 2 "systèmes" qui nous concernent tous :

- La ville, le « système urbain » et ses perturbations avec 4 grands points à cibler en priorité;
 Comment la résilience d’une ville peut elle être renforcée par la technologie?
- L’informatique et ses multiples risques;
 Comment construire un système informatique résilient pour nos communautés?

## 2. La résilience d’une ville

### 2.1. Les différents axes

#### 2.1.1. Urbanisation

On peut définir l'urbanisation comme l'augmentation de la population et l'aménagement de la ville. À la différence des villes traditionnelles, la ville durable est pensée pour durer dans le temps. Ses agglomérations, du nom d’écoquartiers, combinent à la fois l'aspect économique, social et environnemental.
En effet, économiquement, cela requiert l’accès à des logements de qualités à moindre coût. Socialement, en permettant aux populations de bénéficier d’un cadre de vie de qualité. Environnementalement, en respectant des normes écologiques à travers la mise en place de politiques de protection de l’environnement.
La résilience urbaine est dans cette perspective considérée comme la capacité de la ville à absorber une perturbation puis à récupérer ses fonctions à la suite de celle-ci. C'est dans ce cadre que pour faire de la résilience urbaine, nous devons étudier le territoire.
Plusieurs causes compliquent aujourd’hui la gestion des risques en ville. Depuis 2007, la moitié de la population mondiale vit en milieu urbain. Ce palier atteint, il est attendu à ce que la population totale vivant en ville double dans les 30 prochaines années. Ce taux de croissance équivaut à la construction d’une nouvelle ville d’un million d’habitants par semaine.
Pour réussir à conserver voire même agrandir les espaces naturels, il est capital de les connaître, de les spatialiser et de les suivre dans le temps. On ne peut protéger que ce que l’on connaît ! SIRS et SIG apportent une information stratégique aux gestionnaires de nos territoires : une cartographie précise et actualisée des milieux naturels.
L’essentiel des éléments cartographiés se résume en six catégories au sein desquelles le pourcentage de recouvrement de la surface en strates arborées, arbustives et herbacées sera mesuré :

- Les surfaces herbacées
- Les boisements
- Les landes, les pelouses et les friches arbustives
- Les végétations clairsemées ou en sol nu
- La végétation des milieux humides
- Les surfaces en eau

Il a été démontré que plus la biodiversité d'un endroit est résiliente et riche, plus elle est capable de résister aux chocs. De ce fait, il est important de s'approprier le territoire naturel des villes pour pouvoir garantir une stabilité dans la vie de nos utilisateurs.

#### 2.1.2. Alimentation

L'alimentation et la gestion d'eau sont des enjeux majeurs de la résilience dans les villes, car elles représentent nos apports primaux en resources vitales. Or, l’eau douce ne représente seulement 2,5% de l’eau disponible sur la planète. Pour répondre à cette problématique, il y a plusieurs réponses possibles, parmis lesquels la permaculture et les panneaux hydrauliques, comme le projet Zero Mass Water, qui vise à capter l'eau présente dans l'atmosphère pour la convertir sous forme d'eau liquide.
C'est en effet le projet conduit par l'entrepise SOURCE, entreprise innovante qui vient des Etats-Unis, et qui apporte un apport en eau renouvelable grâce à l'energie solaire. Leur solution consiste à faire tourner des ventilateurs pour aspirer l'air ambiant : l'air est ensuite aspiré à travers une surface hygroscopique (surface retenant l'humidité de l'air), pour capturer l'eau en suspension de l'air. Ainsi, l'eau va ensuite pouoir être extraite pour lui permettre de se condenser dans un réservoir. Des minéraux sont ensuite rajoutés à l'eau pour lui donner un meilleur goût et les nutriments que l'on retrouve normalement dans l'eau de source. Cette solution est très économique, et durable dans le sens où c'est uniquement l'énergie du soleil qui sert à alimenter les panneaux. Il suffit ensuite de relier le système à un robinet de la maison pour que qu'il soit en place.

De plus, on retrouve beaucoup de projets qui ont une vocation plus humanitaire, où ici le but est de mettre en place des accés à l'eau courante. Dans des zones plus sensibles, comme au Bangladesh, où les tempêtes sont fréquentes, des projets de gestion de la recharge des aquifères sont mis en place pour permettre l'accés à l'eau potable même en temps de sécheresses. L'idée ici est de collecter l'eau de pluie dans les étangs et les toits des maisons durant la saison des pluie, de la filtrer à l'aide d'un filtre au sable et de la conserver sous terre. On peut alors disposer d'une eau naturellement fraîche tout le reste de l'année. L'intérêt d'une solution aussi simple est que celle-ci est maintenable par la population déjà en place, sans devoir être dépandente d'une aide extérieure. L'acceptation et l'appropriation par la communauté sont essentielles pour le succès des technologies d'approvisionnement en eau dans les zones salines. Il est nécessaire de tester différents modèles d'exploitation et d'entretien avec les bénéficiaires locaux pour s'assurer qu'ils bénéficient d'un soutien continu. Les communautés donnent généralement la priorité aux moyens qui leur permettent d'obtenir facilement de l'eau potable et se préoccupent principalement de deux paramètres spécifiques de l'eau fournie : l'odeur et la couleur. Certains sites de MAR sont confrontés à des problèmes d'odeur dans l'eau prélevée, mais cela peut être résolu en stockant simplement l'eau pendant la nuit avant de la boire.

Le problème de nourriture en ville est un problème majeur. Peu de terres agricoles, voire pas du tout. Il faut trouver un moyen de créer de la nourriture en ville, simplement et avec peu de coût.
Il existe plusieurs projets qui répondent à cette solution, mais nous allons nous focaliser sur un projet portugais. Il se situe à Lisbonne, et c'est un projet de ferme verticale, sous forme de ferme à étage. Les avantages sont multiples, et relativement facile à mettre en place. Le projet de Lisbonne sera par exemple dans un musée, qui permettra d'intéresser les visiteurs au sujet, en améliorant la qualité de l'air urbain. Dans un cadre de production, la place que la ferme prend est très réduite, puisque l'espace est utilisé plusieurs fois, car sur plusieurs niveaux. Cela peut réduire l'empreinte écologique d'une ville, ou d'un quartier, et réduire ses déchets en les utilisant comme en réutilisant les déchets organiques comme engrais pour la ferme et en réduisant les transports des produits car ils sont désormais au plus prêt des consommateur. Cela permet de réduire aussi la consommation d'eau, puisque selon les promoteurs, il serait possible d'utiliser les eaux urbaines et de recycler l'eau utilisée dans ces cultures.
Au niveau technologique, et à une échelle plus réduite, on a un autre projet, appellé "Home Potager" qui permet d'avoir son propre potager à la maison. Il permet de cultiver 18 plantes différentes, sans terre, et prend la place d'un porte-manteau. Avec 1m80 de hauteur, il suffit de remplir son réservoir de 50L d'eau, le système tient jusqu'à 4 semaines seul au niveau de l'eau. Une application connectée permet de voir facilement le niveau d'eau, mais aussi celui des nutriments, du PH et de l'état de la pompe (qui alimente les plantes en eau). Les premières plantes peuvent produire dès la 3e semaine, et produit entre 20 et 100 kilogrammes de fruits et légumes par an.

![alt text](https://www.kanpai.fr/sites/default/files/styles/big_header_sm/public/uploads/2015/10/pasona-asakusa-1.jpg "Ferme à étages")

#### 2.1.3. Energies

Une solution innovatrice face au problème d'énergie est le projet Smart Grid. C'est un nouveau modèle de réseau qui émerge récemment, qui est en opposition avec le modèle dit traditionnel, celui utilisé historiquement. Le principe du modèle directionnel est très simple : il est centralisé autour du producteur, qui n'a que peu d'informations sur les consommateurs, et va donc leur donner toujours le même niveau d'énergie. Il est possible d'adapter le niveau d'énergie fournit, mais pas de façon flexible, ou brusque. Par exemple, en fonction de la météo, on va changer le niveau de consommation d'énergie. Mais ce modèle ne permet pas d'adapter l'énergie fournie. Le modèle Smart Grid est un modèle réparti et bi-directionnel. C'est à dire que tout les acteurs sur le réseau, à savoir les producteurs, intermédiaires et consommateurs d'énergie, vont tous communiquer entre eux. La production d'énergie n'est plus centralisée. Il peut y avoir plusieurs sources d'énergie et le modèle fonctionnera parfaitement. Un tel changement de modèle implique de modifier la manière de concevoir et de piloter ces réseaux. Le pilotage du système électrique devient, avec ces nouvelles technologies, plus flexible. 
Cette adaptation ne peut se faire qu’en intégrant de nouvelles fonctionnalités issues des nouvelles technologies de l’information. Ces fonctionnalités permettent aux producteurs de prendre en compte beaucoup plus facilement les actions de l’ensemble des acteurs présent sur le réseau. C’est le cas notamment avec les compteurs intelligents. Avec les Smart Grids, les consommateurs d’électricité communiquent des informations essentielles aux producteurs. Ces derniers peuvent dès lors ajuster plus facilement et rapidement la production d’énergie. Un tel modèle de réseau permet de faire du consommateur un véritable acteur au sein du réseau. Son rôle n’est plus passif comme il l’est avec un système électrique traditionnel.

![alt text](/images/livre-blanc/smart_grid.png  "Ferme à étages")

Au niveau de l'énergie, il y a beaucoup de solutions résilientes qui ont été crées et implémentées, ainsi que beaucoup de projets en cours de financement. On pourra par exemple citer les panneaux solaires, une source d'énergie pseudo-infinie. Un projet récent de financement participatif a permis à un supermaché de récolter 100 000€ pour pouvoir faire un pas dans cette direction. Le projet consiste à construire des panneaux solaires sur le toit du magasin et du parking, afin de réduire sa dépendance électrique aux énergies à base de charbon (et énergie non-durable de la sorte) afin de rendre le magasin plus durable.

#### 2.1.4. Transport

La mobilité résiliente est un enjeu pour la ville de demain. Comme on l'a vu durant la crise récente qu'est la COVID-19, les transports furent quasi-inexistants. En effet, au-delà de la nécessité du maintien du service minimum en temps de crise, tous nos systèmes de transport doivent faire l’objet d’une réflexion collective incluant les entreprises et les communautés pour trouver des solutions plus adaptatives et soucieuses de l’environnement. Il est absolument fondamental de prendre du recul et de s’alimenter en propositions venant des populations. Le grand gagnant de cette crise profonde est la mobilité douce, composé des moyen de locomotions propres, tels que la marche ou le vélo. Tandis que la mobilité partagée a subi une baisse d’utilisation, conséquence logique pour limiter la propogation du virus. Ce que l'on a aussi pu noter, c’est la nécessité de booster la logistique urbaine pour un meilleur acheminement des besoins et parfois des aides matérielles.
Pour arriver à rendre la mobilité résiliente, il faut donc rendre les moyens de transport inclusif : l’inclusion active consiste à permettre à chaque citoyen, y compris aux plus défavorisés, de participer pleinement à la société. La ville, dans sa dimension inclusive, doit permettre d’intégrer les citoyens, de se déplacer librement et s’adapter aux besoins de ses usagers. L'idée est de placer le citoyen au centre des usages, en le rendant responsable de ses besoins, on lui permet de s'impliquer pleinement dans la vie active de sa ville et de son environnement.

Pour permettre à ces domaines de changer et d'évoluer, on fait appel aujourd'hui à des outils informatiques pour développer des solutions informatiques. Ces outils bien différents permettent de rendre la ville résiliente à leur maniere.

### 2.2. Vers une résilience informatique

Comme présenté précédemment, il existe de nombreux axes et domaines qui traitent de la ville et de ses habitants. Cette liste non exhaustive ne décrit qu'en surface les problèmatiques qui ont été soulevées durant ces dernières années. Ces enjeux de taille se pressent de plus en plus à nos portes. Pour leur faire fasse, les hommes modernes ont développer des outils pour les aider : les solutions informatiques. En effet, quoi de plus pratique d'être capable de gérer et d'être assisté en temps réel dans nos actions du quotidient, le tout à portée de main constante ? Malgré le côté presque miracle de la solution, un des principaux enjeux de cette solution sera de placer l'individu au centre des problématiques, et non de rejeter la responsabilité de son avenir à quelque chose d'autre. Car après tout, ne pas se laisser dépasser par les évènements et les moyens est soit une forme de résilience, non ?

## 3. Description des usages communs de l’informatique

Est-ce si important de garder d’avoir un réseau informatique résilient ?
Ne serait-ce qu’à but professionnel, personne ne peut s’en passer, ou presque. Mais même, ou plutôt surtout, personnellement, nous en avons besoin, et beaucoup en deviennent dépendants. 
Mais à quel point sommes-nous dépendants de ces technologies ? 

### 3.1 Communication

Une grande majorité possède un compte sur un réseau social. Si ce n’est pas Twitter, Facebook ou Instagram, peut-être est-ce LinkedIn ou Pinterest ? Ces solutions répondent à un besoin de communication. Mais il n’y a pas que les réseaux sociaux, avec leur notifications omni-présentent afin de nous faire rester le plus longtemps dessus qui nous permettent de communiquer. Il y a aussi des messageries, comme des emails, qui permettent de communiquer à la fois professionnellement et personnellement. WhatsApp, Outlook ou encore Skype et Microsoft Teams ! Autant de solutions, toutes informatiques qui nous permettent de discuter entre nous. 

On peut aussi noter les différentes sources d’informations, telle que les journaux, en format numérique, ou les émissions journalières, telles que le JT de TF1, ou le 19-45 de M6. Bien que majoritairement visionnés sur la télé, il est possible de regarder en replay sur son ordinateur, ainsi que toutes les émissions de ladite chaîne.  
Une autre chose que l’on peut compter comme communication, sont les déclarations en ligne, ou toutes les procédures en ligne en général. Les dossiers médicaux et la carte vitale sont accessible en ligne. Les communications avec les services bancaires sont aussi à prendre en compte. L’accès aux comptes, le payement en carte bleu, et le payement en ligne. 

Du côté professionnel, on peut compter sur les agendas partagés, sur les documentations partagés, documents partagés aussi, et les workflow, principalement. Pour généraliser, tout ce qui est gestion d’équipe et travail en commun. On peut citer GitHub par exemple, pour la gestion de version de logiciel et le travail collaboratif. Il y a aussi des forums, tel StackOverflow, qui sont un registre de connaissance couplé a une communauté volontaire et prête à aider n’importe qui, débutant ou professionnel, pour résoudre leurs problèmes.

Il ne faut pas oublier non plus le téléphone et les SMS. Moyen de communication par défaut, ils sont soumis à un usage de l’informatique très important. La majorité des français ont un smartphone et n'ont plus de téléphone leur servant uniquement à téléphoner. Et déjà avec les anciens modèles, il y avait des fonctions obligatoires, tels que le répertoire. Personne ne s’embête a noter sur papier les numéros de tout le monde, ni de les apprendre par cœur, a l’exception des numéros d’urgences, et même eux, un certain nombre de personnes ne les connaissent pas.

Mais il y a beaucoup d’autres utilités à nos smartphones. On peut les utiliser pour prendre des photos ou des vidéos par exemple. Une fois prises, ces médias sont stockés dans la mémoire du téléphone pour les visionner ou les partager. Mais en plus de les stocker simplement sur le téléphone, il y a une nouvelle option de disponible. Le stockage sur le cloud. Une solution relativement nouvelle qui permet le stockage infini de données. Et de n’importe quel type de données. Photo et vidéo par exemple, principalement avec Apple. Mais aussi des documents, professionnels ou personnels. Il existe énormément de solutions sur le marché, les plus connus étant Dropbox, iCloud et Google Drive.



## 4. Les technologies résilientes du cloud computing

Au cours de l'évolution d'internet, les organisations on fait face à un nombre grandissant d'utilisateurs. Internet s'est très vite démocratisé à tous les secteurs, de l'industrie, aux services, le médical, le bancaire et on peut l'affirmer sans crainte, tous les autres secteurs ont été transformés par cette fabuleuse technologie.

Aujourd'hui, internet est composé d'un réseau de million de kilomètres de câbles et de million de routeurs et commutateurs. Mais c'est aussi énormément de services fournit par des millions d'organisations, via en grande partie par les centres de données à travers le monde. Cela est rendu possible grâce au travail formidable des chercheurs et ingénieurs qui ont relevé le défi de rendre ces services le plus accessible et sécurisé possible. Leur travail a permit non seulement de propager internet au monde entier, mais aussi de le rendre plus résilient et plus accessible.

Dans les chapitres qui suivent, nous allons voir l'histoire de la création d'internet, mais aussi découvrir les technologies importantes qui ont fait d'internet ce qu'il est aujourd'hui. Des architectures monolithiques aux architectures en micro-service, des parcs informatiques assurant la redondance d'un service aux grappes serveurs. Ces technologies sont le socle de ce que l'on nomme communément, le cloud.

Avec sa capacité de stockage théoriquement infinie, le Cloud redistribut les cartes dans le domaine de l'hébergement et permet aux organisations qui ne disposent pas d’un de datacenter de mettre en place leurs solutions applicatives facilement, à moindre coût tout en garantissant la sécurité et la continuité de leur activité.

### 4.1 L'histoire d'internet

**Début d'une grande histoire**

Le point de départ d'internet fût la naissance d'Arpanet en 1969, après plusieurs années de recherche. Ce réseau comprenait quatre ordinateurs mis en service à l'université de Los Angeles en Californie. Dans les années qui ont suivi, de plus en plus d'universités et d'instituts de recherche ont rejoint le réseau.

Entre 1972 et 1976 sont réalisées les premières spécifications des protocoles internet (TCP, Telnet, UCP, FTP).

En 1979 est créé à l'université de Caroline du Nord et à l'université de Duke, Usenet (Unix user network), un système de réseau de forums. L'utilisateur accède aux forums via un logiciel communément appelé un lecteur de nouvelles.
Usenet, à l'origine indépendant, a rapidement été connecté à ARPAnet.

**La naissance d'internet**

En 1973 est publié à la conférence de l'INWG la suite de protocoles TCP/IP (Transfert Control Protocol - Internet Protocol), puis en 1983 Arpanet adopte cette suite de protocoles, c'est la naissance d'internet, grâce à ces protocoles les réseaux peuvent s'interconnecter. Finalement Arpanet est intégré au NSFNET (réseau de la National Science Foundation) en 1990. Ce réseau est le point de départ d'Internet.

**Une croissance fulgurante**

Depuis 1990 des million de particuliers et entreprises rejoignent Internet, cet afflux massif à permit aux gens à travers le monde d'échanger et aux entreprises de faire évoluer leur business. Très rapidement les besoins d'internet se multiplient :

- La recherche d'informations.

- Echange d'informations via mail, forum, chat.

- Téléphonie.

- Jeux en ligne.

- Commerce électronique.

- Echange boursier.

- Réseaux sociaux.

- et à l'avenir l'internet des objets...

On le comprend : plus internet grandit, plus les usages s'étendent.

Aujourd'hui internet est utilisé partout dans le monde par 4.39 milliards d'individus qui y passent six heures en moyenne par jour...

**Un problème d'échelle et de criticité**

Cependant, cet afflux massif d'individus, que ce soit des particuliers ou des organismes, et l'utilisation grandissante d'internet pour des systèmes de plus en plus critiques. En effet, cela a mis en lumière des problématiques d'ordre technologiques des infrastructures supportant internet ou fournissant des services via celui-ci.

En effet il aura fallut aux ingénieurs et aux chercheurs, trouver des solutions pour rendre les systèmes capables de répondre d'une part à cette demande intense et d'une autre part, puisque Internet s'utilisait de plus en plus pour des utilisations critiques, rendre ces systèmes plus robuste face à des événements perturbateurs.

### 4.2. Les technologies et techniques

Au cours des années qui ont suivi la création d'internet, les entreprises on fait face à des obstacles : qu'il s'agisse de répondre à la demande grandissante ou bien protéger efficacement leur système d'information. Au cours de ces années, des technologies plus innovantes les unes que les autres ont vu le jour dans le but de répondre à des problèmes d'ordre de résilience :

![Systeme](https://i.imgur.com/590o6Zi.png)

On distingue deux parties :

- Les conditions défavorables sont des états internes ou externes aux systèmes qui peuvent perturber ou conduire à la perturbation des capacités critiques.

- Les événements indésirables sont des incidents qui perturbent les capacités critiques en causant des dommages aux biens associés.

Les différentes technologies présentées ci-dessous permettent de répondre à ces classes de risques.

#### 4.2.1. Répondre à la demande

la première approche utilisée par les entreprises, consistait à centraliser le stockage et le traitement des données dans un serveur central. Un des premiers obstacles rencontré était de répondre à la demande grandissante pour un service donné, pensez aux moteurs de recherche, aux sites d'achat, de streaming, le nombre d'utilisateurs n'a cessé d'augmenter, cette augmentation implique d'utiliser de plus en plus de ressources pour y répondre. Un seul serveur ne suffisait plus...

##### **4.2.1.1. Scalabilité**

La première notion à aborder lorsqu'on parle de "répondre à la demande" est le principe de scalabilité (mise à l'échelle). Cette notion regroupe les techniques utilisées pour faire en sorte qu'un système d'information ait les ressources nécessaires afin de répondre efficacement à un nombre d'utilisateurs donné.

Il existe deux types de scalabilité, l'horizontal et la vertical.

**Scalabilité horizontal**

La scalabilité horizontale correspond à la multiplication les nœuds de calcul au niveau le plus bas de l'infrastructure, c'est-à-dire l'ajout pur et simple d'un nouveau serveur ou d'une instance applicatif. Cela représente un investissement important.

**Scalabilité vertical**

Cette fois-ci, l'idée est d'augmenter la capacité de calcul d'un nœud, c'est-à-dire ajouter de la mémoire, un meilleur processeur, etc.... à un serveur ou bien multiplier les modules d'une application.

Dans un premier temps, les entreprises abordaient le problème via la première approche, multiplier les serveurs et chaque serveur disposait d'une instance de l'application, cette approche n'est pas faisable sans l'utilisation de ce que l'on nomme un "loadbalancer", un répartiteur de charge.

##### **4.2.1.2. Répartition de charge : le load balancing**

Après avoir multiplié ses serveurs, pour soutenir la charge, il faut qu'ils soient tous accessibles pour les utilisateurs. Pour se faire, il existe plusieurs approches pour répartir les utilisateurs entre les différents serveurs.

**Utiliser les DNS**

Pour rappel, le DNS est un système permettant de traduire une adresse IP en un nom de domaine. Example :

```text
google.com -> 172.217.18.206
```

Le DNS est simplement un fichier texte qui contient des entrées noms de "domaine ip".

La première approche consiste à faire correspondre le nom du serveur avec plusieurs ordinateurs en modifiant continuellement les tables de correspondance du service DNS. La distribution par le DNS ne tient cependant pas compte de l'état des serveurs, en particulier de la disponibilité et des pannes éventuelles. Les demandes peuvent alors être envoyées à des serveurs qui sont déjà 100 % occupés, ou à des serveurs en panne.

**Utiliser un proxy**

Un proxy est un composant logiciel informatique qui joue le rôle d'intermédiaire entre deux hôtes. Dans ce cas-ci, on souhaite rendre accessible nos serveurs via internet par le biais d'un proxy (qui s'occupera aussi de répartir la charge) :

![Proxy](https://i.imgur.com/BNQAC2I.png)

le proxy est accessible via internet par l'adresse exemple.com, les utilisateurs ne se préoccupe pas de connaitre le serveur qui leur sera attribué.

Cette technique permet de mieux répartir la charge, car le proxy à connaissance de l'état de chaque serveur.

**Geographic load balancing**

Bien que les latences aient été drastiquement diminuées au fil des années via notamment la démocratisation de la fibre optique, on ne peut pas défier les lois de la physique, un signal qu'il soit guidé (câble, fibre optique) ou non-guidé (sans fils) a une vitesse propre :

- Dans l'air cette vitesse sera de 299 700 km/s

- Dans une fibre optique ou câble ce sera 70 à 75% de la vitesse de la lumière dans le vide.

Il faut aussi rajouter les temps de traitement du signal à chaque nœud du réseau. Par exemple, la latence entre l'Est des Etats-Unis et l'Ouest de l'Europe est de ~80 millisecondes (pour chaque paquet de données, une page web par exemple va nécessiter des centaines d'échanges pour être affichée).

Les entreprises ont rapidement fait face à cette problématique : il fallait donc avoir des serveurs proches des clients, tout en étant accessible via le même nom de domaine. Pour cela ils utilisent des techniques d'équilibrage basé sur la géolocalisation.

Tout d'abord, le proxy obtient l'adresse IP du client et analyse les informations sur l'emplacement du client. Simultanément, le serveur effectue des contrôles de santé pour évaluer les performances et la réactivité des serveurs en temps réel. Enfin, le serveur maître transmet la demande au serveur local le plus proche géographiquement ou ayant le temps de réponse le plus court.

L'ensemble de ces techniques peuvent être utilisées séparément ou ensemble, selon les besoins.

#### 4.2.2. Virtualisation

Avant, les applications adoptaient une architecture monolithique qui, bien que simple à déployer, était compliquée à gérer quand déployées sur le même serveur. De plus, avec la montée en puissance d'internet, de plus en plus d'entreprises voient leur système d'information subir des cyberattaques, pouvant endommager leur système hôte. Les organismes ont donc besoin de système sécurisé, d'être capable de migrer facilement leur solution logicielle et de déployer efficacement sur leur infrastructure.

En 1960 la firme IBM créé le premier système de virtualisation de serveur, au cours des années 80-90 l'apparition de l'architecture processeur x86 démocratise le principe, ce qui vient répondre aux problématiques citées ci-dessus. La virtualisation consiste à exécuter sur une machine hôte, dans un environnement isolé, des systèmes d'exploitation. Cette approche offre les avantages suivants :

- Utilisation optimale des ressources du parc informatique.

- Installation, déploiement, migration facilité des applications du système d'information.

- Economie matériel et énergétique en mutualisant les ressources.

- Permet de mettre en place des environnements de testes pour les équipes de développement, ce qui améliore la qualité.

- Sécurisation des systèmes grâce à l'isolation des systèmes hôte et des réseaux.

- Allocation dynamique des ressources allouées aux systèmes virtualisés.

#### 4.2.3. Conteneurisation

Dès le début des années 2000, le concept de Conteneurisation se développe, l'idée n'est plus de virtualiser un système d'exploitation qui fait ensuite tourner une application métier, mais de virtualiser chaque application.

![Conteneurisation](https://i.imgur.com/UTPuR9u.png)

Les conteneurs encapsulent un package applicatif qui comprends seulement le code de l'application, ses dépendances et ses fichiers de configuration. Pour fonctionner les conteneurs font appel à un logiciel qui s'occupera de les exécuter et les gérer.

les avantages :

- **Portabilité** : Cette approche permet notamment de rendre chaque application portable, chaque conteneur peut être déployé autant sur une machine Linux ou Windows ou même dans un système virtualisé.

- **Légèreté** : Les conteneurs  partagent le même noyau système, celui de la machine, il n'y a aucun système virtualisé nécessaire à les faire fonctionner, cela demande moins de ressources au serveur. De plus, contrairement à une machine virtuelle standard, un conteneur mettra beaucoup moins de temps à démarrer.

- **Scalable** : La scalabilité est facilitée, puisqu'il est facile de dupliquer un conteneur.

- **Sécurisé** : Les applications sont isolées les unes des autres, ce qui empêche en principe la transmission d'un code malveillant à un autre conteneur ou à l'hôte.

##### 4.2.3.1. Orchestration

L'orchestration permet d'automatiser le déploiement et la gestion de la mise à l'échelle (scalabilité) et la mise en réseau des conteneurs.

L'orchestrateur va s'occuper de répartir les conteneurs sur les différents serveurs, selon les besoins en matière de mémoire et de CPU. Il va notamment s'occuper de surveiller l'activité des conteneurs pour connaitre à tout instant leur état de santé. En cas de mise en défaut d'un conteneur, l'orchestrateur peut le redémarrer voir le supprimer et en recréer un. Si un des serveurs est indisponible, il peut redémarrer les conteneurs sur un autre serveur.

![Orchestration](https://i.imgur.com/YuumlRN.png)

L'orchestrateur permet d'assurer la mise à jour des conteneurs de manière successive sans induire d'indisponibilité, c'est ce que l'on nomme le rolling update. Il peut aussi revenir en arrière en cas de problème.

Les conteneurs étant par nature volatile, les informations réseau de chaque conteneur (ex: adresse IP) est variable. L'orchestrateur offre un niveau d'abstraction permettant de regrouper un ou plusieurs conteneurs, de leur allouer une adresse IP fixe et de l'exposer à d'autres conteneurs.

Ces fonctions confèrent à l'infrastructure un niveau de résilience accru.

#### 4.2.4. Grappe serveur - Clusterisation

Dès la fin des années 1980, les ingénieurs développent un multi-ordinateur : l'idée est de fusionner les ressources fournit par plusieurs ordinateurs pour en former un nouveau qui sera virtuel. C'est ce qu'on appel une grappe serveur ou un cluster.

Cette approche va de pair avec les techniques visant à mieux répartir la charge, mais pas que. En effet, cela permet d'augmenter la disponibilité, de mieux gérer la scalabilité et de faciliter la gestion des ressources (processeur, mémoire vive, stockage, bande passante...).

![Cluster](https://i.imgur.com/nJyb6az.png)


Ici, on change de paradigme : les serveurs ne répondent pas individuellement aux requêtes, mais forment un tout, qui y répondra, où le calcule y est divisé entre les nœuds du cluster.

Les avantages sont multiples :

- **Baisse des coûts** : Le coût d’acquisition et de maintenance d’un cluster est plus faible que le coût d’acquisition d’un serveur central sur le long terme. En d’autres termes, il revient moins chère à une entreprise d’ajouter un nœud à un cluster (scalabilité horizontale) que d’ajouter des capacités supplémentaires à un serveur central (scalabilité vertical).

- **La scalabilité horizontale** : Le regroupement d’ordinateurs en architecture distribuée possède une caractéristique très intéressante sur les clusters : la scalabilité horizontale. L’ajout d’un ordinateur supplémentaire dans un cluster augmente de façon plus que proportionnelle la performance du cluster.

- **La haute disponibilité ou tolérance aux pannes** : Le regroupement d’ordinateurs en clusters permet de distribuer le traitement entre ceux-ci, ce qui offre la capacité au système de continuer à fonctionner malgré les défaillances, ce qui n’est pas le cas dans les architectures centralisées dans lesquelles la disponibilité de tout le système repose entièrement sur un point : le serveur central (Single Point of Failure)

La puissance de calcul qui découle du regroupement d'ordinateurs, cumulée aux effets d'échelles massives engendrés par ces avantages, font des architectures distribuées le moteur infrastructurel parfait pour la gestion de la plupart des problèmes de calcul intensif ou des problèmes de traitement massivement parallèle.

L’évolutivité du cluster se fait simplement en ajoutant de nouveaux nœuds au cluster. Il n’y’a théoriquement pas de limites au nombre de nœuds qui peuvent être ajoutés au cluster.

##### **4.2.4.1. La virtualisation et conteneurisation dans un cluster**

Comme sur un serveur traditionnel, on peut virtualiser ou conteneuriser au sein d'un cluster : cela permet par exemple la migration à chaud d'une machine virtuelle ou d'un container. Cette manipulation consiste à déplacer l'état d'une machine virtuelle ou d'un conteneur, c'est-à-dire les données, la mémoire, les processus en cours, etc... d'un nœud à l'autre.

#### 4.2.5. Du paradigme monolithique vers le micro-service

##### **4.2.5.1. Architecture monolithique**

Tel que montré précédemment, les applications étaient monolithique et déployées d'un seul bloc derrière un répartiteur de charge. Il y a des avantages à cette approche, en terme de :

- performances : l'ensemble des éléments sont en mémoire.
- Simplicité : L'approche est intuitive, simple à construire, à déployer et à tester.

Toutefois, cette approche comprend beaucoup de points faibles. D'un point de vue développement, une erreur de programmation dans l'un des modules peut la faire tomber entièrement. Dans le cas d'une mise à jour, c'est l'ensemble de l'application qui doit être stoppée et être redéployée, cela prend du temps, du temps qui coûte de plus en plus cher. Le couplage entre les modules de l'application est fort, ce qui entraine l'augmentation de la dette technique.

##### **4.2.5.2. Architecture micro-service**

En 2011 apparait le concept d'architecture micro-service, la philosophie s'inspire grandement de celle d'UNIX : "Ne faire qu'une seule chose et la faire bien". L'idée n'est plus de structurer l'application en un seul bloc, mais de découpler ses modules en un ensemble de services, ces derniers communiquant ensemble par le biais d'interfaces commun.

![Architecture](https://i.imgur.com/n1JIwbj.png)

L'approche offre des avantages conséquents, elle facilite le développement distribué, réduit les cycles de développement puisque les équipes peuvent livrer chaque service indépendamment des autres, facilite le déploiement, augmente la résilience : le faible couplage entre les services permet qu'en cas de dysfonctionnement d'un des services que l'application reste opérationnel.

Néanmoins, l'approche comporte des challenges à relever : dorénavant il faut gérer non plus une seule application, mais un essaim d'applications plus petite (micro-service) qu'il faut être capable de gérer.

Grâce à l'utilisation de conteneurs et d'orchestrateurs, il devient facile pour l'organisme de déployer selon ses besoins, l'ensemble des micro-services sur son infrastructure.

#### 4.2.6. Réseau de diffusion de contenu - cdn

Vers la fin des années 90' la technologie de réseau de diffusion de contenu est créé, constituée d'ordinateur en réseau, reliés à travers internet ils coopèrent afin de mettre à disposition le contenu d'un serveur principal.

![cdn](https://i.imgur.com/Ix7wpvx.png)

Les clients récupèrent le contenu auprès du serveur leur étant le plus proche. De leur côté, les serveurs cdn se chargent de rester à jour vis-à-vis du serveur principal.

#### 4.2.7. L'Hyper-convergence

En 2012 apparait le terme d'Hyper-convergence, l'idée est de pousser à son paroxysme le principe de cluster, d'unicité, et de découpler drastiquement le matériel (serveur, routeur, commutateur, etc...) de la partie logicielle, dans le but d'accroitre l'évolutivité et de réduire la complexité. 

##### **4.2.7.1. Système de fichiers distribué (DFS)**

Dans cette optique, le système utilise directement le stockage présent dans les serveurs afin d’en faire un pool de stockage partagé.

On parle alors de système de fichiers distribué. Les systèmes de fichiers distribué garantissent que les données ne soient pas corrompues ou perdues.

### 4.3. Aujourd'hui

Dans la partie 4.2, nous avons vu les grandes technologies développées afin d'assurer de répondre à cette demande grandissante en même temps que les exigences en matière de résilience.

Dans un environnement d'application monolithique, il est trop risqué de n'avoir qu'une instance de cette application face aux événements ou conditions perturbatrice, alors la redondance fût la première des solutions.

Au fil du temps, à mesure que les exigences en matière de résilience ont accru, les technologies ont suivi le pas. La virtualisation a permit de mutualiser son infrastructure et de garantir un niveau d'exigence en terme de sécurité. Cependant, la virtualisation est un processus lourd et coûteux en ressources. Là où la conteneurisation apporte des solutions aux problèmes de ressources et notamment rendent les applications portables et facilement scalable au sein de l'infrastructure.

L'apparition des infrastructures clusterisées à permit de faciliter la gestion, la scalabilité et la tolérance aux pannes de l'infrastructure.

Avec les technologies d'orchestration, la mise à l'échelle des composants logiciels de l'architecture du SI est automatisée et rend à son tour la partie système tolérante aux pannes. Les mises à jour n'ont plus d'impact sur l'applicatif et en cas de problème le retour en arrière est possible.

Le changement de paradigme monolithique vers micro-service épouse parfaitement les technologies citées précédemment, et en découplant les modules de l'application, cette dernière devient à son tour résiliente. Grâce à l'orchestration, la scalabilité devient plus fine, il est alors possible de mettre à l'échelle certains services mais pas d'autre...

## 5. Mise en avant du ou des problèmes que cela soulève

### 5.1. Les problèmes liés au cloud

Un des sujets les plus abordés quant à l'utilisation d'un cloud centralisé est l'appartenance des données. Les données sont confiées à un tierce parti dans lequel il faut placer sa confiance. 

L'utilisation du cloud rend dépendant à une connexion internet. Utiliser vos services qui sont hébergés sur le cloud vous rend sensibles à la perte de disponibilités dans le cas de l'absence de connexion. L'activité d'une entreprise peut être totalement paralysée par la perte de connexion.

Sur certains aspect techniques, une entreprise devra forcément passer par le support technique du cloud utilisé et sera donc plus dépendant de celui-ci.

### 5.2. L'histoire des échecs de la centralisation

Le 14 décembre 2020, Google a connu une panne mondiale. Les services tels que Youtube, Gmail ou Google Cloud Platform n'étaient pas accessibles pour plusieurs milliards d'utilisateurs. Durant une cinquantaine de mainutes, les entreprises utilisants ces services à travers le monde se sont retrouvés dans l'incapacité de travailler. 

Le géant du cloud, Amazon Web Service a connu en 2019 une panne d'électricité sur un serveur en Virginie. Cette panne a causé l'arrêt des générateurs de sauvegarde de ce centre de données. Durant cet incident, 7,5% des instances EC2 (hébergement d'application web) et EBS (stockage) sont restées indisponibles. Une fois la panne terminée, une partie des données stockées sur le serveur endommagé ont été définitivement perdues. 

En 2019, les GAFAM représentaient 49% de la valeur de l'indice NASDAQ. On se rend compte assez vite que l'indisponibilité des services de l'un d'entre eux a un impact extrèmement important sur l'économie. Certaines entreprises dépendent essentiellement de leurs services et se voient donc dans l'incapacité de fonctionner en cas de panne. Même si ces incidents sont rares, l'impact économique qu'ils ont n'est pas négligeable et invite les entreprises à trouver d'autres solutions pour assurer leur pérénité. Afin de garantir une meilleure résilience, certains modèles proposent une résistance plus sûre aux incidents techniques que le cloud centralisé peut connaitre.

## 6. Une solution : la décentralisation

Une partie de ces problèmes vient d'une trop forte centralisation des services, des infrastructures, du savoir faire et de la gouvernance.
Une solution naturelle serait de faire l'opposé de la centralisation, c'est-à-dire la décentralisation.

### 6.1 Concept historique

Ce concept est d'abord lié au fonctionnemnt du gouvernement. En voici sa définition :
> Système d'organisation des structures administratives de l'État dans lequel l'autorité publique est fractionnée et le pouvoir de décision remis à des organes autonomes régionaux ou locaux.

En effet, par un long processus de décentralisation, la France, qui était un État unitaire très centralisé depuis la Révolution, est aujourd'hui un État déconcentré et décentralisé (loi du 6 février 1992 relative à l’administration territoriale de la République, dite "loi ATR"). Cette réalité est désormais consacrée par l’article 1er de la Constitution qui, depuis la révision constitutionnelle du 17 mars 2003, dispose que "l’organisation [de la République française] est décentralisée".

![](/images/décentralisation-région.png)

### 6.2.	Concept appliqué à la technologie

Cette idée s'applique aussi à l'informatique, notamment aux réseaux et bien sûr à internet. Nous allons ici détailler le concept de centralisation, décentralisation et de distribution appliquée au web.

Pour mieux comprendre ces différents concepts, il est important de comprendre le principe sur lequel la plupart des services web son basés, le modèle client-serveur.

![Client Serveur](https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Mod%C3%A8le-client-serveur.svg/1200px-Mod%C3%A8le-client-serveur.svg.png)

Dans ce modèle, le client a pour rôle de demander une ressource par une requête. Le serveur, quant à lui a pour rôle d'attendre les requêtes des clients et de leur envoyer les ressources demandées en réponse.
Par exemple : votre navigateur internet (le client) demande à Wikipedia (le serveur) la page sur la *Redécentralisation d'internet* qui renvoit la page en question à votre navigateur pour qu'il l'affiche.
Aujourd'hui le rôle de serveur est le plus souvent endossé par des fournisseurs de services ou cloud.

Maintenant voici un schéma représentant les différents acteurs et leurs intéractions selon un modèle centralisé, décentralisé et distribué.

![Decentraliser](/images/centralized-decentralized-distributed.png)

#### 6.2.1. Le web centralisé

Dans un modèle centralisé, pour intéragir, les différents acteurs passent systématiquement par une poignée de méga acteurs. C'est-à-dire, les utilisateurs ont uniquement le rôle de client, et les différents "clouds" ont le rôle de serveur.
Avec ce modèle qui présente certes de nombreux avantages expliqués précédemment, la résilience du système, d'internet est égale à la résilience des acteurs centraux plus la résilience des connections entre eux et les autres acteurs.

#### 6.2.2. Le web décentralisé

La décentralisation ou redécentralisation du web car il l'était davantage à ses débuts, est en quelque sorte un réduction d'échelle : comme le gouvernement, nous allons chercher à séparer les clouds (serveurs centraux) en pleins de plus petits fournisseurs et de les rapprocher des clients. 

Cela impact la résilience du système internet positivement sur plusieurs critères :
1. Si les fournisseurs sont répartis géographiquement sur le territoire, l'autonomie des localités est augmenté.
2. Si les fournisseurs sont gouvernés indépendamments, les services seront beaucoup plus diversifiés.

#### 6.2.3. Le web distribué

La web distribué est une modèle plus radical car ici les acteurs sont majoritairements à la fois client et serveur. Il repose sur des technologies de communication pair à pair et de cryptographie.
Pour trouver une ressource, un acteur va demander aux acteurs les plus proches de lui puis élargir sa recherche s’il ne trouve pas.

Ce modèle est le plus résilient des trois :
1. Chaque acteur est potentiellement différent d'un autre, donc énormément de diversité.
2. L'autonomie peut être appliquée à toutes les échelles, la plus petite étant deux acteurs dans une pièce.
3. Le système est extrêmement modulaire et interconnecté, on peut ajouter et enlever des acteurs sans perturbations.
4. Les ressources sont redondantes à travers plusieurs acteurs sur le réseau.


Le modèle le plus résilient est le web distribué mais il est beaucoup plus compliqué à mettre en place car en supprimant les fournisseurs, il est presque impossible d'appliquer des régulations économiques ou législatives. 
Dans la société actuelle, il est plus réaliste pour l'instant de se diriger vers un modèle décentralisé. Cependant un phénomène négatif peut apparaitre : le manque d'interopérabilité qui est une conséquence de l'augmentation de la diversité et empêcherait des utilisateurs de différents services de communiquer correctement ensemble. 

### 6.3. Fédération

Pour résoudre cette problématique, l'ajout du concept de fédération sur nos services décentralisés suffit.
L'idée est d'avoir un protocole et un format de ressources standardisé, implémenté par les différents services touchant aux mêmes thématiques.

Ce genre de protocole existe déjà, par exemple pour tout ce qui touche aux réseaux sociaux, il existe le protocole [ActivityPub](https://fr.wikipedia.org/wiki/ActivityPub) et l'ensemble des services qui l'implémentent forment le [Fediverse](https://fr.wikipedia.org/wiki/Fediverse).

![Fediverse logo](https://upload.wikimedia.org/wikipedia/commons/9/93/Fediverse_logo_proposal.svg)

Le [Fediverse](https://fediverse.party/en/fediverse) est utilisé par environ 1 millions d'utilisateurs répartit sur plus de 5000 instances.
Une instance représente une application (ou service) hébergé par un fournisseur.

### 6.4.	Les logiciels décentralisés

Voici quelques applications fédérées alternatives aux réseaux sociaux centralisés :
- [Mastodon](https://joinmastodon.org/) est une alternative à Twitter
- [Peertube](https://joinpeertube.org/) est une alternative à Youtube
- [Mobilizon](https://joinmobilizon.org/fr/) est une alternative aux événements Facebook


## 7. Proposition : l’informatique hébergé au niveau la ville ou de la région

Dans les parties précédentes nous vous avons présenté les usages communs de l'informatique et quelles sont les architectures utilisées pour nos service informatiques, tel que nos mail, la météo et autres. Juste après, nous vous avons expliqué que la décentralisation etait pour nous la solutions par definition, mais il reste la question de sa mise en place niveaux de la régions et de la ville.

### 7.1. Solutions maisons

En tant que solution pour particuliers, il serait interessant de posséder un serveur à la maison qui permet d'heberger ses données. Cette solution est difficile et coûteuse a installer pour un particulier. Pour cette solution, il faudrait acheter le materiel pour chaque domicile, ce qui reviendrait à environs 400€ par foyer. De plus, il faut aussi prendre en compte le temps pour se former sur des technologies d'auto-hébergement et d'administration de serveur. On peut aussi, à l'aide de ce serveur décentralisé, créer un chaton qui permet de rendre ce serveur et les services hébergés, plus éthiques et accessibles à d'autres personnes. 

#### YunoHost

{{< img_float url="/images/livre-blanc/Yunohost.png" alt="Logo, YunoHost" title="YunoHost" class="float-right pl-4 ">}}
YunoHost est une distribution dérivée de debian initialement destinée à l'auto-hébergement de particulier. Son objectif premier est de démocratiser la pratique de l'auto-hébergement en simplifiant la gestion d'un serveur le plus possible, de sorte que des personnes, à l'aise avec leur ordinateur personnel mais sans grandes connaissances, puissent réussir à déployer et maintenir des services.(si cela vous interresse voir les etapes d'installation [Ici: Créer son chaton avec YunoHost](https://wiki.chatons.org/doku.php/yunohost))

Il existe aussi des solutions pour les personnes qui désirent cet outil mais qui ne désirent pas l'administrer : un boitier du nom de LOLA permet de gérer son instalation YunoHost de manière simplifiée.

#### LOLA

{{< img_float url="/images/livre-blanc/lola.jpg" alt="Lola, Mon datacenter a la maison" title="Lola" class="float-right pl-4">}}
Stocker ses données chez-soi, plutôt que sur le nuage de données, exploitées par les géants de l’internet, tout en réduisant l’impact environnemental et en louant les espaces inutilisés, c’est l’idée de la startup Sonora Labs installée au sein de la pépinière d’entreprises « Cleantech »  à Aix en Provence. Une idée qui fait l’objet d’une triple innovation comme le rappelle Julien Tournier, son fondateur : «  elle libère les données des datacenters, préserve l’environnement et rémunère celui qui met à disposition son espace inutilisé ». Le principe même de l’économie collaborative appliquée à l’informatique, qui permet au passage de rendre internet plus vertueux.

### 7.2. Pour nos villes

La solution proposée dans la partie précédente est une solution technique pour des personnes ayant le temps d'apprendre à administrer un serveur.

La proposition la plus interresante a mettre en place pour notre solution serait que la ville ou la region puisse mettre en place des Data Center administrés. Cela serait possible si la ville posséde un service informatique compétant ou l'aide d'associations, de collectifs comme l'a fait Paris.

#### Paris

La Mairie de Paris a décidé de reprendre la souveraineté des données des Parisiens. Pour se faire, elle a ouvert en 2019 son propre Data Center situé en sous-sol dans le 18ème arrondissement.
Pour réduire l’empreinte environnementale du Data Center, plusieurs mesures ont été prises par la mairie de Paris. Ainsi, la chaleur dégagée par le centre sera utilisée pour alimenter le réseau de chauffage des bâtiments aux alentours. Une initiative similaire à celle prise par la ville de Bordeaux, où des HLM sont chauffés grâce aux données.

De plus la ville de Paris compte laisser d’autres services publics et des particuliers payer pour y installer leurs serveurs, et donc avoir un hebergement plus proche et decentralisé.

### 7.3. CHATONS

{{< img_float url="/images/livre-blanc/logo_chatons_v2.png" alt="Logo, Les Chatons" title="Chatons" class="float-right pl-4 max-w-md">}}
Ce qu'a fait Paris est possible puisque la mairie de Paris a une equipe technique compétante et les moyens de payer cette infrastructure. Pour les villes, regions et particuliers qui cherchent a realiser un hébergement alternatif, transparents et de bonne qualité ils peuvent essayer de devenir un CHATON.

Un CHATON posséde les caractéristiques suivantes :

- C'est un collectif regroupant des petites structures proposant des services en ligne (par exemple du mail, de l'hébergement de sites web, des outils collaboratifs, des outils de communication, etc.).

On appelle "hébergeurs" ces structures pour plusieurs raisons :

- elles gèrent des serveurs (ordinateurs sur lesquels sont installés des programmes permettant de faire fonctionner des services en ligne),
- elles proposent aux internautes le stockage de leurs données et leur diffusion sur le web.

La particularité de CHATONS est que les membres de ce collectif s'engagent notamment :

- à n'utiliser que des logiciels libres ;
- à ne pas exploiter les données des bénéficiaires de leurs services (= ne pas transmettre ou exploiter vos données) ;
- à ne pas utiliser de régies publicitaires (ou autres services de pistage) ;
- à proposer régulièrement des rencontres "physiques" avec leurs bénéficiaires, afin de réduire la fracture numérique.

[Pour en savoir plus](https://chatons.org/fr)

Il existe differente association qui héberge des services dans notre regions:

- Assodev Marsnet
[Pour en savoir plus](https://chatons.org/fr/page/assodev-marsnet)

- ImmaeEu
[Pour en savoir plus](https://chatons.org/fr/page/immaeeu)

- Outils-Conviviaux
[Pour en savoir plus](https://chatons.org/fr/page/outils-conviviaux)

- TuxFamily.org
[Pour en savoir plus](https://chatons.org/fr/page/tuxfamilyorg)

## 8. Conclusion

En conclusion on as remarquer que l'internet faisait partie de la vie courante des particuliers. On peut considerer que c'est aujourd'hui un outils indispensable pour toute personne voulant regarder la television, avoir acces a des informations ou meme utiliser un telephone. Le probleme que l'on as avec cela, est que l'on se dirige vers vers une hyper centralisation de l'informatique qui est l'inverse de la nature et du concept d'Internet. Cela permet a des grand groupes tels que google de controler et de comptabiliser tous nos outils et notre utilistion de l'outils qu'est l'informatique. Le regroupement d’ordinateurs en clusters permet de distribuer le traitement entre ceux-ci, ce qui offre la capacité au système de continuer à fonctionner malgré les défaillances et donc d'avoir un taux de disponibilité haut. Il ne faut pas comfondre haute disponibilité et resilience qui sont deux chose diffrente meme si la haute disponibilité de cette architecture en cluster nous permet d'avoir acces a tous les services que l'on utilise en pemanance. Cela a un impact negatif sur la resilience puisque c'est un réseau massivement utilisé mais pour lesquels l'utilisateur doit nécessairement passer par les serveurs de la compagnie pour utiliser ce service en lui-même.Il faut donc confiées nos données a un tierce et on aurra une utilisation dependante d'un géants d'Internet comme Google, Facebook.

Donc celon nous il faudrait rendre l'informatique plus resilient pour l'Homme, et en venir a une architecture decentraliser. On peut meme parler de redecentralisation puisque a la base Internet a été conçu comme un réseau de réseaux interconnectés dans lequel n'importe quel nœud du réseau peut communiquer avec tous les autres. La décentralisation ou redécentralisation du web car il l'était davantage à ses débuts, est en quelque sorte un réduction d'échelle, nous allons chercher à séparer les clouds (serveurs centraux) en pleins de plus petits fournisseurs et de les rapprocher des clients. Cela impact la résilience du système internet positivement sur plusieurs critères puisque si les fournisseurs sont répartis géographiquement et qu'il sont gouvernés indépendamment sur le territoire, l'autonomie des localités est augmenté et les services seront beaucoup plus diversifiés et nous permetrait d'avoir de la redondance dans les services proposé.

>Toutes les libertés dépendent de la liberté informatique, elle n’est pas plus importante que les autres libertés fondamentales mais, au fur et à mesure que les pratiques de la vie basculent sur l’ordinateur, on en aura besoin pour maintenir les autres libertés. **de Richard Stallman**

{{< img_float url="/images/livre-blanc/conclusion.png" alt="ecologie" title="Informatique écologique" class="float-right pl-4 max-w-md">}}
Aujourd'hui il serait interressant de changer l'approche que l'on a sur l'informatique. Comme exprimmer dans la citation ci dessus **Richard Stallman** la gratuité de l'informatique a un prix telles que empreinte sur notre planète. De plus on aujourd'hui le web n'est plus q'un suport mais un outils polique pour les grandes entreprises.

***Il est donc l'heure pour vous d'agir*** et de commencé a chercher des solution plus respectueuse:
- telles que les [CHATONS](https://chatons.org/fr) pour hebergé vos propre service ou avoir accés des services en ligne libres, éthiques et décentralisés. 
- Il faut de plus poussé vos municipalité a s'approprié la problematique