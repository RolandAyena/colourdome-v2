# Configuration SMTP du formulaire de contact

Le endpoint `api/contact/route.ts` utilise Nodemailer et le serveur SMTP fourni par l’hébergeur. Resend n’est plus utilisé.

## Plusieurs boîtes destinataires

Le formulaire peut envoyer chaque demande à deux ou trois boîtes en séparant les adresses par des virgules dans `MAIL_TO` :

```text
MAIL_TO=info@colourdome.ca,contact@colourdome.ca,direction@colourdome.ca
```

Chaque boîte recevra une copie du message. Les destinataires sont envoyés en **copie cachée (BCC)** : ils ne voient donc pas les autres adresses de l’équipe. L’adresse du visiteur est placée dans `Reply-To`, afin que le bouton « Répondre » réponde directement au visiteur.

## Dépendance

Dans le projet Next.js, installer Nodemailer :

```bash
npm install nodemailer
# ou
pnpm add nodemailer
```

Si le projet utilise TypeScript et signale l’absence de types, installer également :

```bash
npm install -D @types/nodemailer
```

## Variables d’environnement

Ajouter ces variables dans l’espace sécurisé de l’hébergeur :

```text
SMTP_HOST=smtp.fournisseur.ca
SMTP_PORT=587
SMTP_USER=website@colourdome.ca
SMTP_PASSWORD=mot_de_passe_smtp
MAIL_FROM=website@colourdome.ca
MAIL_TO=info@colourdome.ca,contact@colourdome.ca,direction@colourdome.ca
```

Pour un serveur SMTP utilisant SSL direct, le port est généralement `465`. Le code active automatiquement `secure: true` avec le port 465. Pour le port 587, il utilise STARTTLS.

`MAIL_FROM` doit être l’adresse SMTP authentifiée ou une adresse autorisée par l’hébergeur. `MAIL_TO` accepte plusieurs adresses séparées par des virgules.

## Mise en production

1. Créer la ou les boîtes email dans l’espace de l’hébergeur.
2. Récupérer les paramètres SMTP exacts auprès de l’hébergeur.
3. Installer Nodemailer dans le projet.
4. Ajouter les variables d’environnement sans les mettre dans Git.
5. Déployer l’application.
6. Envoyer un test et vérifier la réception dans chaque boîte.
7. Cliquer sur « Répondre » depuis une boîte destinataire et vérifier que la réponse va au visiteur.

Le fichier `.env.local` fourni initialement contenait une clé Resend exposée. Elle a été retirée de l’archive SMTP et ne doit pas être réutilisée.
