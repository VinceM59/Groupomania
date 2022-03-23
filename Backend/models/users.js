const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }
  User.init(
    {
      firstname: DataTypes.string,
      lastname: DataTypes.string,
      email: DataTypes.string,
      password: DataTypes.string,
      bio: DataTypes.string,
      avatar: DataTypes.string,
      admin: DataTypes.boolean,
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  return User;
};
