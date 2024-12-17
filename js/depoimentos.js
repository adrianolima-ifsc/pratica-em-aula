const secao = document.createElement('section');
secao.classList.add('depoimentos');

const titulo = document.createElement('h2');
titulo.classList.add('depoimentos__titulo');
titulo.textContent = 'Depoimentos';

secao.append(titulo);

const conteudo = document.createElement('div');
conteudo.classList.add('depoimentos__conteudo');

secao.append(conteudo);

const depoimentos = [
    {
        autor: 'Zé Ninguém',
        texto: 'O lugar é muito bonito. Adorei a experiência.'
    },
    {
        autor: 'Maria Filó',
        texto: 'Passar momentos junto à natureza é sempre revigorante.'
    },
    {
        autor: 'João Biriba',
        texto: 'Não vejo a hora de voltar. O local é incrível.'
    },
    {
        autor: 'Ana do Mé',
        texto: 'Acampar é a minha paixão e ali eu pude realizá-la'
    }
];

depoimentos.forEach(depoimento => {
    const conteiner = document.createElement('div');
    conteiner.classList.add('depoimentos__conteiner');

    const texto = document.createElement('p');
    texto.classList.add('depoimentos__texto');
    texto.textContent = depoimento.texto;

    const autor = document.createElement('p');
    autor.classList.add('depoimentos__autor');
    autor.textContent = depoimento.autor;

    conteiner.append(texto);
    conteiner.append(autor);

    conteudo.append(conteiner);
});

const main = document.querySelector('main');
main.lastElementChild.before(secao);
// main.append(secao);