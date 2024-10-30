const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// text var
let storyText = "It was Halloween Night! The temperature measured 50 fahrenheit. Skully was excited to spend the night in solitude, fearing the night and all the ghosts that roam around just as it always should be. Furthermore, it was necessary to have a 300 pounds of skeletons in one's room on Halloween. However! :insertx: showed up and told them :inserty:. Due to the words, Skully ended up :insertz:";
let insertX = ["Jack Skellington", "A dragon", "A lion"];
let insertY = [`"I don't want to celebrate Halloween that way!"`, `"That's stupid!"`, `"Really? That's so boring."`];
let insertZ = [`turning everyone into pumpkins.`, `replying "You're stupid!".`,  `spending the whole night telling everyone that it's not boring when you're scared and that it's the proper way to spend Halloween!`];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

let xItem = randomValueFromArray(insertX); // name
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

// now replace placeholders in story text
newStory = newStory.replace(":insertx:", xItem);
newStory = newStory.replace(":inserty:", yItem);
newStory = newStory.replace(":insertz:", zItem);


function result() {

    let newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    // now replace placeholders in story text
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    // replace "Bob" with the given name
    newStory = newStory.replaceAll("Skully", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stones";
    const temperature =  Math.round((50-32)*(5/9)) + " centigrade";

    newStory = newStory.replaceAll("300 pounds", weight);
    newStory = newStory.replaceAll("94 fahrenheit", temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
