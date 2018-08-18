import React from 'react';
import EmailInput from '../EmailInput';

export default ({ field, ...other }) => (<EmailInput {...other} {...field} />);
