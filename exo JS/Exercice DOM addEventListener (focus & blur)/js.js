let input = document.getElementById('text');

input.addEventListener("focus",()=>{
    input.style.background='blue';
    input.style.color='white';
}
)
input.addEventListener("blur", () => {
    input.style.background = "inherit";
    input.style.color ="inherit";
}); 
let h1 = document.getElementsByTagName("h1")[0];
let toutLeDoc = document;
toutLeDoc.addEventListener('mouseleave',()=>{
    h1.style.display = "block";
    h1.style.background='chartreuse';
    h1.style.color='red';
    h1.style.textAlign= 'center';
})

let field=document.getElementById("input-exercice-keyup");
let ecriteau = document.getElementById("renderKeyboard")
field.addEventListener("keyup", ()=>{
    
})