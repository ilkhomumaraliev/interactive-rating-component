const container = document.querySelector(".container");
const btns = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit");
const response = document.querySelector(".response-container");
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    btn.classList.add("active");
    btn.classList.add("selected");
  })
);

submit.addEventListener("click", () => {
  btns.forEach((btn) => {
    if (btn.classList.contains("active")) {
      console.log(`You rated ${btn.textContent}/5`);
      container.classList.add("hidden");
      const html = ` <div class="response container">
      <img src="./images/illustration-thank-you.svg" alt="" />
      <div class="rate-result">You selected ${btn.textContent} out 5</div>
      <h3>Thank you!</h3>
      <p class="res-text">
        We appreciate taking the time to give a rating. If you ever need more
        support, don't hesitate to get in touch
      </p>
    </div>`;
      response.classList.remove("hidden");
      response.insertAdjacentHTML("afterbegin", html);
    }
  });
});
