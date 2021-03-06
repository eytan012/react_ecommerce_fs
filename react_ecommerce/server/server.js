const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

//APP
const app = express();
//MIDDLEWARES
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(cors());

//ROUTES
// TEST ROUTE
app.get("/test", (req, res) => {
	res.send("TEST ROUTE");
});


 
app.use("/api/auth", require("./routes/auth")); //AUTH ROUTE
app.use("/api/user", require("./routes/user")); // USER ROUTE
app.use("/api", require("./routes/category")); //CATEGORY
app.use("/api/subs", require("./routes/subCategory")); //SUBS
app.use("/api/product", require("./routes/product")); // PRODUCTS
app.use("/api/products", require("./routes/products"));
app.use("/api/cloudinary", require("./routes/cloudinary")); // images upload

//DB
const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("DB Connected");
	} catch (error) {
		console.log(error);
	}
};
dbConnection();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
