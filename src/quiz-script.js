
const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector(".btn");
const output = document.querySelector(".output");
const resetBtn = document.querySelector("#reset-btn");
const ans = document.querySelectorAll("input");

const correctAns = [
  "90°",
  "one right angle",
  "Equilateral triangle",
  "12, 16, 20"
];
let score = 0;
let i = 0;

submitBtn.addEventListener("click", () => {
  console.log("Calculating score------ ");
  const formResults = new FormData(quizForm);
  console.log("what is this value:", formResults);
  for (let value of formResults.values()) {
    console.log("value from form:", value);
    if (value === correctAns[i]) {
      score = score + 1;
    }
    i++;
  }
  console.log("your score is ", score);
  output.innerText = "Your score is " + score;
});

resetBtn.addEventListener("click", () => {
  score = 0;
  console.log("answers:", ans);
  ans.forEach((el) => {
    el.checked = false;
  });
  output.innerText = "";
});
