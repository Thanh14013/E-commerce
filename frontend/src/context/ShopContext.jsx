import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');

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

        if(token){
            try {
                
                await axios.post(backendUrl + '/api/cart/add', {itemId,size}, {headers:{token}});

            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    }

    const getCartCount = () =>{
        let count = 0; 
        for (const items in cartItems) {
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

        if(token){
            try{
               await axios.post(backendUrl + '/api/cart/update', {itemId, size, quantity}, {headers:{token}});
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }

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


    

    const getProductData = async () => {

        try {
            
            const respond = await axios.get(backendUrl + '/api/product/list');
            if(respond.data.success){
                setProducts(respond.data.products);
            }
            else{
                toast.error(respond.data.message);
            }

        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }

    }

    const getUserCart = async ( token ) => {
        try {
            
            const respond = await axios.post(backendUrl + '/api/cart/get', {}, {headers:{token}});
            if (respond.data.success){
                setCartItems(respond.data.cartData);
            }

        } catch (error) {
            console.log(error.message);
            toast.error(error.message); 
        }
    }

    useEffect(() => {
        getProductData();
    },[]);

    useEffect(() => {
        if (!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
            getUserCart(localStorage.getItem('token'));
        }
    }, []);

    useEffect(() => {
        if (token) {
            getUserCart(token);
        } else {
            setCartItems({});
        }
    }, [token]);

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
        navigate,
        backendUrl,
        token,
        setToken,
        getUserCart,
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;