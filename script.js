function searchKeyword() {

    let input = document.getElementById("searchInput").value.toLowerCase();
    let resultsDiv = document.getElementById("results");

    let output = "";

    // ===== PLAGES =====
    if (input === "plage" || input === "plages") {
        output = `
            <h2>Plages recommandées</h2>
            <p>🌴 Bora Bora - Polynésie Française</p>
            <p>🏖 Maldives</p>
            <p>🌊 Bali - Indonésie</p>
        `;
    }

    // ===== TEMPLES =====
    else if (input === "temple" || input === "temples") {
        output = `
            <h2>Temples célèbres</h2>
            <p>🕌 Angkor Wat - Cambodge</p>
            <p>⛩ Temple Kiyomizu-dera - Japon</p>
            <p>🛕 Temple d'Or - Inde</p>
        `;
    }

    // ===== PAYS =====
    else if (input === "pays" || input === "country" || input === "countries") {
        output = `
            <h2>Pays recommandés</h2>
            <p>🇫🇷 France</p>
            <p>🇯🇵 Japon</p>
            <p>🇨🇦 Canada</p>
        `;
    }

    else {
        output = "<p>Aucun résultat trouvé.</p>";
    }

    resultsDiv.innerHTML = output;
}


// ===== RESET =====
function resetSearch() {
    document.getElementById("searchInput").value = "";
    document.getElementById("results").innerHTML = "";
}
