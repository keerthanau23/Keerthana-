document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value.trim();

    if (name && email && message) {
        // Simulate form submission success
        document.getElementById('formResponse').textContent = `Thank you, ${name}! Your message has been sent.`;
        event.target.reset();
    } else {
        document.getElementById('formResponse').textContent = "Please fill out all fields.";
        document.getElementById('formResponse').style.color = 'red';
    }
});
