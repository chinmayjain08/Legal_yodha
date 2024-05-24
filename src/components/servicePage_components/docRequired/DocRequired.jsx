import "./DocRequired.css";
import { IoDocumentSharp } from "react-icons/io5";
import { IoNewspaper } from "react-icons/io5";
import { SiLibreofficeimpress } from "react-icons/si";

const documentsData = [
    <IoDocumentSharp key={1} className="docRecLogo" />,
    <IoNewspaper key={1} className="docRecLogo" />,
    <IoNewspaper key={1} className="docRecLogo" />,
    <SiLibreofficeimpress key={1} className="docRecLogo" />,
    <SiLibreofficeimpress key={1} className="docRecLogo" />,
    <IoNewspaper key={1} className="docRecLogo" />,
    <IoDocumentSharp key={1} className="docRecLogo" />,
    <IoNewspaper key={1} className="docRecLogo" />,
    <IoNewspaper key={1} className="docRecLogo" />,
    <SiLibreofficeimpress key={1} className="docRecLogo" />,
    <SiLibreofficeimpress key={1} className="docRecLogo" />,
    <IoNewspaper key={1} className="docRecLogo" />
    // Add more documents as needed
];

const DocRequired = ({ data }) => {
    return (

        <section className="docRecSection">
            <h1 className="docRecHeading"><span>Documents</span> Required</h1>
            <div className="docRecContainer">
                {data.map((document, index) => (
                    <div key={index} className="singleDocRec">
                        <div className="sdrLeft">
                            {documentsData[index]}
                        </div>
                        <div className="sdrRight">
                            <p>{document}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DocRequired