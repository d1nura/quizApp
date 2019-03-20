let h34 = document.querySelector("#question");
let ulL = document.querySelector("#answers");
let mainBtn = document.querySelector("#main-btn");
let add = document.querySelector(".add");
let closeBtn = document.querySelector(".closeBtn");
let scoreDiv = document.querySelector(".score");
let scoreCard = document.querySelector("#scoreCard");
let runMain = document.querySelector("#runMain");

let quiz = {};
let score = 0;

runMain.addEventListener("click", runM);

function runM() {
  let l = 1;
  let cc = 0;

  let objLength = Object.keys(quiz).length;

  h34.innerHTML = quiz[0].question;
  for (let r in quiz[0].answers) {
    let lii = document.createElement("li");
    lii.innerHTML = quiz[0].answers[r];
    ulL.appendChild(lii);
  }
  ulL.onclick = e => {
    console.log("cc:" + cc);
    if (e.target.innerHTML == quiz[cc].rightAnswer) {
      score++;
      console.log("score:" + score);
    }
    if (l == objLength) {
      ulL.innerHTML = "";
      h34.innerHTML = "";
      console.log(true);
      scoreDiv.style.height = "100%";
      scoreCard.innerHTML = score;
    }
    console.log("obj:" + objLength);

    if (l != objLength) {
      ulL.innerHTML = "";
      h34.innerHTML = quiz[l].question;
      for (let r in quiz[l].answers) {
        let lii = document.createElement("li");
        lii.innerHTML = quiz[l].answers[r];
        ulL.appendChild(lii);
      }
    }
    l++;
    cc++;
  };
}
function openB() {
  add.style.width = "100%";
}
function closeScore() {
  scoreDiv.style.height = "0%";
}
function closee() {
  add.style.width = "0%";
}

//------------------------------------------------------------------------

let txtArea = document.querySelector("#txtArea");
let number = document.querySelector("#number");
let addAnswersInput = document.querySelector("#addAnswersInput");
let regBtn = document.querySelectorAll("#regBtn");
let modelWrap = document.querySelector("#modelWrap");
let correctAns = document.querySelector("#correctAns");
let oneOf = document.querySelector("#oneOf");
let zero = document.querySelector("#zero");
let num = document.querySelector("#num");
let mainQuiz = document.querySelector(".mainQuiz");

let nnn = 0;

function putOn() {
  mainQuiz.style.visibility = "visible";

  let correct = correctAns.value; //correct answers value.
  //console.log(nnn++);
  let h33 = document.createElement("h3"); //creates the question as h33.
  h33.setAttribute("id", "h33");
  if (txtArea.value != "") {
    h33.innerHTML = `${txtArea.value}?`;
    modelWrap.appendChild(h33);
  }
  // creates the answers as li.
  for (let i = 0; i < z; i++) {
    if (typeof answersArr[i] != "undefined") {
      let li = document.createElement("li");
      li.innerHTML = answersArr[i];
      modelWrap.appendChild(li);
      if (li.innerHTML == correct) {
        li.style.background = "red";
      }
    }
  }
  Object.assign(quiz, addToObj(h33.innerHTML, answersArr, correct, nnn++));
  //runM();
  //console.log(addToObj(h33.innerHTML, answersArr, correct, nnn++));
  if (txtArea.value != "") {
    edit();
  }
  reset();
  //console.log(z);
}
//let nn = 0;
function addToObj(ques, ansArr, rightAns, nn) {
  let objct = {
    [nn]: {
      question: ques,
      answers: ansArr,
      rightAnswer: rightAns
    }
  };
  return objct;
}

function edit() {
  //creates the edit button in questions.
  let btn = document.createElement("button");
  btn.innerHTML = "Edit";
  btn.setAttribute("id", "regBtn");
  modelWrap.appendChild(btn);
  btn.addEventListener("click", editForm);
}

function reset() {
  //resets all values in form.
  z = 0;
  i = 0;
  xx = 0;
  answersArr = [];
  txtArea.value = "";
  correctAns.value = "";
  number.value = 0;
  zero.innerHTML = 0;
  num.innerHTML = 0;
}
let i = 0;
number.value = i;
let x;
//selecting the no of answers variable.
function plus() {
  i++;
  number.value = i;
}
function minus() {
  i--;
  number.value = i;
  if (i == 0) {
    // /e.target.settAttribute("disabled", true);
  }
}
let z;
let answersArr = [];

function setNumber() {
  //gets the no of answer's value & stores it as z
  z = number.value;
  oneOf.style.display = "block";
  num.innerHTML = z;
}
let xx = 0;
function addAnswers() {
  //adding answers to the answersArr.
  answersArr.push(addAnswersInput.value);
  //console.log(answersArr);
  addAnswersInput.value = "";
  if (answersArr.length == z) {
    //console.log(z);
  }
  zero.innerHTML = ++xx;
  //console.log("xx:" + xx);
  if (xx > z) {
    zero.innerHTML = z;
  }
}

function editForm() {}
