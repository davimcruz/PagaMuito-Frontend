const btnGenerate = document.getElementById('btnGenerate');
btnGenerate.addEventListener('click', getOpportunity);

const normalRounds = document.querySelector('#normalRounds');
const turboRounds = document.querySelector('#turboRounds');
const loading = document.querySelector('#loadingMessages');
const validade = document.querySelector('#validade');

async function getOpportunity() {
    btnGenerate.disabled = true;
    setTimeout(() => {
        btnGenerate.disabled = false;
    }, 60000);

    generatingAudio();

    const loadingTexts = [
        `<span class="MatrixTextEffect" style="font-size:1em">Estabelecendo conexão com o servidor</span>`,
        `<span class="MatrixTextEffect" style="font-size:1em">Buscando oportunidades na plataforma..</span>`,
        `<span class="MatrixTextEffect" style="font-size:1em">Não atualize esta página</span>`,
        `<span class="MatrixTextEffect Pulse" style="font-size:1.4em; text-align: center;"><b>ESTAMOS IDENTIFICANDO<br>UM PADRÃO</b></span>`
    ];

    async function showLoadingTexts() {
        for (const text of loadingTexts) {
            loading.innerHTML = text;

            // Obtendo e ajustando a altura
            const contentHeight = loading.scrollHeight;
            loading.style.height = `${contentHeight}px`;

            await new Promise(resolve => setTimeout(resolve, 1500));
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    await showLoadingTexts();

    const result = {
        normalRounds: Math.floor(Math.random() * 10) + 1,
        turboRounds: Math.floor(Math.random() * 10) + 1
    };

    updateOpportunityInfo(result);

    loading.innerHTML = `<span class="MatrixTextEffect" style="font-size:2em"><b>OPORTUNIDADE IDENTIFICADA</b></span>`;
    const contentHeight = loading.scrollHeight;
    loading.style.height = `${contentHeight}px`;
}

// Função para atualizar informações de oportunidade
function updateOpportunityInfo(result) {
    normalRounds.innerHTML = `<b>${result.normalRounds} RODADAS</b>`;
    turboRounds.innerHTML = `<b>${result.turboRounds} RODADAS</b>`;
    const currentTime = new Date();
    const validadeTime = new Date(currentTime.getTime() + 360000);
    const hours = validadeTime.getHours();
    const minutes = validadeTime.getMinutes();
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    validade.innerHTML = `<b>${formattedTime}</b>`;
}

async function generatingAudio() {
    let generatingAudio = document.querySelector("#generatingAudio");
    generatingAudio.play();
}

async function successAudio() {
    let successAudio = document.querySelector("#successAudio");
    await successAudio.play();
}
