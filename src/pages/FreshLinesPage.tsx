import React from 'react';
import { Link } from 'react-router-dom';
import FreshLinesLayout, { SUPPORT_EMAIL } from '../components/FreshLinesLayout';
import {
  Eyebrow,
  Title,
  Lead,
  Badge,
  Shots,
  Heading,
  Subheading,
  Text,
  Chips,
  Callout,
} from '../styles/FreshLinesStyles';

const SHOTS = [
  {
    src: '/fresh-lines/bridge.jpg',
    alt: 'The rider on a snowy slope. An orange line drawn across a dark crevasse makes a bridge, with coins above it.',
    caption: 'Bridge the gap',
    zone: 'Bunny Hill',
  },
  {
    src: '/fresh-lines/bounce.jpg',
    alt: 'Under a peach sky, a chaser bounces off the bridge behind the rider with a BOING and a burst of coins.',
    caption: 'Knock back the chasers',
    zone: 'Black Diamond',
  },
  {
    src: '/fresh-lines/backcountry.jpg',
    alt: 'Under a purple sky, a snowmobile hits the line behind the rider. BONK, plus 50 coins.',
    caption: 'Ride further every run',
    zone: 'Backcountry',
  },
];

/** The Fresh Lines game page. It is also the App Store support page. */
const FreshLinesPage: React.FC = () => (
  <FreshLinesLayout title="Fresh Lines · Draw the track. Outrun the avalanche.">
    <Eyebrow>A snowboard game for iPhone</Eyebrow>
    <Title>Draw the track. Outrun the avalanche.</Title>
    <Lead>
      Put a finger on the screen and a line of snow appears. Hold still over a crevasse to build a bridge, put up a
      wall behind you, and keep your rider ahead of the slide.
    </Lead>
    <Badge>Coming soon to the App Store</Badge>

    <Shots aria-label="Screenshots">
      {SHOTS.map((s) => (
        <li key={s.src}>
          <figure>
            <img src={s.src} alt={s.alt} width={1434} height={660} loading="lazy" />
            <figcaption>
              {s.caption} <span>&middot; {s.zone}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </Shots>

    <Heading>How it plays</Heading>
    <Subheading>Draw with one finger</Subheading>
    <Text>
      Every line becomes snow the rider can ride: a bridge over a gap, a ramp over a rock, or a wall against a chaser.
      Lines use energy, and it comes back when you lift your finger.
    </Text>
    <Subheading>Stay ahead of the slide</Subheading>
    <Text>
      The avalanche never stops. Skis, poles, snowballs and icicles fly in, and skiers, snowboarders and snowmobiles
      chase you down. Block them with a line and earn extra coins.
    </Text>
    <Subheading>Upgrade at the Ski Lodge</Subheading>
    <Text>
      Spend your coins on seven upgrades, then ride from the Bunny Hill toward the Backcountry and beyond.
    </Text>
    <Chips aria-label="At a glance">
      <li>One-finger controls</li>
      <li>No ads</li>
      <li>No in-app purchases</li>
      <li>No account</li>
      <li>Plays offline</li>
      <li>No data collected</li>
    </Chips>

    <Heading id="support">Support</Heading>
    <Callout>
      Need help? Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. Tell me your iPhone model, your iOS
      version and what happened. I usually answer within a few days.
    </Callout>
    <Subheading>How do I build a bridge?</Subheading>
    <Text>
      When a crevasse comes up, put your finger just before its edge and hold it still. The slope moves under your
      finger, so the line stretches across the gap. Lift your finger once the line reaches the other side.
    </Text>
    <Subheading>My lines stopped working.</Subheading>
    <Text>
      Drawing uses energy. When the ring around your finger is empty, lift your finger. The ring above the rider fills
      again, and you can draw again.
    </Text>
    <Subheading>Can I see the tutorial again?</Subheading>
    <Text>Yes. Tap “How to play” in the Ski Lodge or on the pause screen.</Text>
    <Subheading>I hear no sound.</Subheading>
    <Text>
      Turn off Silent Mode on your iPhone and turn up the volume. Also check the sound button in the Ski Lodge or on
      the pause screen.
    </Text>
    <Subheading>Where is my progress saved?</Subheading>
    <Text>
      Your coins, upgrades, best distance and settings are saved on your iPhone only. Nothing is stored online, so I
      cannot restore or move your progress. To start over, delete the app and install it again.
    </Text>

    <Heading>Legal</Heading>
    <Text>
      Read the <Link to="/fresh-lines/terms">terms of use</Link> and the{' '}
      <Link to="/fresh-lines/privacy-policy">privacy policy</Link>. In short: Fresh Lines collects no data.
    </Text>
  </FreshLinesLayout>
);

export default FreshLinesPage;
