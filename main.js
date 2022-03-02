const emailInputContainer = document.querySelector(".email-input-container");
const subscriptionForm = document.querySelector(".subscription-form");

// Regex used in type=”email” from W3C
const emailRegEx =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

subscriptionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  emailInputContainer.classList.remove("input-error");

  if (!emailRegEx.test(subscriptionForm.email.value))
    emailInputContainer.classList.add("input-error");
});
