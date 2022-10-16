window.addEventListener('DOMContentLoaded', function() {
const titleInput = document.getElementById("title-input");
const ageInput = document.getElementById("age-input");
const travelContainer =document.getElementsByClassName("modal-footer")
const button1 = document.getElementById("guarda");
const Principio = document.getElementById("Principio");
console.log("hola")

const title = titleInput.value;
const age = ageInput.value;

console.log(title)
console.log(age)

button1.addEventListener("click", function (event) {
    
    event.preventDefault();

    const title = titleInput.value;
    const age = ageInput.value;
    let txt= "We are a collection that seeks to enter the consumer's senses, filling spaces with sound and making digital environments that will take you "+title+" on a journey through your senses and in your  "+age+" years of life you will have a new experience in NFT world and sounds"
    
    if (title !== "" && age !== "") {
    Principio.innerHTML=txt
    }
    else{
        console.log("hey pone algo");
    }
  
});
});