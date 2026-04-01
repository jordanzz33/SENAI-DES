const prisma = require("../data/prisma");


const novoCarro = async (req, res) => {
    let { placa, marca, modelo, ano } = req.body;

    placa = placa.trim().replace(" ", "").toUpperCase();

    if (placa === "" || placa.length !== 7 || placa.includes(" ")) {
        return res.status(400).send("Erro: Placa deve ter 7 caracteres e não pode ter espaços");
    }

    const anoTexto = String(ano);
    const caracteresDoAno = anoTexto.split("");
    const temLetra = caracteresDoAno.some(caractere => caractere < "0" || caractere > "9");

    if (anoTexto.length !== 4 || temLetra) {
        return res.status(400).send("Erro: O ano deve ter apenas 4 numeros");
    }

    const todosOsCarros = await prisma.carros.findMany();
    const placaJaExiste = todosOsCarros.some(carro => carro.placa.toUpperCase() === placa);

    if (placaJaExiste) {
        return res.status(400).send("Erro: Veículo existente cadastrado com esta placa.");
    }

    const ncarro = await prisma.carros.create({
        data: {
            placa,
            marca,
            modelo,
            ano: Number(ano)
        }
    });

    res.status(201).json(ncarro);
}


const listarCarro = async (req, res) => {
    const carros = await prisma.carros.findMany();
    res.status(200).json(carros); 
};


const buscarCarro = async (req, res) => {
    const { id } = req.params;

    const carro = await prisma.carros.findUnique({
        where: { id: Number(id) }
    });

    if (!carro) return res.status(404).send("Carro não encontrado");
    res.status(200).json(carro);
}


const apagarCarro = async (req, res) => {
    const { id } = req.params; 

    
    const carroExcluido = await prisma.carros.delete({
        where: { id: Number(id) } 
    });

    res.status(200).json(carroExcluido);
}


const atualizarCarro = async (req, res) => {
    const { id } = req.params; 
    const dados = req.body;

    const carro = await prisma.carros.update({
        where: { id: Number(id) },
        data: dados
    });

    res.status(200).json(carro);
}

module.exports = {
    novoCarro,
    buscarCarro,
    listarCarro,
    apagarCarro,
    atualizarCarro
}