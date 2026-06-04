let h1 = document.getElementsByTagName('h1')[0]
const h1TextContent = h1.textContent
let bool = true
console.log(h1TextContent)
h1.addEventListener('click',()=>{
    h1.innerText = bool ? ":)": h1TextContent
    bool= !bool
})

let inputText = document.getElementById("text")
inputText.addEventListener("focus",()=>{
    inputText.style.backgroundColor="blue"
    inputText.style.color="white"
})
inputText.addEventListener("blur",()=>{
    inputText.style.background='transparent'
    inputText.style.color='black'
})

document.addEventListener("mouseleave", ()=>{
    h1.style.display='block'
})

let keyupInput = document.getElementById("input-exercice-keyup");
let keyupP = document.getElementById("renderKeyboard")
let boutonDisparait = document.getElementById("bouton")
console.log(keyupInput.value)
keyupInput.addEventListener("keyup",()=>{
    keyupP.innerText = keyupInput.value
    if (keyupInput.value.length>5){
        boutonDisparait.disabled=true
    }
    else{boutonDisparait.disabled=false}
})


boutonDisparait.addEventListener("click",()=>{
        let timr = 3;
        const monIntervale = setInterval(()=>{
            if (timr>0){
                h1.innerText=timr;
                timr --;
            }else{
                h1.innerText="GO";
                clearInterval(monIntervale)  
            }
        },1000)
        ;
    
    
})


// let input = document.getElementById('text');

// input.addEventListener("focus",()=>{
//     input.style.background='blue';
//     input.style.color='white';
// }
// )
// input.addEventListener("blur", () => {
//     input.style.background = "inherit";
//     input.style.color ="inherit";
// }); 
// let h1 = document.getElementsByTagName("h1")[0];
// let toutLeDoc = document;
// toutLeDoc.addEventListener('mouseleave',()=>{
//     h1.style.display = "block";
//     h1.style.background='chartreuse';
//     h1.style.color='red';
//     h1.style.textAlign= 'center';
// })  

// let field=document.getElementById("input-exercice-keyup");
// let ecriteau = document.getElementById("renderKeyboard")
// field.addEventListener("keyup", ()=>{
//     ecriteau.innerText = field.value
// })

// let fieldeux=document.getElementById("input-ex-keyupdeux");
// let bouton = document.getElementById("bouton");
// fieldeux.addEventListener("keyup", ()=>{
//     fieldeux.value.length >=5 ? bouton.disabled=true : bouton.disabled=false;
//     // if(fieldeux.value.length>=5){
//     // bouton.disabled=true}
//     // else{bouton.disabled=false}
// }
// )
// function changement(){
//     //document.body.style.background="black"
// }
// setTimeout(changement,3000);

// let timer= document.getElementById('timer');
// let timerTitle = document.getElementById('timer-title');
// let counter = 3;
// const intervalID =setInterval(1000)

// timer.addEventListener('click',()=>{
//     setInterval(function(){if (counter>0){
//         counter--;
//         timerTitle.innerText =counter;
//     }
//     else{timerTitle.innerText = 'GO!';
//         console.log("ficnoish")
//     }},1000)
    
// }
// )    