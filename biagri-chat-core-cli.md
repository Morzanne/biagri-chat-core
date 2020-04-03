Voici un descriptif non exhaustif des commandes utiles pour une configuration minimale du biagri chat core.
Les exemples ci dessous prennent les logs ( api key, secret, email..), d'un compte d'essai get stream.
A adapter avec les logs de l'app qui sera en prod
===================================

Prérequis
---------

Installer la CLI 

Vérifier que le dossier yarn se situe bien dans le path.

Si oui, executer la commande suivante:

```bash 
yarn global add getstream-cli
```

Sinon, installer la CLI via cette commande la:

```bash 
yarn global add getstream-cli --prefix ~/.yarn
```

Cette commande installera la CLI et permettra en même temps d'ajouter le dossier yarn dans le path


Configurer la CLI pour notre client
---------
```bash 
stream config:set
```

Une série de plusieurs questions vous sera posée dont:

*Quel est votre nom complet ?
*Quelle est l'adresse associée avec Stream ?
*Quelle est votre Stream Api key ?
*Quelle est votre stream secret ?

Créer un channel
---------

Pour créer un channel, voici la commande bash à executer, en adaptant les bons logs du compte utilisé.

IMPORTANT: Nous créeons ici un channel de type commerce. Pourquoi commerce ? Pour la simple et bonne raison que le type "commerce" met à dispositions des permissions par défaut qui conviennent à l'utilisation que l'oin fera de biagri chat core dans un premier temps.

```bash
stream chat:channel:create --channel=$(openssl rand -hex 12) --type="<TYPE DU CHANNEL>" --name="<NAME DU CHANNEL>" --json
```

Mettre à jour/Créer des permissions
---------

Se rendre sur le dashboard de l'app voulue et les configurer.