const btnAddTopico = document.querySelector('.btn-new-topic');
const formQuestions = document.querySelector('.form-questions');
const btnTopicoEnviado = document.querySelector('.btn-enviar-topico');
const btnRespostas = document.querySelector('.open-answers');

btnRespostas.addEventListener('click', () => {
    document.querySelector('.answers').classList.toggle('ativo')
})

btnTopicoEnviado.addEventListener('click', event => {
    event.preventDefault();
    formQuestions.classList.remove('ativo');
    document.querySelector('.discussao-topico-enviado').classList.add('ativo');
    document.querySelector('.aguardando-feedback').classList.add('ativo');
})

btnAddTopico.addEventListener('click', () => {
    formQuestions.classList.add('ativo');
    document.querySelector('.discussao-adicionar-topico').classList.remove('ativo');
})