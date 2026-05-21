// const apiDiv = document.querySelector('.apiContact');
// //de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
// // const contactApi =   () => {


// async function contactApi(){
//     //Data va récup Toutes les données de l'api
//     const data = await fetch('https://pokeapi.co/api/v2/pokemon');
//     console.log(data);
//     //Plutôt que de Travailler sur la réponse, on va la transformé pour 
//     //qu'elle devient un OBJET JS (+ pratique)
//     const dataTransformed = await data.json();
//     console.log(dataTransformed);
    
//     for(let x=0; x<dataTransformed.results.length; x++){
//         console.log(dataTransformed.results[x].name);
//         apiDiv.innerHTML += "<p>"+dataTransformed.results[x].name+"</p>";
//     }
//     apiDiv.innerHTML += "<p>POKEMON</p>";
// };

// contactApi();



// const contactApiSecurePlus =  async () => {
//     try {
//         const rawData = await fetch('https://pokeapi.co/api/v2/pokemon');
//         console.log(rawData);
        
//         // Vérification du statut de la réponse
//         if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
//             console.error("Erreur lors de la récupération des données : ", rawData.statusText);
//             return; // Sortir de la fonction si la réponse n'est pas OK
//         }

//         const transformedData = await rawData.json();
//         console.log(transformedData);
//         for(let x=0; x<transformedData.results.length; x++){
//         console.log(transformedData.results[x].name);
//         apiDiv.innerHTML += "<p>"+transformedData.results[x].name + "</p>";
//         }
//     } catch (error) {
//         console.error("Erreur lors de l'appel à l'API : ", error);
//     }
// }
// contactApiSecurePlus();

let button = document.getElementsByTagName("button")[0];
console.log(button);
button.addEventListener("click",()=>{
    const contactApiSecurePlusDeux =  async () => {
    try {
        const rawData = await fetch('https://api.chucknorris.io/jokes/random');
        console.log(rawData);
        
        // Vérification du statut de la réponse
        if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
            console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            return; // Sortir de la fonction si la réponse n'est pas OK
        }
        const transformedData = await rawData.json();
        const div = document.getElementById('blague');
        console.log(div)
        div.innerHTML = "<p>"+ transformedData.value+"</p>";
        
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
    }
contactApiSecurePlusDeux();
})
