const md5 = require('md5');
const jwt = require('jsonwebtoken');
const hashSecret = process.env.CRYPTO_KEY
const { usuarios } = require('../models')

const buscarPorNome = async (nome) => {
    return usuarioDB = usuarios.findOne({
        where: {
            nome: nome
        },
    });
}

const buscarPorId = async (id) => {
    return usuariosDB = usuarios.findOne({
        where:{
            id: id
        },
    });
}

const criarHash = (senha) => {

    return md5(senha + hashSecret);
}

const usuarioExiste = async (usuario, senha) => {
    const usuarioDB = await usuarios.findOne({
        where: {
            nome: usuario,
            senha: criarHash(senha)
       
        },
    });

    return usuarioDB ? true : false;
};

const criarCredencial = async (nomeUsuario) => {
    
    console.log('nomeUsuario:', nomeUsuario)

    // const usuario = await buscarPorNome(nomeUsuario)
    try {
        const usuario = await usuarios.findOne({
            where: {
                nome: nomeUsuario
            },
        });
        
        const { nome, tipo } = usuario
        
        const credenciais = {
            token: jwt.sign({ nome: usuario.nome }, process.env.JWT_KEY, {
                expiresIn: `${process.env.JWT_VALID_TIME}ms`
            }),
            usuario: {
                nome,
                tipo
            }
        }
        
        console.log(credenciais)
        
        return credenciais

    } catch (error) {
        console.log(error);
    }
}

const funcionarioJaExiste = async (nome) => {
        const result = await buscarPorNome(nome);
        return result ? true : false;
    }
 const criarFuncionario = (model) => {

    const modelParaCadastro = {

        nome: model.nome,
        tipo: model.tipo,
        senha: criarHash(model.senha),
        };

    return usuarios.create(modelParaCadastro)

    }

const alterarFuncionario = (id, model) => {
    return usuarios.update(
        {
            nome: model.nome,
            tipo: model.tipo,
        },
        {
            where: { id: id}
        }
    )
}

const listarFuncionarios = async () => {
    const funcionariosFromDB = await usuarios.findAll({})

    return funcionariosFromDB.map(item => {
        const { id, nome, tipo } = item

        return{
            id,
            nome,
            tipo
        }
    })
}

deletarFuncionario = async (id) => {

    return usuarios.destroy({
        where:{
            id: id
        }
    })
}


module.exports = {
    usuarioExiste,
    criarCredencial,
    funcionarioJaExiste,
    criarFuncionario,
    buscarPorNome,
    alterarFuncionario,
    listarFuncionarios,
    buscarPorId,
    deletarFuncionario
}