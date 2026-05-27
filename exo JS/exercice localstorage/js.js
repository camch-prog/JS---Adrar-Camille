let monTxt = document.getElementById('note-textarea');
let renderZone = document.querySelector('.textRender');
let monSuperTexte = localStorage.getItem('monSuperTexte');

monTxt.value = monSuperTexte;

if (monTxt.value.length>0){
    renderZone.innerText=monTxt.value;
}

monTxt.addEventListener('keyup',()=>{
    localStorage.setItem('monSuperTexte',monTxt.value);
    renderZone.innerText=monTxt.value;
})