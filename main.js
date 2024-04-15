document.addEventListener("DOMContentLoaded", function () {
    createContainer(16);

    let button_popup = document.querySelector("#popup");
    button_popup.addEventListener("click", function () {
        let size = getSize();
        createContainer(size);
        let divs = document.querySelectorAll("div");
        divs.forEach((div) => div.style.backgroundColor = "white");
    })
});


function createContainer(size){

    let container = document.querySelector(".container")

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", function () {
            div.style.backgroundColor = "black"
        })
        container.insertAdjacentElement("beforeend", div)
    }
}

function getSize () {
    let input = prompt("Grid Size?");

    let message = document.querySelector("#message");
    if (input == "") {
        message.innerHTML = "Please enter a number"
    }
    else if (input < 1 || input > 100) {
        message.innerHTML = "Please enter a number between 1 and 100"
    }
    else {
        message.innerHTML = "Lets go!"
        return input;
    }
}

