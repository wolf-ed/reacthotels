import React from "react";

import styles from './Hotel.module.css'
import Room from "../Room/Room";
import Images from "../UI/Images/Images";
import StarRating from "../UI/StarRating/StarRating";

const Hotel = (props) => {
    let newHotels = (props.hotel.rooms)
    let filterRooms = newHotels
    let mappedRooms
    if (newHotels) {
        filterRooms = newHotels.filter((room) =>
            room.occupancy.maxAdults >= props.adults &&
            room.occupancy.maxChildren >= props.children
        )
        mappedRooms = filterRooms.map(room => <Room key={room.id} room={room} />)
    }



    return <li className={styles.hotel}>
        <section className={styles['hotel-data']}>
            <div className={styles.info}>
                <Images images={props.hotel.images} />
                <div className={styles['sub-info']}>
                    <h2>{props.hotel.name}</h2>
                    <p>{props.hotel.address1}</p>
                    <p>{props.hotel.address2}</p>
                </div>
            </div>


            <h2 className={styles.stars}><StarRating rating={props.hotel.starRating} /></h2>

        </section>


        <ul>
            {newHotels && mappedRooms}
        </ul>
    </li>
};

export default Hotel;

