const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      models.posts.belongsTo(models.users, {
        foreignKey: { name: "userId", allowNull: false },
      });

      models.posts.hasMany(models.comments, { onDelete: "cascade" });
      models.posts.hasMany(models.likes, { onDelete: "cascade" });
    }
  }

  Post.init(
    {
      content: DataTypes.STRING,
      pictureURL: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "posts",
      modelName: "Post",
    }
  );
  return Post;
};
