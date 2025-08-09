import { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {

        if (!size){
            toast.error('Please select a size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]){
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);
    }

    const getCartCount = () =>{
        let count = 0;
        
        for (const items in cartItems){
            for (const item in cartItems[items]){
                try {
                    count += cartItems[items][item];
                }
                catch (error) {
                    console.error("Error counting cart items:", error);
                }
            }
        }
        return count;
    }

    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData);

    }

    const getCartTotal = () => {

        let total = 0;

        for (const items in cartItems){
            let itemInfo = products.find(product => product._id === items);
            for (const item in cartItems[items]){
                try{
                    if (cartItems[items][item] > 0){
                        total += cartItems[items][item] * itemInfo.price;
                    }
                }
                catch (error) {
                    console.error("Error calculating cart total:", error);
                }
            }
        }
        return total;
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const value ={
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        addToCart,
        cartItems,
        getCartCount,
        updateQuantity,
        getCartTotal,
        navigate
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;