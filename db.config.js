const Sequelize = require("sequelize");

const dbName = "test";
const dbUser = "testuser";
const dbPassword = "1234";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models-Tables
db.buyers = require("./models/buyer.model")(sequelize, Sequelize);
db.buyerproducts = require("./models/buyerproduct.model")(sequelize, Sequelize);
db.capitals = require("./models/capital.model")(sequelize, Sequelize);
db.countries = require("./models/country.model")(sequelize, Sequelize);
db.customers = require("./models/customer.model")(sequelize, Sequelize);
db.posts = require("./models/post.model")(sequelize, Sequelize);
db.products = require("./models/product.model")(sequelize, Sequelize);
db.users = require("./models/user.model")(sequelize, Sequelize);

// 1 : 1
db.countries.hasOne(db.capitals, { onDelete: "cascade", hooks: true });
db.capitals.belongsTo(db.countries, { onDelete: "cascade", hooks: true }); // belongsTo is also used in 1 : N relationship so it breaks the true 1 : 1 behavior

// 1 : N
db.users.hasOne(db.posts, { onDelete: "cascade", hooks: true });
db.posts.belongsTo(db.users, { onDelete: "cascade", hooks: true });

// N : N
db.buyers.belongsToMany(db.products, { through: db.buyerproducts });
db.products.belongsToMany(db.buyers, { through: db.buyerproducts });

module.exports = db;
