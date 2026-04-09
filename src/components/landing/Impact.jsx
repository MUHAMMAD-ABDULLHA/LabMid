import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { TrendingUp as TrendingUpIcon, AutoAwesome as AutoAwesomeIcon, Bolt as BoltIcon } from '@mui/icons-material';

export default function Impact() {
  const stats = [
    { number: '25%', label: 'Increase in Ad Campaign ROI via AI-driven targeting', Icon: TrendingUpIcon },
    { number: '20%', label: 'Boost in user engagement through AR customization', Icon: AutoAwesomeIcon },
    { number: '30%', label: 'Improvement in analytics accuracy with real-time data', Icon: BoltIcon }
  ];

  return (
    <Box component="section" id="about" sx={{ py: 12, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 8, textAlign: 'center', fontWeight: 800 }}>
          Proven Results
        </Typography>
        
        <Grid container spacing={6}>
          {stats.map((s, i) => (
            <Grid key={i} item xs={12} md={4}>
              <Box sx={{ 
                p: 4, 
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <Box sx={{ 
                  width: 64, 
                  height: 64, 
                  borderRadius: '50%', 
                  bgcolor: 'rgba(59, 130, 246, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mb: 3
                }}>
                  <s.Icon sx={{ color: 'primary.main', fontSize: 32 }} />
                </Box>
                <Typography variant="h2" sx={{ 
                  fontWeight: 900, 
                  fontSize: '4rem', 
                  lineHeight: 1,
                  mb: 2,
                  color: 'var(--accent-primary)'
                }}>
                  {s.number}
                </Typography>
                <Typography sx={{ 
                  color: 'text.secondary', 
                  fontSize: '1.1rem',
                  lineHeight: 1.6
                }}>
                  {s.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
