// Name: Jaimie Jin
// Date: 4/20/19
// Section: CSE 154 AE
//
// This is the main.js page for my random number generator. It contains functions like changing
// the heading color, hiding, showing and clearing parts of the page, and of course generating
// random numbers.
//

(function() {
  "use strict";
  let count = 0;
  let numCount = 0;
  const HEX_DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                      "A", "B", "C", "D", "E", "F"];
  const HEX_LENGTH = 6;

   window.addEventListener("load", initialize);

   /**
    *  initialize waits for buttons to be clicked to carry out functions for each button, meanwhile
    * it changes the header color every 4.5 seconds.
    */
   function initialize() {
     id("prevNum").addEventListener("click", hiddenFunction);
     id("get").addEventListener("click", getNumber);
     id("clear").addEventListener("click", clearFunction);
     setInterval(changeColor, 4500);
   }

  /**
   * hiddenFunction toggles the Previous Numbers section between show and hidden depending on it's
   * current state. It also changes the button associated with this function to show what the
   * next press of the button should do.
   */
  function hiddenFunction() {
    event.preventDefault();
    let button = id("prevNum");
    if (count % 2 === 0) {
      id("hide").classList.remove("hidden");
      button.innerHTML= "Hide Previous Numbers";
      count++;
    } else {
      id("hide").classList.add("hidden");
      button.innerText = "Show Previous Numbers";
      count = 0;
    }
  }

  /**
   *  Generates the random number based on the values entered by the user. Will show a message
   *  if the min is greater than the max else it will show a random number.
   */
  function getNumber() {
    event.preventDefault();
    let min = Math.round(document.getElementById("minNum").value);
    let max = Math.round(document.getElementById("maxNum").value);
    if (min < max) {
      let num = Math.round(Math.random() * (max-min)) + min;
      id("number").innerText = num;
      let p = document.createElement("p");
      p.innerText = num;
      id("hide").appendChild(p);
      numCount++;
    } else if (min > max) {
      id("number").innerText = "Your minimum number is bigger than your maximum number!!";
    } else {
        id("number").innerText = "Your numbers are equal or you didn't enter any!!";
    }
  }

  /**
   *  Removes all stored values in Previous Numbers.
   */
  function clearFunction() {
    event.preventDefault();
    let list = id("hide");
    if (count > 0) {
      for (let i = 0; i <= numCount; i++){
        list.removeChild(list.lastChild);
      }
    }
    count = 0;
  }

  /**
   * Changes the color of the header to randomly generated hex values. Parts of this code was
   * taken from the colorifyme.html & colorify.js used in Section 5.
   */
  function changeColor() {
    let randomColor = "#";
    for (let i = 0; i < HEX_LENGTH; i++) {
      randomColor += HEX_DIGITS[Math.round(Math.random() * HEX_DIGITS.length)];
    }
    if(randomColor !== "#FFFF00"){
      qs("h1").style.color = randomColor;
    }
  }

  /* ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

})();
