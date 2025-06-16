import React from 'react';
import { Github, Instagram, Twitter } from 'lucide-react';
import RetroLink from '../components/RetroLink';
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  HeaderContent,
  ProfileImage,
  Name,
  Description,
  SocialLinksSection,
  SocialLinksContainer,
  Footer,
  FooterText,
  FooterSubText,
  FooterDescription
} from '../styles/GlobalStyles';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Card>
        <CardHeader>
          <HeaderContent>
            <ProfileImage
              src="/headshot.png"
              alt="Rory Graman"
            />
            <Name>Rory Graman</Name>
          </HeaderContent>
        </CardHeader>
        <CardContent>
          <Description>
            Hello! I'm Rory Graman, a Product Manager based in the south suburbs of Chicago. 
            I enjoy camping, lifting, and exploring the latest in AI. This is my little corner of the internet!
          </Description>

          <SocialLinksSection>
            <SocialLinksContainer>
              <RetroLink
                href="https://github.com/rorygraman"
                icon={<Github size={20} />}
                label="GitHub"
              />
              <RetroLink
                href="https://www.instagram.com/fit.rory/"
                icon={<Instagram size={20} />}
                label="Instagram"
              />
              <RetroLink
                href="https://x.com/rorygraman"
                icon={<Twitter size={20} />}
                label="X / Twitter"
              />
            </SocialLinksContainer>
          </SocialLinksSection>

          <Footer>
            <FooterText>&copy; {new Date().getFullYear()} Rory Graman. All rights reserved.</FooterText>
            <FooterSubText>Powered by Retro Vibes &trade;</FooterSubText>
            <FooterDescription>
              This website is hosted on a 2014 Mac Mini running Debian and is served using Cloudflare Tunneling.
            </FooterDescription>
          </Footer>
        </CardContent>
      </Card>
    </Container>
  );
};

export default HomePage;