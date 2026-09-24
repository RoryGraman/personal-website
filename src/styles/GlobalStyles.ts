import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const theme = {
  colors: {
    amber: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
    },
    stone: {
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292524',
    },
    emerald: {
      100: '#d1fae5',
      800: '#065f46',
    }
  },
  shadows: {
    retro: '8px 8px 0px #44403c',
    retroHover: '4px 4px 0px #107050',
    retroActive: '2px 2px 0px #107050',
  },
  fonts: {
    mono: "'Courier New', 'Lucida Console', Monaco, monospace",
  }
};

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.amber[100]};
  padding: 1rem;
  font-family: ${theme.fonts.mono};
`;

export const Card = styled.div`
  width: 100%;
  max-width: 32rem;
  background-color: ${theme.colors.amber[50]};
  border: 2px solid ${theme.colors.stone[700]};
  box-shadow: ${theme.shadows.retro};
  border-radius: 0;
  
  @media (min-width: 640px) {
    max-width: 32rem;
  }
  
  @media (min-width: 768px) {
    max-width: 36rem;
  }
  
  @media (min-width: 1024px) {
    max-width: 42rem;
  }
`;

export const CardHeader = styled.div`
  border-bottom: 2px solid ${theme.colors.stone[700]};
  padding: 1rem;
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const CardContent = styled.div`
  padding: 1rem;
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid ${theme.colors.stone[700]};
  object-fit: cover;
`;

export const Name = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.stone[800]};
  
  @media (min-width: 640px) {
    font-size: 1.875rem;
  }
`;

export const Description = styled.p`
  color: ${theme.colors.stone[700]};
  text-align: center;
  line-height: 1.6;
  font-size: 0.875rem;
  
  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

export const SocialLinksSection = styled.div`
  margin-top: 1.5rem;
  
  @media (min-width: 768px) {
    margin-top: 2rem;
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0.75rem;
    justify-content: center;
  }
`;

export const Footer = styled.div`
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 2px dashed ${theme.colors.stone[400]};
  text-align: center;
  
  @media (min-width: 768px) {
    margin-top: 2rem;
    padding-top: 1.5rem;
  }
`;

export const FooterText = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.stone[600]};
`;

export const FooterSubText = styled.p`
  font-size: 0.75rem;
  color: ${theme.colors.stone[500]};
  margin-top: 0.25rem;
`;

export const ProjectsSection = styled.section`
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    margin-top: 2rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.colors.stone[500]};
  text-align: center;
  margin-bottom: 0.75rem;
`;

export const ProjectLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border: 2px solid ${theme.colors.stone[700]};
  background-color: ${theme.colors.amber[100]};
  color: ${theme.colors.stone[700]};
  text-decoration: none;
  font-family: ${theme.fonts.mono};
  transition: all 0.15s ease-in-out;

  img {
    width: 40px;
    height: 40px;
    flex: none;
    border: 2px solid ${theme.colors.stone[700]};
  }

  svg {
    flex: none;
    margin-left: auto;
    color: ${theme.colors.stone[700]};
    transition: color 0.15s ease-in-out;
  }

  &:hover {
    background-color: ${theme.colors.emerald[100]};
    box-shadow: ${theme.shadows.retroHover};
    color: ${theme.colors.emerald[800]};

    svg {
      color: ${theme.colors.emerald[800]};
    }
  }

  &:active {
    transform: translateY(1px);
    box-shadow: ${theme.shadows.retroActive};
  }
`;

export const ProjectName = styled.span`
  display: block;
  font-weight: 700;
`;

export const ProjectBlurb = styled.span`
  display: block;
  font-size: 0.8125rem;
  color: ${theme.colors.stone[500]};
`;