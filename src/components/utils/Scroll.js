import React from 'react';

import scrollToComponent from 'react-scroll-to-component';

import About from '../About';
import ProjectsIndex from '../projects/ProjectsIndex';

class Scroll extends React.Component {

  componentDidMount() {
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc'});
  }

  render() {
    return (
      <div className='main'>
        <div className='button_group'>
          <button onClick={() => scrollToComponent(this.Indigo, { offset: 0, align: 'bottom', duration: 500, ease: 'inExpo'})}>About</button>
          <button onClick={() => scrollToComponent(this.Blue, { offset: -200, align: 'middle', duration: 1500, ease: 'inCirc'})}>Projects</button>
          <button onClick={() => scrollToComponent(this.Green, { offset: 0, align: 'middle', duration: 500, ease: 'inExpo'})}>Contact</button>
        </div>
        <section className='violet' ref={(section) => {
          this.Violet = section;
        }}><About/></section>
        <section className='indigo' ref={(section) => {
          this.Indigo = section;
        }}><ProjectsIndex/></section>
        <section className='blue' ref={(section) => {
          this.Blue = section;
        }}>Contact</section>
      </div>
    );
  }
}

export default Scroll;
