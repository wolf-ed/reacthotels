import React from "react";

import styles from './Room.module.css'

const Room = (props) => {
    // let roomImages = []

    // if(props.room.images) {
    //     roomImages = props.room.images.map(image => <img src={`${image.url}`} />)
    // }

    return <li className={styles.room}>
        <section className={styles['room-info']}>
        <h3>{props.room.name}</h3>
        <p>{'Adults: ' + props.room.occupancy.maxAdults}</p>
        <p>{'Children: ' + props.room.occupancy.maxChildren}</p>
        </section>

        <div className={styles['long-description-room']}>
        <p>{props.room.longDescription}</p>

        </div>
        {/* <ul>
                        {roomImages.length > 0 && roomImages}
                        </ul> */}
    </li>
}

export default Room
