import React from 'react';

class Projects extends React.Component {
  constructor(props){
    super(props);
  }
    render() {
      return (
        <div className="projectWrapper">
          <div className="projectsTitle">
            Projects
          </div>
          <div className="aProject ynck">
            <div className="projectTitle">
              Ynck
            </div>
            <div className="projectDescription">
              App for sharing and classifying images of tattoos. <br/>
              Leverages Micrsoft cloud vision API to identify style of tattoo, <br/>
              based on ten stlyes, using a machine learning algorithm trained on 1000 images 
            </div>
            <br/>
            <div>
              Take a look at the project at 
              <a className="link" href="http://www.ynck.io/"> ynck.io </a>
              or checkout the code on <a className="link" href="https://github.com/devonw/ynck.io"> GitHub.</a>
            </div>
            <img className="projectImage" src="client/dist/assets/ynck-home.png" />
          </div>
          <div className="aProject buzz">
            <div className="projectTitle">
              Buzz
            </div>
            <div className="projectDescription">
              Locate happy hours and bars based on neighborhood and <br/>
              personal preference in San Francisco. Choose your favorites. <br/>
              user may log in to save their favorite bars or browse unregistered.
            </div>
            {/*/Users/devonweldon/Documents/personalSyte/devonw.github.io/client/dist/assets/buzzScreenShot.png*/}
            <img className="projectImage" src="client/dist/assets/buzzScreenShot.png" />
          </div>
        </div>
      )
    }
  }

  export default Projects;
