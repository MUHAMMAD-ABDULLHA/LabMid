import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import Button from '../../global/Button';

export default function FinalCTA() {
  return (
    <Box component="section" sx={{ 
      py: 15, 
      bgcolor: 'var(--accent-primary)', 
      color: 'white',
      textAlign: 'center'
    }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ 
          mb: 4, 
          fontWeight: 900,
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          lineHeight: 1.2
        }}>
          Ready to build a future-ready marketing ecosystem?
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Button 
            size="large" 
            sx={{ 
              bgcolor: 'white', 
              color: 'var(--accent-primary)',
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              '&:hover': {
                bgcolor: '#f8fafc',
                transform: 'translateY(-5px)'
              }
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Launch Your First Campaign Today
          </Button>
        </Box>

        <Typography sx={{ 
          opacity: 0.7, 
          fontSize: '1.1rem',
          letterSpacing: '0.05em'
        }}>
          JOIN 1000+ BRANDS TRANSFORMING THEIR MARKETING
        </Typography>
      </Container>
    </Box>
  );
}
