import React from 'react';
import { FormQuestionsType } from '../types';
import { Input, RadioButton, Field, Padding } from '@/ui';

type StepContentProps = {
  questions: Array<FormQuestionsType>;
};

const StepContent = ({ questions }: StepContentProps) => {
  const renderInputElement = (rowData: FormQuestionsType) => {
    switch (rowData.type) {
      case 'text':
        return (
          <Padding bottom={24}>
             <Field fieldId={String.toString(rowData.id)} label={rowData.label}>
              <Input fieldId={String.toString(rowData.id)} onChange={function noRefCheck() {}} placeholder={rowData.placeholder} type="text" />
            </Field>
          </Padding>
        );
      case 'number':
        return (
          <Padding bottom={24}>
            <Field fieldId={String.toString(rowData.id)} label={rowData.label}>
              <Input fieldId={String.toString(rowData.id)} onChange={function noRefCheck() {}} placeholder={rowData.placeholder} type="number" />
            </Field>
          </Padding>
        );
      case 'textarea':
        return (
          <Padding bottom={24}>
            <Field fieldId={String.toString(rowData.id)} label={rowData.label}>
              <Input fieldId={String.toString(rowData.id)} onChange={function noRefCheck() {}} placeholder={rowData.placeholder} type="textarea" />
            </Field>
          </Padding>
        );
      case 'radio':
        return (
          <Padding bottom={24}>
            <Field fieldId={String.toString(rowData.id)} label={rowData.label}>
              {rowData.options.map((option) => {
                return (
                  <div key={option.optionId}>
                    <RadioButton label={option.label} value={option.optionId} name={rowData.resourceName} />
                  </div>
                );
              })}
            </Field>
          </Padding>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {questions?.map((item: FormQuestionsType) => {
        return renderInputElement(item);
      })}
    </div>
  );
};

export default StepContent;
