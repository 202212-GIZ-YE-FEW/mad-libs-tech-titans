/**
 * Complete the implementation of parseStory.
 *
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 *
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */


/**
This code is for a mad libs generator. 
 It defines the input and output elements, and the arrays for these elements. 
 The function parseStory takes in a string of a raw story and splits it into separate words. 
The function then loops through each word and tests if it follows a pattern of having a word 
followed by a square bracket with a single letter inside (either 'n', 'v', or 'a'). If the test is successful, 
 the word is added to an object array with its corresponding part of speech (either 'noun', 'verb', or 'adjective').
  If the test fails, the word is added to the object array without a part of speech. Finally, the parsed object array is returned.
 */

let inputElements,
  outputElements,
  inputElementsArray,
  outputElementsArray = "";
let edit = document.getElementById("madLibsEdit");
let result = document.getElementById("madLibsPreview");

// Function to parse a raw story into an object array
// where each object represents a word in the story and its part of speech if applicable

function parseStory(rawStory) {
  let obj = [];
  // Split the raw story into individual words

  let properties = rawStory.split(" ");
  // Loop through each word

  properties.forEach(function (singleword) {
    // Test if the word follows the pattern of having a word followed by
    // a square bracket with a single letter inside (either 'n', 'v', or 'a')
    if (/(\S+)\[(.*?)\]/g.test(singleword)) {
      // If the test is successful, determine the part of speech
      // based on the letter inside the square bracket

      if (/\[(n*?)\]/.test(singleword)) {
        obj.push({
          word: /(.*?)\[/.exec(singleword)[1],
          pos: "noun"
        });
        // Add the word as a noun to the object array

      } else if (/\[(v*?)\]/.test(singleword)) {
        obj.push({
          word: /(.*?)\[/.exec(singleword)[1],
          pos: "verb"
        });
        // Add the word as a verb to the object array

      } else if (/\[(a*?)\]/.test(singleword)) {
        obj.push({
          word: /(.*?)\[/.exec(singleword)[1],
          pos: "adjective"
        });
        // Add the word as an adjective to the object array

      }
    } else {
      // If the test fails, add the word to the object array without a part of speech
      obj.push({
        word: singleword
      });
    }
  });
  // Return the parsed object array
  return obj;
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */

/**
This code is handling the processing of the parsed story from the parseStory function. 
It uses the .then method to chain promises, 
with the output of parseStory being passed as the input to the next function.
 This function loops through each element in the processedStory array,
  which represents each word in the story and its part of speech if applicable. 
  If an element has the property pos, it creates an input element,
   sets its type to text, sets its placeholder to the part of speech, 
   sets its maxLength to 20, and appends it to the edit element. 
   If an element does not have the pos property, 
   it appends the word to the edit element as a string. 
   The result element is then set to have the same inner HTML as the edit element.
    Finally, the Initialize function is called.
*/
getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    // Loop through each element in the processedStory array

    for (let ele of processedStory) {
      // Check if the element has the "pos" property

      if (ele.hasOwnProperty("pos")) {
        // If it does, create an input element

        let input = document.createElement("input");
        // Set the input type to "text"

        input.type = "text";

        // Set the placeholder to the part of speech
        input.placeholder = ele["pos"];

        //  input.setAttribute("value",ele.word);

        // Set the maximum length to 20
        input.maxLength = 20;
        // Append the input element to the edit element
        edit.appendChild(input);
      } else {
        // If it does not, add the word to the edit element as a string

        edit.innerHTML += " " + ele.word;
      }
      // Log the element to the console
      console.log(ele);
    }
    // Set the inner HTML of the result element to be the same as the edit element
    result.innerHTML = edit.innerHTML;
    // Call the Initialize function
    Initialize();
  });


/**
 * This code defines the updateText function 
which updates the text in the outputElementsArray based on the values in the inputElementsArray. 
The function loops through each element in the inputElementsArray and gets the index of the current element. 
Then it uses that index to get the value of the corresponding element in inputElementsArray
 and sets the value of the corresponding element in outputElementsArray 
 to be the value of the input element.
  If the value of the input element is falsy, the value of the corresponding output element is set to an empty string.
 */


function updateText() {
   // Loop through each element in the inputElementsArray
  inputElementsArray.forEach((element) => {
       // Get the index of the current element
    let index = inputElementsArray.indexOf(element);
     // Get the value of the current element
    let value = inputElementsArray[index].value;
     // Set the value of the corresponding element in the outputElementsArray to be the value of the input element
    // If the value of the input element is falsy, set the value of the output element to an empty string
    outputElementsArray[index].value = value ? value : "";
  });
}
/**
 * This code defines the Initialize function, 
which sets up event listeners for the inputElements in the story. 
The function first selects the input elements in the story, both in the madLibsEdit and madLibsPreview sections. 
Then it converts the input elements from a NodeList to an Array and stores them in inputElementsArray and outputElementsArray respectively.
For each input element in inputElementsArray, 
the function adds an input event listener which calls the updateText function when the input value changes. 
The function also adds a keydown event listener to each input,
 which listens for the Enter key being pressed. If the user presses the Enter key while focused on an input, 
 the function will determine the next input in the story and focus on it.
 */



function Initialize() {
  // Select input elements in the madLibsEdit and madLibsPreview sections
  inputElements = document.querySelectorAll("#madLibsEdit input");
  outputElements = document.querySelectorAll("#madLibsPreview input");

   // Convert the input elements from a NodeList to an Array
  inputElementsArray = Array.from(inputElements);
  outputElementsArray = Array.from(outputElements);

    // Add event listeners for each input element
  inputElements.forEach((input) => {
    // input event listener to call updateText when the input value changes

    input.addEventListener("input", updateText);

    // Hotkeys: When the user presses Enter in an input, it should move the cursor to the next input in the story.
       // keydown event listener to listen for the Enter key
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
           // Get the next input in the story
        // event.preventDefault();
        let nextInput =
          inputElementsArray[inputElementsArray.indexOf(input) + 1];
               // Focus on the next input if it exists
        if (nextInput) {
          nextInput.focus();
        }
      }
    });
  });
}


const container = document.querySelector(".animation-container");
for (let i = 0; i < 5; i++) {
  const flame = document.createElement("div");
  flame.classList.add("animation");
  flame.style.width = `${Math.random() * 35 + 20}px`;
  flame.style.height = `${Math.random() * 30 + 30}px`;
  flame.style.left = `${Math.random() * 100}%`;
  flame.style.animationDuration = `${Math.random() * 3 + 3}s`;
  container.appendChild(flame);
}

  



const playButton = document.getElementById("play-button");
const song = document.getElementById("song");

playButton.addEventListener("click", function() {
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
});