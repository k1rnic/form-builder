import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Form from './components/Form';
import { FORM_SCHEMA } from './data/form-schema-data';

const StyledLayout = styled.div`
  height: 100vh;
`;

ReactDOM.render(
  <StyledLayout>
    <Form
      schema={FORM_SCHEMA}
      values={{
        select_1: '2',
        multi_select_1: ['1', '4'],
        combo_1: ['2', '3'],
        combo_2: 5,
      }}
    />
  </StyledLayout>,
  document.getElementById('root'),
);
