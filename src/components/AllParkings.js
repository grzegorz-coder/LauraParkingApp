import styles from "./AllParkings.module.css"



const AllParkings = (props) => {
    
    return (
    <div className={`${styles['allParkings__mainboard-grid']}`}>
       
        <div className={`${styles['allparkings__parking']}`}>{props.number}</div>
               
    </div>)
}

export default AllParkings;