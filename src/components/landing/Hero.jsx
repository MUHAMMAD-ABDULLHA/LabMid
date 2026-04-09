import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import anime from 'animejs/lib/anime.es.js';
import Button from '../../global/Button';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    anime.timeline({
      easing: 'easeOutExpo',
    })
    .add({
      targets: '.hero-headline',
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 1200,
      delay: 200
    })
    .add({
      targets: '.hero-subheadline',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 1000,
    }, '-=800')
    .add({
      targets: '.hero-actions',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 800,
    }, '-=800');
  }, []);

  return (
    <Box component="section" className="hero" sx={{ 
      minHeight: '90vh', 
      display: 'flex', 
      alignItems: 'center',
      background: 'radial-gradient(circle at 50% 50%, #f8fafc 0%, #ffffff 100%)',
      pt: 10 
    }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
          <Typography variant="h1" className="hero-headline" sx={{ 
            fontSize: { xs: '3rem', md: '5rem' },
            mb: 3, 
            opacity: 0 
          }}>
            Unified Intelligence
            <br />
            <Box component="span" sx={{ 
              background: 'linear-gradient(90deg, #1a1a2e, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>for the Next Era</Box>
            <br />of Advertising
          </Typography>
          
          <Typography className="hero-subheadline" sx={{ 
            fontSize: '1.25rem', 
            color: 'text.secondary', 
            mb: 5,
            opacity: 0 
          }}>
            Transform fragmented marketing into a single, AI-driven ecosystem. 
            Manage campaigns, collaborate with influencers, and deploy immersive AR experiences.
          </Typography>

          <Box className="hero-actions" sx={{ 
            display: 'flex', 
            gap: 2, 
            justifyContent: 'center',
            opacity: 0 
          }}>
            <Button size="large" endIcon={<ArrowForwardIcon />}>
              Get Started for Free
            </Button>
            <Button variant="outlined" size="large">
              Request a Demo
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
