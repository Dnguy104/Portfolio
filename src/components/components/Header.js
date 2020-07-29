import React from 'react';
import styled from 'styled-components';
import theme from '../../global/theme.js';

const Header = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <h1>DanielNguyen</h1>
      <div className='links'>
        <a href="mailto:danielnguyen44@gmail.com">
          <span className='aqua'>Email</span>
          <span className='pink'>()</span>
          <span className='grey'>;</span>
        </a>
        <a href="https://github.com/Dnguy104">
          <span className='aqua'>Github</span>
          <span className='pink'>()</span>
          <span className='grey'>;</span>
        </a>
        <a href="https://www.linkedin.com/in/daniel-nguyen-047703117/">
          <span className='aqua'>LinkedIn</span>
          <span className='pink'>()</span>
          <span className='grey'>;</span>
        </a>
        <a href="https://devpost.com/DanielNguyen?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">
          <span className='aqua'>Devpost</span>
          <span className='pink'>()</span>
          <span className='grey'>;</span>
        </a>
        <a href="">
          <span className='aqua'>Resume</span>
          <span className='pink'>()</span>
          <span className='grey'>;</span>
        </a>
      </div>
    </div>
  );
}

Header.propTypes = {

};

const styledHeader = styled(Header)`
  @media only screen and (min-width: 850px) {
    h1 {
      font-size: 36px;
    }
    a {
      margin-right: 30px;
    }
  }
  @media only screen and (max-width: 850px) {
    h1 {
      font-size: 24px;
    }

    a {
      margin-right: 10px;
    }
  }

  h1 {
    color: ${theme.colors.aqua};
    padding-bottom: 15px;
  }

  a {
    display: inline-block;
    padding-bottom: 1px;
    text-decoration: none;
    :hover {
      border-bottom: 1px solid ${theme.colors.grey};

    }
  }

  .links {
    padding-bottom: 15px;
    width: 100%;
  }
`;

export default styledHeader;
