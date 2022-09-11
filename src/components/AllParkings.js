import "./AllParkings.css"



const AllParkings = (props) => {
    
    return (
    <div className="allParkings__mainboard-grid">
        <li>
        <div className="allparkings__parking">{props.number}</div>
        </li>
    </div>)
}

export default AllParkings;