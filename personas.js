function obtenerPersonas() {
  let resultado = new Promise((res, rej) => {
    fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
    .then(res => res.json())
    .then((resultado) => {
      // console.log('resultado', resultado);
      res(resultado);
    })
    .catch((err) => {
      console.log('El error fue:', err);
      rej(err);
   })
  })

  return resultado;
}

function obtenerPersonas2() {
  let resultado = new Promise((res, rej) => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then((resultado) => {
      // console.log('resultado', resultado);
      res(resultado);
    })
    .catch((err) => {
      console.log('El error fue:', err);
      rej(err);
   })
  })

  return resultado;
}

obtenerPersonas2().then(console.log);

function mostrarPersona(persona) {
  const li = document.createElement('li');
  li.setAttribute('class', 'persona');

  const valorBalance = parseFloat(persona.balance.replace('$', '').replace(',', ''));
  console.log('balance', parseFloat(persona.balance.replace('$', '').replace(',', '')));

  let color = 'green';
  if(valorBalance < 2000) {
    color = 'red';
  }

  const spanNombre = document.createElement('span');

  spanNombre.innerText = persona.last + ', ' + persona.first + ' ';

  const spanValor = document.createElement('span');

  spanValor.innerText = '(' + persona.balance + ')';
  spanValor.classList.add(color);

  const div = document.createElement('div');
  div.appendChild(spanNombre);
  div.appendChild(spanValor)

  li.appendChild(div);

  // li.innerHTML = persona.last + ", " + persona.first + ' (<span class="' + color + '">' + persona.balance + '</span>)';
  // li.innerText = persona.last + ", " + persona.first + ' (<span class="' + color + '">' + persona.balance + '</span>)';

  return li;
}

function mostrarPersonaEjemplo(persona) {
  const li = document.createElement('li');
  li.setAttribute('class', 'persona');

  li.innerText = 'texto de prueba';
  return li;
}

function mostrarPersonas() {
  let listaPersonas = document.getElementById('listaPersonas');
  obtenerPersonas().then((personas) => {

    for (let i = 0; i < personas.length; i++) {
      const persona = personas[i];

      const liPersona = mostrarPersona(persona);

      listaPersonas.appendChild(liPersona);
    }
  })
}

mostrarPersonas();
