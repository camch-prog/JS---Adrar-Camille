const userData = {
    name: 'John delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
};

const baliseDiv = document.getElementsByClassName('userProfile')
const baliseArray = Array.from(baliseDiv);
const baliseImg = document.createElement("img");
baliseImg.setAttribute("src", userData.img );
baliseArray[0].appendChild(baliseImg);
baliseArray[0].append(userData.name);
baliseArray[0].append(userData.email);
baliseArray[0].append(userData.age);
baliseArray[0].append(userData.dob);
baliseArray[0].append(userData.active);




