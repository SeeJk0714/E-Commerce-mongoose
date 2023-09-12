const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// const Product = require("./product");

const orderSchema = new Schema({
    customerName: {
        type: String,
        required: true,
    },
    customerEmail: {
        type: String,
        required: true,
    },
    products: { type: Schema.Types.ObjectId, ref: "Product" },
    totalPrice: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "Shipped", "Delivered"],
    },
});

// orderSchema.post("save", async function () {
//     // retrieve the current id that is updated
//     const taskID = this._id;
//     const categoryID = this.category;
//     // find the selected category
//     const selectedCategory = await Category.findById(categoryID);
//     // add the task into the selected category
//     selectedCategory.tasks.push(taskID);
//     // save the category
//     await selectedCategory.save();
// });

const Order = model("Order", orderSchema);
module.exports = Order;
