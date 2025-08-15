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

    try {
        const orders = await orderModel.find({});
        res.json({success: true, orders});
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }

}

//User order data for frontend
const userOrders = async (req, res) => {   

    try {
        
        const { userId } = req.body;

        const orders = await orderModel.find( {userId} );
        res.json({success: true, orders});

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }

} 

//Update order status from admin panel

const updateStatus = async (req, res) => {

    try{
        const { orderId, status } = req.body;

        await orderModel.findByIdAndUpdate(orderId, { status });
        res.json({ success: true, message: "Order status updated successfully!" });
    }
    catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }

}

export { placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus }