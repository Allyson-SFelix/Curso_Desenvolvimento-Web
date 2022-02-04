var dados = document.querySelector("div.tudo h3 input");
var resultado = document.querySelector("div.tudo div.resultado");
var operacao = document.getElementById("operacao");
const botao = document.querySelector("div.tudo botao");


botao.addEventListener("click", () => {

    resultado.innerHTML = ""

    if (Number(dados.value) < 1 || Number(dados.value) > 10) {
        resultado.innerHTML = "tatu"


    } else {

        var cv = dados.value;

        for (i = 1; i <= 10; i++) {

            switch (operacao.value) {
                case "soma":
                    var calculo = String(i) + " + " + dados.value + " = " + (Number(i) + Number(dados.value));
                    break;
            }
var cq = document.createElement("p")
cq.innerText = calculo;
resultado.appendChild(resultado);

        }
    }
})