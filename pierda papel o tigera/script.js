function playGame(playerChoice) {
    const choices = ['piedra', 'papel', 'tijeras'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    // Mostrar las elecciones
    document.getElementById('player-choice').textContent = playerChoice;
    document.getElementById('computer-choice').textContent = computerChoice;

    let resultMessage = '';
    if (playerChoice === computerChoice) {
        resultMessage = 'Es un empate';
    } else if (
        (playerChoice === 'piedra' && computerChoice === 'tijeras') ||
        (playerChoice === 'papel' && computerChoice === 'piedra') ||
        (playerChoice === 'tijeras' && computerChoice === 'papel')
    ) {
        resultMessage = '¡Ganaste!';
    } else {
        resultMessage = 'La computadora gana';
    }

    document.getElementById('winner').textContent = resultMessage;
}
