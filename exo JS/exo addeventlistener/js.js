let titre = document.getElementsByTagName("h1")[0];
let normal = false
titre.addEventListener("click",()=>{
    if (normal === true){
    titre.innerText = ":)"
    normal =false
    }
    else{
        titre.innerText = "a"
        normal = true
    }
})