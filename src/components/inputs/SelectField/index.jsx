import React from 'react';
import Select from '../Select';

export default ({
  field, options, form, ...other
}) => (
  <Select
    {...other}
    {...field}
    options={options}
    value={options ? options.find(option => option.value === field.value) : ''}
    onChange={option => form.setFieldValue(field.name, option.value)}
  />
);
