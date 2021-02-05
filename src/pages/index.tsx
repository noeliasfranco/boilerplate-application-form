import React from 'react';
import MultiSteps from 'components/MultiSteps/MultiSteps';
import useMainDataManager from 'hooks/UseMainDataManager';
// @ts-ignore
export const AppContext = React.createContext();

export default function IndexPage(): JSX.Element {
  const { step, nextStep, previousStep, formData } = useMainDataManager();

  const contextData = {
    step,
    nextStep,
    previousStep,
    formData,
  };
  return (
    <AppContext.Provider value={contextData}>
      <MultiSteps />
    </AppContext.Provider>
  );
}
