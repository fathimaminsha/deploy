// Mobile navigation

function toggleMenu() {
    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");
}


// Booking form

document
    .getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;
        const guests = document.getElementById("guests").value;

        alert(
            `Thank you, ${name}!\n\n` +
            `Your booking request has been received.\n` +
            `Email: ${email}\n` +
            `Date: ${date}\n` +
            `Guests: ${guests}`
        );

        this.reset();
    });


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {
        document
            .getElementById("navLinks")
            .classList.remove("active");
    });

});
