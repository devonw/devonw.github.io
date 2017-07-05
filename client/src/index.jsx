import React from 'react';
import ReactDOM from 'react-dom';
import '../../stylesheets/main.scss'

import Header from './components/header.jsx';
import AboutMe from './components/AboutMe.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div className="wrapper">
        <Header/>
        <AboutMe/>
      </div>

    )
  }
}

ReactDOM.render(< App />, document.getElementById('app'))