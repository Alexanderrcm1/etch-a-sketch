document.addEventListener("DOMContentLoaded", function () {
    createContainer(16);
});


function createContainer(size){

    let container = document.querySelector(".container")

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        container.insertAdjacentElement("beforeend", div)
    }
}

