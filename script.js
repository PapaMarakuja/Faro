function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 15 * i);
    });
  }

  const titulo = document.querySelector('h1');


  typeWriter(titulo);