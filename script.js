const container = document.querySelector('#container');
const createGridButton = document.querySelector('#create-grid-button');
const resetGridButton = document.querySelector('#reset-grid-button');

let standardGridColor = "white";

createGridButton.addEventListener("click", () => {
    let gridSize = prompt("Grid Size? (max size 100)");
    if(gridSize > 100) {
        alert("Too large!");
        return;
    }

    createGrid(gridSize);
});

resetGridButton.addEventListener("click", () => {
    const box = document.querySelectorAll('.grid');
    box.forEach(function(myBox){
        myBox.style.backgroundColor = `${standardGridColor}`;
    }); 
});


function createGrid (gridSize) {

    removeGrid();

    let sizeOfDiv =960/gridSize;

    for (let i=0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        container.appendChild(row);

        for (let j=0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.className = 'grid';
            square.style.width =  `${sizeOfDiv}px`;
            square.style.height =  `${sizeOfDiv}px`;
            row.appendChild(square);
        }
    }

    

    const box = document.querySelectorAll('.grid');

    box.forEach(function(myBox) {
        myBox.addEventListener('mouseover', function(e) {
            var color = random_rgba();
            e.target.style.backgroundColor = color;
        });
    });

}



function removeGrid() {
    const element = document.querySelectorAll('.row');

    element.forEach(function(row) {
        row.remove();
    });
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}