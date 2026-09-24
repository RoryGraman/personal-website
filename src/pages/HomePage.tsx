import React, { useEffect } from 'react';
import { ArrowRight, Github, Instagram, Twitter } from 'lucide-react';
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
  ProjectsSection,
  SectionTitle,
  ProjectLink,
  ProjectName,
  ProjectBlurb,
  Footer,
  FooterText,
  FooterSubText
} from '../styles/GlobalStyles';

const HomePage: React.FC = () => {
  // The Fresh Lines pages set their own titles, so restore this one when the visitor comes back.
  useEffect(() => {
    document.title = 'Rory Graman - Product Manager';
  }, []);

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

          <ProjectsSection aria-labelledby="projects-title">
            <SectionTitle id="projects-title">Projects I'm working on</SectionTitle>
            <ProjectLink to="/fresh-lines">
              <img src="/fresh-lines/icon.png" alt="" width={40} height={40} />
              <span>
                <ProjectName>Fresh Lines</ProjectName>
                <ProjectBlurb>A draw-the-track snowboard game for iPhone</ProjectBlurb>
              </span>
              <ArrowRight size={20} aria-hidden="true" />
            </ProjectLink>
          </ProjectsSection>

          <Footer>
            <FooterText>&copy; {new Date().getFullYear()} Rory Graman. All rights reserved.</FooterText>
            <FooterSubText>Powered by Retro Vibes &trade;</FooterSubText>
          </Footer>
        </CardContent>
      </Card>
    </Container>
  );
};

export default HomePage;
