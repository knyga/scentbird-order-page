import React from 'react';
import Input from '../Input';

export default ({ field, ...other }) => (
  <Input
    {...other}
    {...field}
  />
);
