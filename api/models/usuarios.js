module.exports = (sequelize, DataTypes) => {
    const usuarios = sequelize.define(
        "usuarios",
        {
            id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
              unique: true,
              allowNull: false
            },
            
            nome: {
                allowNull:false, 
                type: DataTypes.TEXT
            },
            tipo: {
                allowNull: false,
                type: DataTypes.TEXT,
            },

            senha: {
                allowNull: false,
                type: DataTypes.TEXT
            },
        },{
            underscored: true,
            paranoid: true,
            timestamps: false
        });

    return usuarios;

};