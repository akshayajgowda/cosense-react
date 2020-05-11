import React from "react"

function TitleText(props){   
        return(
            <div className={props.classes1}>
            <h2 className="section-title mb-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
            {props.titleText}
          </h2>
          <p className="lead aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" style={{display:props.ptext?"block":"none"}}>
          {props.ptext}
        </p>
        </div>
            )
    }

export default TitleText