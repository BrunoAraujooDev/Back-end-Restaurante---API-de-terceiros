const Joi = require('joi')
const jwt = require('jsonwebtoken')
const usuarioService = require('../services/usuario.service')

const perfis = [
    {
        id: '1',
        funcionalidades: [
            'CRIAR_MESA',
            'ALTERAR_MESA',
            'DELETAR_MESA',
            'LISTAR_MESA',
            'CRIAR_ITEM_CARDAPIO',
            'ALTERAR_ITEM_CARDAPIO',
            'DELETAR_ITEM_CARDAPIO',
            'CRIAR_FUNCIONARIO',
            'LISTAR_FUNCIONARIO',
            'ALTERAR_FUNCIONARIO',
            'DELETAR_FUNCIONARIO',
            'RELATORIO',
        ]
    },
    {
        id: '2',
        funcionalidades: [
            'FAZER_PEDIDO',
            'DELETAR_PEDIDO',
            'LISTAR_MESA'
        ]
    },
];

const buscarPerfilPorId = (perfilId) => {
    const result = perfis.find(item => Number(item.id) === Number(perfilId));
    return result;
}

const criarDetalhes = (error) => {
    return error.details.reduce((acc, item) => {

        console.log(acc);

        console.log(item);

        return [
            ...acc, item.message
        ];
    }, []);
}

exports.validateDTO = (type, params) => {

    return (req, res, next) => {
        
        try{

            const schema = Joi.object().keys(params);
        
            const { value, error } = schema.validate(req[type], {
            allowUnknown: false,
            });
        
            req[type] = value;
    
            return error ? res.status(422).send({
                detalhes: [...criarDetalhes(error)],
            }) : next();
        } catch (error) {
            
            console.log(error);
        }

    }

}

exports.autorizar = (rota = '*') => {

    return async (req, res, next) => {

        const { token } = req.headers;
      

       try {
           
           if (!token) {
               return res.status(403).send({
                   mensagem: "usuário não autorizado"
               })
           }

            const verificarToken = jwt.verify(token, process.env.JWT_KEY);

            const usuario = await usuarioService.buscarPorNome(verificarToken.nome);
            req.usuario = usuario;

            if (rota!== '*') {
                const perfil = buscarPerfilPorId(usuario.tipo);
                if (!perfil.funcionalidades.includes(rota)){
                    return res.status(403).send({
                        mensagem: 'Usuário não autorizado'
                    })
                }
            }
        
            next();

       } catch (error) {

            console.log(`Token Error: ${error}`);

            res.status(401).send({mensagem: "usuário não autenticado"})

            // res.status(500).send({mensagem: 'Internal Server Error!!'})
       }
    }
}