import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { HOME_URL } from "../utilities/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";

const Body = () => {
  const arr = useState([]); //it returns array
  const [listOfRestaurents, setListOfRestaurents] = arr; //array destructuring

  const [filterListRes, setFilterListRes] = useState("");

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(HOME_URL);
    const json = await data.json();
    const loadData =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants; //optional Chaining
    setListOfRestaurents(loadData);
    setFilterListRes(loadData);
  };

  const OnlineStatus =useOnlineStatus();

  if(OnlineStatus===false)return <h1>You are Offline !!!!</h1>
  // Coditional Rendering
  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            id="search-bar"
            placeholder="Search....."
            value={searchText}
            onChange={(e) => {
              //console.log(e);
              setSearchText(e.target.value);
            }}
          />
          <button
            id="search-bar-btn"
            onClick={() => {
              const filteredList = listOfRestaurents.filter((restaurent) => {
                return restaurent.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterListRes(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <button
          id="top-res-btn"
          onClick={() => {
            let filteredList = listOfRestaurents.filter(
              (obj) => obj.info.avgRating > 4
            );
            setFilterListRes(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="card-container">
        {filterListRes.map((restaurent) => (
          <Link
            className="card-link"
            key={restaurent.info.id}
            to={"/restaurents/" + restaurent.info.id}
          >
            <Card resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
