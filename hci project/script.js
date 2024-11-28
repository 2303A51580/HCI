document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded");  // Debugging log to ensure JS is working

    // Review Form Submission (for reviews page)
    const reviewForm = document.getElementById("reviewForm");
    const thankYouSection = document.getElementById("thankYou");

    if (reviewForm) {
        reviewForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent form from submitting the default way (page reload)
            
            console.log("Form Submitted");  // Debugging log to check if form submission is triggered

            // Hide the review form and display the "Thank You!" message
            reviewForm.style.display = "none";
            thankYouSection.style.display = "block";

            // Optional: Reset form after submission
            reviewForm.reset();
        });
    }
});
