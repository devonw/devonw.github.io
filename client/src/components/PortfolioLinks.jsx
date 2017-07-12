import React from 'react';

class PortfolioLinks extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (        
      <div className="links">
        <a href="https://github.com/devonw"><img className="thumbImage" src="client/dist/assets/GitHub.png"/></a>
        <a href="https://www.linkedin.com/in/devon-weldon/"><img className="thumbImage" src="client/dist/assets/linkedin.png"/></a>
      </div>
    )
  }
}

export default PortfolioLinks;