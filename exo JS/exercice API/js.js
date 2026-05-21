const apiDiv = document.querySelector('.apiContact');
//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
// const contactApi =   () => {


async function contactApi(){
    //Data va récup Toutes les données de l'api
    const data = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log(data);
    //Plutôt que de Travailler sur la réponse, on va la transformé pour 
    //qu'elle devient un OBJET JS (+ pratique)
    const dataTransformed = await data.json();
    console.log(dataTransformed);
    
    for(let x=0; x<=19; x++){
        console.log(dataTransformed.results[x].name);
        apiDiv.innerHTML += "<p>"+dataTransformed.results[x].name+"</p>";
    }
};

contactApi();