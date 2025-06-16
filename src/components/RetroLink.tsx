import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/GlobalStyles';

interface RetroLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  className?: string;
}

const StyledLink = styled.a<{ className?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border: 2px solid ${theme.colors.stone[700]};
  background-color: ${theme.colors.amber[100]};
  text-decoration: none;
  font-family: ${theme.fonts.mono};
  font-weight: 500;
  color: ${theme.colors.stone[700]};
  transition: all 0.15s ease-in-out;
  flex: 1;
  
  @media (min-width: 768px) {
    flex: none;
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
  
  svg {
    color: ${theme.colors.stone[700]};
    transition: color 0.15s ease-in-out;
  }
`;

const RetroLink: React.FC<RetroLinkProps> = ({ href, icon, label, className }) => {
  return (
    <StyledLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {icon}
      <span>{label}</span>
    </StyledLink>
  );
};

export default RetroLink;