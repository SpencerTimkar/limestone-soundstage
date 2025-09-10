import { createContext, useContext, useState, ReactNode } from 'react';

interface HalloweenContextType {
  isHalloweenMode: boolean;
  toggleHalloweenMode: () => void;
}

const HalloweenContext = createContext<HalloweenContextType | undefined>(undefined);

export const HalloweenProvider = ({ children }: { children: ReactNode }) => {
  const [isHalloweenMode, setIsHalloweenMode] = useState(false);

  const toggleHalloweenMode = () => {
    setIsHalloweenMode(!isHalloweenMode);
    document.documentElement.classList.toggle('halloween-mode', !isHalloweenMode);
  };

  return (
    <HalloweenContext.Provider value={{ isHalloweenMode, toggleHalloweenMode }}>
      {children}
    </HalloweenContext.Provider>
  );
};

export const useHalloween = () => {
  const context = useContext(HalloweenContext);
  if (context === undefined) {
    throw new Error('useHalloween must be used within a HalloweenProvider');
  }
  return context;
};