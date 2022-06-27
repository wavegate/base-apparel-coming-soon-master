const formInput = document.getElementById("formInput");

function validateForm() {
  const emailInput = document.getElementById("emailInput");
  const emailInputValue = emailInput.value;
  if (
    emailInputValue == "" ||
    !emailInputValue.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    emailInput.classList.add("error");
  } else {
    emailInput.classList.remove("error");
  }
}

formInput.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
});
