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
  const divTime = document.getElementById("timer");
  const p = document.createElement("p");
  const firstDate = new Date(localStorage.getItem("date-item"));
  p.innerText = Math.floor((new Date() - firstDate) / 1000);
  divTime.appendChild(p);
  newItemDate();
  const TIME_BTN = document.querySelector('button[type="button"] ');
  TIME_BTN.onclick = newItemDate;
  setInterval(timePassed, 1000);

  /////////extra
  const WARNING_BTN = document.getElementById("show");
  WARNING_BTN.onclick = createCard;
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
  if (!localStorage.getItem("date-item")) {
    localStorage.setItem("date-item", new Date());
  }
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
/////// test card create

const createCard = function () {
  const containerCard = document.getElementById("content");

  profs.forEach(prof => {
    const col = document.createElement("div");
    col.classList.add("col");
    const card = document.createElement("div");
    card.classList.add("card");
    hide(card);
    card.innerHTML = `
        <img src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3NvcmV8ZW58MHx8MHx8fDA%3D"
        alt="img di un prof" />
        <div>
          <h2>${prof.name} ${prof.surname}</h2>
          <ul>
            ${prof.units.map(unit => ` <li>${unit}</li>`).join("")}
          </ul>
        </div>
      `;

    col.appendChild(card);
    containerCard.appendChild(col);
  });
};
const hide = function (card) {
  card.addEventListener("click", function () {
    card.remove();
  });
};
