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
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


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
            </form>
            <button className="submit-btn"><h3 className="submit-btntext">Submit</h3></button>
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
            <h1 className="acd-text">Simple Answers to Frequently Asked Questions</h1>
        </div>

      <div className="acordion-div">
        <div className="acordion" onClick={handleClick}>
        <Accordion>
        <AccordionSummary
          expandIcon={click ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">Why is your service so cheap?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="acordion-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={click ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">Why is your service so cheap?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="acordion-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={click ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">Why is your service so cheap?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="acordion-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={click ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">Why is your service so cheap?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="acordion-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={click ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">Why is your service so cheap?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="acordion-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={click ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">Why is your service so cheap?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="acordion-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={click ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">Why is your service so cheap?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="acordion-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={click ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">Why is your service so cheap?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="acordion-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={click ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">Why is your service so cheap?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="acordion-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={click ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">Why is your service so cheap?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="acordion-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={click ? <RemoveCircleOutlineIcon  style={{color: "orange"}} /> : <AddCircleOutlineOutlinedIcon  style={{color: "orange"}}/> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="acordion-para">Why is your service so cheap?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="acordion-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
        </div>
      </div>
    </>
  );
};

export default Myaccount;
