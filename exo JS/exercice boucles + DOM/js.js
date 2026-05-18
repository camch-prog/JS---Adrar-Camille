let lesTxt = document.getElementsByTagName("p");

console.log(lesTxt);
let textesTab = Array.from(lesTxt);

console.log(textesTab);

textesTab.map((nimporte)=>nimporte.innerHTML = "Hello i'm an Hacker")
