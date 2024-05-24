import "./Process.css"

const Process = ({data}) => {

    console.log(data)
    return (
        <div className="process">
            <h1 className="process_heading"><span>Pro</span>cess</h1>
            <div className="processes_container">
                {data.map((process,i) => {
               return(
                    <div key={i} className="singleProcess">
                        <p className="PHBold">{process.process_heading}</p>
                        <p className="processDescription">{process.process_discription}</p>
                    </div>
                ) })}

            </div>
        </div>
    )
}

export default Process