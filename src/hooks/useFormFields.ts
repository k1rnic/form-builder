import { useState } from 'react';
import { IFormValues } from '../interfaces/form-values';

const useFormFields = (initialState: IFormValues) => {
  const [state, setState] = useState(initialState);

  const updateFormValues = (updates: IFormValues) => {
    setState((prevState) => ({ ...prevState, ...updates }));
  };

  const resetFormValue = (name: string) => {
    const { [name]: omit, ...values } = state;
    setState(values);
  };

  return [state, updateFormValues, resetFormValue] as const;
};

export default useFormFields;
