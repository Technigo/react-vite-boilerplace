import React from 'react';
import Lottie from 'lottie-react';
import loading from '../lotties/loading.json';
import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const LoadingPage = () => {
  return (
    <LoadingContainer>
      <Lottie animationData={loading} style={{ width: '300px', height: '300px' }} />
    </LoadingContainer>
  );
};

export default LoadingPage;
