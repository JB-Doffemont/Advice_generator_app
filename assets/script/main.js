document.addEventListener("DOMContentLoaded", () => {
  // Call element from DOM
  const advice = document.getElementById("adviceText");
  const id = document.getElementById("adviceId");
  const btn = document.getElementById("adviceBtn");

  // function to interact with API
  async function getAdvice() {
    try {
      // request to API
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error(`Error! status:${response.status}`);
      }
      // await for response in json
      const result = await response.json();
      // getting data
      const data = result.slip;
      console.log(data);

      // display content
      id.innerHTML = data.id;
      advice.innerText = '"' + data.advice + '"';
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  getAdvice();

  // Event onclick to fire new request API
  btn.addEventListener("click", () => {
    async function getAdviceOnClick() {
      try {
        // request to API
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) {
          throw new Error(`Error! status:${response.status}`);
        }
        // await for response in json
        const result = await response.json();
        // getting data
        const data = result.slip;
        console.log(data);

        // display content
        id.innerHTML = data.id;
        advice.innerText = '"' + data.advice + '"';
        return result;
      } catch (err) {
        console.log(err);
      }
    }
    getAdviceOnClick();
  });
});
