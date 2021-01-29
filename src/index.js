let activeColor = document.querySelector(".colors > .active");
let activeSize = document.querySelector(".sizes > .active");
const sneakerFigure = document.querySelector(".container figure");
const sneakerImg = document.querySelector(".container figure > img");

sneakerFigure.addEventListener("animationend", (e) => {
  if (e.animationName === "show-down") {
    sneakerFigure.className = "";
  }
});

document.querySelectorAll(".colors > span").forEach((circle) => {
  circle.addEventListener("click", () => {
    if (circle !== activeColor) {
      activeColor.classList.toggle("active");
      activeColor = circle;
      circle.classList.toggle("active");

      if (circle.dataset.color) {
        sneakerImg.src = `src/tenis-${circle.dataset.color}.svg`;
        sneakerFigure.classList.add("animate");
      }
    }
  });
});

document.querySelectorAll(".sizes > span").forEach((size) => {
  size.addEventListener("click", () => {
    if (size !== activeSize) {
      activeSize.classList.toggle("active");
      activeSize = size;
      size.classList.toggle("active");
    }
  });
});
