import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');
  const {navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products} = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    try {

      let orderItems = [];

      for (const items in cartItems){
        for (const item in cartItems[items]){
          if (cartItems[items][item] > 0){
            const itemInfo = structuredClone(products.find(product => product._id === items));
            if (itemInfo){
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            } 
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch(method){

        //API call for COD
        case 'cod':
          const respond = await axios.post(backendUrl + '/api/order/place', orderData, {headers:{token}}); 
          if (respond.data.success){
            setCartItems({});
            navigate('/orders');
          }
          break;

        default:

          break;

      }

    } catch (error) {
      
    }

  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* -------------left side------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">

        <div className="text-xl sm:text-2xl my-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        <div className="flex gap-3 w-full">
          <input required onChange={onChangeHandler} name="firstName" value={formData.firstName} className='border border-gray-300 rounded py px-3 w-full' type="text" placeholder='First Name'/>
          <input required onChange={onChangeHandler} name="lastName" value={formData.lastName} className='border border-gray-300 rounded py px-3 w-full' type="text" placeholder='Last Name'/>
        </div>
        <input required onChange={onChangeHandler} name="email" value={formData.email} className='border border-gray-300 rounded py px-3 w-full' type="email" placeholder='Email Address'/>
        <input required onChange={onChangeHandler} name="street" value={formData.street} className='border border-gray-300 rounded py px-3 w-full' type="text" placeholder='Street Address'/>
        <div className="flex gap-3 w-full">
          <input required onChange={onChangeHandler} name="city" value={formData.city} className='border border-gray-300 rounded py px-3 w-full' type="text" placeholder='City'/>
          <input onChange={onChangeHandler} name="state" value={formData.state} className='border border-gray-300 rounded py px-3 w-full' type="text" placeholder='State'/>
        </div>
        <div className="flex gap-3 w-full">
          <input required onChange={onChangeHandler} name="zipcode" value={formData.zipcode} className='border border-gray-300 rounded py px-3 w-full' type="number" placeholder='Zip Code'/>
          <input required onChange={onChangeHandler} name="country" value={formData.country} className='border border-gray-300 rounded py px-3 w-full' type="text" placeholder='Country'/>
        </div>
        <input required onChange={onChangeHandler} name="phone" value={formData.phone} className='border border-gray-300 rounded py px-3 w-full' type="number" placeholder='Phone Number'/>
      </div>

      {/* -------------right side------------- */}
      <div className="mt-8">
        
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1="PAYMENT" text2="METHOD" />
          {/* --------------Payment Options-------------- */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={() => setMethod('stripe')}className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={() => setMethod('razorpay')}className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={() => setMethod('cod')}className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>

          </div>

          <div className="w-full text-end mt-8">
            <button type='submit' onClick={() => navigate('/orders')} className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
          </div>

        </div>

      </div>  
    </form>
  )
}

export default PlaceOrder