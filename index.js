//adding event listeners for buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(event){
        playSound(event.target.innerHTML);
        buttonAnimation(event.target.innerHTML);
    })
}

//keyboard press
document.addEventListener("keypress", function(event){
    
    playSound(event.key);
    buttonAnimation(event.key);

} )

//plays sound
function playSound(buttonKey){

    switch (buttonKey) {

        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        
        case "a":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "d":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        default:
            break;
    }

}

//animate clicks/button presses
function buttonAnimation(currKey){

    var activeButton = document.querySelector("." + currKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");

    }, 100);

}



