window.addEventListener("DOMContentLoaded", () => {
  let name = localStorage.getItem("newName");
  if (!name) {
    name = "Nessun valore attuale";
  }
  console.log(name);
  let valueToModifi = document.getElementById("current-value");
  valueToModifi.innerText = name;
  const GREEN_BTN = document.getElementById("save");
  const RED_BTN = document.getElementById("remove");
  GREEN_BTN.onclick = addLocalName;
  RED_BTN.onclick = removeLocalName;

  //////////////////////////////////////////
  newItemDate();
  const TIME_BTN = document.querySelector('button[type="button"] ');
  TIME_BTN.onclick = newItemDate;
  setInterval(timePassed, 1000);
});

const addLocalName = function (e) {
  e.preventDefault();
  let valueToTake = document.getElementById("nome").value;
  localStorage.setItem("newName", valueToTake);
  let valueToModifi = document.getElementById("current-value");
  valueToModifi.innerText = valueToTake;
  console.log(valueToTake);
};

const removeLocalName = function (e) {
  e.preventDefault();
  let valueToModifi = document.getElementById("current-value");
  let valueToTake = document.getElementById("nome");
  localStorage.removeItem("newName");
  valueToModifi.innerText = "";
  valueToTake.value = "";
};
const newItemDate = function () {
  localStorage.setItem("date-item", new Date());
};
const timePassed = function () {
  const firstDate = new Date(localStorage.getItem("date-item"));
  const diffTime = Math.floor((new Date() - firstDate) / 1000);
  const divTime = document.getElementById("timer");
  while (divTime.firstChild) {
    divTime.firstChild.remove();
  }

  let p = document.createElement("p");
  p.innerHTML = diffTime;
  divTime.appendChild(p);
};
