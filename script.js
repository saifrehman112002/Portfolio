// Assuming EmailJS is already included or imported

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    // Replace these with your service ID, template ID, and user ID
    const serviceID = 'service_1hdeoak';
    const templateID = 'template_eqbdyhi';
    // const userID = 'YOUR_USER_ID'; // EmailJS user ID if not already initialized
  
    // Send the email
    emailjs.sendForm(serviceID, templateID, this)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Your message has been sent!');
      }, (error) => {
        console.error('Error sending email:', error.text);
        alert('There was an error sending your message.');
      });
  });


menu = document.querySelector('.menu i');
navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
};

document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = {
        Languages: document.getElementById("Languages"),
        Technology: document.getElementById("Technology"),
        Others: document.getElementById("Others"),
    };

    const aboutButtons = document.querySelectorAll(".right-div .navbar .drop li a");

    aboutButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const sectionId = button.getAttribute("data-section");

            // Show the selected section and hide others
            for (let section in aboutSection) {
                if (section === sectionId) {
                    aboutSection[section].style.display = "block";
                } else {
                    aboutSection[section].style.display = "none";
                }
            }

            // Remove active class from all buttons
            aboutButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            // Add active class to the clicked button
            button.classList.add("active");
        });
    });

    // Initially show the Languages section and hide the others
    aboutSection.Languages.style.display = "block";
    aboutSection.Technology.style.display = "none";
    aboutSection.Others.style.display = "none";

    // Initially set the first button (Languages) as active
    aboutButtons[0].classList.add("active");
});
