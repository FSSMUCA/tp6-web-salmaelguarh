const form = document.getElementById("calcForm");
const error = document.getElementById("error");
const historyList = document.getElementById("history");

let historique = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const op = document.getElementById("operation").value;

    error.textContent = "";

    // Validation
    if (a === "" || b === "" || op === "") {
        error.textContent = "Tous les champs sont obligatoires.";
        return;
    }

    if (op === "/" && Number(b) === 0) {
        error.textContent = "Division par zéro interdite.";
        return;
    }

    let result;

    switch (op) {
        case "+":
            result = Number(a) + Number(b);
            break;
        case "-":
            result = Number(a) - Number(b);
            break;
        case "*":
            result = Number(a) * Number(b);
            break;
        case "/":
            result = Number(a) / Number(b);
            break;
    }

    const operationText = `${a} ${op} ${b} = ${result}`;
    historique.push(operationText);

    afficherHistorique();
});

function afficherHistorique() {
    historyList.innerHTML = "";

    historique.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}
