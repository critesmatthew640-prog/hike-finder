// Simple interactive feature – welcome alert + form validation hint
document.addEventListener("DOMContentLoaded", function() {
    // Welcome message (only on home page)
    if (document.querySelector('.hero')) {
        setTimeout(() => {
            alert("Welcome to Hike Finder!");
        }, 1000);
    }

    // Form submit feedback
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Remove e.preventDefault() if using real backend
            alert("Thank you! Your message has been sent.");
        });
    });
});