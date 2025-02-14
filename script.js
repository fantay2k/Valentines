document.addEventListener("DOMContentLoaded", function () {
    generateHearts();
});

function generateHearts() {
    const numHearts = 20; // Number of hearts
    for (let i = 0; i < numHearts; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    heart.style.animationDuration = `${4 + Math.random() * 3}s`; // Random float speed

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove(); // Remove heart after animation completes
        createHeart(); // Replace with a new heart
    }, 7000);
}

// Interactive Questions
function checkName() {
    let name = document.getElementById('nameInput').value.trim();
    if (name.toLowerCase() === 'jenny') {
        document.getElementById('content').innerHTML = `
            <h2>Em đỡ đau bụng chưa?</h2>
            <input type="text" id="answerInput" placeholder="Type anything">
            <button onclick="nextQuestion()">Submit</button>
        `;
    }
}

function nextQuestion() {
    document.getElementById('content').innerHTML = `
        <h2>Who do you choose to ask you to be their Valentine?</h2>
        <button onclick="finalQuestion()">Hau</button>
        <button onclick="finalQuestion()">Nguyen Minh Hau</button>
        <button onclick="finalQuestion()">Me</button>
    `;
}

function finalQuestion() {
    document.getElementById('content').innerHTML = `
        <h2>Will you be my Valentine?</h2>
        <button onclick="finalMessage()">Yes</button>
        <button onclick="finalMessage()">Yes</button>
    `;
}

function finalMessage() {
    document.getElementById('content').innerHTML = `
        <h2>There might be something waiting for you, why don't you ask your concierge?</h2>
    `;
}
