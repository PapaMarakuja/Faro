function typeWriter(elemento) {
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = '';
	textoArray.forEach((letra, i) => {
		setTimeout(() => (elemento.innerHTML += letra), 15 * i);
	});
}

function colcoarBtns() {}

function playAudio(url, title) {
	new Audio(url).play();
	document.getElementById('text').innerHTML = `<h1>${title}</h1>`;
	const titulo = document.querySelector('h1');

	typeWriter(titulo);
}

const audioArea = document.getElementById('audio');
const audios = [
	{
		audio: './assets/audio/ai-mamae-rodrigo-faro.mp3',
		title: 'Ai mamãe',
	},
	{
		audio: './assets/audio/aiaiai-rodrigo-faro.mp3',
		title: 'Aiaiai',
	},
	{
		audio: './assets/audio/cavalo-rodrigo-faro.mp3',
		title: 'Cavalo',
	},
	{
		audio: './assets/audio/concussao-rodrigo-faro.mp3',
		title: 'Concussão',
	},
	{
		audio: './assets/audio/danca-gatinho-danca-rodrigo-faro-reverso.mp3',
		title: 'Dança gatinho',
	},
	{
		audio: './assets/audio/demais-faro-hq_WRnItjN.mp3',
		title: 'Demais',
	},
	{
		audio: './assets/audio/demais-rodrigo-faro.mp3',
		title: 'Demaiss',
	},
	{
		audio: './assets/audio/e-brincadeira-hein-rodrigo-faro.mp3',
		title: 'È brincadeira hein',
	},
	{
		audio: './assets/audio/ele-g0sta.mp3',
		title: 'Ele gosta',
	},
	{
		audio: './assets/audio/ele-goooooooooooooosta.mp3',
		title: 'Ele goosta',
	},
	{
		audio: './assets/audio/iiiiiiihhhhhhhhhaaaaaaaaaa-reverso.mp3',
		title: 'Iiiihaa',
	},
	{
		audio: './assets/audio/nao-rodrigo-faro.mp3',
		title: 'Não',
	},
	{
		audio: './assets/audio/olha-ele-ae_SSZb6Lg.mp3',
		title: 'Olha ele',
	},
	{
		audio: './assets/audio/que-isso-meu-filho-calma-vai-dar-namoro.mp3',
		title: 'Que isso meu filho, calma',
	},
	{
		audio: './assets/audio/rodrigo-faro-sound.mp3',
		title: '???',
	},
	{
		audio: './assets/audio/som-inentendivel-rodrigo-faro.mp3',
		title: 'Som ineditável',
	},
	{
		audio: './assets/audio/tapa-rodrigo-faro.mp3',
		title: 'Tapa',
	},
	{
		audio: './assets/audio/tome-rodrigo-faro_xDXKGwq.mp3',
		title: 'Tome',
	},
	{
		audio: './assets/audio/ui-rodrigo-faro.mp3',
		title: 'Ui',
	},
	{
		audio: './assets/audio/uuuuueeeeeeepppaaaaaa.mp3',
		title: 'Ueeeepa',
	},
	{
		audio: './assets/audio/y2mate_rLgMJTu.mp3',
		title: '???',
	},
];
audios.forEach((x) => {
	audioArea.innerHTML = `${audioArea.innerHTML} 
    <div class="sound" onclick="playAudio('${x.audio}','${x.title}')">
        <img loading="lazy" src="./assets/images/button.webp" alt="btn" />
        <p>${x.title}</p>
    </div>`;
});
