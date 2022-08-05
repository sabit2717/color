const button = document.getElementById("btn");
const color = document.querySelector(".color")

const colors = ["#ff5733","#f9ff33", "#3371ff", "red", "green"]

button.addEventListener("click", ()=>{
    let hexcolor = colors[getRandomNumber()]
    document.body.style.backgroundColor = hexcolor;
    color.textContent = hexcolor
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}