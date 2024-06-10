// HIDE/SHOW PROGRAM

// Visibility >> hidden or visible -- Reserva um espaço para a imagem.
// Display >> none or block -- Não reserva um espaço para a imagem.

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {
    
    if (myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myButton.textContent = "Hide";
    } else{
        myImg.style.visibility = "hidden";
        myButton.textContent = "Show";
    }
})