let titre = document.getElementsByTagName("h1")[0];
let dark = document.getElementById("dark")
let suppr = document.getElementById("suppr")
let toggle = document.getElementById("toggle")

dark.addEventListener("click",()=>{
    titre.classList.add("dark");
})
suppr.addEventListener("click",()=>{
    titre.classList.remove("dark");
})
toggle.addEventListener("click",()=>{
    titre.classList.toggle("dark");
})

document.addEventListener("click",(clickEvent)=>{
    const img = document.createElement("img")
    img.setAttribute("src","https://picsum.photos/id/237/200/300")
    img.style.position='absolute'
    img.style.top=clickEvent.pageY - 150  + 'px'
    img.style.left=clickEvent.pageX - 100 + 'px'

    console.log(clickEvent.pageX)
    console.log(clickEvent.pageY)
    document.body.append(img)
})

// let titre = document.getElementsByTagName("h1")[0];
// let normal = true
// titre.addEventListener("click",()=>{
//     // if (normal === true){
//     // titre.innerText = ":)"
//     // normal =false
//     // }
//     // else{
//     //     titre.innerText = "a"
//     // normal = true
//     // }
//     titre.innerText= normal ? ':)' : "a";
//     normal=!normal;
// })

// let truefalse = true

// let dark = document.getElementById("dark")
// let suppr = document.getElementById("suppr")
// let toggle = document.getElementById('toggle')


// dark.addEventListener("click",()=>{
//     titre.classList.add("dark")})

// suppr.addEventListener("click",()=>{
//     titre.classList.remove("dark")})

// toggle.addEventListener("click",()=>{
//     titre.classList.toggle('dark');
//     // titre.classList= truefalse ? 'dark' : "";
//     // truefalse=!truefalse;
//     })

// document.addEventListener('click', (clickEvent) => {
//     // let coordX =clickEvent.pageX;
//     // let coordY =clickEvent.pageY;
//     let baliseImg = document.createElement("img")
//     baliseImg.setAttribute("src", "https://picsum.photos/id/237/200/300" );
//     document.body.appendChild(baliseImg);
//     baliseImg.style.position = "absolute";
//     baliseImg.style.top=clickEvent.pageY+'px';
//     baliseImg.style.left=clickEvent.pageX+'px';
//     baliseImg.style.transform = "translate(-50%, -50%)";
// });