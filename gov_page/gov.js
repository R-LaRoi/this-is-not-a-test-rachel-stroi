document.addEventListener("DOMContentLoaded", function () {
  renderGovCards(officialsData);
});

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
