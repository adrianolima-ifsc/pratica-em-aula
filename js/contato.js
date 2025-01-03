const formulario = document.querySelector('.contato__formulario');

const contatos = JSON.parse(localStorage.getItem('contatos')) || [];
const preenchido = JSON.parse(localStorage.getItem('preenchido')) || {};

for (let id in preenchido) {
    document.querySelector(`#${id}`).value = preenchido[id];
}

formulario.addEventListener("submit", evento => {
    evento.preventDefault();

    let nome = document.querySelector('#input-nome').value;
    let email = document.querySelector('#input-email').value;
    let periodo = document.querySelector('#input-periodo').value;
    let mensagem = document.querySelector('#input-mensagem').value;

    const aviso = document.querySelector('.contato__texto');
    if ( !nome || !email || !periodo || !mensagem ) {
        aviso.textContent = "Preencha todos os campos";
        aviso.classList.add('cuidado');
        return
    }

    const contato = { nome, email, periodo, mensagem };
    contatos.push(contato);

    localStorage.setItem('contatos', JSON.stringify(contatos));

    console.log(contatos);

    evento.target.reset();
    aviso.textContent = "Responderemos depois da pescaria."
    aviso.classList.remove('cuidado');

    localStorage.removeItem('preenchido');

    atualizaTabela();
});

formulario.addEventListener("change", evento => {
    preenchido[evento.target.id] = evento.target.value;
    localStorage.setItem('preenchido', JSON.stringify(preenchido));
})
