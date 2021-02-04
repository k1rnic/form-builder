import { Input as AntInput, InputNumber as AntInputNumber } from 'antd';
import React, { FC } from 'react';
import { IFormItem } from '../../interfaces/form-item';
import { IFormItemBaseProps } from '../../interfaces/form-item-base-props';

type Props = {
  item: IFormItem;
} & IFormItemBaseProps;

const Input: FC<Props> = ({ item: { name, type }, value, onValueChange }) => {
  const handleValueChange = (updated: any) => {
    onValueChange?.(name, updated);
  };

  return type === 'number' ? (
    <AntInputNumber value={value} onChange={handleValueChange} />
  ) : (
    <AntInput value={value} onChange={handleValueChange} />
  );
};

export default Input;
