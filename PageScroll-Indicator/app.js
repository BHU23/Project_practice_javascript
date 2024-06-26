const progressEl = document.querySelector(".progress")
const toTop = document.querySelector(".toTop")
window.onscroll = () => scrollprogess()
//onClick btn toton
toTop.addEventListener("click", () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})

function scrollprogess() {
    //0-1
    const pageHeigth = document.documentElement.scrollHeight-document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollPrecentage = (scrollTop/pageHeigth)*100
    progressEl.style.visibility = "visible"
    progressEl.style.width = scrollPrecentage + "%"
    scrollToTop(scrollPrecentage)
}
//show button toTop
function scrollToTop(scrollPrecentage) {
    if (scrollPrecentage > 30) {
        toTop.classList.add("show-btn")
    } else {
        toTop.classList.remove("show-btn")
    }
}

