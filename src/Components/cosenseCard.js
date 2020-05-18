import React from "react"
// import HERO from '../assets/images/hero.jpg'

function Card(props) {
        return(
            <div class="col-md-6 col-lg-3 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
                <div class="team-member">
                <figure>
                  <img src={props.image} alt="Image" class="img-fluid"/>
                </figure>
                <div class="p-3">
                  <h3>{props.name}</h3>
                  <span class="position">{props.qualification}, {props.designation}</span>
                </div>
                </div>
            </div>
            )
        }
    

export default Card