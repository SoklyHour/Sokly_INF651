// Select DOM elements
const nameInput = document.getElementById('nameInput');
const submitButton = document.getElementById('submitButton');
const outputDiv = document.getElementById('outputDiv');
const mouseTracker = document.getElementById('mouseTracker');
const coordinatesDiv = document.getElementById('coordinates');

// Function to handle form submission
function handleSubmit() {
  const name = nameInput.value.trim(); // Trim whitespace to ensure no empty spaces
  if (name) {
    outputDiv.textContent = `Welcome, ${name}!`; 
    outputDiv.style.backgroundColor = 'green'; 
    outputDiv.classList.remove('error'); 
  } else {
    outputDiv.textContent = 'Error: Please enter a name.';
    outputDiv.style.backgroundColor = 'red'; 
    outputDiv.classList.add('error'); 
  }
}

// Add click event listener for submit button
submitButton.addEventListener('click', handleSubmit);

// Add keydown event listener to trigger submission on Enter key
nameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent default form submission
    handleSubmit(); // Trigger the submit function
  }
});

// Add mousemove event listener to track mouse movements
mouseTracker.addEventListener('mousemove', (event) => {
  const x = Math.round(event.clientX - mouseTracker.offsetLeft); // Calculate X coordinate
  const y = Math.round(event.clientY - mouseTracker.offsetTop);  // Calculate Y coordinate
  coordinatesDiv.textContent = `Mouse Coordinates: X: ${x}, Y: ${y}`;
});
