let input = document.getElementById('text');

input.addEventListener("focus",()=>{
    input.style.background='blue';
    input.style.color='white';
}
)
input.addEventListener("blur", () => {
    input.style.background = "inherit";
    input.style.color ="inherit";
});