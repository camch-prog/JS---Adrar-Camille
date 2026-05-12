let dateDuJour = "12/05/2026"
let nomClient = "Bernard";
let adresseClient = "5 rue des Lilas";
let villeClient = "Toulouse";
let pizzaCommandee= " Margarita";
let tempsLivraison = 30;
let messageSuprise = `Qu'est qu'une pizza dit à une autre pizza qui lui demandait des conseils ? "Suis ta pâte et tout ira bien !"`


let SumUpOrderPhrase = `${dateDuJour}:\n
Bonjour, ${nomClient} ,votre pizza ${pizzaCommandee} est en cours de préparation.\n
Elle vous sera livrée d'ici ${tempsLivraison}minutes à l'adresse : ${adresseClient}, ${villeClient}.\n
---\n
${messageSuprise}`;

console.log(SumUpOrderPhrase);

