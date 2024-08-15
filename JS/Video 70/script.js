function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random value for red (0-255)
    const g = Math.floor(Math.random() * 256); // Random value for green (0-255)
    const b = Math.floor(Math.random() * 256); // Random value for blue (0-255)
    return `rgb(${r}, ${g}, ${b})`; // Construct the RGB color string
}

function changeBackgroundColor(id) {
    const randomColor = getRandomColor(); // Get a random color
    document.getElementById(id).style.backgroundColor = randomColor; // Set the background color
    // document.getElementById(id).textContent = `Background Color: ${randomColor}`; // Update the text with the current color
}

// Randomising All boxes colors........
for(let i=0;i<5;i++){
    changeBackgroundColor(`box${i+1}`)
}
// document.body.style.backgroundColor=getRandomColor();