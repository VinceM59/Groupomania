const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      models.users.hasMany(models.posts, { onDelete: "cascade" });
      models.users.hasMany(models.comments, { onDelete: "cascade" });
      models.users.hasMany(models.likes, { onDelete: "cascade" });
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
      avatar: { type: DataTypes.STRING, defaultValue: "orque.jpg" },
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
