import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

export default function Technical() {
  return (
    <Box component="section" id="tech" sx={{ py: 12, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 8, textAlign: 'center', fontWeight: 800 }}>
          Built for Scale & Security
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              p: 6, 
              height: '100%', 
              borderRadius: 4, 
              bgcolor: 'var(--bg-secondary)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 800 }}>
                Enterprise-Grade Performance
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', mb: 4 }}>
                Powered by GoLang and React.js, deployed on AWS with Kubernetes for 99.9% uptime and seamless auto-scaling.
              </Typography>
              <Box sx={{ 
                display: 'inline-block',
                px: 2,
                py: 0.5,
                borderRadius: '4px',
                bgcolor: 'white',
                border: '1px solid var(--border-color)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                alignSelf: 'flex-start'
              }}>
                Distributed Architecture
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ 
              p: 6, 
              height: '100%', 
              borderRadius: 4, 
              bgcolor: 'var(--accent-primary)',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 800 }}>
                Security & Compliance
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', mb: 4 }}>
                Built-in compliance with GDPR, CCPA, and local data protection standards, featuring JWT authentication and Stripe-integrated billing.
              </Typography>
              <Box sx={{ 
                display: 'inline-block',
                px: 2,
                py: 0.5,
                borderRadius: '4px',
                bgcolor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                alignSelf: 'flex-start'
              }}>
                Enterprise Security
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
