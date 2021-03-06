
const ul = document.querySelector("ul");
const button = document.getElementById("btn");

// Display the becode rules with fetch

fetch("becode.json")
  .then(function (result) {
    return result.json();
  })
  .then(function (data) {
    function displayRules() {
      data.forEach((elem) => {
        const list = document.createElement("li");

        list.innerHTML = elem;
        ul.appendChild(list);
        console.log(elem);
      });
    }
    button.addEventListener("click", displayRules);
    return data;
  });