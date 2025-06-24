const accordianWrapper = document.querySelector(".accordion-wrapper");
const accordion = accordianWrapper.querySelectorAll(".accordion");
const btns = document.querySelectorAll("button");

btns.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("is-open");
  });
});
