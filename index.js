const express = require("express");
const cors = require("cors");
const buyerRouter = require("./routes/buyer.route");
const buyerProductRouter = require("./routes/buyerproduct.route");
const capitalRouter = require("./routes/capital.route");
const countryRouter = require("./routes/country.route");
const customerRouter = require("./routes/customer.route");
const postRouter = require("./routes/post.route");
const productRouter = require("./routes/product.route");
const userRouter = require("./routes/user.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = require("./db.config");

// creates table if it doesn't exits
db.sequelize.sync();

app.use("/buyer", buyerRouter);
app.use("/buyer-product", buyerProductRouter);
app.use("/capital", capitalRouter);
app.use("/country", countryRouter);
app.use("/customer", customerRouter);
app.use("/post", postRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);

app.listen(5000, async () => {
  console.log("Server up on http://localhost:5000");
  console.log("Database Connected!");
});
