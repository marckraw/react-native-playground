import React from 'react';
import OBSContextProvider from './OBSContext';

const ContextWrapper: () => React$Node = ({children}) => {
  return <OBSContextProvider>{children}</OBSContextProvider>;
};

export default ContextWrapper;
