import React from 'react';
import Step from 'components/Step/Step';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fbfbfc;
`;

const MultiSteps = () => {
  const handleSubmit = () => {
    console.log('Submit form');
  };

  return (
    <StyledDiv>
      <Step handleSubmit={handleSubmit} />
    </StyledDiv>
  );
};

export default MultiSteps;
