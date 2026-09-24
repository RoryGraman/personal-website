import React from 'react';
import { Link } from 'react-router-dom';
import FreshLinesLayout, { SUPPORT_EMAIL } from '../components/FreshLinesLayout';
import { Eyebrow, Title, Heading, Text, List, Callout } from '../styles/FreshLinesStyles';

const APPLE_PRIVACY = 'https://www.apple.com/legal/privacy/';

/** The privacy policy for the Fresh Lines app (the App Store's Privacy Policy URL). */
const FreshLinesPrivacyPage: React.FC = () => (
  <FreshLinesLayout title="Privacy Policy · Fresh Lines">
    <Eyebrow>Effective September 24, 2026</Eyebrow>
    <Title>Privacy Policy</Title>

    <Callout>
      In short: Fresh Lines collects no personal data. It has no accounts, no ads, no analytics and no tracking, and
      it does not use the internet. Your progress stays on your device.
    </Callout>

    <Text>
      This policy explains how Fresh Lines (“the app”), a game for iPhone and iPad made by Rory Graman (“I” or “me”),
      and these Fresh Lines web pages handle your information.
    </Text>

    <Heading>Information the app collects</Heading>
    <Text>None. The app does not collect, send or share any personal data. It has:</Text>
    <List>
      <li>no sign-in and no accounts;</li>
      <li>no advertising;</li>
      <li>no analytics, crash-reporting or tracking tools;</li>
      <li>no in-app purchases;</li>
      <li>no connection to the internet, and no servers of its own.</li>
    </List>
    <Text>
      The app does not ask for your location, contacts, photos, camera, microphone or any other personal information.
    </Text>

    <Heading>Information stored on your device</Heading>
    <Text>
      To keep your game going between sessions, the app saves your coins, upgrade levels, best distance, sound setting
      and whether you finished the tutorial. This save stays on your device. I cannot see it, and it is never sent to
      me or to anyone else. Deleting the app deletes the save.
    </Text>

    <Heading>Information Apple may share with me</Heading>
    <Text>
      Apple handles downloads of the app from the App Store under{' '}
      <a href={APPLE_PRIVACY} target="_blank" rel="noopener noreferrer">
        Apple’s own privacy policy
      </a>
      . If you choose to share analytics with app developers in your device settings, Apple may send me crash reports
      and usage statistics about the app. Apple does not identify you to me in these reports. If you test the app
      through TestFlight and send feedback, I receive the feedback and the details you choose to include. I use this
      information only to fix and improve the app.
    </Text>

    <Heading>Children</Heading>
    <Text>
      Fresh Lines is suitable for all ages. Because the app collects no personal data from anyone, it collects none
      from children.
    </Text>

    <Heading>These web pages</Heading>
    <Text>
      These pages use no analytics or advertising, and they load no content from other sites. The services that host
      and deliver this website may keep standard server logs, such as IP addresses and the pages requested, for
      security and to keep the site running. I do not use those logs to identify you.
    </Text>

    <Heading>If you contact me</Heading>
    <Text>
      If you email me for support, I receive your email address and your message. I use them only to answer you, and I
      do not share them.
    </Text>

    <Heading>Changes to this policy</Heading>
    <Text>If this policy changes, I will post the new version on this page and update the date at the top.</Text>

    <Heading>Contact</Heading>
    <Text>
      Questions about this policy? Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>, or read the{' '}
      <Link to="/fresh-lines/terms">terms of use</Link>.
    </Text>
  </FreshLinesLayout>
);

export default FreshLinesPrivacyPage;
