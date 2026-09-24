import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from './GlobalStyles';

// Styles for the Fresh Lines pages (/fresh-lines, /fresh-lines/terms, /fresh-lines/privacy-policy).
// They follow the site's retro theme: amber paper, stone ink, thick borders, hard shadows, no rounded corners.

export const Page = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.amber[100]};
  padding: 1rem 1rem 3rem;
  font-family: ${theme.fonts.mono};
  color: ${theme.colors.stone[700]};

  @media (min-width: 768px) {
    padding: 2.5rem 1.5rem 4rem;
  }
`;

export const Sheet = styled.div`
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
  background-color: ${theme.colors.amber[50]};
  border: 2px solid ${theme.colors.stone[700]};
  box-shadow: ${theme.shadows.retro};
`;

export const SheetHeader = styled.header`
  border-bottom: 2px solid ${theme.colors.stone[700]};
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 768px) {
    padding: 1.25rem 1.5rem;
  }
`;

export const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: ${theme.colors.stone[800]};
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;

  img {
    width: 44px;
    height: 44px;
    border: 2px solid ${theme.colors.stone[700]};
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const NavLink = styled(Link)`
  padding: 0.375rem 0.75rem;
  border: 2px solid ${theme.colors.stone[700]};
  background-color: ${theme.colors.amber[100]};
  color: ${theme.colors.stone[700]};
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 700;
  transition: all 0.15s ease-in-out;

  &[aria-current='page'] {
    background-color: ${theme.colors.stone[700]};
    color: ${theme.colors.amber[50]};
  }

  &:hover {
    background-color: ${theme.colors.emerald[100]};
    color: ${theme.colors.emerald[800]};
    box-shadow: ${theme.shadows.retroHover};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: ${theme.shadows.retroActive};
  }
`;

export const SheetBody = styled.main`
  padding: 1.25rem 1rem 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem 2.5rem 2.5rem;
  }
`;

export const Eyebrow = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.colors.stone[500]};
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.stone[800]};
  line-height: 1.15;
  margin: 0.25rem 0 0.5rem;

  @media (min-width: 640px) {
    font-size: 2.5rem;
  }
`;

export const Lead = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  max-width: 40rem;

  @media (min-width: 640px) {
    font-size: 1.0625rem;
  }
`;

export const Heading = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${theme.colors.stone[800]};
  margin: 2rem 0 0.75rem;
  padding-bottom: 0.375rem;
  border-bottom: 2px dashed ${theme.colors.stone[400]};
`;

export const Subheading = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${theme.colors.stone[800]};
  margin: 1.25rem 0 0.375rem;
`;

export const Text = styled.p`
  line-height: 1.7;
  font-size: 0.9375rem;
  max-width: 42rem;
  margin-bottom: 0.75rem;

  a {
    color: ${theme.colors.emerald[800]};
    font-weight: 700;
  }
`;

export const List = styled.ul`
  margin: 0 0 0.75rem 1.25rem;
  line-height: 1.7;
  font-size: 0.9375rem;
  max-width: 42rem;

  li {
    margin-bottom: 0.25rem;
  }
`;

export const Callout = styled.div`
  border: 2px solid ${theme.colors.stone[700]};
  background-color: ${theme.colors.amber[100]};
  padding: 1rem 1.25rem;
  margin: 1.25rem 0;
  line-height: 1.7;
  font-size: 0.9375rem;
  font-weight: 700;

  a {
    color: ${theme.colors.emerald[800]};
    overflow-wrap: anywhere;
  }
`;

export const Badge = styled.span`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid ${theme.colors.stone[700]};
  background-color: ${theme.colors.stone[700]};
  color: ${theme.colors.amber[50]};
  font-weight: 700;
  font-size: 0.875rem;
  box-shadow: 4px 4px 0px ${theme.colors.stone[400]};
`;

export const Shots = styled.ul`
  list-style: none;
  display: grid;
  gap: 1.25rem;
  margin: 1.5rem 0 0.5rem;

  figure {
    margin: 0;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1434 / 660;
    border: 2px solid ${theme.colors.stone[700]};
    box-shadow: 4px 4px 0px ${theme.colors.stone[700]};
  }

  figcaption {
    margin-top: 0.625rem;
    font-size: 0.875rem;
    font-weight: 700;
  }

  figcaption span {
    font-weight: 400;
    color: ${theme.colors.stone[500]};
  }
`;

export const Chips = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  li {
    border: 2px solid ${theme.colors.stone[700]};
    padding: 0.25rem 0.625rem;
    font-size: 0.8125rem;
    font-weight: 700;
    background-color: ${theme.colors.amber[100]};
  }
`;

export const SheetFooter = styled.footer`
  border-top: 2px dashed ${theme.colors.stone[400]};
  margin: 0 1rem;
  padding: 1rem 0 1.25rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  font-size: 0.8125rem;
  color: ${theme.colors.stone[500]};

  a {
    color: ${theme.colors.stone[600]};
    font-weight: 700;
  }

  @media (min-width: 768px) {
    margin: 0 2.5rem;
  }
`;
