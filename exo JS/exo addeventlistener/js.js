let titre = document.getElementsByTagName("h1")[0];
let normal = false
titre.addEventListener("click",()=>{
    // if (normal === true){
    // titre.innerText = ":)"
    // normal =false
    // }
    // else{
    //     titre.innerText = "a"
    // normal = true
    // }
    titre.innerText= normal ? ':)' : "a";
    normal=!normal;
})

let truefalse = false

let dark = document.getElementById("dark")
let suppr = document.getElementById("suppr")
let toggle = document.getElementById('toggle')
dark.addEventListener("click",()=>{
    titre.classList='dark'})
suppr.addEventListener("click",()=>{
    titre.classList.remove('dark')})
toggle.addEventListener("click",()=>{
    titre.classList= truefalse ? 'dark' : "";
    truefalse=!truefalse;})