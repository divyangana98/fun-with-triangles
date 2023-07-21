
let input = document.querySelectorAll(".input-val");
let btn = document.querySelector(".btn");
var outputContainer = document.querySelector(".output");
input.forEach((element) => {
  element.addEventListener("input", () => {
    outputContainer.innerText = "";
  });
});

function calculateArea() {
  let base = Number(input[0].value);
  let height = Number(input[1].value);

  console.log("Base: ", base);
  console.log("Height:", height);
  let result = (base * height) / 2;

  outputContainer.innerText = ` Area of the triangle: ${result.toFixed(2)} cm`;
}

btn.addEventListener("click", calculateArea);
