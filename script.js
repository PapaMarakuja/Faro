function typeWriter(elemento) {
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = '';
	textoArray.forEach((letra, i) => {
		setTimeout(() => (elemento.innerHTML += letra), 15 * i);
	});
}

const titulo = document.querySelector('h1');

typeWriter(titulo);

function colcoarBtns() {}

function playAudio(url) {
	new Audio(url).play();
}

const audioArea = document.getElementById('audio');
const audios = [
	{
		audio: './assets/audio/ai-mamae-rodrigo-faro.mp3',
		title: 'Ai mamãe',
	},
	{
		audio: 'url2',
		title: 'Ele gosta',
	},
];
audios.forEach((x) => {
	audioArea.innerHTML = `${audioArea.innerHTML} 
    <div class="sound" onclick="playAudio('${x.audio}')">
        <img src="./assets/images/button.png" alt="btn" />
        <p>${x.title}</p>
    </div>`;
});
