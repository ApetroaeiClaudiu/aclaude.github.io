$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a.nav-link").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $('.navbar').outerHeight()
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

function sendEmail() {
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
}
