const couters = document.querySelectorAll(".counter")
couters.forEach(counter => {
    counter.innerHTML = '0'
    const updateCouter = () => {
        const target = +counter.getAttribute("data-target")
        const start = +counter.innerHTML
        const increment = target/200
        if (start < target ){
            counter.innerText = `${Math.ceil(start+increment)}`
            setTimeout(updateCouter,1)
        } else {
            counter.innerText = target
        }
    }
    updateCouter()
})