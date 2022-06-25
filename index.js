let stopButton = document.getElementById("stopButton");
let stopLight = document.getElementById("stopLight");
let slowButton = document.getElementById("slowButton");
let slowLight = document.getElementById("slowLight");
let goButton = document.getElementById("goButton");
let goLight = document.getElementById("goLight");

//main listeners for bulb colors
stopButton.addEventListener("click", () => {
  stopLight.classList.toggle("stop");
});

slowButton.addEventListener("click", () => {
  slowLight.classList.toggle("slow");
});

goButton.addEventListener("click", () => {
  goLight.classList.toggle("go");
});

//logs mouse state per button
[stopButton, slowButton, goButton].forEach((button) => {
  button.addEventListener("mouseenter", () => {
    console.log(`Entered ${button.innerText} button`);
  });
  button.addEventListener("mouseleave", () => {
    console.log(`Left ${button.innerText} button`);
  });
});

[stopButton, slowButton, goButton].forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    if (goLight.classList.value === "bulb" && button.id === "goButton") {
      console.log(`${button.innerText} off`);
    } else if (goLight.classList.value !== "bulb" && button.id === "goButton") {
      console.log(`${button.innerText} on`);
    }
    if (slowLight.classList.value === "bulb" && button.id === "slowButton") {
      console.log(`${button.innerText} off`);
    } else if (
      slowLight.classList.value !== "bulb" &&
      button.id === "slowButton"
    ) {
      console.log(`${button.innerText} on`);
    }
    if (stopLight.classList.value === "bulb" && button.id === "stopButton") {
      console.log(`${button.innerText} off`);
    } else if (
      stopLight.classList.value !== "bulb" &&
      button.id === "stopButton"
    ) {
      console.log(`${button.innerText} on`);
    }
  });
});
