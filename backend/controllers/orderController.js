import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';

//Placing orders using COD method

const placeOrder = async (req, res) => {
     
    try {
        
        const { userId, items, amount, address} = req.body;

        const orderData={
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartData:{}});
        res.json({success: true, message: "Order placed successfully!"})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
        
    }

}

//Placing orders using Stripe method

const placeOrderStripe = async (req, res) => {
     
}

//Placing orders using COD Razorpay

const placeOrderRazorpay = async (req, res) => {
     
}

//All order data for admin panel

const allOrders = async (req, res) => {


}

//User order data for frontend
const userOrders = async (req, res) => {   


} 

//Update order status from admin panel

const updateStatus = async (req, res) => {


}

export { placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus }