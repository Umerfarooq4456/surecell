import React , {useState} from "react";
import "./Myaccount.css";
import Group29 from "../assets/Group29.svg";
import Group289 from "../assets/Group289.png";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Myaccount = () => {
  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);

  const [click2, setClick2] = useState(false);
  const handleClick2 = () => setClick2(!click2);
  
  const [click3, setClick3] = useState(false);
  const handleClick3 = () => setClick3(!click3);
  
  const [click4, setClick4] = useState(false);
  const handleClick4 = () => setClick4(!click4);
  
  const [click5, setClick5] = useState(false);
  const handleClick5 = () => setClick5(!click5);
  
  const [click6, setClick6] = useState(false);
  const handleClick6 = () => setClick6(!click6);
  
  const [click7, setClick7] = useState(false);
  const handleClick7 = () => setClick7(!click7);
  
  const [click8, setClick8] = useState(false);
  const handleClick8 = () => setClick8(!click8);
  
  const [click9, setClick9] = useState(false);
  const handleClick9 = () => setClick9(click9);
  
  const [click10, setClick10] = useState(false);
  const handleClick10 = () => setClick10(!click10);
  
  const [click11, setClick11] = useState(false);
  const handleClick11 = () => setClick11(!click11);
  
  const [click12, setClick12] = useState(false);
  const handleClick12 = () => setClick12(!click12);


  return (
    <>
      <div className="account-main">
        <div className="accout-heading">
          <h1 className="act-h">
            Have A Question About Our Service
            <br /> Or Need Tech Support?
            <br /> We’re Here To Assist You 24/7.
          </h1>
          <img className="Group26" src={Group29} />
        </div>
      </div>

      <div className="acount-form">
        <div className="form-heading">
          <h1 className="frm-h">
            Fill Out This Form,
            <br />
            Or Send Us An Email To
          </h1>
          <a className="support-link">Support@Homeawaysecure.Com</a>
        </div>
        <div className="form-card">
          <div className="input-div">
            <form className="from">
              <input className="input1" type="name" placeholder="Name" />
              <input className="input2" type="email" placeholder="Email" />
              <textarea className="input3" placeholder="Message"></textarea>
              <div style={{paddingBottom: "18px"}}>
              
              <button className="submit-btn"><h3 className="submit-btntext">Submit</h3></button>
              </div>
            </form>
        
          </div>
        </div>
      </div>


      <div className="accoutn-part2">
        <div className="img289-div">
            <img className="Group289" src={Group289} />
            <h1 className="img-text">Want To Speak To A Real Person?<br/> Call Us Anytime:<br/><span className="img-num">
            1-877-331-4255
            </span></h1>
        </div>
      </div>


      <div className="acd-head">
            <h1 className="acd-text">Simple Answers to Frequently <br/> Asked Questions</h1>
        </div>

      <div className="acordion-div">
        <div className="acordion">
        <Accordion  onClick={handleClick1}>
        <AccordionSummary
          expandIcon={click1 ? <RemoveCircleOutlineIcon  style={{color: "orange"}}/> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">Why is your service so cheap?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="acordion-p">
          We have no fancy offices, sales teams or marketing campaigns to support. We choose to forgo the above and pass the savings on to YOU.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion onClick={handleClick2} style={{marginTop:" 9px"}}>
        <AccordionSummary
          expandIcon={click2 ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">Why is your service so cheap?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className="acordion-p">
          We have no fancy offices, sales teams or marketing campaigns to support. We choose to forgo the above and pass the savings on to YOU.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion onClick={handleClick3} style={{marginTop:" 9px"}}>
        <AccordionSummary
          expandIcon={click3 ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">What kind of cell phone service do I get?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className="acordion-p">
          We have no fancy offices, sales teams or marketing campaigns to support. We choose to forgo the above and pass the savings on to YOU.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion onClick={handleClick4} style={{marginTop:" 9px"}}>
        <AccordionSummary
          expandIcon={click4 ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">Do I need a contract to sign up for your plan?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className="acordion-p">
          We have no fancy offices, sales teams or marketing campaigns to support. We choose to forgo the above and pass the savings on to YOU.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion onClick={handleClick5} style={{marginTop:" 9px"}}>
        <AccordionSummary
          expandIcon={click5 ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">When do I pay?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className="acordion-p">
          We have no fancy offices, sales teams or marketing campaigns to support. We choose to forgo the above and pass the savings on to YOU.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion onClick={handleClick6} style={{marginTop:" 9px"}}>
        <AccordionSummary
          expandIcon={click6 ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">What happens if I miss a payment?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className="acordion-p">
          We have no fancy offices, sales teams or marketing campaigns to support. We choose to forgo the above and pass the savings on to YOU.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion onClick={handleClick7} style={{marginTop:" 9px"}}>
        <AccordionSummary
          expandIcon={click7 ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">I already have a smartphone. Can I use it with your plan?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className="acordion-p">
          We have no fancy offices, sales teams or marketing campaigns to support. We choose to forgo the above and pass the savings on to YOU.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion onClick={handleClick8} style={{marginTop:" 9px"}}>
        <AccordionSummary
          expandIcon={click8 ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">How many minutes can I speak per month?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className="acordion-p">
          We have no fancy offices, sales teams or marketing campaigns to support. We choose to forgo the above and pass the savings on to YOU.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion onClick={handleClick9} style={{marginTop:" 9px"}}>
        <AccordionSummary
          expandIcon={click9 ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">Can I call to Canada or Mexico?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className="acordion-p">
          We have no fancy offices, sales teams or marketing campaigns to support. We choose to forgo the above and pass the savings on to YOU.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion onClick={handleClick10} style={{marginTop:" 9px"}}>
        <AccordionSummary
          expandIcon={click10 ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">What happens if I use more than 2 GB of data?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className="acordion-p">
          We have no fancy offices, sales teams or marketing campaigns to support. We choose to forgo the above and pass the savings on to YOU.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion onClick={handleClick11} style={{marginTop:" 9px"}}>
        <AccordionSummary
          expandIcon={click11 ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">Are there any additional charges?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className="acordion-p">
          We have no fancy offices, sales teams or marketing campaigns to support. We choose to forgo the above and pass the savings on to YOU.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion onClick={handleClick12} style={{marginTop:" 9px"}}>
        <AccordionSummary
          expandIcon={click12 ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">How do I sign up?</p>
        </AccordionSummary>
        <AccordionDetails>
        <p className="acordion-p">
          We have no fancy offices, sales teams or marketing campaigns to support. We choose to forgo the above and pass the savings on to YOU.
          </p>
        </AccordionDetails>
      </Accordion>
        </div>
      </div>
    </>
  );
};

export default Myaccount;
