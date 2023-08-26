document
  .getElementById("subscribe-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let emailInput = document.getElementById("subscribe");
    let email = emailInput.value;
    let responseMessageDiv = document.getElementById(
      "subscribe-response-message"
    );

    if (email === "") {
      responseMessageDiv.innerHTML = "Email cannot be empty.";
      responseMessageDiv.style.display = "block";
      return;
    }

    emailInput.value = "";

    responseMessageDiv.innerHTML = "Thank you for subscribing!";
    responseMessageDiv.style.display = "block";

    setTimeout(function () {
      responseMessageDiv.style.display = "none";
    }, 5000);
  });


