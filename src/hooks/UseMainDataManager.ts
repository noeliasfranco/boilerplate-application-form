import { useReducer } from 'react';
import mainReducer from 'components/reducers/mainReducer';
import { data } from 'components/staticData';
import { FormDataType } from '@/components/types';

function useMainDataManager() {
  const [{ step, formData }, dispatch] = useReducer(mainReducer, {
    step: 0,
    formData: <Array<FormDataType>>data,
  });

  function nextStep() {
    dispatch({ type: 'nextStep' });
  }
  function previousStep() {
    dispatch({ type: 'previousStep' });
  }

  return {
    step,
    formData,
    nextStep,
    previousStep,
  };
}
export default useMainDataManager;
