function atualizaTabela() {

    let tabela = document.querySelector('table');

    tabela = document.createElement('table');

    const cabecalho = document.createElement('tr');

    const tituloNome = document.createElement('th');
    tituloNome.textContent = 'Nome';
    cabecalho.appendChild(tituloNome);

    const tituloEmail = document.createElement('th');
    tituloEmail.textContent = 'E-mail';
    cabecalho.appendChild(tituloEmail);

    const tituloPeriodo = document.createElement('th');
    tituloPeriodo.textContent = 'Período';
    cabecalho.appendChild(tituloPeriodo);

    const tituloMensagem = document.createElement('th');
    tituloMensagem.textContent = 'Mensagem';
    cabecalho.appendChild(tituloMensagem);

    tabela.appendChild(cabecalho);

    document.querySelector('main').appendChild(tabela);

    const contatosRecuperados = JSON.parse(localStorage.getItem("contatos")) || {};

    contatosRecuperados.forEach(contato => {

        const linha = document.createElement('tr');

        for (let dado in contato) {

            const celula = document.createElement('td');
            celula.textContent = contato[dado];
            linha.appendChild(celula);
        }

        tabela.appendChild(linha);
    })
}

atualizaTabela();