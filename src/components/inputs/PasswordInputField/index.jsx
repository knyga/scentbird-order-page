import React from 'react';
import PasswordInput from '../PasswordInput';

export default ({ field, ...other }) => (<PasswordInput {...other} {...field} />);
