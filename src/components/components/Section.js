import React from 'react';
import styled from 'styled-components';
import theme from '../../global/theme.js';

const Section = (props) => {
  const { className, name, render } = props;

  return (
    <div className={className}>
      <h2>{name + " {"}</h2>
      <div className='container'>
        {render()}
      </div>
      <h2>{"}"}</h2>
    </div>
  );
}

Section.propTypes = {

};

const styledSection = styled(Section)`
.container {
  div {
    padding: 10px;
  }
}
`;

export default styledSection;
