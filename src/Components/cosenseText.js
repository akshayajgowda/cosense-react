import React from "react"

function Text(props){   
        return(
                <div class="col-12 text-center aos-init aos-animate" data-aos="fade">
                <p className="lead aos-init" data-aos="fade-up" data-aos-delay="100">{props.text}</p>
                </div>
            )
    }

export default Text