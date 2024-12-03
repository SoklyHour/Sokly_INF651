// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {

    // 1. Dynamic Text Update for the Banner
    const bannerText = document.querySelector(".about-banner h1");
    if (bannerText) {
      let textArray = ["Welcome to SoklyPhone Shop", "Explore Top Tech Products", "Your Trusted Tech Store"];
      let textIndex = 0;
  
      setInterval(() => {
        textIndex = (textIndex + 1) % textArray.length;
        bannerText.textContent = textArray[textIndex];
      }, 1500); // Change text every 1.5 seconds
    }
  
    //  Hover Effect on About Image
    const aboutImage = document.getElementById("aboutImage");
    if (aboutImage) {
      aboutImage.addEventListener("mouseover", () => {
        aboutImage.style.transform = "scale(1.1)";
        aboutImage.style.transition = "transform 0.3s ease-in-out";
      });
  
      aboutImage.addEventListener("mouseout", () => {
        aboutImage.style.transform = "scale(1)";
      });
    }


  
    //  Newsletter Form Validation
    const emailInput = document.querySelector(".promo-form input");
    const subscribeButton = document.querySelector(".promo-form button");
  
    if (emailInput && subscribeButton) {
      subscribeButton.addEventListener("click", (e) => {
        e.preventDefault();
        const emailValue = emailInput.value.trim();
  
        if (emailValue === "" || !emailValue.includes("@")) {
          alert("Please enter a valid email address.");
        } else {
          alert(`Thank you for subscribing, ${emailValue}!`);
          emailInput.value = ""; // Clear the input field
        }
      });
    }
  
  });
  