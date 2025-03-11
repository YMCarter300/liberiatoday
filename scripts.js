// scripts.js
// Toggle mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function subscribeToCategory(category) {
    // Simulate a subscription request to the server
    console.log(`Subscribing to ${category} updates...`);
  
    // Example: Send a request to the server to subscribe the user
    fetch(`/subscribe?category=${category}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category: category }),
    })
      .then(response => response.json())
      .then(data => {
        alert(`You are now subscribed to ${category} updates!`);
      })
      .catch(error => {
        console.error('Error subscribing:', error);
        alert('Failed to subscribe. Please try again later.');
      });
  }

