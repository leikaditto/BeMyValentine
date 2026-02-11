const bodyEl = document.body
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const card = document.getElementById("card");
const envelopeBox = document.getElementById("envelopeContainer");
const envelope = document.getElementById("envelope");

function createHeart(x, y, driftX = 0, driftY = -200, big = false) {
    const heart = document.createElement("span");
    
    const size = big ? Math.random() * 40 + 40 : Math.random() * 30 + 20;

    heart.style.width = size + "px";
    heart.style.height = size + "px";

    heart.style.left = x + "px";
    heart.style.top = y + "px";

    heart.style.setProperty("--x-drift", driftX + "px");
    heart.style.setProperty("--y-drift", driftY + "px");

    bodyEl.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
};

// Mouse trail
bodyEl.addEventListener("mousemove", (e) => {
    createHeart(e.clientX, e.clientY, (Math.random() - 0.5) * 120);
});


// Music toggle
musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "🔊";
    } else {
        music.pause();
        musicBtn.textContent = "🔇";
    }
});

// Card button
yesBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "🔊";
    }
    createConfetti();
    card.style.opacity = "0";

    setTimeout(() => {
        card.style.display = "none";
        envelopeBox.style.display = "flex";
    }, 500);
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Confetti function
function createConfetti() {
    const colors = ["#ff4d6d", "#ff85a2", "#ffd6e0", "#ffffff", "#ff8fab"];

    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        const x = (Math.random() - 0.5) * 600 + "px";
        const y = (Math.random() - 0.5) * 600 + "px";

        confetti.style.setProperty("--x", x);
        confetti.style.setProperty("--y", y);

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 1200);
    }
};

// Open letter when envelope is tapped
envelope.addEventListener("click", () => {
    envelope.classList.toggle("open");
});