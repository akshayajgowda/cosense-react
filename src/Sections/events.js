import React, {Component} from "react"
import RegisterEvents from "../Components/cosenseRegisterEvent"
import Title from "../Components/cosenseTitle"

class Events extends Component {
    constructor(){
        super()
        this.state={
            classes:"col-12 text-center aos-init aos-animate",
            data_aos:"fade-up",
            text:"Events",
            eventName1:"Current Event",
            evnetPrice1:"47",
            button1:"RegisterNow",
            eventName2:"Current Event",
            evnetPrice2:"200",
            eventName3:"Current Event",
            evnetPrice3:"750",
        }
    }

    render(){
        return(
            <div className="site-section bg-light" id="event-section">
        <div className="container">
          <div className="row mb-5">
              <Title classes={this.state.classes} aos={this.state.data_aos} titleText={this.state.text}/>
          </div>
          <div className="row mb-5">
            <RegisterEvents eventName={this.state.eventName1} evnetPrice={this.state.evnetPrice1} button={this.state.button1}/>
            <RegisterEvents eventName={this.state.eventName2} evnetPrice={this.state.evnetPrice2} button={this.state.button1}/>
            <RegisterEvents eventName={this.state.eventName3} evnetPrice={this.state.evnetPrice3} button={this.state.button1}/>
          </div>
        </div>
      </div>
        )
    }
}

export default Events