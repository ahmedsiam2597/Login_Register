let loginBtn = document.querySelector("#loginBtn");
let regBtn = document.querySelector("#registerBtn");
let formBx = document.querySelector("#formBx");

regBtn.addEventListener("click", () => {
  formBx.classList.add("active");
  document.body.classList.add("colorBg");
});
loginBtn.addEventListener("click", () => {
  formBx.classList.remove("active");
  document.body.classList.remove("colorBg");
});
