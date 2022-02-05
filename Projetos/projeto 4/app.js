const nome= document.querySelector(".inp");
const erro = document.querySelector(".erro");
const botao = document.querySelector("#botao");
const titulo = document.querySelector("#titulo");
const ano = document.querySelector("#ano");
const tempo = document.querySelector("#tempo");
const diretor = document.querySelector("#diretor");
const foto_filme = document.querySelector(".quando_nao_tem");
const descricao = document.querySelector("#descricao");

const apiKey = "c2d81518";
const QNT = "qjnt.JPG";

async function busca(nome) {
    const resposta = await fetch('http://www.omdbapi.com/?t='+nome+'&apikey='+apiKey);
    return resposta.json();
}

botao.addEventListener("click", () => {
    limparCampos();
    core();
        
})

async function core(){
    
    try{
        const filme = await busca(nome.value);
        vDados(filme);
        dValores(filme);    
    }catch (erro){
        console.log(erro);
        erro.textContent = ""+erro;
    }
}

function dValores(filme){
    titulo.textContent = filme.Title;
    descricao.textContent = filme.Plot;
    ano.textContent = 'Year: '+filme.Year;
    tempo.textContent = 'Run tim: '+filme.Runtime;
    diretor.textContent = 'Director: '+filme.Director;
    foto_filme.setAttribute('src', filme.Poster);
}

function limparCampos(){
    titulo.textContent = "";
   descricao.textContent = "";
    ano.textContent = "";
    tempo.textContent = "";
    diretor.textContent = "";
    foto_filme.setAttribute('src', QNT);
}

function vDados(filme){
    if(filme.Plot === undefined || filme.Year === undefined || filme.Actors === 'N/A'){
        throw new Error("Filme não encontrado!!!");
    }
}
