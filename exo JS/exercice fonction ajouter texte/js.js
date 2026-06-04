function ajouterTexte(pseudo, duTexte){
    let p = document.createElement("p");
    let b = document.createElement("b");
    document.body.append(p)
    p.append(b);
    b.append(pseudo);
    p.append(" - " +duTexte);
}
ajouterTexte("Léo", "papin")

function ajouterTexte2(prenom, nom) {
    const containerAdd = document.querySelector('#textAdd');
    console.log(containerAdd);
// On créer un élément p
    const nouveauParagraphe = document.createElement('p');
// On créer un élément strong
const strong = document.createElement('strong');
// On ajoute le texte au strong
strong.textContent = prenom;
// On ajoute le strong au p
nouveauParagraphe.append(strong);
// On ajoute le texte au p
nouveauParagraphe.append(` - ${nom}`);
// On ajoute le p au body
containerAdd.append(nouveauParagraphe);
}
ajouterTexte2("lele","omg")
// function ajouterTexte(pseudo, texte){
//     const body = document.getElementsByTagName('body')[0]
//     const paragraphe = document.createElement("p");
//     const gras = document.createElement("b");
//     gras.innerHTML = pseudo ;
//     paragraphe.appendChild(gras);
//     paragraphe.innerHTML = paragraphe.innerHTML +" - " + texte;
//     body.appendChild(paragraphe);
// }
// ajouterTexte("Jojolasticot", "Siuuuuuuuuuuuuu");