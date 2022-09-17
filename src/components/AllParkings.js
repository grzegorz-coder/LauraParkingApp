import React, {useState} from "react"

import styles from "./AllParkings.module.css"



const AllParkings = (props) => {
    const [isReserved, setIsReserved] = useState(false)

    const changeTile = () => {
        !isReserved? setIsReserved(true) : setIsReserved(false)
    }
    
    return (
    <div className={`${styles['allParkings__mainboard-grid']}`}>
       
        <div className={`${styles['allparkings__parking']} ${isReserved? styles.red : ''}`} onClick={changeTile}>{props.number}</div>
               
    </div>)
}

export default AllParkings;