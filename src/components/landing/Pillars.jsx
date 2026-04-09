import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { AutoGraph as AutoGraphIcon, ThreeDRotation as ThreeDRotationIcon, Group as GroupIcon } from '@mui/icons-material';
import anime from 'animejs/lib/anime.es.js';

export default function Pillars() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      const mouseEnter = () => {
        anime({
          targets: card,
          scale: 1.05,
          rotate: (index % 2 === 0 ? 1 : -1),
          duration: 400,
          easing: 'easeOutElastic(1, .8)'
        });
      };

      const mouseLeave = () => {
        anime({
          targets: card,
          scale: 1,
          rotate: 0,
          duration: 400,
          easing: 'easeOutElastic(1, .8)'
        });
      };

      card.addEventListener('mouseenter', mouseEnter);
      card.addEventListener('mouseleave', mouseLeave);
      
      return () => {
        card.removeEventListener('mouseenter', mouseEnter);
        card.removeEventListener('mouseleave', mouseLeave);
      };
    });
  }, []);

  return (
    <Box component="section" id="features" sx={{ py: 12, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 8, textAlign: 'center', fontWeight: 800 }}>
          Why Choose AdEngage?
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              icon: <AutoGraphIcon color="primary" sx={{ fontSize: 40 }} />,
              title: "AI-Powered Precision",
              desc: "Use advanced ML to group audiences and personalize content in real-time.",
              feature: "Predictive budgeting and smart bidding"
            },
            {
              icon: <ThreeDRotationIcon color="primary" sx={{ fontSize: 40 }} />,
              title: "Immersive Experiences",
              desc: "Engage audiences with interactive 3D modeling and AR marketplaces.",
              feature: "AR-enabled product interactions"
            },
            {
              icon: <GroupIcon color="primary" sx={{ fontSize: 40 }} />,
              title: "Influencer Ecosystem",
              desc: "Track influencer performance and manage collaborations seamlessly.",
              feature: "Automated contracts and tracking"
            }
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box 
                ref={el => cardsRef.current[index] = el}
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  borderRadius: 4, 
                  border: '1px solid var(--border-color)',
                  bgcolor: 'white',
                  transition: 'border-color 0.3s ease',
                  '&:hover': {
                    borderColor: 'var(--accent-secondary)',
                  }
                }}
              >
                <Box sx={{ mb: 3 }}>{item.icon}</Box>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>{item.title}</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 3 }}>{item.desc}</Typography>
                <Typography sx={{ 
                  fontWeight: 700, 
                  color: 'primary.main', 
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>
                  {item.feature}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
