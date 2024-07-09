const conatinerEl = document.querySelector(".container");

const btnEl = document.querySelector(".btn");

const popupContainerEl = document.querySelector(".popup-container");

const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
    conatinerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click",() => {
     conatinerEl.classList.remove("active");
     popupContainerEl.classList.add("active");
});