/*22000764 LEBOKO GAEDIE*/

//Function For Form Validation
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.EmailForm form').onsubmit = (event) => {

        const fields = [
            { id: "name", message: "First Name Is Required!" },
            { id: "email", message: "Enter A Valid Email!", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
            { id: "subject", message: "Subject Is Required!" },
        ]

        document.querySelectorAll('.error').forEach(err => err.remove());

        let valid = true;
        fields.forEach(({ id, message, pattern }) => {
            const el = document.getElementById(id);
            const value = el.value.trim();
            const isValid = value && (!pattern || pattern.test(value));

            if (!isValid) {
                el.insertAdjacentHTML('afterend', `<span class="error">${message}</span>`);
                valid = false;
            }
        });
        if (!valid) {
            event.preventDefault();
        }

        return valid;
    };
});


//Function For Hiding And Revealing Bio
document.querySelectorAll('.revealbio').forEach(button => {
    button.addEventListener('click', function () {
        const bio = this.previousElementSibling;
        if (bio.style.display === 'none' || bio.style.display === '') {
            bio.style.display = 'block';
            this.textContent = 'Hide Bio';
        } else {
            bio.style.display = 'none';
            this.textContent = 'Reveal Bio';
        }
    });
});


/*Function For Displaying Current Time*/
function updateTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const formatTime =
        (hours < 10 ? '0' + hours : hours) + ':' +
        (minutes < 10 ? '0' + minutes : minutes);
    document.getElementById('time').textContent = formatTime;
}

updateTime();

setInterval(updateTime, 60000);


//Function For Showing Active Webpage On Navbar
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(function (link) {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});