//  nav scroll   --------
window.addEventListener("scroll", () => {
  const navContainer = document.querySelector(".nav-container");

  if (window.scrollY > 100) {
    navContainer.classList.add("scrolled");
  } else {
    navContainer.classList.remove("scrolled");
  }
});

//  programs dropdown menu ----------

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
