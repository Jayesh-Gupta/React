const MenuCard=(props)=>{
    const {name,price,description}=props.menuData;
   // console.log(props.menuData);
    return (
    <div className="menu-card-container">
        <h2>{name}</h2>
        <h5>{price/100}</h5>
        <p>{description}</p>
    </div>
    );

}


export default MenuCard;