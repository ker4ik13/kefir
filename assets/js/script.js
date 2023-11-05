const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const submitButton = document.querySelector(".submit-button");

submitButton.addEventListener("click", () => {
  const person = {
    name: inputName.value,
    email: inputEmail.value,
  };
  // console.log(person);
});
