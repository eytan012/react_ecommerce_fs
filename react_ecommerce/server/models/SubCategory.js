const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const subCatSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: "Name is required",
			minlength: [3, "Name should be atleast 3 characters"],
			maxlength: [32, "Name cannot be more than 32 characters"],
			unique: true,
		},
		slug: {
			type: String,
			unique: true,
			lowercase: true,
			index: true,
		},
		parent: { type: ObjectId, ref: "Category", required: true },

	},
	{ timestamps: true }
);

module.exports = mongoose.model("Sub", subCatSchema);
