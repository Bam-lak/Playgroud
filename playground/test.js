var shape = document.getElementById('shape');
var start = new Date().getTime();
var time = document.getElementById('score');
var fast = document.getElementById('fast');
var fastest = 100;
var startGame = document.getElementById("start-game");

startGame.addEventListener('click', displaybox);

function displaybox() {
    shape.style.display = 'block';

    start = new Date().getTime();
}



shape.addEventListener('click', function() {
    shape.style.display = 'none';
    var end = new Date().getTime();
    var score = end - start;
    var timeTaken = score / 1000;
    time.innerHTML = timeTaken + 's';

    if(timeTaken < fastest){
        fastest = timeTaken;
        fast.innerHTML = 'Highest Score:' + fastest + 's';
    }

    // lengths for different shapes
    var lengthForBox = Math.floor(20 + Math.random() * 500);
    var radiusForCircle = Math.floor(Math.random() * 2);
    
    randomShape(lengthForBox, radiusForCircle);
    
    var positionOfShape = Math.floor(Math.random() * 200);
    randomPosition(positionOfShape);
    var colorPick = randomColor();
    shape.style.backgroundColor = colorPick;
    setTimeout(displaybox, 1000);
});

// generate random position
function randomPosition(position) {
    shape.style.left = position + 'px';
    shape.style.top = position + 'px';
}

// generate random shape
function randomShape(box, circle) {
    if (circle == 0) {
        shape.style.borderRadius = '50%';
    }
    else {
        shape.style.borderRadius = '0';
        shape.style.width = box + 'px';
        shape.style.height = box + 'px';
    }
}

// generate random color
function randomColor() {
    var letter = '01234556789ABCDEF'.split('');
    var color = '#';
    for(var i = 0; i < 6; i++){
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}

