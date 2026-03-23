function submitQuiz() {
  // have the variables at the top
  const scoreElement = document.getElementById("score");
  const result = document.getElementById("result");
  const qOne = document.querySelector('input[name="q1"]:checked');
  const qTwo = document.querySelector('input[name="q2"]:checked');

  const qSix = document.querySelector('input[name="q6"]:checked');

  const total = 5;
  let score = 0;

  // check answers
  // answer 1
  if (qOne.value === "h1") {
    score++; // increment by one
  }
  // answer 2
  if (qTwo.value === "4") {
    score++; // increment by one
  }

  // answer 6
  if (qSix.value === "chocolate") {
    score++; // increment by one
  }

  // displays to HTML
  scoreElement.textContent = "Score: " + score;
  result.textContent = "you got " + score + " out of " + total;
  // `You got ${score} out of ${total}`
}