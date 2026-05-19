function ajouterTexte(pseudo, texte){
    const body = document.getElementsByTagName('body')[0]
    const paragraphe = document.createElement("p");
    const gras = document.createElement("b");
    gras.innerHTML = pseudo ;
    paragraphe.appendChild(gras);
    paragraphe.innerHTML = paragraphe.innerHTML +" - " + texte;
    body.appendChild(paragraphe);
}
ajouterTexte("Jojolasticot", "Siuuuuuuuuuuuuu");