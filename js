async function searchCompany() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const response = await fetch("data/companies.json");
  const companies = await response.json();
  const result = companies.find(c => c.name.toLowerCase().includes(input));

  const output = document.getElementById("results");
  if (result) {
    output.innerHTML = `
      <h2>${result.name}</h2>
      <p><strong>Descrizione:</strong> ${result.descrizione}</p>
      <p><strong>Risultati Economici:</strong> ${result.risultati}</p>
      <p><strong>Competitor:</strong> ${result.competitor.join(", ")}</p>
      <p><strong>Mercato:</strong> ${result.mercato}</p>
      <p><strong>Idee di Sviluppo:</strong> ${result.idee}</p>
    `;
  } else {
    output.innerHTML = "<p>Nessun risultato trovato.</p>";
  }
}
