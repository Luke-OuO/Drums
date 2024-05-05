let drumButtons = document.querySelectorAll("#button_container > button");
let getStarted = false;
let spaceRoll = false;
let audio;
let keyWords = ["w", "a", "s", "d", "j", "k", "l"];
let drumSet = {
  w: {
    sound: new Audio("sounds/crash.mp3"),
  },
  a: {
    sound: new Audio("sounds/kick-bass.mp3"),
  },
  s: {
    sound: new Audio("sounds/snare.mp3"),
  },
  d: {
    sound: new Audio("sounds/tom-1.mp3"),
  },
  j: {
    sound: new Audio("sounds/tom-2.mp3"),
  },
  k: {
    sound: new Audio("sounds/tom-3.mp3"),
  },
  l: {
    sound: new Audio("sounds/tom-4.mp3"),
  },
  y: {
    sound: new Audio("sounds/YKey.mp3"),
  },
  notakey: {
    sound: new Audio("sounds/wrongKey.mp3"),
  },
  space: {
    sound: new Audio("sounds/spaceTune.mp3"),
  },
  z: {
    sound: new Audio("sounds/animeGirl.mp3"),
  },
};

// To make the sound play immediately upon clicking the button again,
// you need to handle the playback logic.

function playSoundAgent(key) {
  if (key != "space" && spaceRoll) {
    spaceRoll = false;
    drumSet.space.sound.pause(); // Pause the space audio
  }

  audio = drumSet[key].sound;
  audio.currentTime = 0; // Reset playback position to the beginning
  if (key == "z") {
    audio.currentTime = 1.4;
  }

  audio.play();
}

function blinkFunc(event) {
  event.target.classList.add("blinking"); // Adding the (blinking Css) to the element
  //   letting the effect run for 1s and removing it immediately
  setTimeout(() => {
    event.target.classList.remove("blinking");
  }, 500);
}

function getStartedfunc() {
  document.getElementById("btn_getStarted").style.display = "none";
  getStarted = true; // toggle.

  drumButtons.forEach((button) => {
    button.removeAttribute("disabled");
    button.style.opacity = "100%";
    // for clicking with the mouse.
    button.addEventListener("click", (event) => {
      event.preventDefault();
      blinkFunc(event); // blink
      playSoundAgent(event.target.textContent);
    });
  });

  if (getStarted) {
    // for key pressing down.
    window.addEventListener("keydown", (event) => {
      if (keyWords.includes(event.key)) {
        switch (event.key) {
          // triggering the button to click ==> so you can acheive the blink effect
          case "w":
            {
              drumButtons[0].click();
            }
            break;
          case "a":
            {
              drumButtons[1].click();
            }
            break;
          case "s":
            {
              drumButtons[2].click();
            }
            break;
          case "d":
            {
              drumButtons[3].click();
            }
            break;
          case "j":
            {
              drumButtons[4].click();
            }
            break;
          case "k":
            {
              drumButtons[5].click();
            }
            break;
          case "l":
            {
              drumButtons[6].click();
            }
            break;
        }
        playSoundAgent(event.key);
      } else if (event.key == "y") {
        playSoundAgent("y");
      } else if (event.key == " ") {
        spaceRoll = true;
        playSoundAgent("space");
      } else if (event.key == "z") {
        playSoundAgent("z");
      } else {
        playSoundAgent("notakey");
      }
    });
  }
}

document
  .getElementById("btn_getStarted")
  .addEventListener("click", getStartedfunc);
