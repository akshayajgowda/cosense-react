import React from "react"

function WisdomSection(props) {
        return(
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay={props.delay}>
              <div class="h-entry">
                <a href={props.link}>
                  <img src={props.image} alt="Image" class="img-fluid"/>
                </a>
                <h2 class="font-size-regular">
                  <a href={props.link} target="_blank">{props.link_text}</a>
                </h2>
                <div class="meta mb-4">{props.name}<span class="mx-2">•</span> {props.date}<span class="mx-2">•</span>
                  {/* <a href="#">News</a> */}
                </div>
                <p>
                  {props.ptext}
                </p>
                <p><a href={props.link}>Continue Reading...</a></p>
              </div>
            </div>
        )
}
export default WisdomSection