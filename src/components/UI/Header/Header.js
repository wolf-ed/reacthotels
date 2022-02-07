import React from "react"

import styles from './Header.module.css'

const Header = props => {


    return <header className={styles.header}>   
    <div></div>
        <img src={`${props.image}`} 
        alt={'header-hotel'}/>
    </header>
}

export default Header;