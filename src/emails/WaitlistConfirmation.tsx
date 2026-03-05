import { Text, Button, Section } from '@react-email/components';
import * as React from 'react';
import BaseLayout from './BaseLayout';

interface WaitlistConfirmationProps {
  fullName: string;
}

export default function WaitlistConfirmation({ fullName }: WaitlistConfirmationProps) {
  const firstName = fullName.split(' ')[0];

  return (
    <BaseLayout previewText="You're on the Aether DMX waitlist!">
      <Text style={heading}>You&apos;re on the list! ⚡</Text>

      <Text style={paragraph}>
        Hey {firstName},
      </Text>

      <Text style={paragraph}>
        Thanks for signing up for the Aether DMX beta. We&apos;ve received your
        application and will review it shortly.
      </Text>

      <Text style={paragraph}>
        Here&apos;s what happens next:
      </Text>

      <Section style={list}>
        <Text style={listItem}>
          <strong style={strong}>1.</strong> We review your application (usually within 48 hours)
        </Text>
        <Text style={listItem}>
          <strong style={strong}>2.</strong> You&apos;ll receive an approval email with setup instructions
        </Text>
        <Text style={listItem}>
          <strong style={strong}>3.</strong> The first 5 approved users get a free hardware kit
        </Text>
      </Section>

      <Text style={paragraph}>
        In the meantime, join the community to connect with other early adopters:
      </Text>

      <Section style={buttonContainer}>
        <Button href="https://discord.gg/uAHsRVtJMY" style={button}>
          Join Our Discord
        </Button>
      </Section>

      <Text style={muted}>
        If you didn&apos;t sign up for Aether DMX, you can safely ignore this email.
      </Text>
    </BaseLayout>
  );
}

const heading: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 700,
  color: '#ffffff',
  margin: '0 0 24px 0',
};

const paragraph: React.CSSProperties = {
  color: '#d4d4d8',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0 0 16px 0',
};

const strong: React.CSSProperties = {
  color: '#00d4ff',
};

const list: React.CSSProperties = {
  backgroundColor: '#0a0a0c',
  borderRadius: '8px',
  padding: '16px 20px',
  marginBottom: '16px',
};

const listItem: React.CSSProperties = {
  color: '#d4d4d8',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '0 0 8px 0',
};

const buttonContainer: React.CSSProperties = {
  textAlign: 'center' as const,
  margin: '24px 0',
};

const button: React.CSSProperties = {
  backgroundColor: '#00d4ff',
  color: '#000000',
  fontWeight: 600,
  fontSize: '14px',
  padding: '12px 24px',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'inline-block',
};

const muted: React.CSSProperties = {
  color: '#71717a',
  fontSize: '12px',
  margin: '24px 0 0 0',
};
