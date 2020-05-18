import React, {Component} from "react"
import Title from "../Components/cosenseTitle"
import Image from "../Components/cosenseImage"
import HeaderText from "../Components/cosenseHeader-Text"
import SLIDE3 from '../assets/images/slide_3.jpg'


class Indivisual extends Component {
    constructor(){
        super()
        this.state={
            classes:"col-12 text-center aos-init aos-animate",
            data_aos:"fade",
            title:"Individual",
            image:SLIDE3,
            heading:"Rediscovering sustainable community living",
            text:"CoSense offers the platform for application of combination of Scientific and Spiritual Knowledge that is available to enable you to remain in a state of bliss while you are in pursuit of your personal goals. CoSense will provide you with all the relevant knowledge from past and present that has been made available by the greatest practitioners in their own respective fields of science and spiritual evolution."
        }
    }
render(){
    return(
<div class="site-section cta-big-image" id="individual-section">
        <div class="container">
          <div class="row mb-5">
          <Title classes={this.state.classes} aos={this.state.data_aos} titleText={this.state.title}/>
          </div>
          <div class="row">
            <div class="col-lg-6 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
              <figure class="circle-bg">
              <Image image={this.state.image}/>
              </figure>
            </div>
            <div class="col-lg-5 ml-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
             <HeaderText header={this.state.heading} ptext={this.state.text}/>
            </div>
            
          </div>
        </div>
      </div>
    )
}
}
export default Indivisual