import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MuiButton)(({ theme, variant }) => ({
  borderRadius: '50px',
  padding: '12px 32px',
  fontSize: '1rem',
  fontWeight: 600,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: variant === 'contained' ? '0 10px 20px rgba(26, 26, 46, 0.2)' : 'none',
  },
  '&:active': {
    transform: 'translateY(0)',
  },
}));

const Button = ({ children, variant = 'contained', color = 'primary', ...props }) => {
  return (
    <StyledButton variant={variant} color={color} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
