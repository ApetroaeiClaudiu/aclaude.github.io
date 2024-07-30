const toggleSwitch = document.querySelector('.theme-toggle-switch');
const body = document.body;
toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    toggleSwitch.classList.toggle('light-mode');
});

// Smooth scroll logic for navbar links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// $(document).ready(function(){
//     // Add smooth scrolling to all links
//     $("a.nav-link").on('click', function(event) {
//         // Make sure this.hash has a value before overriding default behavior
//         if (this.hash !== "") {
//             // Prevent default anchor click behavior
//             event.preventDefault();

//             // Store hash
//             var hash = this.hash;

//             // Using jQuery's animate() method to add smooth page scroll
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top - $('.navbar').outerHeight()
//             }, 800, function(){
//                 // Add hash (#) to URL when done scrolling (default click behavior)
//                 window.location.hash = hash;
//             });
//         } // End if
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const themeToggle = document.getElementById('theme-toggle');
//     const body = document.body;
//     const navbar = document.getElementById('navbar');
//     const footer = document.getElementById('footer');

//     themeToggle.addEventListener('click', function() {
//         if (body.classList.contains('light-mode')) {
//             body.classList.remove('light-mode');
//             navbar.classList.remove('navbar-light-mode');
//             footer.classList.remove('light-mode');
//             themeToggle.classList.remove('light-mode');
//         } else {
//             body.classList.add('light-mode');
//             navbar.classList.add('navbar-light-mode');
//             footer.classList.add('light-mode');
//             themeToggle.classList.add('light-mode');
//         }
//     });
// });

function sendEmail() {
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    $.ajax({
        url: 'utils.php',
        type: 'post',
        data: {
            email: email,
            message: message
        },
        dataType: 'json',
        success:function(response) {
            var len = response.length;
        },
        error: function(response) {

        }
    });
}
