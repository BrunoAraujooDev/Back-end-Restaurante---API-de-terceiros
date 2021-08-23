const { mesa } = require('../models');

const mesaExiste = async (numero) => {
    const mesaDB = await mesa.findOne({
        where: {
            numero: numero
        },
    });

    return mesaDB ? true : false;

};

const criarMesa = (model) => {

    const modelParaMesa = {

        numero: model.numero,
        qtd_cadeiras: model.qtd_cadeiras,
        ambiente: model.ambiente

        };

    return mesa.create(modelParaMesa)

}

const alterarMesa = (id, model) => {
    return mesa.update(
    {
        numero: model.numero,
        qtd_cadeiras: model.qtd_cadeiras,
        ambiente: model.ambiente
    },
    {
        where: { id: id}
    }
    )    
}

const deletarMesa = async (id) => {
    return mesa.destroy({
        where:{
          id: id
        }
      });
}



module.exports = {
    mesaExiste,
    criarMesa,
    alterarMesa,
    deletarMesa
}
