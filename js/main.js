// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Navigation Bar
// const navbar = document.querySelector('nav');
// const sticky = navbar.offsetTop;

// window.onscroll = function() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add('sticky');
//     } else {
//         navbar.classList.remove('sticky');
//     }
// };

// Scroll Animations (Fade In Effect)
const sections = document.querySelectorAll('.fade-in');

function reveal() {
    for (let section of sections) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);
reveal(); // Check on page load

// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.classList.add('scroll-to-top');
scrollToTopButton.innerHTML = '&#8593;'; // Up arrow
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});




// document.getElementById("email-form").addEventListener("submit", function (event) {
//     event.preventDefault();
  
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;
//     const formStatus = document.getElementById("form-status");
  
//     // Basic Validation
//     if (name === "" || email === "" || message === "") {
//       formStatus.style.display = "block";
//       formStatus.style.color = "red";
//       formStatus.textContent = "Please fill out all fields.";
//       return;
//     }
  
//     // Simulate Sending Email
//     formStatus.style.display = "block";
//     formStatus.style.color = "#ff274b";
//     formStatus.textContent = "Sending message...";
  
//     setTimeout(() => {
//       formStatus.textContent = "Message sent successfully!";
//       formStatus.style.color = "#28a745";
//       document.getElementById("email-form").reset();
//     }, 2000); // Simulate a 2-second delay
//   });
  
  
// CEO Data Array
const ceos = [
  {
    name: "A.Oussema",
    title: "Founder & CEO",
    bio: "A.Oussema has over 4 years of experience in leading teams and driving innovation in the tec industry",
    photo: "https://scontent.fblj1-2.fna.fbcdn.net/v/t39.30808-6/291867751_1695596404127175_7444971540837050566_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=ZdGzTjWDl0EQ7kNvgFWb-Y2&_nc_zt=23&_nc_ht=scontent.fblj1-2.fna&_nc_gid=AZN8jd1tCC3wtQOb6xmEm0f&oh=00_AYCHm7PpGCaHCgm3pIJToXPMNNTzhdkl2r90BHEAqmY1Rw&oe=674E7E14",
  },
  {
    name: "S.Ahmed",
    title: "Co-Founder & COO",
    bio: "S.Ahmed specializes in operations and ensuring seamless integration of processes across all departments have over 5 yeaes of experience.",
    photo: "https://media-pmo1-1.cdn.whatsapp.net/v/t61.24694-24/413635067_1156904978872096_6827170325202714975_n.jpg?ccb=11-4&oh=01_Q5AaIBJnT76CurP49DHA1zS2Z1EV0gcaz9BPDidIAHiPdyvy&oe=67559A88&_nc_sid=5e03e0&_nc_cat=107",
  },
  
];

// DOM Elements
const ceoName = document.getElementById("ceo-name");
const ceoTitle = document.getElementById("ceo-title");
const ceoBio = document.getElementById("ceo-bio");
const ceoPhoto = document.getElementById("ceo-photo");
const ceoButtons = document.querySelectorAll(".ceo-btn");

// Function to Update CEO Profile
function showCeo(index) {
  if (index >= 0 && index < ceos.length) {
    // Update content
    ceoName.textContent = ceos[index].name;
    ceoTitle.textContent = ceos[index].title;
    ceoBio.textContent = ceos[index].bio;
    ceoPhoto.src = ceos[index].photo;
    ceoPhoto.alt = `${ceos[index].name}'s photo`;

    // Highlight the active button
    ceoButtons.forEach((btn, i) => {
      btn.style.backgroundColor = i === index ? "#ff274b" : "#22282a";
    });
  } else {
    console.error("Invalid CEO index:", index);
  }
}

// Initialize with the first CEO
showCeo(0);

// Add event listeners to buttons
ceoButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    showCeo(index);
  });
});





document.querySelectorAll('.select-plan').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.pricing-card').forEach(card => {
      card.classList.remove('active');
    });
    button.closest('.pricing-card').classList.add('active');
    alert(`You selected the ${button.closest('.pricing-card').querySelector('.plan-title').textContent} plan!`);
  });
});

// Select all pricing cards
const pricingCards = document.querySelectorAll('.pricing-card');

// Add click event to each card
pricingCards.forEach((card) => {
  card.addEventListener('click', () => {
    // Remove 'active' class from all cards
    pricingCards.forEach((c) => c.classList.remove('active'));

    // Add 'active' class to the clicked card
    card.classList.add('active');
  });
});




(function() {
  emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const formResponse = document.getElementById("formResponse");
  formResponse.textContent = "Sending...";

  emailjs.sendForm("service_eyhy36x", "template_piv2ukl", this)
    .then(() => {
      formResponse.textContent = "Message sent successfully!";
      this.reset(); // Reset the form fields
    })
    .catch(() => {
      formResponse.textContent = "Failed to send the message. Please try again later.";
    });
});


document.getElementById('hamburger').addEventListener('click', function () {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
});
