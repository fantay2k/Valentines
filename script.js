// Function to generate floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Between 3-5s
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create a heart every 500ms
setInterval(createHeart, 500);

// Keep the existing functions for interactions
function checkName() {
    let name = document.getElementById('nameInput').value.trim();
    if (name.toLowerCase() === 'jenny') {
        document.getElementById('content').innerHTML = `
            <h2>Em đỡ đau bụng chưa?</h2>
            <button onclick="nextQuestion()">Có</button>
            <button onclick="nextQuestion()">Chưa</button>
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
