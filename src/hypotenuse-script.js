
let base = document.querySelector("#inputOne");
let height = document.querySelector("#inputTwo");
let btn = document.querySelector(".btn");
let outputContainer = document.querySelector(".output");

function calHypotenuse() {
  console.log("Btn clicked");
  let baseVal = base.value;
  let heightVal = height.value;
  console.log("Base:", baseVal);
  console.log("Height:", heightVal);

  let sum = Math.pow(baseVal, 2) + Math.pow(heightVal, 2);

  let result = Math.sqrt(sum);
  console.log("Result: ", result.toFixed(2));
  outputContainer.innerText = ` Hypotenuse calculated : ${result.toFixed(2)}`;
}

btn.addEventListener("click", calHypotenuse);
