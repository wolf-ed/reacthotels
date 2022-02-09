import React, { useState } from "react";

import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'

import styles from './Images.module.css';
import Modal from "../Modal/Modal";



const Images = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [showImageModal, setShowImageModal] = useState(false);
    const arrayOfImagesLength = props.images.length - 1;
    const displayButtons = arrayOfImagesLength > 0


    const prevImageHandler = (event) => {
        if (currentImage === 0) {
            setCurrentImage(arrayOfImagesLength)
        } else {
            setCurrentImage(prevState => prevState - 1)

        }
    }


    const nextImageHandler = (event) => {
        if (currentImage === arrayOfImagesLength) {
            setCurrentImage(0)
        } else {
            setCurrentImage(prevState => prevState + 1)
        }
    }

    const clickImageHandler = (event) => {
        setShowImageModal(true)
    }

    const hideModalHandler = () => {
        setShowImageModal(false)
    }

    const leftButton = <button onClick={prevImageHandler}
        className={styles['images-buttons-left']}
    ><GrPrevious className={styles['button-icon']} /></button>;
    const rightButton = <button onClick={nextImageHandler}
        className={styles['images-buttons-right']}
    ><GrNext className={styles['button-icon']} /></button>;

    let modal = <Modal onClose={hideModalHandler}>
        <img className={styles['modal-img']}
            src={`${props.images[currentImage].url}`}
            alt={`number${currentImage}`}
            onClick={clickImageHandler} /></Modal>



    return <div className={styles['images-container']}>
        {displayButtons && leftButton}
        <img src={`${props.images[currentImage].url}`} onClick={clickImageHandler} alt={`number${currentImage}`} />
        {displayButtons && rightButton}
        {showImageModal && modal}
    </div>

}

export default Images;

