import React from 'react';
import App from './App';
import ContextWrapper from './src/Contexts/ContextWrapper';

const AppWrapper: () => React$Node = () => {
  return (
    <ContextWrapper>
      <App />
    </ContextWrapper>
  );
};

export default AppWrapper;
