import React,{Component} from "react"

function HeaderText(props){   
        return(
            <div class="mb-4">
            <h3 class="h3 mb-4 text-black">
              {props.header}
            </h3>
            <p>
             {props.ptext}
            </p>
          </div>
            )
    }

export default HeaderText