const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      models.User.hasMany(models.Post, { onDelete: "cascade" });
      models.User.hasMany(models.Comment, { onDelete: "cascade" });
      models.User.hasMany(models.Like, { onDelete: "cascade" });
    }
  }
  User.init(
    {
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
      bio: DataTypes.STRING,
      avatar: DataTypes.STRING,
      admin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  return User;
};
