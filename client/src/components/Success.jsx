import ResumeT from './ResumeT';
import React, { Component } from 'react'


export default class Success extends Component {


  nextResume = e => {
    e.preventDefault();
    this.props.nextResume();
    e.target.reset();
  }

  
  render() {

    
    return (
      


      // {/* <form onSubmit={this.continue}> */}
      <form onSubmit={this.nextResume}>

        <div className="container text-center">

          <div className="card animated bounceIn">
            <div className="card-body text-center pt-5 pb-5">
              <i className="fas fa-check-circle fa-7x text-success"></i>
              <h2>Hang Tight while your Resume Downloads!</h2>
              <br />

            </div>

          </div>

          {/* <button type="button" className="btn btn-info" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button> */}
          {/* <button type="submit" className="btn btn-info" >Download PDF<i className="fas fa-download ml-1"></i></button> */}
          <button type="submit" className="btn btn-info" >Next Resume<i className="fas fa-submit ml-1"></i></button>
        </div>
        <br />
      </form>


      

    )

       
  }
}



