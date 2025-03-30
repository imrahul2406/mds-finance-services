document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".scroll-animation, .content-scroll-animation"); // Select both at once

    if (elements.length === 0) return; // Prevent errors if no elements are found

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing after animation triggers
            }
        });
    }, { threshold: 0.1 }); // Trigger when at least 10% of the element is visible

    elements.forEach((el) => observer.observe(el));
});
