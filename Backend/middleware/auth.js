const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log("Je passe dans le middleware auth");
  try {
    //console.log(req.headers);
    const token = req.headers.authorization.split(" ")[1];
    console.log("Token retrouvé : " + token);
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    console.log(decodedToken);
    if (!userId) {
      throw "User ID non valide";
    } else {
      next();
    }
    console.log("erreur");
  } catch (err) {
    console.log(err);
    res.status(401).json({
      error: new Error("Requête non valide!"),
    });
  }
};
