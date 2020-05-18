import React from "react"

function RegisterEvent(props) {
        return(
            <div class="col-md-6 mb-4 mb-lg-0 col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
            <div class="pricing">
              <h3 class="text-center text-black">{props.eventName}</h3>
              <div class="price text-center mb-4">
                <span><span>${props.evnetPrice}</span> / year</span>
              </div>
              <ul class="list-unstyled ul-check success mb-5">
                <li>Officia quaerat eaque neque</li>
                <li>Possimus aut consequuntur incidunt</li>
                <li class="remove">Lorem ipsum dolor sit amet</li>
                <li class="remove">Consectetur adipisicing elit</li>
                <li class="remove">Dolorum esse odio quas architecto sint</li>
              </ul>
              <p class="text-center">
                <a href="#" class="btn btn-secondary">{props.button}</a>
              </p>
            </div>
          </div>
            )
        }
    

export default RegisterEvent