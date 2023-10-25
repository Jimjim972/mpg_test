# MPG_test

Il s'agit d'une application Node.js en Typescript réalisée pour les tests techiques de MPG

## Table des matières

1. [Installation](#1-installation)
2. [Configuration](#2-configuration)
3. [Démarrage](#3-démarrage)
4. [Utilisation](#4-utilisation)
5. [Obstacles](#5-obstacles)
6. [Conclusion](#6-conclusion)

## 1. Installation

Pour exécuter cette application, vous devez installer ses dépendances. Assurez-vous d'avoir Node.js et Couchbase Server déjà installés.


# Cloner le dépôt
git clone https://github.com/votre-nom/application-nodejs-couchbase.git

# Naviguer vers le répertoire du projet
cd application-nodejs-couchbase

# Installer les dépendances
npm install


## 2. Configuration

Lancez le server Couchbase.
Vérfifiez vos identifiants Couchbase.

CB_USER = 'admin'
CB_PASS = 'monpetitgazon'
CB_URL = 'localhost/8091'
CB_BUCKET = 'mpg'


## 3. Démarrage

npm run start


## 4. Utilisation

Utilisez un client(Postman) pour lancer les requêtes.


Vous pouvez utiliser les points d'accès de l'API pour effectuer des opérations demandées. Voici les points d'accès :

GET /usersLeague/:id - Obtenir tous les utilisateurs de la league
POST /createLeague - Créer une nouvelle league
PATCH /updateTeam/:id - Modifier le nom de la league


## 5. Obstacles

L'installation de couchebase n'a pas été facile car je n'ai pas pu l'installer avec le client je suis passé par Docker.
Ensuite la comunnication DB<=>Api a été compliquée car je n'ai pas trouvé tout de suite comment écrire l'adresse du server couchbase.

## 6. Conclusion

Ce projet a été une belle expérience pour moi car l'utilisation de couchbase a été une première.
Merci pour le temps accordé à la revue de mon code.
