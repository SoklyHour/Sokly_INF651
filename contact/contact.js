// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Select the form element
    const form = document.querySelector('form');
    
    // Create a div for the notification message
    const notification = document.createElement('div');
    notification.id = 'notification';
    notification.style.display = 'none'; // Initially hidden
    notification.style.position = 'fixed'; // Fixed position
    notification.style.top = '20px'; // Space from the top of the page
    notification.style.left = '50%'; // Center horizontally
    notification.style.transform = 'translateX(-50%)'; // Adjust to exactly center
    notification.style.padding = '15px';
    notification.style.backgroundColor = '#4CAF50';
    notification.style.color = 'white';
    notification.style.borderRadius = '5px';
    notification.style.fontSize = '16px';
    notification.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    notification.style.transition = 'opacity 0.5s ease-in-out'; // Smooth transition
    notification.style.zIndex = '9999'; // Make sure it's in front of other content
    document.body.appendChild(notification);
  
    // Add an event listener for the form submission
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting to the server
      
      // Get the form input values for display purposes
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
  
  
      // Display a custom notification message using template literals for proper string interpolation
      notification.style.display = 'block'; // Show the notification
      notification.textContent = `Thank you, ${name}! Your message has been submitted. 
      We will get back to you at ${email} as soon as possible.`;
  
      // Optionally, reset the form fields after submission
      form.reset();
  
      // Hide the notification after 5 seconds with fade out
      setTimeout(() => {
        notification.style.opacity = '0'; // Fade out
      }, 3000); // Start fade-out after 3 seconds
  
      // Completely hide after 5 seconds
      setTimeout(() => {
        notification.style.display = 'none';
        notification.style.opacity = '1'; // Reset opacity for next use
      }, 4000); // Hide after 4 seconds
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Select all FAQ question headings
    const faqQuestions = document.querySelectorAll('.faq-question');
  
    // Loop through each question and add a click event listener
    faqQuestions.forEach(function(question) {
      question.addEventListener('click', function() {
        const answer = this.nextElementSibling; // Get the associated answer
  
        // Toggle the visibility of the answer
        if (answer.style.display === 'block') {
          answer.style.display = 'none'; // Hide the answer if it's already visible
        } else {
          answer.style.display = 'block'; // Show the answer if it's hidden
        }
      });
    });
  });
  