import React from 'react';
import { Link } from 'react-router-dom';
import FreshLinesLayout, { SUPPORT_EMAIL } from '../components/FreshLinesLayout';
import { Eyebrow, Title, Heading, Text, List, Callout } from '../styles/FreshLinesStyles';

const APPLE_PRIVACY = 'https://www.apple.com/legal/privacy/';
const GOOGLE_PARTNER_SITES = 'https://policies.google.com/technologies/partner-sites';

/** The privacy policy for the Fresh Lines app (the App Store's Privacy Policy URL). */
const FreshLinesPrivacyPage: React.FC = () => (
  <FreshLinesLayout title="Privacy Policy · Fresh Lines">
    <Eyebrow>Effective October 25, 2026</Eyebrow>
    <Title>Privacy Policy</Title>

    <Callout>
      In short: Fresh Lines has no accounts, and I do not collect your personal data. The app shows ads from Google
      AdMob, and Google collects some data from your device to show them. You choose whether ads can use it to track
      you. Your game progress stays on your device.
    </Callout>

    <Text>
      This policy explains how Fresh Lines (“the app”), a game for iPhone and iPad made by Rory Graman (“I” or “me”),
      and these Fresh Lines web pages handle your information.
    </Text>

    <Heading>Information I collect</Heading>
    <Text>
      None. I have no servers for the app, and the app sends nothing to me. It has no sign-in, no accounts and no
      analytics of its own. It does not ask for your contacts, photos, camera, microphone or precise location.
    </Text>

    <Heading>Ads</Heading>
    <Text>
      The app shows ads from Google AdMob: a full-screen ad after some runs, and a video you can choose to watch to
      double the coins from a run. To show and measure these ads, Google collects data from your device, such as
      your device’s advertising identifier, your IP address and approximate location, which ads you see and tap,
      and crash and performance data. Google handles this data under{' '}
      <a href={GOOGLE_PARTNER_SITES} target="_blank" rel="noopener noreferrer">
        Google’s own policies
      </a>
      .
    </Text>
    <List>
      <li>
        Tracking: the app asks for your permission before ads can use your device’s advertising identifier to track
        you across other companies’ apps and websites. If you say no, you still see ads, but they are less
        personalized. You can change this at any time in Settings &gt; Privacy &amp; Security &gt; Tracking.
      </li>
      <li>
        In the European Economic Area, the UK and Switzerland, Google’s consent form asks for your consent first. You
        can change your choice later with the Privacy button in the app.
      </li>
      <li>Remove Ads: if you buy Remove Ads, the app shows no more ads after runs.</li>
    </List>

    <Heading>Purchases</Heading>
    <Text>
      Remove Ads is an in-app purchase. Apple handles the payment. I never see your name, card or Apple Account
      details. The app only learns from Apple whether you own Remove Ads.
    </Text>

    <Heading>Game Center</Heading>
    <Text>
      If you sign in to Game Center, the app sends your best distance to Apple’s Game Center leaderboard. Other
      players can see it with your Game Center name. Apple handles Game Center under{' '}
      <a href={APPLE_PRIVACY} target="_blank" rel="noopener noreferrer">
        Apple’s own privacy policy
      </a>
      .
    </Text>

    <Heading>Information stored on your device</Heading>
    <Text>
      To keep your game going between sessions, the app saves your coins, upgrade levels, best distance, sound
      setting, whether you finished the tutorial and whether you bought Remove Ads. This save stays on your device. I
      cannot see it, and it is never sent to me or to anyone else. Deleting the app deletes the save.
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
      Fresh Lines is not directed at children under 13. I do not knowingly collect personal data from children, and
      the app collects no personal data for me from anyone.
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
