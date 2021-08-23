const { mesa, cardapios, mesaCardapio } = require('../models');
const mesaService = require('../services/mesa.service');
const Sequelize = require('sequelize');

const getAllMesas = async (req, res, next) => {
  const result = await mesa.findAll({
    include: [
      {
        model: mesaCardapio,
        include: [{ model: cardapios }],
      },
    ],
    order: Sequelize.literal(`mesa.numero`),
  });

  res.status(200).send(
    result.map((item) => {
      const { id, numero, qtd_cadeiras, ambiente, mesaCardapios } = item;

      return {
        id,
        numero,
        qtd_cadeiras,
        ambiente,
        ocupada: mesaCardapios.length > 0 ? true : false,
      };
    }) || []
  );
};

const getMesaById = async (req, res, next) => {
  try {
    const result = await mesa.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: mesaCardapio,
        include: {
          model: cardapios,
        },
      },
    });

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: `Mesa ${req.params.id} não foi encontrada.` });
  }
};

const postCadastroPedido = async (req, res, next) => {
  try {
    // construir o model para incluir no cadastro
    const model = {
      status: true,
      id_cardapio: req.body.idcardapio,
      id_mesa: req.params.id,
      dateTime: new Date().toISOString().slice(0, 19).replace('T', ' '),
    };

    // grava no banco
    await mesaCardapio.create(model);

    res.status(200).send({ message: 'Pedido gravado com sucesso.' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Erro interno do servidor.' });
  }
};

const deletePedido = async (req, res, next) => {
  try {
    await mesaCardapio.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).send({ message: 'Pedido excluído com sucesso.' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Erro interno do servidor.' });
  }
};

//v2

const criarMesa = async (req, res, next) => {
  try {
    const { body } = req;
    const validarMesa = await mesaService.mesaExiste(body.numero);

    if (validarMesa) {
      return res.status(400).send({
        mensagem: 'Mesa já cadastrada',
      });
    }
    await mesaService.criarMesa(body);

    res.status(200).send({
      mensagem: 'mesa criada',
    });
  } catch (error) {
    res.status(500).send({
      mensagem: 'error',
    });
  }
};

const alterarMesa = async (req, res, next) => {
  try {
    const { id } = req.params;

    await mesaService.alterarMesa(id, req.body);

    return res.status(200).send({
      mensagem: 'Mesa alterada.',
    });
  } catch (error) {
    console.log(error);
    return req.status(500).send({
      mensagem: 'Erro!!!',
    });
  }
};

const deletarMesa = async (req, res, next) => {
  try {
    const { params } = req;
    await mesaService.deletarMesa(params.id);

    return res.status(200).send({
      mensagem: 'mesa deletada',
    });
  } catch (error) {
    return res.status(500).send({
      mensagem: 'Internal server error!',
    });
  }
};

module.exports = {
  getAllMesas,
  getMesaById,
  postCadastroPedido,
  deletePedido,
  criarMesa,
  alterarMesa,
  deletarMesa,
};
