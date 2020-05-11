import React,{Component} from "react"
import Hero_4 from "../assets/images/hero_4.jpg"
import Button from "../Components/cosenseButton"

class Home extends Component{
  constructor(){
    super()
    this.state={
      heroImage:Hero_4,
      mainText:"Welcome",
      subText:"We at COSENSE believe in collective happiness of all living entities in harmony with nature around us.",
      title:"Get In Touch"
    }
  }
    render(){
        return(
            <div className="site-blocks-cover overlay aos-init aos-animate" style={{ backgroundImage: `url(${this.state.heroImage})`}} data-aos="fade" id="home-section">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-8 mt-lg-5 text-center">
                  <h1 className="text-uppercase aos-init aos-animate" data-aos="fade-up">
                    {this.state.mainText}
                  </h1>
                  <p className="mb-5 desc aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    {this.state.subText}
                  </p>
                  <Button title={this.state.title}/>
                </div>
              </div>
            </div>
            <a href="#about-section" className="mouse smoothscroll">
              <span className="mouse-icon">
                <span className="mouse-wheel"></span>
              </span>
            </a>
          </div>
            )
    }
}

export default Home