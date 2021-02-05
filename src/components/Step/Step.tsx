import React, { useContext } from 'react';
import StepHeader from 'components/Step/StepHeader';
import StepFooter from 'components/Step/StepFooter';
import StepContent from 'components/Step/StepContent';
import { ContextType } from '../types';
import { Box, Padding } from '@/ui';
import { AppContext } from '@/pages';

type StepProps = {
  handleSubmit: () => void;
};

const Step = ({ handleSubmit }: StepProps) => {
  const { formData, step } = useContext(AppContext) as ContextType;

  return (
    <Box border={1} borderLeftRadius={10} style={{ width: '40%', margin: '0 auto' }} backgroundColor="white">
      <Padding size={24}>
        <StepHeader title={formData[step].title} description={formData[step].description} />
        <StepContent questions={formData[step].questions} />
        <StepFooter handleSubmit={handleSubmit} />
      </Padding>
    </Box>
  );
};

export default Step;
