import React from "react"

function Title(props){   
        return(<div className={props.classes} data-aos={props.aos}>
                    <h2 className="section-title mb-3">
                {props.titleText}
              </h2>
              </div>
            )
    }

export default Title