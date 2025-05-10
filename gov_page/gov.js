document.addEventListener("DOMContentLoaded", function () {
  renderGovCards(officialsData);
  renderGovLinks(govData);
  renderAgencyMenu(agenciesMenu);

  const toggleCheckbox = document.getElementById("agency-toggle");
  const agencyMenuContainer = document.querySelector(".agency-menu");

  // close agency menu -------------------------------
  document.addEventListener("click", function (e) {
    if (
      agencyMenuContainer &&
      toggleCheckbox &&
      !agencyMenuContainer.contains(e.target)
    ) {
      toggleCheckbox.checked = false;
    }
  });
});

// governmemt officials cards ---------------------------------

function renderGovCards(officialsData) {
  const container = document.getElementById("gov-off");
  const ulGovCards = document.createElement("ul");
  ulGovCards.classList.add("officials");

  officialsData.forEach((official) => {
    const liOffCard = document.createElement("li");
    liOffCard.innerHTML = ` 
    <div class="gov-card-content">
    <div class="off-image-container">
    <img class="off-image" src="${official.image}" alt="${official.name} portrait" />
    </div>
    <div class="officials-text">
        <h3 class="off-title">${official.title}</h3>
        <h3 class="off-name">${official.name}</h3>
        <p class="off-subtext">${official.text}</p>
        <a href="${official.socials}" class="gov-card-link">Learn more about ${official.name} </a>
    </div>
</div>
    `;
    ulGovCards.appendChild(liOffCard);
  });

  container.appendChild(ulGovCards);
}

// government branch links dropdown menu -----------------------------------------
function renderGovLinks() {
  const container = document.getElementById("gov-links-container");

  const ulElement = document.createElement("ul");
  ulElement.className = "gov-links";

  govData.forEach((branch) => {
    const liElement = document.createElement("li");
    liElement.className = "gov-branch";
    liElement.innerHTML = `${branch.branch} <i class="fa-solid fa-chevron-down"></i>`;

    const dropdownContent = document.createElement("div");
    dropdownContent.className = "dropdown-content";

    const linksList = document.createElement("ul");
    linksList.className = "branch-links";

    branch.links.forEach((link) => {
      const linkItem = document.createElement("li");
      linkItem.textContent = link;
      linksList.appendChild(linkItem);
    });

    dropdownContent.appendChild(linksList);
    liElement.appendChild(dropdownContent);

    liElement.addEventListener("click", function (e) {
      const activeDropdowns = document.querySelectorAll(".gov-branch.active");
      activeDropdowns.forEach((dropdown) => {
        if (dropdown !== this) {
          dropdown.classList.remove("active");
        }
      });
      this.classList.toggle("active");
      e.stopPropagation();
    });

    ulElement.appendChild(liElement);
  });

  container.appendChild(ulElement);
}

document.addEventListener("click", function () {
  const activeDropdowns = document.querySelectorAll(".gov-branch.active");
  activeDropdowns.forEach((dropdown) => {
    dropdown.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleCheckbox = document.getElementById("agency-dropdown-toggle");
  const toggleButton = document.querySelector(".agency-button");

  // show menu
  toggleButton.addEventListener("click", (e) => {
    e.preventDefault();
    toggleCheckbox.checked = !toggleCheckbox.checked;
  });

  //close menu
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".agency-menu")) {
      toggleCheckbox.checked = false;
    }
  });
});

// agency dropdown menu selections ------------------------------------------------------------
function renderAgencyMenu(agenciesMenu) {
  const container = document.querySelector(".agency-links");
  container.innerHTML = ""; // Clear previous content
  const ulAgencyMenu = document.createElement("ul");
  agenciesMenu.forEach((menuItem, idx) => {
    const agencyItem = document.createElement("li");
    const id = `agency-item-${idx}`;
    const agencyHTML = `
      <input type="checkbox" id="${id}" class="agency-checkbox">
      <label for="${id}" class="agency-link">${menuItem.label}</label>
    `;
    agencyItem.innerHTML = agencyHTML;
    ulAgencyMenu.appendChild(agencyItem);
  });
  container.appendChild(ulAgencyMenu);
}
