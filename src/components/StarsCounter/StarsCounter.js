import React from 'react';
import "./StarsCounter.css"

const oneStar = () => {
    return (
        <div className="StarsCounter" >
            <span className="fa fa-star"></span>
            <span className="fa fa-star-o"></span>
            <span className="fa fa-star-o"></span>
            <span className="fa fa-star-o"></span>
            <span className="fa fa-star-o"></span>
        </div>
    );
}

const twoStar = () => {
    return (
        <div className="StarsCounter" >
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star-o"></span>
            <span className="fa fa-star-o"></span>
            <span className="fa fa-star-o"></span>
        </div>
    );
}

const threeStar = () => {
    return (
        <div className="StarsCounter" >
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star-o"></span>
            <span className="fa fa-star-o"></span>
        </div>
    );
}

const fourStar = () => {
    return (
        <div className="StarsCounter" >
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star-o"></span>
        </div>
    );
}
const fiveStar = () => {
    return (
        <div className="StarsCounter" >
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
        </div>
    );
}

const StarsCounter = (props) => {
    const {rating} = props;
    const valueRating = parseInt(rating);
    switch (valueRating / 2) {
        case 1:
            return oneStar();
        case 2:
            return twoStar();
        case 3:
            return threeStar();
        case 4:
            return fourStar();
        case 5:
            return fiveStar();
        default:
            return (<></>)
    }    
}

export default StarsCounter;
