// Success message after user submits the contact form
function handleFormSubmit(event) { // Defines the function
    event.preventDefault();  // Tells HTML to not refresh the page after the form is submitted
    
    const nameInput = document.querySelector('input[name="name"]').value; // Saves the user's name input into a variable
    const form = document.getElementById('contact'); // Gets the form element by its ID
    
    form.innerHTML = `<h2>Thank You, ${nameInput}!</h2><p>Your message has been sent successfully!</p>`; // Thank you message + Deletes previously entered information
    form.style.textAlign = 'center'; // Centers a thank you message
    form.style.padding = '4rem 2rem'; // Invisible space around the thank you message
}

// Success message after user submits the contact form
const contactForm = document.getElementById('contact'); // Gets the contact form element by its ID
if (contactForm) { // Checks if the contact form exists on the page
    contactForm.addEventListener('submit', handleFormSubmit); // Adds an event listener to the contact form that listens for a 'submit' event and calls the handleFormSubmit function when the form is submitted
}


// Projects pop out if clicked on
function toggleProjectHighlight(event) { // Event listener function that toggles the highlight of a project card
    const projectCard = event.currentTarget; // Gets the project card that was clicked on
    
    if (projectCard.style.backgroundColor === 'rgb(240, 248, 255)') { // Checks if the project card is already highlighted
        projectCard.style.backgroundColor = 'white'; // Resets the background color to white
        projectCard.style.transform = 'scale(1)'; // Resets the scale to normal
    } else {
        projectCard.style.backgroundColor = 'aliceblue'; // Changes the background color to a light blue
        projectCard.style.transform = 'scale(1.02)'; // Scales the project card up slightly
        projectCard.style.transition = 'all 0.3s ease'; // Smooth transition effect for the scaling and background color change
    }
}

// Triggers the toggleProjectHighlight function when a project card is clicked
const projectCards = document.querySelectorAll('.project'); // Gets all project cards
projectCards.forEach(card => { // Iterates through each project card
    card.style.cursor = 'pointer'; // Changes the cursor to a pointer when hovering over a project card
    card.addEventListener('click', toggleProjectHighlight); // If specific card gets clicked, runs the toggleProjectHighlight function
});