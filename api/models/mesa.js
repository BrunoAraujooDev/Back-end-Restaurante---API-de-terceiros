module.exports = (sequelize, DataTypes) => {
  const mesa = sequelize.define(
    "mesa",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
      },
      numero: DataTypes.INTEGER,
      qtd_cadeiras: DataTypes.INTEGER,
      ambiente: DataTypes.TEXT
    },
    {
      underscored: true,
      paranoid: true,
      timestamps: false
    }
  );

  mesa.associate = function (models) {
    mesa.hasMany(models.mesaCardapio, {
      foreignKey: 'id_mesa'
    });
  };

  return mesa;

};
