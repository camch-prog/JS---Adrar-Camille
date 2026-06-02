let listeMot = ['eau', 'boire','verre']
let listePhrase =["L'eau est fraiche","Le poisson bleu","Mais quoi?"]
function afficherResultat(score,nombreQuestion){
    let message ="Votre score est de : " + score + " / " + nombreQuestion;
    return message;
}

function choixPhrasesOuMots(mot, phrase){
let choixMotPhrase= prompt("Tapez phrase ou mot : ");
while(choixMotPhrase !== 'mot' && choixMotPhrase !== 'phrase'){
    choixMotPhrase = prompt("vous devez choisir entre phrase ou mot");
}
if (choixMotPhrase==="mot"){
    return mot;
}
else{
    return phrase;
}
}

function lancerBoucleJeu(jeuChoisi){
    let compteur =0;
    for(let i =0; i<jeuChoisi.length;i ++){
        
        let motEntre = prompt('Veuillez rentrer le mot '+ jeuChoisi[i])
        if (motEntre === jeuChoisi[i]){
        compteur += 1;
        }
        }
        return compteur;
}

function lancerJeu(){
    let choixJeu = choixPhrasesOuMots(listeMot,listePhrase);
    console.log(choixJeu);
    let score = lancerBoucleJeu(choixJeu);
    let message = afficherResultat(score, choixJeu.length);
    console.log(message)
}
