import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai"


import styles from './Stars.module.css'

const Stars = (props) => {
    const [star4, setStar4] = useState("gray")
    const [star5, setStar5] = useState("gray")
    const [star4Active, setStar4Active] = useState(false)
    const [star5Active, setStar5Active] = useState(false)

    const golden = "#EABE3F";
    const gray = "gray";

    const onClick3Handler = () => {
        props.onSetStars(3)
        setStar4(gray)
        setStar5(gray)
        setStar4Active(false)
        setStar5Active(false)
    }

    const star4Handler = () => {
        setStar4(golden)
    }

    const leaveStar4Handler = () => {
    if(star4Active || star5Active){
        return
    }
    setStar4(gray)

    }

    const onClick4Handler = () => {
        props.onSetStars(4)
        setStar4(golden)
        setStar5(gray)

        setStar4Active(true)
    }

    const star5Handler = () => {
       
        setStar4(golden)
        setStar5(golden)
    }

    const leaveStar5Handler = () => {
        if(star5Active){
            return
        }
        setStar5(gray)
    }
    const onClick5Handler = () => {
        props.onSetStars(5)
        setStar4(golden)
        setStar5(golden)
        setStar5Active(true)
    }

    return <ul className={styles['stars-list']}>
        <li><AiFillStar color={golden} className={styles.star} /></li>
        <li><AiFillStar color={golden} className={styles.star} /></li>
        <li
            onClick={onClick3Handler}
        ><AiFillStar color={golden} className={styles.star} /></li>
        <li
            onMouseEnter={star4Handler}
            onMouseLeave={leaveStar4Handler}
            onClick={onClick4Handler}

        >
            <AiFillStar color={star4} className={styles.star} /></li>
        <li
            onMouseEnter={star5Handler}
            onMouseLeave={leaveStar5Handler}
            onClick={onClick5Handler}
        >
            <AiFillStar color={star5} className={styles.star} /></li>
    </ul>
}

export default Stars;