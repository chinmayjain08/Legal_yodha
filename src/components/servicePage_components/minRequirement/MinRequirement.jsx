
import "./MinRequirement.css"
import { BsFillArrowRightSquareFill } from "react-icons/bs";



const MinRequirement = ({data}) => {
    return (
        <div className="minReqCompoContainer">
            <h1 className="min_req_heading"><span>Minimum</span> Requirements</h1>
            <div className="minReqContainer">
                { data && data.map((requirement, index) => (
                    <div key={index} className="singleMinReq">
                        <BsFillArrowRightSquareFill className="leftDivForIcon" />
                        <p>{requirement}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MinRequirement