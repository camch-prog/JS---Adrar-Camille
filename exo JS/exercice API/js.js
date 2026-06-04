
const contactApiSecureSkatepark = async ()=>{
    try{
        const rawData = await fetch ('https://www.data.gouv.fr/api/1/datasets/r/22c033a6-ab18-43b7-8b12-befa0d659a06');
        if(!rawData.ok || rawData.status !==200){
            console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            return;
        }
        console.log(rawData);
        console.log(rawData.ok);
        console.log(rawData.status);
        const dataTransformed=await rawData.json();
        
        
        
    }catch(error){
        console.log("Erreur lors de l'appel à l'api : ",error);
    }
}
contactApiSecureSkatepark();
// const boutonBlague = document.getElementsByTagName("button")[0];
// boutonBlague.addEventListener('click', ()=>{
// const contactApiSecureChuck = async ()=>{
//     try{
//         const rawData = await fetch ('https://api.chucknorris.io/jokes/random ');
//         if(!rawData.ok || rawData.status !==200){
//             console.error("Erreur lors de la récupération des données : ", rawData.statusText);
//             return;
//         }
//         console.log(rawData);
//         console.log(rawData.ok);
//         console.log(rawData.status);
//         const dataTransformed=await rawData.json();

        
//         const paraBlague = document.getElementById("blague")
        
//         paraBlague.innerText=dataTransformed.value;
        
        
//     }catch(error){
//         console.log("Erreur lors de l'appel à l'api : ",error);
//     }
// }
// contactApiSecureChuck();
// })
// let apiDiv = document.querySelector('.apiContact')

// const contactApiSecurePokemon = async ()=>{
//     try{
//         const rawData = await fetch ('https://pokeapi.co/api/v2/pokemon');
//         if(!rawData.ok || rawData.status !==200){
//             console.error("Erreur lors de la récupération des données : ", rawData.statusText);
//             return;
//         }
//         console.log(rawData);
//         console.log(rawData.ok);
//         console.log(rawData.status);
//         const dataTransformed=await rawData.json();
//         const listePokemon = dataTransformed.results;
//         console.log(listePokemon[0])
//         for(i=0; i <dataTransformed.results.length;i++){
//             let p =document.createElement("p");
//             apiDiv.append(p)
//             p.append(dataTransformed.results[i].name)
//         }
//         dataTransformed.results.forEach(element => {
//             let p = document.createElement("p");
//             p.textContent = element.name;
//             apiDiv.append(p)
//         });
        
//     }catch(error){
//         console.log("Erreur lors de l'appel à l'api : ",error);
//     }
// }
// contactApiSecurePokemon();


// async function contactApi(){
//     const data =await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
//     console.log(data);
//     console.log(data.ok);
//     console.log(data.status);
//     const dataTransformed =await data.json();
//     console.log(dataTransformed);
//     apiDiv.innerText =dataTransformed.latitude;
// }
// contactApi();

// const contactApiSecurePlus = async () =>{
//     try{
//         const rawData = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
//         console.log(rawData);
//         if(!rawData.ok || rawData.status !== 200){
//             console.error("Erreur lors de la récupération des données : ", rawData.statusText);
//             return;
//         }
//         const transformedData = await rawData.json();
//         console.log(transformedData);
//         apiDiv.innerHTML = transformedData.longitude;
//     } catch (error){
//         console.error("Erreur lors de l'appel à l'API : ", error);
//     }
// }
// contactApiSecurePlus();

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

// let button = document.getElementsByTagName("button")[0];
// console.log(button);
// button.addEventListener("click",()=>{
//     const contactApiSecurePlusDeux =  async () => {
//     try {
//         const rawData = await fetch('https://api.chucknorris.io/jokes/random');
//         console.log(rawData);
        
//         // Vérification du statut de la réponse
//         if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
//             console.error("Erreur lors de la récupération des données : ", rawData.statusText);
//             return; // Sortir de la fonction si la réponse n'est pas OK
//         }
//         const transformedData = await rawData.json();
//         const div = document.getElementById('blague');
//         console.log(div)
//         div.innerHTML = "<p>"+ transformedData.value+"</p>";
        
//     } catch (error) {
//         console.error("Erreur lors de l'appel à l'API : ", error);
//     }
//     }
// contactApiSecurePlusDeux();
// })
