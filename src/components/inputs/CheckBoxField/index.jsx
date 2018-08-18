import React from 'react';
import CheckBox from '../CheckBox';

export default ({ field, ...other }) => (
  <CheckBox
    {...other}
    {...field}
    checked={field.value}
  />
);
