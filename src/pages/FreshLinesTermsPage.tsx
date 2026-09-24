import React from 'react';
import { Link } from 'react-router-dom';
import FreshLinesLayout, { SUPPORT_EMAIL } from '../components/FreshLinesLayout';
import { Eyebrow, Title, Heading, Text, List, Callout } from '../styles/FreshLinesStyles';

const APPLE_EULA = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';

/** Terms of use for the Fresh Lines app. */
const FreshLinesTermsPage: React.FC = () => (
  <FreshLinesLayout title="Terms of Use · Fresh Lines">
    <Eyebrow>Effective September 24, 2026</Eyebrow>
    <Title>Terms of Use</Title>

    <Callout>
      In short: play and enjoy Fresh Lines. Coins and upgrades exist only inside the game and have no real-world
      value. The game comes as is.
    </Callout>

    <Text>
      These terms cover Fresh Lines (“the app”), a game for iPhone and iPad made by Rory Graman (“I” or “me”). By
      downloading or playing the app, you agree to these terms.
    </Text>

    <Heading>Apple’s license agreement</Heading>
    <Text>
      The app is licensed to you, not sold, under{' '}
      <a href={APPLE_EULA} target="_blank" rel="noopener noreferrer">
        Apple’s Licensed Application End User License Agreement
      </a>{' '}
      (the Standard EULA). These terms add to that agreement. If the two conflict, Apple’s agreement applies. Apple is
      not responsible for the app, its content or its support.
    </Text>

    <Heading>Using the app</Heading>
    <Text>You may play the app for your own personal, non-commercial use. You may not:</Text>
    <List>
      <li>copy, change, sell, rent or share the app;</li>
      <li>take apart or reverse engineer the app, except where the law allows it;</li>
      <li>use the app in a way that breaks the law.</li>
    </List>

    <Heading>Coins and upgrades</Heading>
    <Text>
      Coins, upgrades and distances exist only inside the game. They have no money value, and they cannot be bought,
      sold, traded or cashed out. They are saved on your device only. If you delete the app or lose your device, your
      progress is lost, and I cannot restore it.
    </Text>

    <Heading>Play safely</Heading>
    <Text>
      Take breaks. Do not play when you need to pay attention to something else, for example while you drive, cycle
      or cross a street.
    </Text>

    <Heading>Changes to the app</Heading>
    <Text>I may update the app, change how it plays, or stop offering it at any time.</Text>

    <Heading>No warranty</Heading>
    <Text>
      The app is provided “as is” and “as available”, without warranties of any kind, to the fullest extent the law
      allows. I do not promise that the app will always work, work without errors, or keep your progress.
    </Text>

    <Heading>Limitation of liability</Heading>
    <Text>
      To the fullest extent the law allows, I am not liable for any indirect, incidental or consequential damages, or
      for lost progress, that come from your use of the app. My total liability is limited to the amount you paid for
      the app, if any. Some places do not allow these limits, so they may not apply to you.
    </Text>

    <Heading>Privacy</Heading>
    <Text>
      The app collects no personal data. Read the <Link to="/fresh-lines/privacy-policy">privacy policy</Link>.
    </Text>

    <Heading>Changes to these terms</Heading>
    <Text>
      If these terms change, I will post the new version on this page and update the date at the top. If you keep
      playing after a change, you accept the new terms.
    </Text>

    <Heading>Contact</Heading>
    <Text>
      Questions about these terms? Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
    </Text>
  </FreshLinesLayout>
);

export default FreshLinesTermsPage;
