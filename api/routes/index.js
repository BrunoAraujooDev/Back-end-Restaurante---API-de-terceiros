const { Router } = require('express');
const { name, version } = require('../../package.json');
//rotas v1
const mesaRoutesV1 = require('../routes/v1/mesa');
const cardapioRoutesV1 = require('../routes/v1/cardapio');
//rotas v2
const usuarioRoutesV2 = require('../routes/v2/usuario')
const mesaRoutesV2 = require('../routes/v2/mesa');
const cardapioRoutesV2 = require('../routes/v2/cardapio');

module.exports = (app) => {
 
  //tiramos helth check do V1 e subimos para raiz
 app.get('/', (req, res, next) => {
    res.send({name, version});
  })

  // rotas
 const routerV1 = Router();
  mesaRoutesV1(routerV1);
  cardapioRoutesV1(routerV1);
  app.use('/v1', routerV1);

 const routerV2 = Router();
 mesaRoutesV2(routerV2);
 cardapioRoutesV2(routerV2);
 usuarioRoutesV2(routerV2);
  app.use('/v2', routerV2);
}