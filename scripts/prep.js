// Prépare www/ : copie le jeu tel quel (tout est dans un seul fichier, rien à télécharger)
const fs=require('fs'),path=require('path');
const www=path.join(__dirname,'..','www');fs.mkdirSync(www,{recursive:true});
fs.copyFileSync(path.join(__dirname,'..','game','index.html'),path.join(www,'index.html'));
console.log('www prêt');
