const boardElement = document.getElementById("board");
const overlayElement = document.getElementById("overlay");
const statusElement = document.getElementById("status");
const generateOpportunityButton = document.getElementById("generate-opportunity");
const whatsAppBanner = document.getElementById("whatsapp");

function generateMinesBoard(diamond_positions) {
    const grid = Array.from({ length: 25 }, (_, i) =>
        diamond_positions.includes(i) ? "💎" : "💣"
    );
    return Array.from({ length: 5 }, (_, i) => grid.slice(i * 5, i * 5 + 5));
}

function renderBoard(board) {
    boardElement.innerHTML = board
        .map((row) =>
            row
                .map(
                    (cell) =>
                        `<div><img src="${cell === "💎"
                            ? "/assets/img/diamond.png"
                            : "/assets/img/empty.png"
                        }" alt="${cell}"></div>`
                )
                .join("")
        )
        .join("");
}

function toggleGenerateOpportunityButton(disabled, timeRemaining) {
    generateOpportunityButton.disabled = disabled;
    if (disabled) {
        generateOpportunityButton.textContent = `Aguarde ${timeRemaining} segundos`;
    } else {
        generateOpportunityButton.textContent = "Gerar oportunidade";
    }
}

function startCountdown(duration) {
    let timeRemaining = duration;
    toggleGenerateOpportunityButton(true, timeRemaining);
    const countdownInterval = setInterval(() => {
        timeRemaining--;
        if (timeRemaining >= 0) {
            toggleGenerateOpportunityButton(true, timeRemaining);
        } else {
            clearInterval(countdownInterval);
            toggleGenerateOpportunityButton(false);
        }
    }, 1000);
}

function handleClickGenerateOpportunity() {
    startCountdown(60);

    overlayElement.style.display = "block";
    statusElement.style.display = "block";
    statusElement.parentNode.style.opacity = "1";
    const diamond_positions = randomDiamondPositions();
    const board = generateMinesBoard(diamond_positions);
    renderBoard(board);

    statusElement.textContent = "Identificando possível oportunidade";

    setTimeout(() => {
        statusElement.textContent = "Oportunidade detectada!";
    }, 2000);

    setTimeout(() => {
        statusElement.textContent = "Padrão obtido com sucesso";
    }, 3000);

    setTimeout(() => {
        overlayElement.style.display = "none";
        statusElement.style.display = "none";
        statusElement.parentNode.style.opacity = "0";
    }, 6000);
}

function randomDiamondPositions() {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 25));
}

generateOpportunityButton.addEventListener("click", handleClickGenerateOpportunity);

// Gere um novo tabuleiro quando a página for carregada
document.addEventListener("DOMContentLoaded", () => {
    handleClickGenerateOpportunity();
});

document.getElementById('GoToGamesButton').addEventListener('click', selectGame);