const btn = document.querySelector(".btn1")
const elem1 = document.querySelector("body")



btn.addEventListener("click", () => {
    elem1.style.backgroundImage = "url(bulb-on.png)"
    elem1.style.backgroundRepeat = "no-repeat"
    elem1.style.backgroundPosition = "center"
    btn.textContent = "TURN OFF"
   

})