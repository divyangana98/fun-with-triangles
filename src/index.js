
const inputVal = document.querySelectorAll(".input-val");
const btn = document.querySelector(".btn");
const outputDiv = document.querySelector(".output");

inputVal.forEach((element) => {
  element.addEventListener("input", () => {
    outputDiv.innerText = "";
  });
});

function isTriangle() {
  console.log("This is isTriangle() method");
  const angle1 = Number(inputVal[0].value);
  const angle2 = Number(inputVal[1].value);
  const angle3 = Number(inputVal[2].value);
  console.log("Angle1:", angle1);
  console.log("Angle 2:", angle2);
  console.log("Angle 3:", angle3);
  let sum = angle1 + angle2 + angle3;

  if (sum === 180) {
    outputDiv.innerText = "Angles form a triangle.";
  } else {
    outputDiv.innerText = "Angles don't form a triangle.";
  }
}

btn.addEventListener("click", isTriangle);
