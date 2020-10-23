import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id='resume'>
        <div className='row education'>
          <div className='three columns header-col'>
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className='nine columns main-col'>
            {resumeData.education &&
              resumeData.education.map(item => {
                return (
                  <div className='row item'>
                    <div className='twelve columns'>
                      <h3>{item.UniversityName}</h3>
                      <p className='info'>
                        {item.specialization}
                        <span>&bull;</span>{' '}
                        <em className='date'>
                          {item.MonthOfStarting} {item.YearOfStarting}{' - '}{item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className='row work'>
          <div className='three columns header-col'>
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className='nine columns main-col'>
            {resumeData.work &&
              resumeData.work.map(item => {
                return (
                  <div className='row item'>
                    <div className='twelve columns'>
                      <h3>{item.CompanyName}</h3>
                      <p className='info'>
                        {item.specialization}
                        <span>&bull;</span>{' '}
                        <em className='date'>
                          {item.MonthOfStarting} {item.YearOfStarting}{' - '}{item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className='row skill'>
          <div className='three columns header-col'>
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className='nine columns main-col'>
            {/* <div className='bars'>
              <ul className='skills'>
                {resumeData.skills &&
                  resumeData.skills.map(item => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        ></span>
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div> */}

            <div className='skills'>
              <div className='frontend'>
                <h2>Front-end</h2>
                <ul>
                  {resumeData.frontend &&
                  resumeData.frontend.map(item => {
                    return (
                      <li>
                        {item.skillname}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className='backend'>
                <h2>Back-end</h2>
                <ul>
                  {resumeData.backend &&
                  resumeData.backend.map(item => {
                    return (
                      <li>
                        {item.skillname}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className='other'>
                <h2>Other</h2>
                <ul>
                  {resumeData.other &&
                  resumeData.other.map(item => {
                    return (
                      <li>
                        {item.skillname}
                      </li>
                    );
                  })}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}
