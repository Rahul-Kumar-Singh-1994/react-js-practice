import React, { useState, useEffect } from 'react';
import ResturantCard from './ResturantCard';
//import resList from '../utils/mockData/resListData';
import { Link } from 'react-router-dom';
import Shimmer from '../components/Shimmer';

const Body = () => {
    const [listOfResturants, setListOfResturants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredResturants, setFilteredResturants] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.970829&lng=77.6951076&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
                );
                const data = await response.json();
                console.log(data);
                setListOfResturants(
                    data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                        ?.restaurants
                );
                setFilteredResturants(
                    data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                        ?.restaurants
                );
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleResturant = () => {
        const filteredList = listOfResturants.filter(
            (res) => res?.info?.avgRating > 4
        );
        setListOfResturants(filteredList);
    };
    console.log(listOfResturants, 'listOfResturants');

    return listOfResturants.length === 0 ? (
        <Shimmer />
    ) : (
        <div>
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="seach-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            setFilteredResturants(
                                listOfResturants.filter((res) =>
                                    res.info.name
                                        .toLowerCase()
                                        .includes(searchText.toLocaleLowerCase())
                                )
                            );
                        }}
                    >
                        Search
                    </button>
                </div>
                <button className="filter-btn" onClick={handleResturant}>
                    Top Rated Resturant
                </button>
            </div>
            <div className="res-container">
                {filteredResturants.map((resturant) => (
                    <Link key={resturant.id} to={"/resturants/" + resturant.id}>  <ResturantCard resturant={resturant} /></Link>
                ))}
            </div>
        </div>
    );
};
export default Body;
