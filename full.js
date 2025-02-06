// JavaScript to toggle the menu in responsive design
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const dropdown = document.querySelector('.dropdown');
  
    // Toggle menu visibility
    document.querySelector('.logo').addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Handle dropdown hover for mobile
    dropdown.addEventListener('mouseenter', () => {
      dropdown.querySelector('.dropdown-content').style.display = 'block';
    });
  
    dropdown.addEventListener('mouseleave', () => {
      dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
  
    // Toggle menu visibility on click
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
  
        // Add active class to the clicked link
        link.classList.add('active');
      });
    });
 });


  