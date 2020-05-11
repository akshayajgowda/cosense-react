import React,{Component} from "react"
import Title from "../Components/cosenseTitle"
import Image from "../Components/cosenseImage"
import HeaderText from "../Components/cosenseHeader-Text"
import List from "../Components/cosenseList"
import HERO from '../assets/images/hero.jpg'

class OurVision extends Component{
  constructor(){
    super()
    this.state={
      text:"Our Vision",
      classes:"col-12 text-center aos-init aos-animate",
      aos:"fade",
      image:HERO,
      headerText:"Rediscovering sustainable community living",
      pText:"CoSense offers the platform for application of combination of Scientific and Spiritual Knowledge that is available to enable you to remain in a state of bliss while you are in pursuit of your personal goals. CoSense will provide you with all the relevant knowledge from past and present that has been made available by the greatest practitioners in their own respective fields of science and spiritual evolution."
    }      
    }
  
    render(){
        return(
            <div className="site-section cta-big-image" id="about-section">
               <div className="container">
                 <div className="row mb-5">
                   <Title titleText={this.state.text} classes={this.state.classes} aos={this.state.aos}/>
                 </div>
                 <div className="row">
                 <div className="col-lg-6 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
                   <figure className="circle-bg">
                   <Image image={this.state.image} />
                   </figure>
                 </div>
                 

                 <div className="col-lg-5 ml-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                   <HeaderText header={this.state.headerText} ptext={this.state.pText}/>
                   <List/>
                 </div>
                 </div>
               </div>
            </div>
        )
    }
}

export default OurVision