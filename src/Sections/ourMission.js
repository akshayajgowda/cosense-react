import React,{Component} from "react"
import TitleText from "../Components/cosenseTitle-Text"
import Image from "../Components/cosenseImage"
import HERO from '../assets/images/hero.jpg'

class OurMission extends Component{
  constructor(){
    super()
    this.state={
      classes1:"col-md-8 text-center",
      subText:"CoSense is on a mission to help people realize the power of being connected to each other and the surrounding nature which will eventually help one to achieve the maximum out of their individual potential.",
      title:"Our Mission",
      image:HERO
    }
  }
    render(){
        return(
          <div class="site-section" id="mission-section">
          <div class="container">
            <div class="row mb-5 justify-content-center">
            <TitleText classes1={this.state.classes1} titleText={this.state.title} ptext={this.state.subText}/>
              </div>
            </div>
            <div class="row">
              <div
                class="col-lg-6 mb-5 aos-init"
                data-aos="fade-up"
                data-aos-delay=""
              >
                <div class="owl-carousel slide-one-item-alt owl-loaded owl-drag">
                  <div>
                  <Image image= {this.state.image}/>
                  </div>
                  <div>
                  <Image image= {this.state.image}/>
                  </div>
                  <div>
                  <Image image= {this.state.image}/>
                  </div>
                  <div>
                  <Image image= {this.state.image}/>
                  </div>
                </div>
                <div class="custom-direction">
                  <a href="#" class="custom-prev"
                    ><span
                      ><span class="icon-keyboard_backspace"
                        ><i class="fa fa-arrow-left"></i></span></span></a
                  ><a href="#" class="custom-next"
                    ><span
                      ><span class="icon-keyboard_backspace"
                        ><i class="fa fa-arrow-left"></i></span></span
                  ></a>
                </div>
              </div>
              <div
                class="col-lg-5 ml-auto aos-init"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  class="owl-carousel slide-one-item-alt-text owl-loaded owl-drag"
                >
                  <div>
                    <h2 class="section-title mb-3">Community</h2>
                    <p>
                      Cosense is committed to contribute towards building a
                      healthy, happy and compassionate society.
                    </p>
                    <p>
                      To experience harmony and happiness as an individual, the
                      community plays an important role. A responsible and
                      Compassionate community enables this cause.
                    </p>
                    <p>
                      <a href="#" class="btn btn-primary mr-2 mb-2">Learn More</a>
                    </p>
                  </div>
                  <div>
                    <h2 class="section-title mb-3">Individual</h2>
                    <p>
                      Cosense is committed in enabling an individual to experience
                      wellbeing in a more holistic way by building around these
                      four aspects of health.
                    </p>
                    <p>
                      The overall wellbeing of an individual is governed by his
                      physical, mental, emotional and spiritual health.
                    </p>
                    <p>
                      <a
                        href="#individual-section"
                        class="btn btn-primary mr-2 mb-2"
                        >Learn More</a
                      >
                    </p>
                  </div>
                  <div>
                    <h2 class="section-title mb-3">Environment</h2>
                    <p>
                      Cosense is dedicated to contribute at its best of the
                      abilities in the interest of environment.
                    </p>
                    <p>
                      Just like We take care of our immediate family, we have to
                      take care of mother nature as well. This is not an automatic
                      phenomenon as we generally assume. An effort is required
                      from our end to take care of environment around us.
                    </p>
                    <p>
                      <a href="#" class="btn btn-primary mr-2 mb-2">Learn More</a>
                    </p>
                  </div>
                  <div>
                    <h2 class="section-title mb-3">
                      CoDharma
                    </h2>
                    <p>
                      At CoDharma, we request for your time and participation and
                      we are sure that together we can make the world beautiful
                      place to live. Let us become part of responsible society and
                      contribute towards peace, harmony, health and make people
                      experience love and compassion.
                    </p>
                    <p>
                      <a href="#" class="btn btn-primary mr-2 mb-2">Learn More</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            )
    }
}

export default OurMission