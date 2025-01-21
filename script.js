// Arrays for random words
const places = ["park", "museum", "zoo", "beach"];
const objects = ["giant banana", "talking robot", "mystical book", "dancing shoe"];
const actions = ["screamed", "laughed", "sang", "cried"];

// Function to generate a personalized story
function generateStory() {
  const userNameInput = document.getElementById("userName").value.trim();
  const userName = userNameInput || "Someone"; // Default to "Someone" if no name is provided

  const randomPlace = places[Math.floor(Math.random() * places.length)];
  const randomObject = objects[Math.floor(Math.random() * objects.length)];
  const randomAction = actions[Math.floor(Math.random() * actions.length)];

  const story = `${userName} went to the ${randomPlace} and found a ${randomObject}. They ${randomAction} all the way home!`;
  document.getElementById("storyOutput").innerText = story;
}

// Event listener for the button
document.getElementById("generateStory").addEventListener("click", generateStory);
