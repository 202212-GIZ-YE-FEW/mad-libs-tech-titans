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

let inputElements,outputElements,inputElementsArray,outputElementsArray="";
let edit=document.getElementById("madLibsEdit");
let result=document.getElementById("madLibsPreview");

function parseStory(rawStory) {
  let obj=[];

  let properties = rawStory.split(' ');
    properties.forEach(function(singleword) {
      if(/(\S+)\[(.*?)\]/g.test(singleword)){

        if(/\[(n*?)\]/.test(singleword)){
          obj.push({word : /(.*?)\[/.exec(singleword)[1], pos : "noun"});
          // return noun;
        }else if(/\[(v*?)\]/.test(singleword)){
          obj.push({word : /(.*?)\[/.exec(singleword)[1], pos : "verb"});
          // return verb;
        }else if(/\[(a*?)\]/.test(singleword)){
         obj.push({word : /(.*?)\[/.exec(singleword)[1], pos : "adjective"});
          // return adjective;
        }

      }else{
        obj.push({word : singleword});
    }
  });
return obj;
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 * 
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory().then(parseStory).then((processedStory) => {
  for(let ele of processedStory) {
   if(ele.hasOwnProperty('pos')){
     let input=document.createElement("input");
     input.type="text";
     input.placeholder=ele["pos"];
    //  input.setAttribute("value",ele.word);
     input.maxLength=20;

     edit.appendChild(input);
   }else{
     edit.innerHTML+=" "+ele.word;
   }
   console.log(ele);
  }
  result.innerHTML=edit.innerHTML;

 Initialize();
 
});

function updateText() {
  inputElementsArray.forEach((element) => {
      let index = inputElementsArray.indexOf(element);
      let value = inputElementsArray[index].value; 
      outputElementsArray[index].value= value ? value : "";
     });
}
function Initialize(){
  inputElements = document.querySelectorAll("#madLibsEdit input");
  outputElements=document.querySelectorAll("#madLibsPreview input");
  inputElementsArray = Array.from(inputElements);
  outputElementsArray = Array.from(outputElements);
  inputElements.forEach((input) => {
  input.addEventListener("input", updateText);
 
// Hotkeys: When the user presses Enter in an input, it should move the cursor to the next input in the story.
  input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      let nextInput = inputElementsArray[inputElementsArray.indexOf(input) + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  });
});
}





