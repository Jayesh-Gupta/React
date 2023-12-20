import ItemList from "./ItemList";
import {  useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utilities/cartSlice";


const Cart=()=>{
    
    const cartItems= useSelector((store)=>store.cart.items);
    const dispatch =useDispatch();
    const handelClearCart=()=>{
        dispatch(clearCart());
    }
    return (
        <div>
            <div className=" m-2 p-2 text-center font-bold text-2xl">
                Cart
            </div>
            <div className="text-center   ">
                <button className="border border-red-500 rounded-lg text-red-500 m-1 p-2 hover:bg-red-500 hover:text-white"
                onClick={handelClearCart}>
                    Clear Cart
                </button>
            </div>
            <div className="w-9/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
        </div>
    );

}

export default Cart;