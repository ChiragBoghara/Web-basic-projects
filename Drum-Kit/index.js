var noOfDrumButtons = document.querySelectorAll(".drum").length;

//  Detecting Button Press
for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});

//  Detecting KeyBoard Press

function makeSound(key) {
  var audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "l":
      audio = new Audio("sounds/crash.mp3");
      break;
    default:
      return;
  }
  audio.play();
}

function buttonAnimation(data) {
  document.querySelector("." + data).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + data).classList.remove("pressed");
  }, 100);
}
