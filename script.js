function openEnvelope() {
  const container = document.querySelector(".envelope-container");
  const message = document.querySelector(".message");
  const openBtn = document.querySelector(".open-btn");

  if (!container.classList.contains("open")) {
    container.classList.add("open");
    message.classList.add("open");
    openBtn.style.display = "none";
  }
}

function showResponse(response) {
  const paper = document.querySelector(".paper");
  const responseDiv = document.querySelector(".response");
  const responseImage = document.querySelector(".response-image");
  const effectsContainer = document.getElementById("effectsContainer");

  // Hide paper and show response
  paper.style.display = "none";
  responseDiv.style.display = "flex";

  // Set random image
  const randomImage = "./assets/kilig.png";
  responseImage.src = randomImage;

  // Apply shaking effect to the image
  responseImage.classList.add("shake");

  // Add party poppers and hearts
  effectsContainer.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    // Hearts
    const heart = document.createElement("div");
    heart.innerHTML = "❤";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    effectsContainer.appendChild(heart);
  }
}

function closeEnvelope() {
  const container = document.querySelector(".envelope-container");
  const message = document.querySelector(".message");
  const openBtn = document.querySelector(".open-btn");
  const paper = document.querySelector(".paper");
  const responseDiv = document.querySelector(".response");
  const effectsContainer = document.getElementById("effectsContainer");

  container.classList.remove("open");
  message.classList.remove("open");
  paper.style.display = "flex";
  responseDiv.style.display = "none";
  effectsContainer.innerHTML = "";
  openBtn.style.display = "block";
}
