const container = document.querySelector('#container');


function createGrid (gridSize) {

    for (let i=0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        container.appendChild(row);

        for (let j=0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.className = 'grid';
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