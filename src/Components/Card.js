import * as A from "../utilities/constants";

const cardStyles={
    backgroundColor:"#f0f0f0"
}
const Card=(props)=>{
    
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
        </div>
    </div>
)};

export default Card;