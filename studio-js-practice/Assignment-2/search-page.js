const searchId = document.getElementById("search");
let mockSuggestions = [
  "lenovo laptop",
  "laptop backpacks for men",
  "laptop backpacks for women",
  "laptop bag men",
  "laptop bag women",
  "laptop bag in laptop bag",
  "laptop bag leather",
];

searchId.addEventListener("keyup", () => {
  if (searchId.value.length > 3) {
    optimizedFunction();
  } else {
    removeElement();
  }
});

const getSuggestions = () => {
  const suggestionsDisplay = document.getElementById("suggestions-display");
  removeElement();
  for (let entry of mockSuggestions) {
    if (entry.match(searchId.value)) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(entry));
      suggestionsDisplay.appendChild(li);
    }
  }
};

const debounce = (fn, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

const optimizedFunction = debounce(getSuggestions, 1000);

const removeElement = () => {
  let list = document.querySelectorAll("#suggestions-display");
  for (let item of list) {
    item.innerHTML = "";
  }
};
