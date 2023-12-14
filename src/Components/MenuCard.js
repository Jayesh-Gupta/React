const MenuCard=(props)=>{
    const {name,price,description}=props.menuData;
   // console.log(props.menuData);
    return (
    <div className="border-solid border-2 border-black mx-4 m-1 p-2">
        <h2 className="font-bold m-1 text-md">{name}</h2>
        <h5 className="m-1 font-bold text-green-500 ">Rs. {price/100}</h5>
        <p>{description}</p>
    </div>
    );

}


export default MenuCard;