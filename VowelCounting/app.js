const count = document.querySelector(".count")
const input = document.querySelector("input")

input.addEventListener("keyup", () => {
    const inputValue = input.value.toLowerCase(); // Convert input value to lowercase for easier comparison
    let vowelCount = 0;

    for (let i = 0; i < inputValue.length; i++) {
        const char = inputValue[i];
        if (char.match(/([a,e,i,o,u])/)) {
            vowelCount++;
        }
    }

    count.innerHTML = vowelCount;
})