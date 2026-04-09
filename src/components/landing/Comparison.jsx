import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { HighlightOff as HighlightOffIcon } from '@mui/icons-material';

export default function Comparison() {
  return (
    <Box component="section" id="pricing" sx={{ py: 12, bgcolor: 'var(--bg-secondary)' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 8, textAlign: 'center', fontWeight: 800 }}>
          Fragmented vs. Unified
        </Typography>

        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Box sx={{
              p: 4,
              height: '100%',
              borderRadius: 4,
              bgcolor: 'white',
              border: '1px solid var(--border-color)',
              opacity: 0.8
            }}>
              <Typography variant="h5" sx={{ mb: 4, fontWeight: 700, color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 1 }}>
                <HighlightOffIcon color="error" /> The Fragmented Way
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {[
                  "Separate accounts for Amazon, Google, Social Media",
                  "Data silos across platforms",
                  "Manual coordination between teams",
                  "Slow, delayed analytics insights"
                ].map((item, idx) => (
                  <Box component="li" key={idx} sx={{
                    mb: 2,
                    pb: 2,
                    borderBottom: '1px solid #f1f5f9',
                    color: 'text.secondary',
                    fontSize: '1.1rem'
                  }}>
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{
              p: 4,
              height: '100%',
              borderRadius: 4,
              bgcolor: 'white',
              border: '2px solid var(--accent-secondary)',
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.1)'
            }}>
              {/* <Typography variant="h5" sx={{ mb: 4, fontWeight: 800, color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleOutlineIcon color="primary" /> The AdEngage Way
              </Typography> */}
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {[
                  "One unified framework for everything",
                  "Real-time integrated analytics",
                  "Seamless cross-team collaboration",
                  "AI-driven budget optimization"
                ].map((item, idx) => (
                  <Box component="li" key={idx} sx={{
                    mb: 2,
                    pb: 2,
                    borderBottom: '1px solid #ebf2ff',
                    fontWeight: 600,
                    fontSize: '1.1rem'
                  }}>
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
