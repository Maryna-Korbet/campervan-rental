import { ButtonBox } from './Button.styled'

import React from 'react';

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
    case 'Show More':
      label = 'Show More';
      action = 'button';
      break; 
    case 'Load':
      label = 'Load More';
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


{/* isLoading
                            ? (<LinearProgress color='primary' sx={{ mt: 1 }} />)
                            : (
                               
                            )} */