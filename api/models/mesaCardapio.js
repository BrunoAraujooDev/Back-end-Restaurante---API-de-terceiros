module.exports = (sequelize, DataTypes) => {
  const mesaCardapio = sequelize.define(
    "mesaCardapio",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
      },
      dateTime: DataTypes.DATE,
      status: DataTypes.BOOLEAN
    },
    {
      underscored: true,
      paranoid: true,
      timestamps: false
    }
  );

  mesaCardapio.associate = function (models) {
    mesaCardapio.belongsTo(models.cardapios, {
      foreignKey: 'id_cardapio'
    });
    mesaCardapio.belongsTo(models.mesa, {
      foreignKey: 'id_mesa'
    })
  };

  return mesaCardapio;

};
