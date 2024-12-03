// for hamburger bar and the Back to TopButton

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});


    // Back to TopButton
    const backToTopButton = document.createElement("button");
    backToTopButton.textContent = "⬆ Back to Top";
    backToTopButton.style.position = "fixed";
    backToTopButton.style.bottom = "20px";
    backToTopButton.style.right = "20px";
    backToTopButton.style.padding = "10px 20px";
    backToTopButton.style.backgroundColor = "#333";
    backToTopButton.style.color = "#fff";
    backToTopButton.style.border = "none";
    backToTopButton.style.borderRadius = "5px";
    backToTopButton.style.cursor = "pointer";
    backToTopButton.style.display = "none"; // Initially hidden

    document.body.appendChild(backToTopButton);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });