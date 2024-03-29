//let listaDeNumerosSorteados = [];
//let numeroLimite = 10
let numeroSecreto = gerarNúmeroAleatorio();
let tentativas = 1
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;
}
function exibirMensagemIncial(){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número de 1 a 10");
}
exibirMensagemIncial();


// Function um trecho de codigo responsavel por uma determinada ação
// a função aplicada foi responsavel por dar funcionalidade ao button do html "CHUTAR"
function verificarChute() {
    let chute = document.querySelector("input").value; // o .value foi usado para so pegar o valor do imput(numero)
   
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou !");
        let palavratentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com (${tentativas}) ${palavratentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if (chute > numeroSecreto){
        exibirTextoNaTela("p","Tente um número menor");
        }else{
         exibirTextoNaTela("p", "Tente um número maior");
        }
        limparCampo();
        tentativas++; // o tentativas foi colocado aqui pra contabilizar so caso a gnt errasse o número secret
    }
}
// função com return, que é como se fosse o resultado daquela função, a resposta que aquela função da ao comando executado;
function gerarNúmeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
//    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
//    if (quantidadeDeElementosNaLista == numeroLimite){
//        listaDeNumerosSorteados = [];
    }


 //   if (listaDeNumerosSorteados.includes(numeroEscolhido)){  //includes: Verifica se o elemento esta na lista, se tiver = true
 //       return gerarNúmeroAleatorio();
 //   } else {
 //       listaDeNumerosSorteados.push(numeroEscolhido) //adiciona item ao final da lista
 //       console.log(listaDeNumerosSorteados);
 //       return numeroEscolhido;
  //  }
//}
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}
function reinciarJogo(){
    numeroSecreto = gerarNúmeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemIncial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
