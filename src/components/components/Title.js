import React from 'react';
import styled from 'styled-components';
import theme from '../../global/theme.js';

const Title = (props) => {
  const { className, name } = props;

  return (
    <div className={className}>
      <h2>{name}</h2>
      <h2>[+]</h2>
    </div>
  );
}

Title.propTypes = {

};

const styledTitle = styled(Title)`
  h2 {
    font-size: 27px;
    color: ${theme.colors.white};
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default styledTitle;
