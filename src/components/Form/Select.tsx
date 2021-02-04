import { Select as AntSelect } from 'antd';
import React, { FC } from 'react';
import { IFormSelectItem } from '../../interfaces/form-item';
import { IFormItemBaseProps } from '../../interfaces/form-item-base-props';

type Props = {
  item: IFormSelectItem;
  mode?: 'multiple' | 'default' | 'tags' | 'combobox';
} & IFormItemBaseProps;

const Select: FC<Props> = ({
  item: { name, options },
  mode,
  value,
  onValueChange,
}) => {
  const handleValueChange = (updated: any) => {
    onValueChange?.(name, updated);
  };

  return (
    <AntSelect
      mode={mode}
      value={value || undefined}
      onChange={handleValueChange}
    >
      {options.map(({ value, label }) => (
        <AntSelect.Option key={value} value={value}>
          {label}
        </AntSelect.Option>
      ))}
    </AntSelect>
  );
};

export default Select;
