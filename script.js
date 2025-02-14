// Function to generate floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.body.appendChild(heart);
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 4 + 6 + "s"; // Random duration between 6-10s
    heart.style.width = heart.style.height = Math.random() * 20 + 10 + "px"; // Random heart size

    setTimeout(() => {
        heart.remove();
    }, 10000); // Remove after animation ends
}

// Generate a heart every 500ms
setInterval(createHeart, 500);

// Function for name input
function checkName() {
    let name = document.getElementById('nameInput').value.trim();
    if (name.toLowerCase() === 'jenny') {
        document.getElementById('content').innerHTML = `
            <h2>Em đỡ đau bụng chưa?</h2>
            <input type="text" id="stomachInput" placeholder="Type anything">
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
