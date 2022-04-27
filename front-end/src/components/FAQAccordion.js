import React, { useState } from 'react';
import { FAQData } from './FAQData';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import {Link} from 'react-router-dom'

const AccordionSection = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-left: 0px;
  margin-top: 0px
  position: absolute;
`;

const Container = styled.div`
  top: 5%;

`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  cursor: pointer;
  width: 100%;
  border-top: 1px solid #ff0000;
  border-radius: 5px;



  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
  h2 {
    padding: 1rem;
    font-size: 2rem;
    
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: #ffffff;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  text-align: center;
  margin-top:0px;
  border-radius: 5px;
  border-bottom: 1px solid #ff0000;
  border-top: 1px solid #ff0000;
  overflow-y: scroll;
  



  p {
    font-size: 2rem;
  }

  .p-info {
    font-size: 20px;
    margin-top 100px;
    text-align: center;
  }

  .p-other {
    font-size: 1rem;
  }

  h2 {
    padding: 1rem;
    font-size: 2rem;
    padding-top: 5px;
    border-top: 2px solid white;
    text-decoration: underline;
    color: white;
    
  }

  .linkStyle{
    color: red;
    font-weight: bold;
    text-decoration: underline;
    
  }
  
`;

const Ul = styled.div`
    list-style: none;

     li{
        font-size: 20px;
     }

      li:before {
        content: "• "; 
        color: red; 
        font-weight: bold;
        font-size: 30px; 
        display: inline-block; 
        width: 1em; 
      }

      .linkStyle{
        color: red;
        font-weight: bold;
        text-decoration: underline;
        font-size: 20px;
      }
`;
  






const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };


  return (
    <IconContext.Provider value={{ color: '#ff0000', size: '25px' }}>
      <AccordionSection>
        <Container>
          {FAQData.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                   { 
                    item.answer.map((answerObj)=>{
                      return(
                        <>
                          {answerObj.subHeading !== "" && answerObj.subHeading !== "Eligible" ? <h2>{answerObj.subHeading}</h2> : <></> }

                          { answerObj.subHeading === "Registration" ? 
                              <>
                                <Ul>
                                  <li>You'll sign in and go over <Link to="./eligibility" className='linkStyle'>basic eligibility</Link></li>
                                  <li>You'll be asked to show ID, such as your driver's license</li>
                                  <li>You'll read some information about donating blood</li>
                                  <li>You'll be asked for your complete address.  
                                      Your address needs to be complete (including PO Box, street/apartment number) and 
                                      the place where you will receive your mail 8 weeks from donation</li>

                                </Ul>
                              </>
                          
                            :answerObj.subHeading === "Your donation" ?
                            
                                <>
                                  <Ul>
                                    <li>If you're donating whole blood, an area on your arm will be cleansed and a brand new 
                                        sterile needle will be inserted for the blood draw. (This feels like a quick pinch 
                                        and is over in seconds.)</li>
                                    <li>Other types of donations, like <Link to="./eligibility/plateletdonation" className='linkStyle'>platelets</Link>, are made using 
                                        an aphaeresis machine that will be connected to both arms.</li>
                                    <li>A <Link to="./eligibility/wholeblooddonation" className='linkStyle'>whole blood donation</Link> takes 8-10 minutes, during which 
                                        you'll be seated comfortably or lying down.</li>
                                    <li>When about a pint of whole blood has been collected, the donation is complete and a staff 
                                        person will place a bandage on your arm.</li>
                                    <li>For platelets, the aphaeresis machine will collect a small amount of blood, remove the platelets, 
                                        and return the rest of the blood through your other arm; this cycle will be repeated several times 
                                        for about 2 hours.</li>

                                  </Ul>
                                </>

                            :answerObj.subHeading === "Before Your Donation" ?
                            
                                <>
                                  <Ul>
                                    <li>Make an Appointment! Select a donation type and find a convenient time that works best for you. 
                                    {/* <Link to="/finddonationsite" className='linkStyle'>Find a donation site!</Link> */}
                                    </li>
                                    <li>Have iron-rich foods, such as red meat, fish, poultry, beans, spinach, iron-fortified cereals or raisins.</li>
                                    <li>Get a good night's rest the night before your donation, eat healthy foods and drink plenty of liquids.</li>
                                    <li>If you are donating platelets Don't take aspirin for 2 days before your appointment.</li>
                                    <li>Ask a friend to donate at the same time to support each other and help with the national blood shortage! </li>

                                  </Ul>
                                </>
                            
                            :answerObj.subHeading === "Eligible" ?
                            
                                <>
                                  <Ul>
                                    <p>These are the basic requirements for most donations:</p>
                                    <br></br>
                                    <li>You must be in good health. You generally feel well, even if you're being treated for a chronic condition.</li>
                                    <li>In most states you must be 17 years old. 16 year olds may donate with parental permission if allowed by state law. 
                                        If you're a teen donor check out our <Link to="./eligibility/informationforteens" className='linkStyle'>information for teens page!</Link></li>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                  </Ul>
                                  <p className='p-other'><Link to="/login" className='linkStyle'>Create a profile and take a quiz to determine your eligibility for each type of blood donation (Whole Blood Donation, 
                                      Power Red Donation (Double Red Cell), Platelet Donation ,Plasma Donation)</Link></p>
                                </>

                            :answerObj.subHeading === "" ?
                            
                                answerObj.points.map((point)=>{
                                  return(
                                    <>
                                      <p className='p-info'>{point}</p>
        
                                    </>
                                  )
                                  })

                            :answerObj.points.map((point)=>{
                            return(
                              <>
                                <Ul>
                                  <li>{point}</li>
                                </Ul>
                              </>
                            )
                            })}
                       </>
                      
                      
                     )

                   })}
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;