import React from 'react';
import './App.css'
import { Header, Title, Section } from './components';
import theme from '../global/theme.js';
import data from '../global/Data.js';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .pink {
    color: ${theme.colors.pink};
  }
  .aqua {
    color: ${theme.colors.aqua};
  }
  .grey {
    color: ${theme.colors.grey};
  }
  .white {
    color: ${theme.colors.white};
  }
  .darkgrey {
    color: ${theme.colors.darkgrey};
  }
  .red {
    color: ${theme.colors.red};
  }
  .slate {
    color: ${theme.colors.slate};
  }
  .green {
    color: ${theme.colors.green};
  }

  p {
    color: ${theme.colors.grey};
    font-size: 18px;
  }
`;

const App = (props) => {
  const { className } = props;

  const renderAbout = () => {
    return (
      <p className='about'>
        <span className='green'>"I am a Full-Stack Developer with a deep passion for creating software and data systems.
        I am always looking for the next big thing to build!"</span>
      </p>
    );
  }

  const renderExperience = () => {
    const jobs =  data.experience.map((job, i) => {
      return (
        <div className='item' key={i+'current'}>
          {job.current ?
            <p>
              <span className='aqua'>{job.title}</span> at <span className='red'>{job.company}</span>
            </p> :
            <p>
              {job.title} at {job.company}
            </p>
          }
        </div>
      );
    })

    return jobs;
  }

  const renderSkills = () => {
    const jobs = data.skills.map((skill, i) => {
      return (
        <div key={skill[0]+i} className='skills'>
          <p>
            <span className='red'>{skill[0]}</span>
            <span className='aqua'>: </span>
          </p>
          <p>
            <span className=''>{skill[1]}</span>
          </p>
        </div>
      );
    })

    return jobs;
  }

  return (
    <div className={className}>
      <GlobalStyle />
      <Header/>
      <Section name='About' render={()=>renderAbout()}/>
      <Section name='Skills' render={()=>renderSkills()}/>
      <Section name='Experience' render={()=>renderExperience()}/>
      <h2>{"Projects {"}</h2>
      <h2>{"}"}</h2>
    </div>
  );
}

App.propTypes = {

};

const styledApp = styled(App)`
  height: 100%;
  width: 800px;
  h2 {
    font-size: 27px;
    color: ${theme.colors.white};
  }
  .skills {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    p:first-of-type {
      padding-right: 15px;

    }
    p {
      line-height: 1.2;
    }
  }
  .about {
    padding: 10px 15px;
  }

  .item {
    :hover {
      background-color: rgba(100,100,100, 0.5);
    }
    p::before {
      content: '-';
      padding-right: 10px;
    }
  }

`;

export default styledApp;
