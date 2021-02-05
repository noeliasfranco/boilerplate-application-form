export type FormQuestionsOptionsType = {
  id: number;
  optionId: number;
  label: string;
};
export type FormQuestionsType = {
  id: number;
  label: string;
  hint: string;
  type: string;
  required: boolean;
  resourceId: number;
  resourceName: string;
  defaultValue: string;
  value: string;
  placeholder: string;
  visibleByDefault: boolean;
  order: number;
  options: null | Array<FormQuestionsOptionsType>;
  isCustomField: boolean;
  isSharedField: boolean;
};
export type FormDataType = {
  id: number;
  title: string;
  description: string;
  order: number;
  questions: Array<FormQuestionsType>;
};

export type ContextType = {
  step: number;
  nextStep: () => void;
  previousStep: () => void;
  formData: Array<FormDataType>;
};
