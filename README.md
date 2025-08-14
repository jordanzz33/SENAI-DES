let livros = [
  {
    titulo: "Ache o wally",
    autor: " Martin Handford",
    paginas: 28,
    genero: "Infantil",
    protagonista: "Wally"
  },
  {
    titulo: "Diário de um banana",
    autor: "Jeff Kinney",
    paginas: 2240,
    genero: "Comédia",
    protagonista: "Greg "
  },
  {
    titulo: "A Sutil Arte de Ligar o F*da-Se",
    autor: "Mark Manson",
    paginas: 224,
    genero: "Autoajuda",
    protagonista: "Mark Manson"
  }
];
//
function localizarLivro(titulo) {
  livros.forEach(livro => {
    if (livro.titulo === titulo) {
      console.log("Livro encontrado:", livro);
    }
  });
}
localizarLivro("Ache o wally ");
function removerLivro(titulo) {
  livros = livros.filter(livro => livro.titulo !== titulo);
}
removerLivro("Diário de um banana");
console.log("Depois de remover:", livros);
// 
function cadastrarLivro(novoLivro) {
  livros.push(novoLivro);
}
cadastrarLivro({
  titulo: "Percy Jackson e o Ladrão de Raios",
  autor: "Rick Riordan",
  paginas: 400,
  genero: "Fantasia",
  protagonista: "Percy Jackson"
});
console.log("Depois de cadastrar:", livros);
//
function alterarAutor(titulo, novoAutor) {
  livros.forEach(livro => {
    if (livro.titulo === titulo) {
      livro.autor = novoAutor;
    }
  });
}
alterarAutor("Diário de um banana", "Jeff Kinney"
);
console.log("Após alteração de autor:", livros);
