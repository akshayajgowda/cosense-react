import React, {Component} from "react"
import Home from "./Sections/home"
import OurVision from "./Sections/ourVision"
import OurMission from "./Sections/ourMission"
import OurTeam from "./Sections/ourTeam"
import Nav from "./Sections/navBar"
import Events from "./Sections/events"
import Indivisual from "./Sections/indivisual"
import Wisdom from "./Sections/wisdom"

class Main extends Component {
    render(){
        return(
            <div className="site-wrap">
                <Nav/>
                <Home/>
                <OurVision/>
                <OurMission/>
                <OurTeam/>
                <Events/>
                <Indivisual/>
                <Wisdom/>
            </div>
        )
    }
}

export default Main