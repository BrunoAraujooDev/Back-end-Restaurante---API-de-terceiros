const usuarioController = require('../../controllers/usuario.controller')
const { validateDTO, autorizar } = require('../../utils/middlewares.utils')
const Joi = require('joi');

module.exports = (router) => {

    router
        .route('/auth')
        .post(
            validateDTO('body', {
                senha: Joi.string().required().messages({
                    'any.required': `"senha" é um campo obrigatório`,
                    'string.empty': `"senha" não deve ser vazio`,
                }),
                usuario: Joi.string().required().messages({
                    'any.required': `"usuário" é um campo obrigatório`,
                    'string.empty': `"usuário" não deve ser vazio`,
                }),
            }),
            usuarioController.autenticar
            );

    router
        .route('/funcionario')
        .post(
            autorizar('CRIAR_FUNCIONARIO'),
            validateDTO('body', {
                nome: Joi.string().required().min(5).max(15).messages({
                    'any.required': `"nome" é um campo obrigatório`,
                    'string.empty': `"nome" não deve ser vazio`,
                    'string.min': `"nome" não deve ter menos que {#limit} caracteres`,
                    'string.max': `"nome" não deve ter mais que {#limit} caracteres`
                }),
                tipo: Joi.string().required().messages({
                    'any.required': `"tipo" é um campo obrigatório`,
                    'string.empty': `"nome" não deve ser vazio`,
                }),
                senha: Joi.string().min(5).required().messages({
                    'any.required': `"senha" é um campo obrigatório`,
                    'string.min': `"senha" não deve ter menos que {#limit} caracteres`,
                    'string.empty': `"senha" não deve ser vazio`,
                }),

            }),
            usuarioController.criarFuncionario
    );

    router
        .route('/funcionario')
        .get(
            autorizar('LISTAR_FUNCIONARIO'),
            usuarioController.listarFuncionarios
        )

    router
        .route('/funcionario/:id')
        .put(
            autorizar('ALTERAR_FUNCIONARIO'),
            validateDTO('params', {
                id: Joi.number().integer().required().messages({
                    'any.required': `"id" é um campo obrigatório`,
                    'number.base': `"id" deve ser um número`,
                    'number.integer': `"id" deve ser um número válido`

                 })
            }),
            validateDTO('body', {
                nome: Joi.string().required().min(5).max(20).messages({
                    'any.required': `"nome" é um campo obrigatório`,
                    'string.empty': `"nome" não deve ser vazio`,
                    'string.min': `"nome" não deve ter menos que {#limit} caracteres`,
                    'string.max': `"nome" não deve ter mais que {#limit} caracteres`
                }),
                tipo: Joi.string().required().messages({
                    'any.required': `"tipo" é um campo obrigatório`,
                    'string.empty': `"nome" não deve ser vazio`,
                })
            }),
            usuarioController.alterarFuncionario
        )
        
        
    router
        .route('/funcionario/:id')
        .delete(
            autorizar('DELETAR_FUNCIONARIO'),
            validateDTO('params', {
                id: Joi.number().integer().required().messages({
                    'any.required': `"id" é um campo obrigatório`,
                    'number.base': `"id" deve ser um número`,
                    'number.integer': `"id" deve ser um número válido`

                })
            }),
            usuarioController.deletarFuncionario
        )
}