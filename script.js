//  nav scroll   -------------------------

document.addEventListener("DOMContentLoaded", function () {
  const navContainer = document.querySelector(".nav-container");
  const mobileMenu = document.querySelector(".mobile-menu-btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navContainer.classList.add("scrolled");
    } else {
      navContainer.classList.remove("scrolled");
    }
  });

  mobileMenu.addEventListener("click", function () {
    navContainer.classList.toggle("mobile-active");
    mobileMenu.classList.toggle("active");
  });
});
//  programs dropdown menu ------------------------

document.addEventListener("DOMContentLoaded", () => {
  const toggleCheckbox = document.getElementById("programs-dropdown-toggle");
  const toggleButton = document.querySelector(".programs-button");

  // show menu
  toggleButton.addEventListener("click", (e) => {
    e.preventDefault();
    toggleCheckbox.checked = !toggleCheckbox.checked;
  });

  //close menu
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".programs-menu")) {
      toggleCheckbox.checked = false;
    }
  });

  // select programs
  const programCheckboxes = document.querySelectorAll(".program-checkbox");

  programCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      console.log(
        checkbox.id + " is " + (checkbox.checked ? "checked" : "unchecked")
      );
    });
  });
});

//  programs data cards  -----------------------------

document.addEventListener("DOMContentLoaded", function () {
  renderPrograms(programsData);
});

function renderPrograms(programItems) {
  const container = document.getElementById("program-container");

  programItems.forEach((program) => {
    const programCard = document.createElement("div");
    programCard.className = "program-card";

    const programHTML = `
            <img src="${program.image}" alt="${program.title}" class="program-image">
            <div class="program-category">${program.program}</div>
            <h2 class="program-title">${program.title}</h2>
            <p class="program-subtitle">${program.subtitle}</p>
        `;

    programCard.innerHTML = programHTML;
    container.appendChild(programCard);
  });
}
