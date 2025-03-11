document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default jump behavior
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                ultraSmoothScroll(targetElement.offsetTop - 20, 1000); // Adjust speed for ultra smoothness
            }

            // Close navbar in mobile view after clicking a link
            const navbarCollapse = document.querySelector(".navbar-collapse");
            if (navbarCollapse.classList.contains("show")) {
                navbarCollapse.classList.remove("show");
            }
        });
    });

    function ultraSmoothScroll(targetPosition, duration) {
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            // Ultra-smooth easing function (cubic ease in-out with stronger slow start & end)
            const easeInOutQuint = progress < 0.5
                ? 16 * Math.pow(progress, 5)
                : 1 - Math.pow(-2 * progress + 2, 5) / 2;

            window.scrollTo(0, startPosition + (distance * easeInOutQuint));

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }
});

/*document.addEventListener("DOMContentLoaded", function () {
    let skillsSection = document.getElementById("skillsset");

    document.querySelector("a[href='#skillsset']").addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default jump
        skillsSection.classList.remove("animate__fadeIn"); // Remove class if already applied
        void skillsSection.offsetWidth; // Trigger reflow
        skillsSection.classList.add("animate__fadeIn"); // Reapply animation
        skillsSection.scrollIntoView({ behavior: "smooth" });
    });
});*/

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link"); // Select all menu links
    const navbarToggler = document.querySelector(".navbar-toggler"); // Select the navbar toggler button
    const navbarCollapse = document.querySelector(".navbar-collapse"); // Select the collapsible navbar section

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) { // Check if menu is open
                navbarToggler.click(); // Close menu by simulating a click on the toggler
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let count = 0;
    let target = 8;
    let speed = 60; // Adjust speed (lower = faster)

    function updateCounter() {
        if (count < target) {
            count++;
            document.getElementById("projectCounter0").textContent = count;
            setTimeout(updateCounter, speed);
        }
    }
    updateCounter();
});
document.addEventListener("DOMContentLoaded", function () {
    let count = 0;
    let target = 7;
    let speed = 60; // Adjust speed (lower = faster)

    function updateCounter() {
        if (count < target) {
            count++;
            document.getElementById("projectCounter1").textContent = count;
            setTimeout(updateCounter, speed);
        }
    }
    updateCounter();
});
document.addEventListener("DOMContentLoaded", function () {
    let count = 0;
    let target = 7;
    let speed = 60; // Adjust speed (lower = faster)

    function updateCounter() {
        if (count < target) {
            count++;
            document.getElementById("projectCounter2").textContent = count;
            setTimeout(updateCounter, speed);
        }
    }
    updateCounter();
});   

document.addEventListener("DOMContentLoaded", function () {
    let count = 0;
    let target = 22;
    let speed = 60; // Adjust speed (lower = faster)

    function updateCounter() {
        if (count < target) {
            count++;
            document.getElementById("projectCounter3").textContent = count;
            setTimeout(updateCounter, speed);
        }
    }
    updateCounter();
}); 


function downloadPDF() {
    let link = document.createElement("a");
    link.href = "Image/Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

//------------------------------------------------


document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Toggle button text dynamically
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.innerHTML = "☀️";
        } else {
            darkModeToggle.innerHTML = "🌙";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const skillsElement = document.querySelector(".skills");

    if (!skillsElement) {
        console.error("Error: .skills element not found!");
        return;
    }

    const text = `Building Scalable .NET, Web API, AWS, and Microservices Solutions | Experienced in React, JavaScript & More! `;

    const typingSpeed = 50;
    const delayBeforeRestart = 5000;

    function typeEffect(index = 0) {
        if (index < text.length) {
            skillsElement.innerHTML = text.slice(0, index + 1);
            setTimeout(() => typeEffect(index + 1), typingSpeed);
        } else {
            setTimeout(() => {
                skillsElement.innerHTML = "";
                typeEffect(0);
            }, delayBeforeRestart);
        }
    }

    typeEffect();
});





// Select fish images for eye blinking
// const fishList = ['fish1', 'fish2', 'fish3', 'fish4', 'fish5'];
// setInterval(() => {
//     let fish = document.getElementById(fishList[Math.floor(Math.random() * fishList.length)]);
//     fish.src = fish.src.includes("open") ? "fish-closed.svg" : "fish-open.svg";
// }, 3000);

// // Octopus Blinking
// setInterval(() => {
//     let octopus = document.getElementById("octopus");
//     octopus.src = octopus.src.includes("open") ? "octopus-closed.svg" : "octopus-open.svg";
// }, 4000);

// // Turtle Hide & Show
// setInterval(() => {
//     let turtle = document.getElementById("turtle");
//     turtle.src = turtle.src.includes("out") ? "turtle-in.svg" : "turtle-out.svg";
// }, 5000);


/*document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".fire-btn");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", function (event) {
            createFirecrackerEffect(event, button);
        });
    });

    function createFirecrackerEffect(event, button) {
        const sparkContainer = document.createElement("div");
        sparkContainer.classList.add("spark-container");
        button.appendChild(sparkContainer);

        for (let i = 0; i < 20; i++) { // Generates 20 sparks
            const spark = document.createElement("div");
            spark.classList.add("spark");

            // Random position and movement for sparks
            const x = (Math.random() - 0.5) * 200 + "px";
            const y = (Math.random() - 0.5) * 200 + "px";

            spark.style.setProperty("--x", x);
            spark.style.setProperty("--y", y);

            sparkContainer.appendChild(spark);

            // Remove spark after animation
            setTimeout(() => {
                spark.remove();
            }, 600);
        }

        // Remove container after animation
        setTimeout(() => {
            sparkContainer.remove();
        }, 600);
    }
});*/

