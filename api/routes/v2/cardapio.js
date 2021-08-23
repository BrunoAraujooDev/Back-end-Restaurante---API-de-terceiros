const cardapioController = require('../../controllers/cardapio.controller');
const { autorizar, validateDTO } = require('../../utils/middlewares.utils');
const Joi = require ('joi');

module.exports = (router) => {

  router
    .route('/cardapio')
    .get(
      cardapioController.getAllCardapio
    )
    .post(
      autorizar('CRIAR_ITEM_CARDAPIO'),
      validateDTO('body', {
        produto: Joi.string().required().messages({
          'any.required': `"produto" é um campo obrigatório`,
          'string.empty': `"produto" não deve ser vazio`,
        }),  
        preco: Joi.number().required().messages({
          'any.required': `"preço" é um campo obrigatório`,
          'number.base': `"preço" deve ser um número`,
        }),
        descricao: Joi.optional(),
        categoria: Joi.string().required().messages({
          'any.required': `"categoria" é um campo obrigatório`,
          'string.empty': `"categoria" não deve ser vazio`,
        }),
        imagem: Joi.optional(),
        imagem_destaque: Joi.optional(),
      }),
      cardapioController.criarCardapio
    );
  
  router
    .route('/cardapio/:id')
    .get(
      cardapioController.getCardapioById
    )
    .put(
      autorizar('ALTERAR_ITEM_CARDAPIO'),
      validateDTO('params', {
        id: Joi.number().integer().required().messages({
          'any.required': `"id" é um campo obrigatório`,
          'number.base': `"id" deve ser um número`,
          'number.integer': `"id" deve ser um número válido`
        })
      }),
      validateDTO('body', {
        produto: Joi.string().required(),
        preco: Joi.number().required(),
        descricao: Joi.string(),
        categoria: Joi.string().required(),
        imagem: Joi.string(),
        imagem_destaque: Joi.string(),
      }),
      cardapioController.alterarItem
    )
    .delete(
      autorizar('DELETAR_ITEM_CARDAPIO'),
      validateDTO('params', {
        id: Joi.number().integer().required().messages({
            'any.required': `"id" é um campo obrigatório`,
            'number.base': `"id" deve ser um número`,
            'number.integer': `"id" deve ser um número válido`
        })
    }),
      cardapioController.deletarItem
    );

  router
    .route("/relatorio")
    .get(
      autorizar('RELATORIO'),
     cardapioController.listarQtdPedidoItem
   );
  }