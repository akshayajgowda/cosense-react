import React from "react"
import Title from "../Components/cosenseText"
import WisdomSection from "../Components/cosenseWisdom"
import SANDEEP from '../assets/images/person_3.jpg'
// import HERO from '../assets/images/hero.jpg'
// import HERO from '../assets/images/hero.jpg'

class Wisdom extends React.Component{
    constructor(){
        super()
        this.state={
            classes:"col-12 text-center aos-init aos-animate",
            data_aos:"fade",
            headerText:"Wisdom",
            delay1:"0",
            link1:"https://youngstaracademy.com/fitness-class/badminton/",
            image1:SANDEEP,
            discription1:"Badminton has become quite popular among people of all ages.",
            name1:"V.S.Sandeep",
            ptext1:"In recent, Badminton has become quite popular among people of all ages. It is a fun game that also offers adequate exercise for the player. It is an active sport without the aggression or rough play and this makes Badminton a perfect sport for all age groups. If you are looking for a sport for your young child but, are worried if it’ll be too difficult; look no further than Badminton.",
            date1:"Mar 18, 2019",
            delay2:"100",
            link2:"https://youngstaracademy.com/fitness-class/badminton/",
            image2:SANDEEP,
            discription2:"Badminton has become quite popular among people of all ages.",
            name2:"V.S.Sandeep",
            ptext2:"In recent times, Badminton has become quite popular among people of all ages. It is a fun game that also offers adequate exercise for the player. It is an active sport without the aggression or rough play and this makes Badminton a perfect sport for all age groups. If you are looking for a sport for your young child but, are worried if it’ll be too difficult; look no further than Badminton.",
            date2:"Mar 18, 2019",
            delay3:"100",
            link3:"https://youngstaracademy.com/fitness-class/badminton/",
            image3:SANDEEP,
            discription3:"Badminton has become quite popular among people of all ages.",
            name3:"V.S.Sandeep",
            ptext3:"In recent times, Badminton has become quite popular among people of all ages. It is a fun game that also offers adequate exercise for the player. It is an active sport without the aggression or rough play and this makes Badminton a perfect sport for all age groups. If you are looking for a sport for your young child but, are worried if it’ll be too difficult; look no further than Badminton.",
            date3:"Mar 18, 2019"
        }
    }
    render(){
        return(
            <div className="site-s++ection" id="blog-section">
        <div className="container">
          <div className="row mb-5">
            <Title classes={this.state.classes} aos={this.state.data_aos} titleText={this.state.text}/>
          </div>
          <div className="row">
            <WisdomSection delay={this.state.delay1} link={this.state.link1} link_text={this.state.discription1} name={this.state.name1} ptext={this.state.ptext1} date={this.state.date1}/>
            <WisdomSection delay={this.state.delay2} link={this.state.link2} link_text={this.state.discription2} name={this.state.name2} ptext={this.state.ptext2} date={this.state.date2}/>
            <WisdomSection delay={this.state.delay3} link={this.state.link3} link_text={this.state.discription3} name={this.state.name3} ptext={this.state.ptext3} date={this.state.date3}/>
          </div>
        </div>
      </div>
        )
    }
}
export default Wisdom