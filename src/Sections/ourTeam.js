import React,{Component} from "react"
import TitleText from "../Components/cosenseTitle-Text"
import Card from "../Components/cosenseCard"
import SashikanthImage from "../assets/images/person_1.jpg"
import ManjunathImage from "../assets/images/person_2.jpg"
import SandeepImage from "../assets/images/person_3.jpg"
import RishikaImage from "../assets/images/person_4.jpg"

class OurTeam extends Component{
  constructor(){
    super()
    this.state={
      classes1:"col-md-8 text-center",
      subText:"A Team of talented achivers across various domains and expertise.",
      title:"Our Team",
      image1:SashikanthImage,
      name1:"Dr.Sashikanth Kumbhar",
      qualification1:"MBBS",
      designation1:"MD YOGA",
      image2:ManjunathImage,
      name2:"Manjunath",
      qualification2:"KALARIPAYATTU GURU",
      designation2:"MARMA HEALER",
      image3:SandeepImage,
      name3:"V.S.Sandeep",
      qualification3:"M.P.ED",
      designation3:"FITNESS TRAINER, VOLLEYBALL COACH",
      image4:RishikaImage,
      name4:"Rishika Basnett",
      qualification4:"M.P.ED",
      designation4:"SPORTS PSYCOLOGY",
    }
  }
    render(){
        return(
          <div class="site-section" id="team-section">
          <div class="container">
            <div class="row mb-5 justify-content-center">
            <TitleText classes1={this.state.classes1} titleText={this.state.title} ptext={this.state.subText}/>
              </div>
              <div class="row">
                <Card image={this.state.image1} name={this.state.name1} qualification={this.state.qualification1} designation={this.state.designation1}/>
                <Card image={this.state.image2} name={this.state.name2} qualification={this.state.qualification2} designation={this.state.designation2}/>
                <Card image={this.state.image3} name={this.state.name3} qualification={this.state.qualification3} designation={this.state.designation3}/>
                <Card image={this.state.image4} name={this.state.name4} qualification={this.state.qualification4} designation={this.state.designation4}/>
              </div>
            </div>
          </div>
            )
    }
}

export default OurTeam