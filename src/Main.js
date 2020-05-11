import React, {Component} from "react"
import Home from "./Sections/home"
import OurVision from "./Sections/ourVision"
import OurMission from "./Sections/ourMission"
import Nav from "./Sections/navBar"

class Main extends Component {
    render(){
        return(
            <div className="site-wrap">
                <Nav/>
                <Home/>
                <OurVision/>
                <OurMission/>
            </div>
        )
    }
}

export default Main