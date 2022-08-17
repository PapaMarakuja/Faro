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

function runAudio(btn) {
	switch (btn) {
		case 00:
			console.log('btn 01');
			break;
		case 01:
			console.log('btn 02');
			break;
	}
}
