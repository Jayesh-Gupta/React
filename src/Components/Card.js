import * as A from "../utilities/constants";

const cardStyles={
    backgroundColor:"#f0f0f0"
}
const Card=(props)=>{
    
    const{name,cuisines,avgRating,cloudinaryImageId}=props.resData.info;
    return (
    <div className="res-card" style={cardStyles}>
        <div className="res-img-container">
        <img src={A.CDN_URL+ 
                    cloudinaryImageId}
            alt="res-img" className="res-img"  />
        </div>
        <div className="res-desc">
        <h3 className="res-name">{name}</h3>
        
        <h4 className="res-cusines">{cuisines.join(", ")}</h4>
        <h5 className="res-ratings">{avgRating} stars</h5>
        </div>
    </div>
)};

export default Card;