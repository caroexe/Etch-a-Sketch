const container = document.querySelector('#container');

function createGrid () {

    for (let i=0; i < 16; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        container.appendChild(row);

        for (let j=0; j < 16; j++) {
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

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}