document.addEventListener("DOMContentLoaded", function () {

  // Input focus / blur animation
  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    this.parentNode.classList.add("focus");
  }

  function blurFunc() {
    if (this.value === "") {
      this.parentNode.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });

  // EmailJS configuration
 
  emailjs.init("p2QTWPqzSR0vFsu-X");

  // Form submit handler

  const form = document.getElementById("contact-form");
  const submitBtn = form.querySelector(".btn");
  const successMsg = document.getElementById("success-message");

  if (!form) {
    console.error("Contact form not found!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.value = "Sending...";

    emailjs.sendForm(
      "service_rpz4wxo",
      "template_w4wdjlj",
      this
    ).then(
      () => {
        if (successMsg) {
          successMsg.style.display = "block";
          setTimeout(() => {
            successMsg.style.display = "none";
          }, 4000);
        }

        form.reset();
        document.querySelectorAll(".input-container").forEach((container) => {
          container.classList.remove("focus");
        });
      },
      (error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
      }
    ).finally(() => {
      submitBtn.disabled = false;
      submitBtn.value = "Send";
    });
  });
});
