module.exports = (sequelize, DataTypes) => {
  const cardapio = sequelize.define(
    "cardapios",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
      },
      produto: DataTypes.TEXT,
      preco: DataTypes.DECIMAL(10,2),
      descricao: DataTypes.TEXT,
      categoria: DataTypes.TEXT,
      imagem: DataTypes.TEXT,
      imagem_destaque: DataTypes.TEXT
    },
    {
      underscored: true,
      paranoid: true,
      timestamps: false
    }
  );

  cardapio.associate = function (models) {
    cardapio.hasMany(models.mesaCardapio, {
      foreignKey: 'id_cardapio'
    });
  };

  return cardapio;

};
