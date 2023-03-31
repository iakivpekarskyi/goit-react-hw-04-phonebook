import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30px;
  margin-bottom: 60px;
`;

export const FormikField = styled(Field)`
  font-size: large;
  width: 160px;
  height: 30px;
  border-width: 1px;
  border-radius: 4px;
  border-color: #cfcfcf;
`;

export const ErrorText = styled(ErrorMessage)`
  color: #ff7979;
`;

export const FormBtn = styled.button`
  margin-top: 20px;
  padding: 5px 10px;
  background-color: #ffffff;
  font-size: 18px;
  color: #aeaeae;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  :hover,
  :focus {
    background-color: #ffffff;
    color: #7b7b7b;
    box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
    border: #ffffff;
  }
`;
