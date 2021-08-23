const cardapioController = require('../../controllers/cardapio.controller');

module.exports = (router) => {

  router.route('/cardapio')
    .get(
      cardapioController.getAllCardapio
    )
  
  router.route('/cardapio/:id')
    .get(
      cardapioController.getCardapioById
    )
    
}