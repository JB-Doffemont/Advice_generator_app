document.addEventListener("DOMContentLoaded", () => {
  // Call element from DOM
  const advice = document.getElementsByClassName("main__adviceSection");
  const btn = document.getElementById("adviceBtn");

  console.log(advice);

  btn.addEventListener("click", () => {
    console.log("Ca marche");
  });
});
