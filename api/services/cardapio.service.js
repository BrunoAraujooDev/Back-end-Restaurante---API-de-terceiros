const { cardapios, mesaCardapio, } = require('../models');



const itemExiste = async (produto) => {
    const cardapioDB = await cardapios.findOne({
        where: {
            produto: produto
        },
    });

    return cardapioDB ? true : false;

};

const criarItem = (model) => {

    const modelParaItem = {

        produto: model.produto,
        preco: model.preco,
        descricao: model.descricao,
        categoria: model.categoria,
        imagem: model.imagem,
        imagem_destaque: model.imagem_destaque
        };

    return cardapios.create(modelParaItem)

    }

const alterarItem = (id, body) => {
    const model = {
        produto: body.produto,
        preco: body.preco,
        descricao: body.descricao,
        categoria: body.categoria,
        imagem: body.imagem,
        imagem_destaque: body.imagem_destaque
    }
    return cardapios.update(
        { ...model },
        { where: {id: id} }
    )
}

const deletarItem = async (id) => {
    return cardapios.destroy({
        where: {
          id: id
        }
      });    
}

const listarQtdPedidoItem  = async (id_cardapio) => {

    let where = {};
  
    if (id_cardapio)
      where = {
        id_cardapio
      }

    const pedidoFromDB = await cardapios.findAll({
      include: [
        {
          model: mesaCardapio,
          as: 'mesaCardapios',
          where

        }
      ],
    });
  
    const mapaPedidos = await pedidoFromDB.map((item) => {
        const { id, produto, preco, mesaCardapios } = item;
        return {
            id,
            produto,
            preco,
            pedidos: mesaCardapios.length
        }
    });
    const maisPedidos = mapaPedidos.sort((a, b) => (Number(a.pedidos) > Number(b.pedidos)) ? -1 : ((Number(b.pedidos) > Number(a.pedidos)) ? 1 : 0))
    return maisPedidos
}

    module.exports = {
    itemExiste,
    criarItem,
    alterarItem,
    deletarItem,
    listarQtdPedidoItem
}