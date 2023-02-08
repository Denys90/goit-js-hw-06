const form = document.querySelector(".login-form");
const loginFormSubmitHeandler = (event) => {
  event.preventDefault();
  const email = event.currentTarget.email.value.trim();
  const password = event.currentTarget.elements.password.value;
  const formData = {
    email,
    password,
  };
  if (email === "" || password === "") {
    alert("Заповніть форму");
  } else console.log(formData);

  event.currentTarget.reset();
};
form.addEventListener("submit", loginFormSubmitHeandler);
