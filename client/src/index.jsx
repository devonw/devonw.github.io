import React from 'react';
import ReactDOM from 'react-dom';
import '../../stylesheets/main.scss'

import Header from './components/header.jsx';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import PortfolioLinks from './components/PortfolioLinks.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div>
        <div className="wrapper">
          <PortfolioLinks/>
          <Header/>
          <AboutMe/>
        </div>
          <Projects/>
      </div>

    )
  }
}

ReactDOM.render(< App />, document.getElementById('app'))