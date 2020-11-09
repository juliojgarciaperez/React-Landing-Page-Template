import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';

export class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header data={JsonData.Header} />
        <Features data={JsonData.Features} />
        <About data={JsonData.About} />
        {/* <Gallery /> */}
        {/* <Team data={JsonData.Team} /> */}
        <Contact data={JsonData.Contact} />
      </div>
    )
  }
}

export default App;
