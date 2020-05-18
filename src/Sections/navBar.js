import React, {Component} from 'react'
import LOGO from "../assets/images/logo.png"

class Nav extends Component {
    constructor(){
        super()
        this.state={}
    }

render(){
    return(
        <div>
             <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"><i className="fa fa-times"></i></span>
          </div>
        </div>
        <div className="site-mobile-menu-body">
          <ul className="site-nav-wrap">
            <li><a href="#home-section" className="nav-link active">Home</a></li>
            <li className="has-children">
              <a href="#about-section" className="nav-link">Our Vision</a>
              </li>
                <li><a href="#team-section" className="nav-link">Our Team</a></li>               
            <li><a href="#mission-section" className="nav-link">Our Mission</a></li>
            <li>
              <a href="#event-section" className="nav-link">Events</a>
            </li>
            <li><a href="#blog-section" className="nav-link">Wisdom</a></li>
            <li><a href="#contact-section" className="nav-link">Contact</a></li>
          </ul>
        <ul className="site-nav-wrap">
                    <li>
                      <a href="#home-section" className="nav-link active">Home</a>
                    </li>
                    <li className="has-children">
                      <a href="#about-section" className="nav-link">Our Vision</a>
                      </li>
                        <li>
                          <a href="#team-section" className="nav-link">Our Team</a>
                        </li>                  
                    <li>
                      <a href="#mission-section" className="nav-link">Our Mission</a>
                    </li>
                    <li>
                      <a href="#event-section" className="nav-link">Events</a>
                    </li>
                    <li><a href="#blog-section" className="nav-link">Wisdom</a></li>
                    <li>
                      <a href="#contact-section" className="nav-link">Contact</a>
                    </li>
                  </ul></div>
      </div>
     
      <div id="sticky-wrapper" className="sticky-wrapper">
      <header className="site-navbar py-3 js-sticky-header site-navbar-target fixed shrink" role="banner">
      <div className="container">
      <div className="row align-items-center">
              <div className="col-6 col-xl-2">
              <h1 className="mb-0 site-logo">
              <a href="index.html" className="h2 mb-0"><img src={LOGO} alt="logo" className="img-logo"/><span className="logo-text">cosense</span><span className="text-primary">.</span>
                  </a>
                  </h1>
                  </div>
                  <div className="col-12 col-md-10 d-none d-xl-block">
                <nav className="site-navigation position-relative text-right" role="navigation">
                  <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                    <li>
                      <a href="#home-section" className="nav-link active">Home</a>
                    </li>
                    <li className="has-children">
                      <a href="#about-section" className="nav-link">Our Vision</a>
                     </li>
                        <li>
                          <a href="#team-section" className="nav-link">Our Team</a>
                        </li>
                    <li>
                      <a href="#mission-section" className="nav-link">Our Mission</a>
                    </li>
                    <li>
                      <a href="#event-section" className="nav-link">Events</a>
                    </li>
                    <li><a href="#blog-section" className="nav-link">Wisdom</a></li>
                    <li>
                      <a href="#contact-section" className="nav-link">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style={{position: 'relative', top: '3px'}}>
                <a href="#" className="site-menu-toggle js-menu-toggle float-right active"><span className="icon-menu h3"><i className="fa fa-bars"></i></span></a>
              </div>
                  </div>
          </div>
          </header>
          </div>

        </div>
    )
}
}
export default Nav