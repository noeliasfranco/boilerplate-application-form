/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { Box, Button } from '@/ui';
import { AppContext } from '@/pages';

type StepFooterProps = {
  handleSubmit: () => void;
};

const StepFooter = ({ handleSubmit }: StepFooterProps) => {
  const { step, nextStep, previousStep, formData }: any = useContext(AppContext);
  const total = formData.length;
  // let correctedStep = 1;

  const [showBack, setShowBack] = useState(true);
  const [primaryBtnLabel, setPrimaryBtnLabel] = useState('Next');
  const [correctedStep, setCorrectedStep] = useState(1);

  useEffect(() => {
    setCorrectedStep(step + 1);
  }, [step]);

  useEffect(() => {
    if (correctedStep === 1) {
      setShowBack(false);
      setPrimaryBtnLabel('Next');
    } else if (correctedStep === total) {
      setShowBack(true);
      setPrimaryBtnLabel('Finish');
    } else {
      setShowBack(true);
      setPrimaryBtnLabel('Next');
    }
  }, [correctedStep]);

  return (
    <Box
      borderTop={1}
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: showBack ? 'space-between' : 'flex-end',
        padding: '15px 0px',
      }}
    >
      {!!showBack && (
        <Button size="secondary" type="button" onClick={previousStep}>
          Back
        </Button>
      )}
      <Button size="primary" type="button" onClick={correctedStep === total ? handleSubmit : nextStep}>
        {primaryBtnLabel}
      </Button>
    </Box>
  );
};

export default StepFooter;
