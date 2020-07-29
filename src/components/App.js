import React, { useCallback } from 'react';
import './App.css'
import { Header, Title, Section } from './components';
import theme from '../global/theme.js';
import data from '../global/Data.js';
import styled, { createGlobalStyle } from 'styled-components';

// git subtree push --prefix dist origin gh-pages

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
  .dark {
    color: ${theme.colors.dark};
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
    line-height: 1.2;
  }

`;

const App = (props) => {
  const { className } = props;

  const renderAbout = useCallback(() => {
    return (
      <p className='about'>
        <span className='green'>"I am a Full-Stack Developer based in the Bay Area with a deep passion for creating software and data systems.
        I am always looking for the next big thing to build!"</span>
      </p>
    );
  });

  const renderExperience = useCallback(() => {
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
  });

  const renderSkills = useCallback(() => {
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
  });

  const renderProjects = useCallback(() => {
    const jobs = data.projects.map((project, i) => {
      return (
        <div key={i+'projects'} className='projects'>
          <a href={project.link}>
            {!!project.hot ?
              <div className='hot'></div> :
              null
            }
            <p>
              <span className='aqua'>{project.name}</span>
              {project.hasOwnProperty('award') ?
                <>
                  <span className='grey'> - </span>
                  <span className='pink'>{project.award}</span>
                </> :
                null
              }
            </p>
          </a>
          {project.description.map((line, i)=>(
            <p key={i+'line'}>
              <span className='slate'>{"// "}{line}</span>
            </p>
          ))}
        </div>
      );
    })

    return jobs;
  });

  return (
    <div className={className}>
      <GlobalStyle />
      <Header/>
      <Section name='About' render={()=>renderAbout()}/>
      <Section name='Skills' render={()=>renderSkills()}/>
      <Section name='Experience' render={()=>renderExperience()}/>
      <Section name='Projects' render={()=>(renderProjects())}/>
    </div>
  );
}

App.propTypes = {

};

const styledApp = styled(App)`
  height: 100%;
  box-sizing: border-box;
  @media only screen and (min-width: 900px) {
      width: 850px;
  }

  @media only screen and (max-width: 850px) {
      width: 100%;
      padding-left: 15px;
      padding-right: 15px;
  }

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
    padding: 10px 0px 10px 15px;
  }

  .about {
    padding: 10px 15px;
  }

  .projects {
    a {
      text-decoration: none;
      position: relative;
    }
    a > p {
      :hover {
        background-color: rgba(100,100,100, 0.5);
      }
      padding: 5px 0px 5px 15px;
    }
    p {
      padding-left: 15px;
    }
    padding-top: 10px;
    padding-bottom: 10px;
  }


  .item {
    :hover {
      background-color: rgba(100,100,100, 0.5);
    }
    p::before {
      content: '-';
      padding-right: 10px;
    }
    padding: 10px 0px 10px 15px;
  }

  .hot {
    position: absolute;
    top: 11px;
    left: -15px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;

    border-left: 7px solid ${theme.colors.pink};
  }
`;

export default styledApp;
