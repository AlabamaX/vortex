function updateImages() {
    const imageElement = document.getElementById("randomImage");
    const timeLabel = document.getElementById("timeLabel");
    const countLabel = document.getElementById("countLabel");

    // Trocar a imagem
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    imageElement.src = `images/${randomNumber}.jpg`;

    // Calcular o horário atual + 2 minutos
    const currentTime = new Date();
    currentTime.setMinutes(currentTime.getMinutes() + Math.floor(Math.random() * 3) + 1);

    // Formatar o horário em HH:mm
    const formattedTime = currentTime.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    });

    // Atualizar o label do horário
    timeLabel.textContent = `Horário para Jogar: ${formattedTime}`;
        
    let button = document.getElementById('changeButton');
    let timerElement = document.getElementById('timer');
    button.disabled = true;
    button.childNodes[0].nodeValue = ''; // Limpa apenas o texto 'Gerar Hack'
    timerElement.style.display = 'inline'; // Mostra o timer dentro do botão
    startTimer(button, timerElement);

    countLabel.textContent = `Número de Tentativas: ${Math.floor(Math.random() * 10) + 1}`
}

function getRandomIndices(min, max) {
    const count = Math.floor(Math.random() * (max - min + 1) + min);
    const indices = new Set();
    while (indices.size < count) {
        indices.add(Math.floor(Math.random() * 25));
    }
    return Array.from(indices);
}

function startTimer(button, timerElement) {
    let counter = 20;
    timerElement.innerText = formatTime(counter);
    const timeLabel = document.getElementById("timeLabel");
    const countLabel = document.getElementById("countLabel");
    const interval = setInterval(() => {
        if (counter > 0) {
            timerElement.innerText = formatTime(--counter);
        } else {
            clearInterval(interval);
            button.disabled = false;
            timeLabel.textContent = 'Horário para Jogar:';
            countLabel.textContent = 'Número de Tentativas:'
            button.childNodes[0].nodeValue = 'Gerar Hack'; // Restaura o texto original
            timerElement.style.display = 'none'; // Oculta o timer
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${padTime(minutes)}:${padTime(remainingSeconds)}`;
}

function padTime(num) {
    return num.toString().padStart(2, '0');
}


function accessGame() {
    window.open("https://go.aff.vaidebet.com/ckueom55", "_blank"); 
}

