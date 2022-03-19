document.addEventListener("DOMContentLoaded", () => {
  // Call element from DOM
  const advice = document.getElementById("adviceText");
  const btn = document.getElementById("adviceBtn");

  console.log(advice);

  btn.addEventListener("click", () => {
    advice.innerText = "yo";
    console.log("Ca marche");
  });
});
