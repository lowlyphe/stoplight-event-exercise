let stopButton = document.getElementById("stopButton");
let stopLight = document.getElementById("stopLight");
let slowButton = document.getElementById("slowButton");
let slowLight = document.getElementById("slowLight");
let goButton = document.getElementById("goButton");
let goLight = document.getElementById("goLight");

//main listeners for bulb colors
stopButton.addEventListener("click", () => {
  if (stopLight.style.backgroundColor !== "red") {
    stopLight.style.backgroundColor = "red";
  } else {
    stopLight.style.backgroundColor = "#111";
  }
});

slowButton.addEventListener("click", () => {
  if (slowLight.style.backgroundColor !== "yellow") {
    slowLight.style.backgroundColor = "yellow";
  } else {
    slowLight.style.backgroundColor = "#111";
  }
});

goButton.addEventListener("click", () => {
  if (goLight.style.backgroundColor !== "green") {
    goLight.style.backgroundColor = "green";
  } else {
    goLight.style.backgroundColor = "#111";
  }
});

//logs mouse state per button
stopButton.addEventListener("mouseleave", () => {
  console.log("Left stop button");
});

stopButton.addEventListener("mouseenter", () => {
  console.log("Entered stop button");
});

slowButton.addEventListener("mouseleave", () => {
  console.log("Left slow button");
});

slowButton.addEventListener("mouseenter", () => {
  console.log("Entered slow button");
});

goButton.addEventListener("mouseleave", () => {
  console.log("Left go button");
});

goButton.addEventListener("mouseenter", () => {
  console.log("Entered go button");
});

//logs bulb state
stopButton.addEventListener("click", () => {
  if (stopLight.style.backgroundColor !== "red") {
    console.log("stop bulb off");
  } else {
    console.log("stop bulb on");
  }
});

slowButton.addEventListener("click", () => {
  if (slowLight.style.backgroundColor !== "yellow") {
    console.log("slow bulb off");
  } else {
    console.log("slow bulb on");
  }
});

goButton.addEventListener("click", () => {
  if (goLight.style.backgroundColor !== "green") {
    console.log("go bulb off");
  } else {
    console.log("go bulb on");
  }
});
