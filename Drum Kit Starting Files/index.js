// Detects the clicks
var allButtons = document.querySelectorAll(".drum");
for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

// Detects the keypressed
document.addEventListener('keypress', function(){
    makeSound(event.key);    
});

// Plays sound based on keys or clicks
function makeSound(key) {
    switch(key) {
            case 'w':
                var audio1 = new Audio("./sounds/crash.mp3");
                audio1.play();
                break;
            case 'a':
                var audio1 = new Audio("./sounds/kick-bass.mp3");
                audio1.play();
                break;
            case 's':
                var audio1 = new Audio("./sounds/snare.mp3");
                audio1.play();
                break;
            case 'd':
                var audio1 = new Audio("./sounds/tom-1.mp3");
                audio1.play();
                break;
            case 'j':
                var audio1 = new Audio("./sounds/tom-2.mp3");
                audio1.play();
                break;
            case 'k':
                var audio1 = new Audio("./sounds/tom-3.mp3");
                audio1.play();
                break;
            case 'l':
                var audio1 = new Audio("./sounds/tom-4.mp3");
                audio1.play();
                break;

            default:
                console.log("Switch case gone wrong");
                break;
        }
}

