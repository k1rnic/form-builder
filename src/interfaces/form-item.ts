export type IFormItemTypeName =
  | 'text'
  | 'number'
  | 'select'
  | 'multiselect'
  | 'combo';

export interface IFormItem {
  type: IFormItemTypeName;
  name: string;
  label?: string;
}

export interface IFormSelectItem extends IFormItem {
  options: IFormSelectItemOption[];
}

export interface IFormSelectItemOption {
  label: string;
  value: string;
}

export interface IFormComboItem extends IFormSelectItem {
  selected?: string;
  options: IFormComboItemOption[];
}

export interface IFormComboItemOption extends IFormSelectItemOption {
  type: IFormItemTypeName;
  options?: IFormSelectItemOption[];
}

export type IFormItemType = IFormItem | IFormSelectItem | IFormComboItem;
