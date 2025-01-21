// Arrays for random words
const names = ["Alice", "Bob", "Charlie", "Daisy"];
const places = ["park", "museum", "zoo", "beach"];
const objects = ["giant banana", "talking robot", "mystical book", "dancing shoe"];
const actions = ["screamed", "laughed", "sang", "cried"];

// Function to generate random story
function generateStory() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomPlace = places[Math.floor(Math.random() * places.length)];
  const randomObject = objects[Math.floor(Math.random() * objects.length)];
  const randomAction = actions[Math.floor(Math.random() * actions.length)];

  const story = `${randomName} went to the ${randomPlace} and found a ${randomObject}. They ${randomAction} all the way home!`;
  document.getElementById("storyOutput").innerText = story;
}

// Add event listener to the button
document.getElementById("generateStory").addEventListener("click", generateStory);
