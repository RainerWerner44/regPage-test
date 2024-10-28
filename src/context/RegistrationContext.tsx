import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RegistrationContextType {
  registrationStep: number;
  setRegistrationStep: React.Dispatch<React.SetStateAction<number>>;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(
  undefined
);

export const RegistrationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [registrationStep, setRegistrationStep] = useState<number>(1);

  return (
    <RegistrationContext.Provider
      value={{ registrationStep, setRegistrationStep }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = (): RegistrationContextType => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error(
      'useRegistration must be used within a RegistrationProvider'
    );
  }
  return context;
};
