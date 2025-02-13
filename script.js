function checkName() {
    let name = document.getElementById('nameInput').value.trim();
    if (name.toLowerCase() === 'jenny') {
        document.body.style.backgroundColor = "#ff3366";
        document.getElementById('content').innerHTML = `
            <h2>Do you wanna be my Valentine? - Hau</h2>
            <button onclick="finalMessage()">Yes</button>
            <button onclick="finalMessage()">Yes</button>
        `;
    }
}

function finalMessage() {
    document.getElementById('content').innerHTML = `
        <h2>There might be something waiting for you, why don't you ask your concierge?</h2>
    `;
}
