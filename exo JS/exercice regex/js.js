let email = document.getElementById('ID');
let mdp = document.getElementById("MDP");
let errorSection = document.getElementById("text")

const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
const regexChiffre =  /\d/;
const regexCaract = /[$&@!]/;

email.addEventListener("keyup",()=>{
    regex.test(email.value)? email.style.background="green" : email.style.background="red"
})
mdp.addEventListener("keyup",()=>{
    let errorMessage="";
    if (mdp.value.length<6){
        errorMessage +=  "<li>Votre Mot de passe est trop Court</li>";
    }
    else if(mdp.value.length>8){
        errorMessage +=  "<li>Votre Mot de passe est trop Long</li>";
    }
    if(!mdp.value.match(regexChiffre)){
        errorMessage += "<li>Le Mot de passe doit contenir 1 chiffre</li>"
    }
    if(!mdp.value.match(regexCaract)){
        errorMessage += "<li>Le Mot de passe doit contenir 1 caractère</li>"
    }
    if(errorMessage!==""){
        errorSection.innerHTML=errorMessage;
        errorSection.style.border="1px solid red"
    }else{
        errorSection.innerHTML='Le mot de passe est valide'
        errorSection.style.border="1px solid green"
    }
})
// let email = document.getElementById("ID");
// let mdp =document.getElementById("MDP");
// let zoneZext=document.getElementById('text');
// const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
// console.dir(regex);
// const charDecimal = /\d/;
// const charSpecial = /[$&@!]/;


// email.addEventListener("keyup",()=>{
//     if(regex.test(email.value)===true){
//         email.setAttribute("style", "background-color:green")
//     }else{console.log(email.setAttribute("style", "background-color:red"))}
// })
// mdp.addEventListener("keyup",()=>{
//     let errorMessage = "";
//     if(mdp.value.length<6){
//         errorMessage +="<li>Votre mot de passe est trop court</li>"
//     }
//     else if(mdp.value.length>8){
//         errorMessage += "<li>Votre mot de passe est trop long</li>"
//     }
//     let decimal=mdp.value.match(charDecimal);
//     console.log(decimal);
//     if(!decimal){
//         errorMessage += "<li>Votre mot de passe doit contenir un chiffre</li> "
//     }
//     let special=mdp.value.match(charSpecial);
//     if(!special){
//         errorMessage += "<li>Votre mot de passe doit contenir un caractere spécial</li> "
//     }
//     if(errorMessage !==""){
//         zoneZext.innerHTML='<ul>'+errorMessage;+'</ul>'
//         zoneZext.setAttribute("style", "border:red 1px solid")
//     }
//     else{zoneZext.innerHTML="ok c good"
//         zoneZext.setAttribute("style", "border:green 1px solid")
//     }
// })
