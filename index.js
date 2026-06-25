let count = 0;

const countDisplay = document.querySelector("#count");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");

function updateCounter() {
    countDisplay.textContent = count;

    countDisplay.classList.remove("positive", "negative");

    if (count > 0) {
        countDisplay.classList.add("positive");
    } else if (count < 0) {
        countDisplay.classList.add("negative");
    }
}

increaseBtn.addEventListener("click", function () {
    count++;
    updateCounter();
});

decreaseBtn.addEventListener("click", function () {
    count--;
    updateCounter();
});

resetBtn.addEventListener("click", function () {
    count = 0;
    updateCounter();
});