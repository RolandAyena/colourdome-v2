# Configuration de l’envoi des demandes de contact

Le formulaire appelle désormais `POST /api/contact`. Le serveur valide les champs, envoie le message via Resend aux destinataires configurés et place l’adresse du visiteur dans `Reply-To` afin qu’une réponse soit immédiate.

## Variables à configurer

Ajouter ces variables secrètes dans l’environnement de production :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
MAIL_TO=info@colourdome.ca,contact@colourdome.ca,direction@colourdome.ca
MAIL_FROM=Colour Dome Montréal <noreply@colourdome.ca>
```

`MAIL_TO` accepte deux ou trois adresses séparées par des virgules. Les valeurs réelles ne doivent pas être commit dans le code ni dans le fichier `.env.example`.

## Activation Resend

Créer une clé API dans le tableau de bord Resend et vérifier le domaine `colourdome.ca`. Une fois le domaine vérifié, utiliser une adresse `MAIL_FROM` appartenant à ce domaine, par exemple `noreply@colourdome.ca`. La vérification SPF/DKIM améliore fortement la délivrabilité et évite le dossier spam.

Pour un premier test sans domaine vérifié, Resend peut imposer l’adresse d’expédition de test et limiter les destinataires au compte autorisé. Ce mode ne doit pas être conservé pour la production.

## Comportement du formulaire

Le formulaire affiche le succès uniquement après la confirmation de l’API d’envoi. En cas d’erreur de configuration ou de refus du fournisseur, il affiche une erreur et ne prétend plus que le message est parti. Les champs sont nettoyés côté serveur, les longueurs sont limitées et les doubles clics sont bloqués pendant l’envoi.
