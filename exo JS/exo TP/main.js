const userData = {
    name: 'John delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
};

const baliseDiv = document.getElementsByClassName('userProfile')[0];
const baliseImg = document.createElement("img");
const baliseNom = document.createElement("h1");
const baliseEmail = document.createElement("div");
const baliseAge = document.createElement("div")
const baliseDOB = document.createElement("div")
const baliseActive = document.createElement("div")

baliseImg.setAttribute("src", userData.img );
baliseNom.innerText = userData.name;
baliseEmail.innerText = userData.email;
baliseAge.innerText = userData.Age;
baliseDOB.innerText = userData.dob;
baliseActive.innerText = userData.active;
baliseDiv.appendChild(baliseImg);
baliseDiv.appendChild(baliseNom);
baliseDiv.append(baliseEmail);
baliseDiv.append(baliseAge);
baliseDiv.append(baliseDOB);
baliseActive.innerText= userData.active ? 'Online' : "Offline" ;
baliseDiv.append(baliseActive);


baliseDiv.style.color = "white";
baliseDiv.style.background = "linear-gradient(#e66465, #9198e5)";
baliseDiv.style.width = "500px";
baliseDiv.style.padding = '20px'
baliseDiv.style.margin= 'auto';
baliseImg.style.width = '500px';
baliseImg.style.margin= 'auto';

