import { Form as AntForm } from 'antd';
import React, { FC } from 'react';
import styled from 'styled-components';
import useFormFields from '../../hooks/useFormFields';
import {
  IFormComboItem,
  IFormItem,
  IFormItemType,
  IFormSelectItem,
} from '../../interfaces/form-item';
import { IFormItemBaseProps } from '../../interfaces/form-item-base-props';
import { IFormSchema } from '../../interfaces/form-schema';
import { IFormValues } from '../../interfaces/form-values';
import Combo from './Combo';
import Input from './Input';
import Select from './Select';

type Props = {
  schema: IFormSchema;
  values?: IFormValues;
  onFormValuesChange?: (values: { [key: string]: any }) => void;
  onFormSubmit?: (values: { [key: string]: any }) => void;
};

const Form: FC<Props> = ({ schema = [], values = {}, onFormValuesChange }) => {
  // TODO: try to use memo or callback
  const [form, updateForm, resetFormValue] = useFormFields(
    schema.reduce(
      (acc, item) => ({ ...acc, [item.name]: values[item.name] || null }),
      {},
    ),
  );

  const handleValueChange = (name: string, value: any) => {
    updateForm({ [name]: value });
  };

  const handleValueReset = (name: string) => {
    resetFormValue(name);
  };

  const formItemBaseProps: IFormItemBaseProps = {
    onValueChange: handleValueChange,
    onValueReset: resetFormValue,
  };

  const createEditor = (item: IFormItemType, value: any) => {
    switch (item.type) {
      case 'combo':
        return (
          <Combo
            item={item as IFormComboItem}
            value={value}
            {...formItemBaseProps}
          />
        );
      case 'select':
        return (
          <Select
            item={item as IFormSelectItem}
            value={value}
            {...formItemBaseProps}
          />
        );
      case 'multiselect':
        return (
          <Select
            item={item as IFormSelectItem}
            mode="multiple"
            value={value}
            {...formItemBaseProps}
          />
        );
      case 'text':
      case 'number':
      default:
        return (
          <Input
            item={item as IFormItem}
            value={value}
            {...formItemBaseProps}
          />
        );
    }
  };

  const renderFormItems = () => {
    return schema.map((item) => {
      const editor = createEditor(item, form[item.name]);

      return (
        <StyledForm.Item key={item.name} label={item.label}>
          {editor}
        </StyledForm.Item>
      );
    });
  };

  return <StyledForm>{renderFormItems()}</StyledForm>;
};

const StyledForm = styled(AntForm)`
  padding: 1rem;
`;

export default Form;
