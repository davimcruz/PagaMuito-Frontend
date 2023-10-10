function getRandomPercentageForHourAndGame(hour, gameName) {
    const basePercentage = 85;
    const maxPercentage = 98;
    const hourFactor = (hour % 24) / 24;
    const randomSeed = parseInt(gameName.charCodeAt(0)) + parseInt(gameName.charCodeAt(gameName.length - 1));
    const calculatedPercentage = basePercentage + (hourFactor * (maxPercentage - basePercentage)) + (randomSeed % 5);
    return Math.min(maxPercentage, Math.floor(calculatedPercentage));
}

function updateProgressBars() {
    const games = document.querySelectorAll('.game-link');
    const currentHour = new Date().getHours();

    games.forEach(game => {
        const progressBar = document.createElement('div');
        progressBar.className = 'progress';
        progressBar.style.margin = 'auto';
        progressBar.style.width = '120px';

        const gameName = game.getAttribute('data-game');
        const randomPercentage = getRandomPercentageForHourAndGame(currentHour, gameName);

        progressBar.innerHTML = `
            <div class="progress-bar bg-success" role="progressbar" style="width: ${randomPercentage}%; color: black; font-weight: bold" aria-valuenow="${randomPercentage}" aria-valuemin="0" aria-valuemax="100">${randomPercentage}%</div>
        `;

        game.appendChild(progressBar);
    });
}

// Calling the function to update progress bars when the page loads
updateProgressBars();

function reveal() {
    let reveals = document.querySelectorAll('.reveal');

    for (let p = 0; p < reveals.length; p++) {
        let elementTop = reveals[p].getBoundingClientRect().top;

        if (elementTop < window.innerHeight * 1.2) {
            reveals[p].classList.add('revealed');
        }
    }
}

window.onscroll = reveal;
window.onload = reveal;