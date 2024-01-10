import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RestautantMenuCard = () => {
    const [resInfo, setResInfo] = useState();
    const { resId } = useParams();
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const response = await fetch(
            'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.970829&lng=77.6951076&restaurantId=392699&catalog_qa=undefined&submitAction=ENTER'
        );
        const json = await response.json();
        console.log(json);
        setResInfo(json);
    };

    //const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card?.info;

    return (
        <div className="menu">
            {/* <h2>{name}</h2>
            <h3>{cuisines}</h3>
            <h3>{costForTwoMessage}</h3> */}
        </div>
    );
};

export default RestautantMenuCard;
