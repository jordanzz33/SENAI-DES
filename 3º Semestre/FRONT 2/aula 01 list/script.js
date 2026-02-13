//exercicio 1

function reajustar(){
    let preco = Number(document.getElementById('preco').value)
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if(preco > 2000){
        desconto = preco * (10 / 100);
    }
 
    let precoFinal = preco + desconto;

    resultado.innerHTML = 
    `Desconto de R$ ${desconto.toFixed(2)} <br>Preco Final R$ ${precoFinal.toFixed(2)}`;
}

document.getElementById('preco').addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        reajustar();
    }
});

//exercicio 2

function reajustar(){
    let preco = Number(document.getElementById('preco').value)
    let resultado = document.getElementById('resultado');
    let frete = 0;

    if(preco >= 150){
        frete = 0;
    } else {
        frete = 20;
    }
 
    let precoFinal = preco + frete;

    resultado.innerHTML = 
    `Frete: R$ ${frete.toFixed(2)} <br>Total: R$ ${precoFinal.toFixed(2)}`;
}

document.getElementById('preco').addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        reajustar();
    }
});

//exercico 3

function reajustar(){
    let preco = Number(document.getElementById('preco').value)
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if(preco > 200){
        desconto = preco * (5 / 100);
    }
    let precoFinal = preco - desconto;

    resultado.innerHTML = 
    `Desconto: R$ ${desconto.toFixed(2)} <br>Valor final: R$ ${precoFinal.toFixed(2)}`;
}

document.getElementById('preco').addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        reajustar();
    }
});

//exercicio 4

function reajustar(){
    let preco = Number(document.getElementById('preco').value)
    let resultado = document.getElementById('resultado');
    let taxa = 0;

    if(preco > 100){
        taxa = preco * (10 / 100);
    }
    let precoFinal = preco + taxa;

    resultado.innerHTML = 
    `taxa: R$ ${taxa.toFixed(2)} <br>Total: R$ ${precoFinal.toFixed(2)}`;
}

document.getElementById('preco').addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        reajustar();
    }
});

//exercicio 5

function reajustar(){
    let preco = Number(document.getElementById('preco').value)
    let dias = Number(document.getElementById('dias').value)
    let resultado = document.getElementById('resultado');
    let multa = 0;

    if(dias > 0){
        multa = preco * (2 / 100);
    }

    let precoFinal = preco + multa;

    resultado.innerHTML = 
    `Multa: R$ ${multa.toFixed(2)} <br>Total: R$ ${precoFinal.toFixed(2)}`;
}

document.getElementById('preco').addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        reajustar();
    }
});

document.getElementById('dias').addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        reajustar();
    }
});

//exercicio 6

function reajustar(){
    let preco = Number(document.getElementById('preco').value)
    let resultado = document.getElementById('resultado');
    let cashback = 0;

    if(preco > 300){
        cashback = preco * (5 / 100);
    }
    let valorLiquido = preco - cashback;

    resultado.innerHTML = 
    `Cashback: R$ ${cashback.toFixed(2)} <br>Valor liquido: R$ ${valorLiquido.toFixed(2)}`;
}

document.getElementById('preco').addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        reajustar();
    }
});
