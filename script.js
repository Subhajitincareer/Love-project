const startBtn = document.getElementById("start-btn");
const nameInput = document.getElementById("name-input");
const nameSection = document.getElementById("name-section");
const gameSection = document.getElementById("game-section");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const message = document.getElementById("message");
const h1= document.querySelector('h1')

let userName = "";


// Start button click event
startBtn.addEventListener("click", () => {
  userName = nameInput.value.trim(); // Get the name from input
  if (userName === "") {
    alert("Please enter your name!");
  } else {
     h1.style.display="none";
    nameSection.style.display = "none";
    gameSection.style.display = "block";
  }
});

// "Yes" button click event
yesBtn.addEventListener("click", () => {
  message.textContent =`I love you too, ${userName}!`;
  yesBtn.disabled = true; // Disable the Yes button
  noBtn.style.display = "none"; // Hide the No button
  setTimeout(() => {
    location.reload(); // Reload the page after 3 seconds
  }, 3000);
});

// "No" button hover event
noBtn.addEventListener("mouseover", () => {
  const screenwidth=window.innerWidth;
  const screenheight=window.innerHeight;

  const randomX =
    Math.random() * (screenwidth- noBtn.offsetWidth);
  const randomY =
    Math.random() * (screenheight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

noBtn.addEventListener("click", (event)=>{
    event.preventDefault();
alert(" you can't click me !")
})

window.onbeforeunload=function(e){   e.preventDefault();
    e.returnValue='';}
 
