import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import validator from 'validator'
import { apiKey } from "./../../services/emailkey";

export default class ApplyFormComponent extends Component {
  constructor(){
    super();
    this.state = {
      project_name : '',
      company_desc : '',
      website : '',
      website_city:'',
      email : '',
      name : '',
      surname : '',
      email_error : ''
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    if(validator.isEmail(this.state.email)){
      emailjs.send(apiKey.SEVICE_ID, apiKey.TEMPLATE_ID, this.state, apiKey.USER_ID)
      .then( response => {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
    } else {
      this.setState({email_error: 'Enter valid email'})
    }
  }

  handleInputChange = e => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  render (  ) {
    const { handleInputChange, handleSubmit, state } = this
    const { email_error, project_name, company_desc, website, website_city, email, name, surname} = state
    return(
     <div  className="apply-form">
      <div className="apply-form-info">
        <h1>
          MLTPLY Partners Application
        </h1>
        <p>
          Thank you very much for applying! Please fill out our form (in English or Spanish) and one of
          our partners will contact you. You don't take more than 5 minutes to fill out the form and bullet
          points are more than welcome.
          <br />
          Thanks for applying! Please fill out our form in either English or Spanish and one of out partners
          will contact you. Don't take more than 5 minutes to fill this out, and bullet points are just fine!

        </p>
      </div>
      <div >
        <form onSubmit={handleSubmit} className="apply-form-fields">
          <label htmlFor="project_name">Project Name</label>
          <input type="text" name="project_name" id="project_name" placeholder="Project Name"  value={project_name} onChange={handleInputChange} required/>
          <label htmlFor="company_desc">Company Description</label>
          <input type="text" name="company_desc" id="company_desc" placeholder="Company Description" value={company_desc} onChange={handleInputChange} required/>
          <label htmlFor="website">Website</label>
          <input type="text" name="website" id="website" placeholder="Website" value={website} onChange={handleInputChange} required/>
          <label htmlFor="website_city">City where company is based</label>
          <input type="text" name="website_city" id="website_city" placeholder="City where company is based" value={website_city} onChange={handleInputChange} required/>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={handleInputChange} required/>
          { email_error.length > 1 && <span style={{
          fontWeight: 'bold',
          color: 'red',
          padding: '0px 30px'
          }}>{email_error}</span>}
          <label htmlFor="name">Entrepreneur Name</label>
          <div className ="dobule-input">
          <input type="text" name="name" id="name" placeholder="Name" value={name} onChange={handleInputChange} required/>
          <input type="text" name="surname" id="surname" placeholder="Surname" value={surname} onChange={handleInputChange} required/>
          </div>
          <div>
            <button type="button" className="float-left">
              Back
            </button>
            <button type="submit" className="float-right">
              Next
            </button>
          </div>
        </form>
      </div>
     </div>
    );
  }
}