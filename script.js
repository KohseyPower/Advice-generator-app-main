window.onload = function() {
    message();
}

async function message() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();

    document.querySelector(".message").textContent = data.slip.advice;

}