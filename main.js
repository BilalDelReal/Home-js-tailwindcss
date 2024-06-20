const burger = document.getElementById("burguer")
const cross  = document.getElementById("cross")
burger.addEventListener("click", function () {
    const modal = document.getElementById("myModal")
    const background = document.getElementById("back-ground-modal")
    modal.classList.remove("hidden")
    background.classList.remove("hidden")
})
cross.addEventListener("click", function () {
    const modal = document.getElementById("myModal")
    const background = document.getElementById("back-ground-modal")
    modal.classList.add("hidden")
    background.classList.add("hidden")
})