// Get all the FAQ questions
const faqQuestions = document.querySelectorAll('#faq h3');

// Add event listener to each question
faqQuestions.forEach(question => {
  question.addEventListener('click', function () {
    // Toggle the display of the answer (next sibling element)
    const answer = question.nextElementSibling;
    
    // Toggle the answer visibility
    if (answer.style.display === 'block') {
      answer.style.display = 'none';  // Hide answer
    } else {
      answer.style.display = 'block'; // Show answer
    }
  });
});

// Simple testimonial slider
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('#testimonials .testimonial');

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = (i === index) ? 'block' : 'none';
  });
}

setInterval(() => {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  showTestimonial(testimonialIndex);
}, 1500); // Change testimonial every 1.5 seconds
// JavaScript to handle form submission and show a notification
document.getElementById('service-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Show success notification
    var notification = document.getElementById('notification');
    notification.textContent = "Your service request has been successfully submitted!";
    notification.style.display = "block";
    
    // Optionally, reset the form
    document.getElementById('service-form').reset();
    
    // Optional: You can add a timeout to hide the notification after a few seconds
    setTimeout(function() {
      notification.style.display = "none";
    }, 5000); // Hide the notification after 5 seconds
  });
  