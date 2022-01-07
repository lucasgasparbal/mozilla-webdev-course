const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ["Willy the Goblin","Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen","Disneyland","the White House"];
let insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];
let randomInputArrays = [insertX,insertY,insertZ];

const StoryPlaceholders = [":insertx:",":inserty:",":insertz:"];
randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;

  let randomInputs = []
  for (let i = 0; i < 3; i++){
    randomInputs.push(randomValueFromArray(randomInputArrays[i]));
  }

  for (let i = 0; i < randomInputs.length; i++){
      oldStory = "";
      while(oldStory !== newStory){
        oldStory = newStory;
        newStory = newStory.replace(StoryPlaceholders[i],randomInputs[i]);
      }
      
  }

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300);
    let temperature =  Math.round(94);
    weight = Math.round(weight*0.071429)+" stone"; 
    temperature = Math.round((temperature-32)*(5/9))+ " centigrade";
    newStory = newStory.replace("94 fahrenheit",temperature);
    newStory = newStory.replace("300 pounds",weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}