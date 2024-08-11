import { createContext, useContext, useState } from 'react';

// Create a context
const InViewContext = createContext();

// Create a provider component
export const GoodPartInViewProvider = ({ children }) => {
  const [isGoodPartInView, setIsGoodPartInView] = useState(false);

  return (
    <InViewContext.Provider value={{ isGoodPartInView, setIsGoodPartInView }}>
      {children}
    </InViewContext.Provider>
  );
};

// Custom hook to use the InViewContext
export const useGoodPartInViewContext = () => useContext(InViewContext);
