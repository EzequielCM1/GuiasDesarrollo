"use strict";


// --- RENDER DINÁMICO --- //
document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("content");
  const asideList = document.getElementById("sectionList");

  data.forEach((seccion, index) => {
    const sectionId = `seccion-${index}`;
    const section = document.createElement("section");
    section.classList.add("section");
    section.id = sectionId;

    const title = document.createElement("h2");
    title.textContent = seccion.titulo;
    section.appendChild(title);

    const table = document.createElement("table");
    table.innerHTML = `<thead><tr><th>Función / Método</th><th>Ejemplo / Sintaxis</th><th>Descripción</th></tr></thead>`;
    const tbody = document.createElement("tbody");

    seccion.contenido.forEach(fila => {
      const tr = document.createElement("tr");
      fila.forEach(celda => {
        const td = document.createElement("td");
        td.textContent = celda;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    section.appendChild(table);
    main.appendChild(section);

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${sectionId}`;
    a.textContent = seccion.titulo;
    li.appendChild(a);
    asideList.appendChild(li);
  });

  // Buscador
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase().trim();
    let found = false;
    let foundSection = null;
    let foundRow = null;

    document.querySelectorAll(".highlight-row").forEach(row => row.classList.remove("highlight-row"));
    if (term.length < 2) return;

    document.querySelectorAll("section").forEach(section => {
      section.querySelectorAll("tbody tr").forEach(tr => {
        if (tr.textContent.toLowerCase().includes(term) && !found) {
          tr.classList.add("highlight-row");
          found = true;
          foundSection = section;
          foundRow = tr;
        }
      });
    });

    if (foundSection && foundRow) {
      foundSection.scrollIntoView({behavior: "smooth", block: "start"});
      setTimeout(() => { foundRow.scrollIntoView({behavior: "smooth", block: "center"}); }, 400);
    }
  });
});
