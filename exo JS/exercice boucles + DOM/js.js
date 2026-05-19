let lesTxt = document.getElementsByTagName("p");

console.log(lesTxt);
let textesTab = Array.from(lesTxt);

console.log(textesTab);

// textesTab.map((nimporte)=>nimporte.innerHTML = "Hello i'm an Hacker")

const laDiv = document.querySelector('.vide');
laDiv.append(`Là c'est JS qui ajoute du texte dans la div`);
laDiv.appendChild(textesTab[4])


// On créer via JS un élément de TXT
const nouveauText = document.createTextNode('TEST Création');

laDiv.append(nouveauText
)
//On créer nimporte quelle balise HTML
//phase 1: On créer l'élement --> <h1></h1>
const balise = document.createElement("h1");
//phase 2: on rempli la balise --> 
balise.innerHTML = 'KAKOUKAKOU';
laDiv.appendChild(balise)

document.body.appendChild(balise)

