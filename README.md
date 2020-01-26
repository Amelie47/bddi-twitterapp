###### tags: `NodeJs` `npm` `streams` `websocket`

# bddi-twitterapp
Application développé dans le cadre d'un projet scolaire sur le thème de nodeJs et de l'utilisation de streams avec l'API dev twitter.
Application de récupération des flux twitter et affichage des données reçues. L'application tri les tweet en fonction de leur langue d'origine et annalyse le pourcentage des provenances de tweets.
Elle récupère également le nombre de tweet par nationalité, et affiche le dernier tweet utilisé par langue.

## Difficultés
J'ai rencontré quelques difficultés pour savoir quel rôle chaque fichier devait avoir dans le fonctionnement du programme.
J'ai également eu des difficultés pour affecter une action sur le serveur suite à une action côté client.

## Choix
J'ai traité les données côté client, pour effectuer une énumération plus simple sur le nombre de tweets total et le nombre de tweets avec hashtags.
Pour les commandes côté client, j'ai décidé de ne pas faire un bouton pour chaque action, mais un champ text où taper la commande ("pause" ou "resume") pour laisser la possibilité d'en créer pleins d'autres si nécessaire par la suite. Tout celà est géré dans le fichier index.js à la racine du projet.

## Démarrer le projet
Avant toute chose, il faut se créer un compte développer twitter et suivre les démarches nécessaires à l'obtention de clés d'api :
[twitter dev](https://developer.twitter.com/en/apply-for-access)

Une fois le projet cloner ou télécharger, il faut créer un fichier .env avec les variables écrites dans le fichier .env.example, en affectant vos clés d'api personnelles.
Par la suite, il faudra installer les nodes-modules (`npm install`) puis démarrer le serveur (`node index.js` dans le terminal).
Aller sur le port 8080 de votre localhost, puis rafraichissez la page pour chaque nouvelle connexion.
