import "./AllParkings.css"



const AllParkings = (props) => {
    
    return (
    <div className="allParkings__mainboard-grid">
       
        <div className="allparkings__parking">{props.number}</div>
               
    </div>)
}

export default AllParkings;