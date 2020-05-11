import React,{Component} from "react"

function Button(props){
        return(
                <div data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate">
                <a href="#contact-section" className="btn smoothscroll btn-primary mr-2 mb-2">{props.title}</a>
              </div>
            )
}

export default Button