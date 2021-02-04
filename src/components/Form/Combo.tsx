import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { IFormComboItem } from '../../interfaces/form-item';
import { IFormItemBaseProps } from '../../interfaces/form-item-base-props';
import Input from './Input';
import Select from './Select';

type Props = {
  item: IFormComboItem;
} & IFormItemBaseProps;

const Combo: FC<Props> = ({
  item: { selected, name, label, type, options },
  value,
  onValueChange,
  onValueReset,
}) => {
  const [field, setField] = useState(selected);

  const handleFieldChange = (name: string, value: string) => {
    setField(value);
    onValueReset?.(name);
  };

  const handleValueChange = (name: string, value: string) => {
    onValueChange?.(name, value);
  };

  const renderConditionalField = () => {
    const selectedField = options.find((opt) => opt.value === field);

    switch (selectedField?.type) {
      case 'multiselect':
        return (
          <Select
            mode="multiple"
            item={{
              name,
              label,
              type: selectedField.type,
              options: selectedField.options || [],
            }}
            value={value}
            onValueChange={handleValueChange}
          />
        );
      case 'number':
      case 'text':
        return (
          <Input
            item={{ name, label, type: selectedField.type }}
            value={value}
            onValueChange={handleValueChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <StyledCombo>
      <Select
        value={field}
        onValueChange={handleFieldChange}
        item={{ name, label, type, options }}
      />
      {renderConditionalField()}
    </StyledCombo>
  );
};

const StyledCombo = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export default Combo;
