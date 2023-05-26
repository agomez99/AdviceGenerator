
const resDiv = document.querySelector('#advice-text');
const resID = document.querySelector('#advice-id');
const resBtn = document.querySelector('#getData');

resBtn.addEventListener('click', getAdvice);
window.onload = getAdvice;

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    resDiv.innerHTML = data.slip.advice;
    resID.innerHTML = "Advice" + " #" + data.slip.id;
  } catch (error) {
    console.log(error);
  }
}
