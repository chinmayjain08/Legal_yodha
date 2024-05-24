import { SiTicktick } from "react-icons/si";
import "./HeroService.css";
import DocRequired from "../docRequired/DocRequired";
import MinRequirement from "../minRequirement/MinRequirement";
import Process from "../processOfRegistration/Process";

const HeroService = ({ data }) => {
  return (
    <div className="HeroService">
      <div className="HeroServiceHeading">
       {data.title}
      </div>
      <div className="bootom">{data.tagline}</div>
      <div className="features">
        {data.features.map((feature, i) => {
          return (
            <div className="feature" key={i}>
              <SiTicktick className="tickicon" />
              <div className="featureLine">{feature}</div>
            </div>
          );
        })}
      </div>

      <div className="Serviceintroduction">
        <div className="ServiceIntroHeading">
          <span>INTRO</span>DUCTION
        </div>
        <div className="paragraphintro">
         {data.introduction}
        </div>
      </div>
      
      {data.Documents_required ? <DocRequired data={data.Documents_required}></DocRequired> : null}
      
      {data.Minimum_Requirements ? <MinRequirement data={ data.Minimum_Requirements}></MinRequirement> : null}

      {data.process ? <Process data={data.process} ></Process> : null}
      
    </div>
  );
};

export default HeroService;
