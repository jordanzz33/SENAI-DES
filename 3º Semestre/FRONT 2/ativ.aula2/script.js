let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

document.addEventListener("DOMContentLoaded", renderizarTabela);

function abrirModal(){
    document.getElementById("modal").style.display = "block";
}

function fecharModal(){
    document.getElementById("modal").style.display = "none";
    limparCampos();
}

function salvarFilme(){
    const nome = document.getElementById("nome").value.trim();
    const lancamento = document.getElementById("lancamento").value.trim();
    const autor = document.getElementById("autor").value.trim();
    const sinopse = document.getElementById("sinopse").value.trim();
    const genero = document.getElementById("genero").value.trim();

    if(!nome || !genero){
        alert("Nome e gênero são obrigatórios");
        return;
    }

    const existe = filmes.find(f => f.nome === nome);

    if(existe){
        alert("Filme já cadastrado!");
        return;
    }

    const novoFilme = {
        id: Date.now(),
        nome,
        lancamento,
        autor,
        sinopse,
        genero
    };

    filmes.push(novoFilme);
    atualizarLocalStorage();
    renderizarTabela();
    fecharModal();
}

function renderizarTabela(){
    const tabela = document.getElementById("dados");
    tabela.innerHTML = "";

    filmes.forEach(filme => {
        tabela.innerHTML += `
        <tr>
            <td><img src = "${filme.imagem}"</td> 
            <td>${filme.nome}</td>
            <td>${filme.lancamento}</td>
            <td>${filme.autor}</td>
            <td>${filme.sinopse}</td>
            <td>${filme.genero}</td>
            <td>
                <button onclick="excluirFilme(${filme.id})">Excluir</button>
            </td>
        </tr>
        `;
    });
}

function excluirFilme(id){
    if(!confirm("Deseja realmente excluir?")) return;

    filmes = filmes.filter(f => f.id !== id);
    atualizarLocalStorage();
    renderizarTabela();
}

function atualizarLocalStorage(){
    localStorage.setItem("filmes", JSON.stringify(filmes));
}

function limparCampos(){
    document.getElementById("nome").value = "";
    document.getElementById("lancamento").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("sinopse").value = "";
    document.getElementById("genero").value = "";
}