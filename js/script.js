const hamburguerButton = document.getElementById("menu-btn")
const navbar = document.getElementById("menu")

hamburguerButton.addEventListener("click", () => {
  hamburguerButton.classList.toggle("open")

  navbar.classList.toggle("flex")
  navbar.classList.toggle("hidden")
})