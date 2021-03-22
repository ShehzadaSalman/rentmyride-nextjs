import React, {useState} from 'react'
import { AccordionTab } from './homepage/AccordionTab';

const AccordionFAQ = () => {

    let AccordionContent = [
        {heading: 'What are the documents required in car rental in dubai', paragraph: 'If you are a UAE resident, then you need to carry: Valid UAE Driving License Copy of Emirates ID If you are a tourist visiting Dubai, then you need to carry: Copy of Passport Copy of Visit Visa/Visa Stamp Valid International Driving License.'},
        {heading: 'What are the extra costs involved in renting a car in Dubai?', paragraph: 'There are no overhead charges unless they have been mentioned by the car rental company. It is always best to ask us regarding insurance and other details before you rent the car.'},
        {heading: 'Can anyone else drive my car other than me', paragraph: 'No, only the registered driver whose driving license and details have been submitted can drive a hired car.'},
        {heading: 'Do you offer a delivery service', paragraph: 'Yes, all cars listed on rentmyride.ae are offered with free delivery and pick up services..'}
    ]


  const [accordion1, setAccordion1] = useState(true);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  const [accordion4, setAccordion4] = useState(false);



  const toggleAccordion = (n) => {
      if(n == 1){
        setAccordion1(!accordion1)
      }else if(n == 2){
        setAccordion2(!accordion2)
      }else if(n == 3){
        setAccordion3(!accordion3)
      }else if(n == 4){
        setAccordion4(!accordion4)
      }
      console.log('accordion is toggled')
  }





    return (
        <div id="accordion">

   {/* <button onClick={() => toggleAccordion(1)}>toggle Accordion</button> */}

    <AccordionTab active={accordion1} index = {1} toggle ={() => toggleAccordion(1)}  content = {AccordionContent[0]}  />
    <AccordionTab active = {accordion2} index = {2} toggle ={() => toggleAccordion(2)} content = {AccordionContent[1]} />
    <AccordionTab active={accordion3} index = {3} toggle ={() => toggleAccordion(3)} content = {AccordionContent[2]}/>
    <AccordionTab active={accordion4} index = {4} toggle ={() => toggleAccordion(4)} content = {AccordionContent[3]}/>
   

   
    

    </div>

    )
}

export default React.memo(AccordionFAQ)