document.addEventListener("DOMContentLoaded", () => {
  // Call element from DOM
  const advice = document.getElementById("adviceText");
  const btn = document.getElementById("adviceBtn");

  console.log(advice);

  // Event onclick request API to get advice
  btn.addEventListener("click", () => {
    async function getAdvice() {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");

        if (!response.ok) {
          throw new Error(`Error! status:${response.status}`);
        }

        const result = await response.json();
        const data = result.slip;
        console.log(data);
        return result;
      } catch (err) {
        console.log(err);
      }
    }

    getAdvice();
  });
});
