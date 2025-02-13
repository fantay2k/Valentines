// Function to generate floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 4 + 6 + "s"; // Between 6-10s for slower movement
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 10000); // Hearts stay visible longer
}

// Create a heart every 700ms (slightly slower)
setInterval(createHeart, 700);

// Keep the existing functions for interactions
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
