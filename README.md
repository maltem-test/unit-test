<p align="center"><img src="https://www.maltem.com/wp-content/uploads/revslider/home/Griffe-rouge.png" width="500"></p>
<p align="center"><img src="https://cdn.auth0.com/blog/logos/ngrx.png" width="300"></p>

# Description du test:

Compléter les tests des fichiers `./apps/myapp/src/app/state/user/user.effects.spec.ts` et `./apps/myapp/src/app/state/user/user.reducer.spec.ts`:
1. user.effects.spec.ts: Les cas de tests existes déjà et ils sont pré-écrits, il suffit de les compléter. 
2. user.reducer.spec.ts: fichier vide, il faut tester les cas suivants:
   - Le cas où on passe au reducer une action indéfinie
   - L'action `AddUserSuccess` doit ajouter un utilisateur dans le state
   - L'action `UpdateUsersSuccess` doit mettre à jour le state