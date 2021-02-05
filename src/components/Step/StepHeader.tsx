import React from 'react';
import { Text, Padding } from '@/ui';

type StepHeaderProps = {
  title: string;
  description: string;
};

const StepHeader = ({ title, description }: StepHeaderProps) => {
  return (
    <div>
      <Padding bottom={40}>
        <Text size="large" weight={600} marginBottom={10}>
          {title}
        </Text>
        <Text color="#91a0af">{description}</Text>
      </Padding> 
    </div>
  );
};

export default StepHeader;
