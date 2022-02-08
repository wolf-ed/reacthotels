import React, { Fragment, useState, useEffect } from "react";

import styles from './HotelList.module.css';
import Hotel from "../Hotel/Hotel";
import Stars from "../UI/Stars/Stars";

const HotelList = (props) => {
    const [hotelsFiltered, setHotelsFiltered] = useState([])
    const [stars, setStars] = useState(2);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    useEffect(
        () => {
            setHotelsFiltered(props.hotelList)
        }
        , [props.hotelList])

    const starsChangeHandler = (starsNum) => {
        setStars(starsNum)
    }
    const plusAdultHandler = (event) => {
        if (adults === 6) {
            return
        }
        setAdults(prevState => prevState + 1)
    }
    const minusAdultHandler = (event) => {
        if (adults === 1) {
            return
        }
        setAdults(prevState => prevState - 1)
    }
    const plusChildtHandler = (event) => {
        if (children === 4) {
            return
        }
        setChildren(prevState => prevState + 1)
    }
    const minusChildtHandler = (event) => {
        if (children === 0) {
            return
        }
        setChildren(prevState => prevState - 1)
    }



    const filterHotels = () => {
        let filteredByStars = props.hotelList.filter((hotel) =>
            hotel.starRating >= stars)
        let filteredByCapacity = filteredByStars.filter(hotel =>
            filterRooms(hotel).length > 0  //this returns an array of rooms, not an array of Hotels
        )
        setHotelsFiltered(filteredByCapacity)
    }


    const filterRooms = (hotelItem) => {
        let newArray = hotelItem.rooms.filter((room) =>
            room.occupancy.maxAdults >= adults &&
            room.occupancy.maxChildren >= children)
        return newArray
    }

    useEffect(() => {
        filterHotels()
    }, [stars, adults, children])





    const arrayOfHotels = hotelsFiltered.map(hotel => <Hotel
        key={hotel.id}
        rooms={hotel.rooms}
        hotel={hotel} // =============================================
        adults={adults}
        children={children}
    />
    );



    return <Fragment >
        <section className={styles['filter-form']}>
            <Stars
                className={styles.stars}
                onSetStars={starsChangeHandler} />
            <div>
                Adults:<button className={styles['plus-button']}
                    onClick={plusAdultHandler}>+</button>
                {adults}
                <button className={styles['minus-button']}
                    onClick={minusAdultHandler}>-</button>
            </div>
            <div>
                Children:<button className={styles['plus-button']}
                    onClick={plusChildtHandler}>+</button>
                {children}
                <button className={styles['minus-button']}
                    onClick={minusChildtHandler}>-</button>
            </div>
        </section>




        <ul className={styles['hotels-list']}>
            {arrayOfHotels.length > 0 && arrayOfHotels}
            {arrayOfHotels.length === 0 && <h1>No rooms found</h1>}
        </ul>

    </Fragment>
}

export default HotelList;
