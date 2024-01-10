import React from 'react';
import { CDN_URL } from '../utils/constants';

const ResturantCard = ({ resturant }) => {

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resturant?.info;

    return (
        <div className="res-card">
            <img className="res-logo" alt='error' src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating}Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resturant?.info?.sla?.deliveryTime}mins</h4>
        </div>
    )
}
export default ResturantCard;
