document.addEventListener("DOMContentLoaded", () => {
  fetch("quotes.json")
    .then(response => response.json())
    .then(data => buildSections(data));
});

function buildSections(data) {
  const container = document.getElementById("sections-container");

  data.sections.forEach(section => {
    // Section title
    const header = document.createElement("h3");
    header.textContent = section.name;
    container.appendChild(header);

    // Container for tiles
    const tilesContainer = document.createElement("div");
    tilesContainer.classList.add("tiles-container");

    // Create tiles
    section.quotes.forEach((quoteObj, index) => {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.textContent = `Quote ${index + 1}`;

      const content = document.createElement("div");
      content.classList.add("tile-content");
      content.innerHTML = `
        <p><strong>Quote:</strong> ${quoteObj.quote}</p>
        <p><strong>Application:</strong> ${quoteObj.application}</p>
      `;

      tile.addEventListener("click", () => {
        content.style.display =
          content.style.display === "block" ? "none" : "block";
      });

      tile.appendChild(content);
      tilesContainer.appendChild(tile);
    });

    container.appendChild(tilesContainer);
  });
}

