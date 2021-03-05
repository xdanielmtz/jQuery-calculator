$(document).ready(function () {
    var numberButtons = $(".number"); //targets my number buttons
    var operatorButtons = $(".operator"); //targets my operator buttons
    var equalSign = $(".equal"); //targets my equal button
    var firstNumberEl = $("#first-number");
    var secondNumberEl = $("#second-number");
    var operatorEl = $("#operator");
    var resultEl = $("#result");

    var firstNumber = "";
    var secondNumber = "";
    var operator = "";
    var equalButton = "";

    function add() {
      result = parseInt(firstNumber) + parseInt(secondNumber);
    }

    function subtract() {
      result = parseInt(firstNumber) - parseInt(secondNumber);
    }

    function times() {
      result = parseInt(firstNumber) * parseInt(secondNumber);
    }

    function divide() {
      result = parseInt(firstNumber) / parseInt(secondNumber);
    }

    function power() {
      result = parseInt(firstNumber) ** parseInt(secondNumber);
    }

    //event listeners on the buttons
    numberButtons.on("click", function () {
      console.log($(this).val());
      if (operator === "") {
        firstNumber = firstNumber + $(this).val();
        console.log(firstNumber);
        firstNumberEl.text(firstNumber);
      } else{
        //if it is not empty than that means our 2nd operator must exist
        secondNumber = secondNumber + $(this).val();
        secondNumberEl.text(secondNumber);
      }
    });

    operatorButtons.on("click", function () {
      console.log($(this).val());
      operator = $(this).val();
      operatorEl.text(operator);
    });

    $(".clear").on("click", function (){
      firstNumber = "";
      secondNumber = "";
      operator = "";
      result = "";
      firstNumberEl.text(""),
      secondNumberEl.text("");
      operatorEl.text("");
      resultEl.text("");
    })

    equalSign.on("click", function () {
      switch (operator) {
        //we need parse int to get back a number and not a string
        case "plus":
          add();
          break;
        case "minus":
          subtract();
          break;
        case "times":
          times();
          break;
        case "divide":
          divide();
          break;
        case "power":
          power();
          break;
      }
      resultEl.text(result);
    });
  });