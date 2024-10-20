const navLink = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const menuItem = document.getElementById("item");

//toggles visibility of nav links
navLink.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetSection = link.getAttribute("data-section");

    sections.forEach((section) => {
      section.style.display = "none";
    });

    document.getElementById(targetSection).style.display = "block";
  });
});

//renders the fetch data as an item card
function renderItem(coffee) {
  const itemCard = document.createElement("div");
  itemCard.innerHTML = `
    <img class="icon" src="${coffee.img}">
    <article class="item">
      <h3>${coffee.name}</h3>
      <p class="flavor">${coffee.description}</p> 
      <p class="price">Price:$ ${coffee.price}</p>
    </article>
    <hr class="item-hr">
  `;
  menuItem.appendChild(itemCard);
}

// fetch
function fetchData() {
  fetch("http://localhost:4000/menu")
    .then((res) => res.json())
    .then((data) => {
      const coffeeHeader = document.createElement("h2");
      coffeeHeader.textContent = "COFFEE";
      menuItem.appendChild(coffeeHeader);
      data.coffee.map((coffee) => renderItem(coffee));

      const hr = document.createElement("h2");
      hr.innerHTML = `
      <hr>
      <h2> DESSERT </h2>
      `;
      menuItem.appendChild(hr);

      data.desserts.map((dessert) => renderItem(dessert));
    });
}

function initialize() {
  fetchData();
}

initialize();
