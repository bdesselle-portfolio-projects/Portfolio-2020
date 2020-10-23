import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic"  src="images/profile.jpg" alt="" />
               </div>

               <div className="nine columns main-col">
                  <h1>
                     <span>About Me</span>
                  </h1>
                  <p>
                  {
                     resumeData.aboutme
                  }
                  </p>
               </div>
            </div>
         </section>
      );
   }
}