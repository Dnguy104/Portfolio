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

  p {
    color: ${theme.colors.grey};
    font-size: 18px;
  }
`;

const App = (props) => {
  const { className } = props;

  const renderAbout = () => {
    return (
      <p>
        {"\""}
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

  return (
    <div className={className}>
      <GlobalStyle />
      <Header/>
      <Section name='About' render={()=>renderAbout()}/>

      <h2>{"Skills {"}</h2>

      <h2>{"}"}</h2>
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
  width: 640px;
  h2 {
    font-size: 27px;
    color: ${theme.colors.white};
    padding: 10px 0px;

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
