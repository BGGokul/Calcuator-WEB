// Theme changing function

themeChange = () => {
  let className = document.getElementById("themechanger-icon").classList;
  if (className[1] == "fa-sun") {
    document.getElementsByClassName("calc-container")[0].style.background =
      "#ffffff";
    document.getElementById("themechanger-icon").classList.remove("fa-sun");
    document.getElementById("themechanger-icon").classList.add("fa-moon");

    let inputFields = document.querySelectorAll("input");
    for (i = 0; i < inputFields.length; i++) {
      inputFields[i].style.background = "#ffffff";
      inputFields[i].style.caretColor = "#333333";
      inputFields[i].style.color = "#333333";
    }

    document.querySelector(".buttons-list").style.background = "#eeeeee";
    document.querySelector(".heading-container").style.color = "#333333";

    let buttonList = document.querySelectorAll(".buttons-list > button");
    for (i = 0; i < buttonList.length; i++) {
      buttonList[i].style.background = "#eeeeee";
      buttonList[i].style.color = "#333333";
    }
  } else if (className[1] == "fa-moon") {
    document.getElementsByClassName("calc-container")[0].style.background =
      "#22252d";
    document.getElementById("themechanger-icon").classList.remove("fa-moon");
    document.getElementById("themechanger-icon").classList.add("fa-sun");

    let inputFields = document.querySelectorAll("input");
    for (i = 0; i < inputFields.length; i++) {
      inputFields[i].style.background = "#22252d";
      inputFields[i].style.caretColor = "#ffffff";
      inputFields[i].style.color = "#ffffff";
    }

    document.querySelector(".buttons-list").style.background = "#292d36";
    document.querySelector(".heading-container").style.color = "#ffffff";

    let buttonList = document.querySelectorAll(".buttons-list > button");
    for (i = 0; i < buttonList.length; i++) {
      buttonList[i].style.background = "#272b33";
      buttonList[i].style.color = "#ffffff";
    }
  }
};

var inputBox = document.getElementById("calcInput");
let resultBox = document.getElementById("resultBox");

// Display number when click button
dislayText = (val) => {
  inputBox.value += val;
  // resultBox.value = eval(inputBox.value);
};

//clear input box
clearAll = () => {
  document.getElementById("calcInput").value = "";
};
//result
result = () => {
  document.getElementById("resultBox").value = eval(inputBox.value);
};

//key restriction
$(".number-only").keypress(function (e) {
  if (
    (e.which >= 48 && e.which <= 57) ||
    e.which == 187 ||
    e.which == 189 ||
    e.which == 191
  ) {
    return true;
  } else e.preventDefault();
});
