import { IFormSchema } from '../interfaces/form-schema';

export const FORM_SCHEMA: IFormSchema = [
  {
    type: 'select',
    name: 'select_1',
    label: 'SIMPLE SELECT',
    options: [
      {
        label: 'Item 1',
        value: '1',
      },
      {
        label: 'Item 2',
        value: '2',
      },
    ],
  },
  {
    type: 'multiselect',
    name: 'multi_select_1',
    label: 'MULTI SELECT',
    options: [
      {
        label: 'Item 1',
        value: '1',
      },
      {
        label: 'Item 2',
        value: '2',
      },
      {
        label: 'Item 3',
        value: '3',
      },
      {
        label: 'Item 4',
        value: '4',
      },
    ],
  },
  {
    type: 'combo',
    name: 'combo_1',
    label: 'COMBO WITH TAGS',
    selected: '2',
    options: [
      {
        label: 'Count 1',
        value: '1',
        type: 'number',
      },
      {
        label: 'Tags 1',
        value: '2',
        type: 'multiselect',
        options: [
          { label: 'Tag 1', value: '1' },
          { label: 'Tag 2', value: '2' },
          { label: 'Tag 3', value: '3' },
          { label: 'Tag 4', value: '4' },
          { label: 'Tag 5', value: '5' },
        ],
      },
    ],
  },
  {
    type: 'combo',
    name: 'combo_2',
    label: 'COMBO WITH NUMBER',
    selected: '1',
    options: [
      {
        label: 'Tags 2',
        value: '2',
        type: 'multiselect',
        options: [
          { label: 'Tag 1', value: '1' },
          { label: 'Tag 2', value: '2' },
          { label: 'Tag 3', value: '3' },
        ],
      },
      {
        label: 'Count 2',
        value: '1',
        type: 'number',
      },
    ],
  },
  {
    type: 'combo',
    name: 'combo_3',
    label: 'EMPTY COMBO',
    options: [
      {
        label: 'Count 3',
        value: '1',
        type: 'number',
      },
      {
        label: 'Tags 3',
        value: '2',
        type: 'multiselect',
        options: [
          { label: 'Tag 1', value: '1' },
          { label: 'Tag 2', value: '2' },
          { label: 'Tag 3', value: '3' },
          { label: 'Tag 4', value: '4' },
          { label: 'Tag 5', value: '5' },
        ],
      },
    ],
  },
];
