const smallImg = document.querySelectorAll(".gallery img")
const fullImg = document.querySelector(".full-imge")
const modal = document.querySelector(".modal")
smallImg.forEach(img => {
    img.addEventListener("click", () => {
        const fullSize = img.getAttribute("alt")
        const path = `foods-images/full/${fullSize}.jpg`
        fullImg.src = path
        modal.classList.add("open")
    })
})

modal.addEventListener("click", () => {
    modal.classList.remove("open")
})