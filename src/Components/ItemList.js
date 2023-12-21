import { CDN_URL } from "../utilities/constants"
import { addItem } from "../utilities/cartSlice";
import { useDispatch } from "react-redux"

const ItemList=({items})=>{
   // console.log(items);
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
    dispatch(addItem(item));
   }

    return (
        
        <div>
            {items.map((item)=>{
               const{id,name,price,description,imageId}= item?.card?.info;
               return <div key={id} data-testid="itemList" className=" m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between">
               <div className="w-9/12">
                <div >
                    <p className="text-md font-bold">{name}</p>
                    <p className="text-sm font-bold text-green-500">₹{price/100}</p>
                </div>
                <div>
                    <p className="text-xs">{description}</p>
                </div>
               </div>
               <div className="w-3/12  relative ">
                 <div className="  absolute bottom-0 left-0 right-0 text-center   ">
                        <button className="px-4 py-1 rounded-xl text-white bg-green-500 "
                        onClick={()=>handleAddItem(item)}>Add+</button>
                    </div>
                    <img src={CDN_URL+imageId} className="rounded-md w-full h-[96px]" />
                   
                </div>
            </div>
            
        
         })}
             
        </div>
    );
}

export default ItemList;