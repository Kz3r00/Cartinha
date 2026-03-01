const mensagens = [
    "Seu sorriso ilumina até os dias mais nublados, mesmo de longe.",
    "Sua pele clara reflete a luz como a lua reflete o sol.",
    "Seu rosto bonito é a tela onde pinto meus sonhos mais doces.",
    "Seus olhos perfeitos guardam segredos que eu queria descobrir.",
    "A delicadeza do seu rosto é como uma brisa suave em meu coração.",
    "Mesmo distante, sinto a gentileza do seu olhar atravessar a tela.",
    "A luz da sua pele clara ilumina as sombras dos meus dias.",
    "Seu rosto é a obra de arte que eu contemplo todos os dias.",
    "Seus olhos são faróis que guiam meus pensamentos até você.",
    "A suavidade do seu rosto acalma minha alma à distância.",
    "Você tem a beleza das coisas raras e preciosas.",
    "Seu cabelo é como um jardim em movimento.",
    "Sua pele clara é como porcelana, delicada e eterna.",
    "Seu rosto bonito é a primeira coisa que vejo quando fecho os olhos.",
    "Seus olhos perfeitos são o espelho de uma alma linda.",
    "A gentileza do seu rosto transborda em cada palavra sua.",
    "Distância nenhuma apaga a imagem do seu rosto em minha mente.",
    "Seu cabelo colorido é a prova de que a beleza pode ser livre.",
    "Sua pele clara tem o tom da paz que sinto ao pensar em você.",
    "Seu rosto é a definição de harmonia e perfeição.",
    "Seus olhos carregam o brilho das estrelas que iluminam minha noite.",
    "A delicadeza do seu rosto me faz querer ser mais gentil.",
    "Mesmo longe, seu rosto bonito é meu refúgio.",
    "Seu cabelo colorido é como um sonho que não quero acordar.",
    "Sua pele clara é a tela onde a vida pintou a perfeição.",
    "Seu rosto tem a beleza suave de um amanhecer.",
    "Seus olhos perfeitos são poesia em movimento.",
    "A gentileza do seu rosto aquece meu coração.",
    "Distância é só um número quando seu rosto vive em mim.",
    "Seu cabelo colorido é a alegria que falta nos meus dias.",
    "Sua pele clara é como a neve, pura e única.",
    "Seu rosto bonito é meu pensamento favorito.",
    "Seus olhos são dois oceanos onde quero navegar.",
    "A delicadeza do seu rosto é meu calmante.",
    "Mesmo sem tocar, sinto a suavidade do seu rosto.",
    "Seu cabelo colorido é a explosão de cor que eu precisava.",
    "Sua pele clara brilha como pérola.",
    "Seu rosto é a imagem que me faz sorrir.",
    "Seus olhos perfeitos me fazem acreditar no amor.",
    "A gentileza do seu rosto é meu abrigo.",
    "Distância não impede que eu admire sua beleza.",
    "Seu cabelo colorido é como um sonho colorido.",
    "Sua pele clara tem a pureza de um anjo.",
    "Seu rosto bonito é meu horizonte.",
    "Seus olhos são a luz que guia minha espera.",
    "A delicadeza do seu rosto me inspira.",
    "Mesmo longe, seu rosto é meu lar.",
    "Seu cabelo colorido é a assinatura da sua alma única.",
    "Sua pele clara é a base de uma obra-prima.",
    "Seu rosto bonito é meu vício doce.",
    "Seus olhos perfeitos contam histórias que quero ouvir.",
    "A gentileza do seu rosto me faz bem.",
    "Distância é detalhe quando o coração vê.",
    "Seu cabelo colorido é a moldura do seu rosto perfeito.",
    "Sua pele clara é o contraste ideal para seu cabelo vibrante.",
    "Seu rosto é a certeza de que a beleza existe."
];

let envelopeAberto = false;
let mensagensUsadas = [];
let mensagemAtual = "";

function obterMensagemAleatoria() {
    if (mensagensUsadas.length >= mensagens.length) {
        mensagensUsadas = [];
    }
    
    const mensagensDisponiveis = mensagens.filter(msg => !mensagensUsadas.includes(msg));
    const mensagemAleatoria = mensagensDisponiveis[Math.floor(Math.random() * mensagensDisponiveis.length)];
    
    mensagensUsadas.push(mensagemAleatoria);
    return mensagemAleatoria;
}

function abrirEnvelope() {
    const envelopeContainer = document.querySelector('.envelope-container');
    const mensagemElement = document.getElementById('mensagem');
    
    if (!envelopeAberto) {
        envelopeContainer.classList.add('aberto');
        mensagemAtual = obterMensagemAleatoria();
        mensagemElement.textContent = mensagemAtual;
        envelopeAberto = true;
    } else {
        mensagemAtual = obterMensagemAleatoria();
        mensagemElement.textContent = mensagemAtual;
        
        mensagemElement.style.animation = 'none';
        setTimeout(() => {
            mensagemElement.style.animation = 'pulsar 0.5s ease-in-out';
        }, 10);
    }
}
