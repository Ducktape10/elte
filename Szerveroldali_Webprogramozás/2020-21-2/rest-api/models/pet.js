module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define('pet', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});

  pet.associate = (models) => {
    pet.belongsTo(models.user);
  }

  return pet;
}
