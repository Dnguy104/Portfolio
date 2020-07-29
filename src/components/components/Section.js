import React from 'react';
import styled from 'styled-components';
import theme from '../../global/theme.js';

const Section = (props) => {
  const { className, name, render } = props;

  return (
    <div className={className}>
      <h2>
        {name}
        <span className='slate'>{" {"}</span>
      </h2>
      <div className='container'>
        {render()}
      </div>
      <h2>
        <span className='slate'>{"}"}</span>
      </h2>
    </div>
  );
}

Section.propTypes = {

};

const styledSection = styled(Section)`
  padding: 10px 0px;
  .container {
    div {
      padding: 10px;
    }
  }
  h2:first-of-type {
    padding-bottom: 10px;
  }
`;

export default styledSection;
