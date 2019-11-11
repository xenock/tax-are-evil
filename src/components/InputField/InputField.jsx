import React from 'react';
import { string } from 'prop-types';
import style from './InputField.module.scss';

const InputField = ({
  id, label, placeholder, type, ...rest
}) => (
  <>
    <label className={style.label} htmlFor={id}>{label}</label>
    <input className={style.input} name={id} placeholder={placeholder} type={type} {...rest} />
  </>
);

InputField.propTypes = {
  id: string,
  label: string,
  placeholder: string,
  type: string,
};

InputField.defaultProps = {
  id: null,
  label: null,
  placeholder: null,
  type: null,
};

export default InputField;
