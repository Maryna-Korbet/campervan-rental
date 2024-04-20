import React from 'react';
import { ButtonBox } from './Button.styled'

const Button = ({ type, onClick }) => {
  let action, label;

  switch (type) {
    case 'Search':
      label = 'Search';
      action = 'submit';
      break;
    case 'LogIn':
      label = 'Log In';
      action = 'button';
      break;
    case 'LogOut':
      label = 'Log Out';
      action = 'button';
      break;
    case 'Send':
      label = 'Send';
      action = 'submit';
      break;
    case 'Show more':
      label = 'Show more';
      action = 'button';
      break; 
    case 'Load':
      label = 'Load more';
      action = 'button';
      break;
    default:
      label = 'Button';
      action = 'button';
  }

  return (
    <ButtonBox type={action} onClick={onClick}>
      {label}
    </ButtonBox>
  );
};

export default Button;
