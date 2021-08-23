const mesaController = require('../../controllers/mesa.controller');

module.exports = (router) => {

  router.route('/mesa')
    .get(
      mesaController.getAllMesas
    )
  
  router.route('/mesa/:id')
    .get(
      mesaController.getMesaById
    )

  router.route('/mesa/:id/insert')
    .post(
      mesaController.postCadastroPedido
    )
  
  router.route('/mesa/delete/:id')
    .delete(
      mesaController.deletePedido
    )
}