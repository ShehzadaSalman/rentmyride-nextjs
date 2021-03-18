import React from 'react'

export const AccordionTab = ({active, toggle, index, content}) => {
    return (
        <div className="accordion-wrapper" onClick={toggle}>
        <h3 className = {`acrdBtn ${active ? 'ui-state-active' : '' }`}>
           <span> {index}  <i></i></span>
            {content.heading}
            <em className="fa fa-angle-down"></em>
           <em className="fa fa-angle-up"></em>
       </h3>
       <div className= {`acrdContent ${active ?  'frst': '' }`}>
           <p>
             {content.paragraph}
           </p>
       </div>
        </div>  
    )
}
