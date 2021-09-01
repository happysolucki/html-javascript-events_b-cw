const codeCrewString =
  "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness.";
const randomQuoteString = "I don't know everything. I only know what I know.";
const anotherRandomQuoteString =
  "Humans have a desire for truth or they have a desire to what they know is the truth. In other words, what the truth is exactly second to that. Be careful of what is the truth and what is lie. In other words, always doubt yourself.";
const stringArray = [
  codeCrewString,
  randomQuoteString,
  anotherRandomQuoteString,
];

// get random string from our array of quotes
let currentString = stringArray[Math.floor(Math.random() * stringArray.length)];
// const ignoreKeys = ["Shift", "Backspace"];

// capture necessary elements from dom
let label = document.querySelector("label");
let textBox = document.querySelector("textarea");
let button = document.querySelector("button");

// initialize a starting index
let idx = 0;

// EX 1
// textBox.addEventListener("keydown", function(e)  {
//   // console.log(e);
//   // console.log(e.key);
//   // if (ignoreKeys.indexOf(e.key) > -1) return;
//   label.textContent += e.key;
// });

// EX 2
textBox.addEventListener("keydown", () => {
  // if (idx < currentString.length) {
  if (idx < codeCrewString.length) {
    // concatenate character in currentString to label contents (based on idx)
    label.textContent += currentString[idx];
    // increment idx by one
    idx++;
  }
});

// Ex 3
button.addEventListener("click", () => {
  // clear out text in label
  label.textContent = "";
  // reset idx to zero
  idx = 0;
  // reset the form
  textBox.value = "";
});
