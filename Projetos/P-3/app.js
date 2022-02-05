var dados = document.querySelector("div.tudo h3 input");
var resultado = document.querySelector("div.tudo div.resultado");
var operacao = document.getElementById("operacao");
const botao = document.getElementById("botao");

console.log(botao);

botao.addEventListener("click", () => {

    resultado.innerHTML = ""

    if (Number(dados.value) < 1 || Number(dados.value) > 10) {
        resultado.innerHTML = "Digite um número de acordo com os"

    } else {

        var cv = dados.value;

        for (i = 1; i <= 10; i++) {
            switch (operacao.value) {
                case "soma":
                    var calculo = String(i) + " + " + dados.value + " = " + (Number(i) + Number(dados.value));
                    break;
                case "divis":
                    var calculo =  cv + " / " + dados.value + " = " + (Number(cv) / dados.value);
                    cv = (Number(cv) + Number(dados.value));
                    break;
                case "mult":
                    var calculo = String(i) + " x " + dados.value + " = " + i * Number(dados.value);
                    break;
                case "subt":
                    var calculo = String(i) + " - " + dados.value + " = " + (Number(i) - Number(dados.value));
                    break;
            }
            console.log(calculo);
            var cq = document.createElement("p");
            cq.innerText = calculo;
            resultado.appendChild(cq);

        }
    }
})
