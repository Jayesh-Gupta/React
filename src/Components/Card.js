import { useContext } from "react";
import * as A from "../utilities/constants";
import UserContext from "../utilities/UserContext";

const cardStyles={
    backgroundColor:"#f0f0f0"
}
const Card=(props)=>{
    //console.log(props);
    const {loggedInUser}=useContext(UserContext);
    const{name,cuisines,avgRating,cloudinaryImageId}=props.resData.info;
    return (
    <div className="m-2 h-[400px] w-56 shadow-lg hover:shadow-2xl hover:border-solid hover:border-2 hover:border-gray-100" style={cardStyles}>
        <div className="res-img-container">
        <img src={A.CDN_URL+ 
                    cloudinaryImageId}
            alt="res-img" className="w-full h-[200px]"  />
        </div>
        <div className="res-desc">
        <h3 className="font-bold m-1">{name}</h3>
        
        <h4 className="m-1">{cuisines.join(", ")}</h4>
        <h5 className="m-1">{avgRating} stars</h5>
        <h4 className="m-1">{loggedInUser}</h4>
        </div>
    </div>
)};

export const withPromotedLabel = (Card)=>{
    //returns a component
    return (props)=>{
        return (<div >
            <label className="m-2 w-20 px-2 absolute bg-green-500 text-white shadow-3xl">Veg</label>
            <Card {...props} />
        </div>);
    }
}

export default Card;