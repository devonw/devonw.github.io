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
          <div className="aProject">
            <div className="yinkTitle">
              Ynck
            </div>
            <div className="projectDescription">
              App for sharing and classifying images of tattoos. <br/>
              Leverages Micrsoft cloud vision API to identify style of tattoo, <br/>
              based on ten stlyes, using a machine learning algorithm trained on 1000 images 
            </div>
          </div>
        </div>
      )
    }
  }

  export default Projects;
