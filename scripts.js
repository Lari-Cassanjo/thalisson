const click = document.querySelector(".click");
const giftBox = document.querySelector(".gift-box");
const shadow = document.querySelector(".shadow");
const giftContainer = document.querySelector(".gift-container");
const text = document.querySelector(".text");
const parabens = document.querySelector(".parabens");
const fundo = document.querySelector(".fundo");
const audio = new Audio("aplausos.mp3");

click.addEventListener("click", () => {
    if (click.className === "click") {
        click.classList.add("active");
        giftBox.classList.add("active");
        shadow.classList.add("active");
        giftContainer.classList.add("active");
        text.classList.add("active");
        text.classList.remove("active2");
        parabens.style.display = "block";
        fundo.style.display = "block";
        audio.play();
    } else {
        click.classList.remove("active");
        giftBox.classList.remove("active");
        shadow.classList.remove("active");
        giftContainer.classList.remove("active");
        text.classList.remove("active");
        text.classList.add("active2");
        parabens.style.display = "none";
        fundo.style.display = "none";
    }
});
