// 1. Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// 2. Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// 4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля -
//    значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// 5. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const refs = {
  form: document.querySelector(".login-form"),
  email: document.querySelector('input[type="email"]'),
  password: document.querySelector('input[type="password"]'),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const emailLength = refs.email.value.length;
  const passwordLength = refs.password.value.length;

  if (emailLength === 0 || passwordLength === 0) {
    return alert("Please fill in the blank input field!");
  }
  const formElements = e.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  const fromData = {
    email,
    password,
  };
  console.log(fromData);
  refs.form.reset();
}
