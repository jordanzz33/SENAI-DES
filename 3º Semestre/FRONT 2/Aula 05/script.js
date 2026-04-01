const key = "a2c7eba5fc7982a96a29c9143d9ba3c2";

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta =>resposta.json());
    colocarDadosNaTela(dados)
}

function colocarDadosNaTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em" + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao"). src = "" + dados.weather[0].icon + ".png";
}

function cliqueinoBotao(){
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}