import { Text, Button, Section } from '@react-email/components';
import * as React from 'react';
import BaseLayout from './BaseLayout';

interface BetaApprovalProps {
  fullName: string;
}

export default function BetaApproval({ fullName }: BetaApprovalProps) {
  const firstName = fullName.split(' ')[0];

  return (
    <BaseLayout previewText="You've been approved for the Aether DMX Beta!">
      <Text style={heading}>You&apos;re In! 🎉</Text>

      <Text style={paragraph}>
        Hey {firstName},
      </Text>

      <Text style={paragraph}>
        Great news — your application to the Aether DMX beta has been approved.
        Welcome to the program!
      </Text>

      <Text style={subheading}>Getting Started</Text>

      <Section style={list}>
        <Text style={listItem}>
          <strong style={strong}>1. Join Discord</strong> — Connect with other
          beta testers and the Aether team for support and feedback.
        </Text>
        <Text style={listItem}>
          <strong style={strong}>2. Read the Docs</strong> — Check out the
          hardware guide and getting started documentation.
        </Text>
        <Text style={listItem}>
          <strong style={strong}>3. Set Up Hardware</strong> — Follow the
          hardware setup guide to build or configure your DMX nodes.
        </Text>
      </Section>

      <Section style={buttonRow}>
        <Button href="https://discord.gg/uAHsRVtJMY" style={buttonPrimary}>
          Join Discord
        </Button>
      </Section>

      <Section style={buttonRow}>
        <Button href="https://aetherdmx.com/docs" style={buttonSecondary}>
          View Documentation
        </Button>
      </Section>

      <Section style={buttonRow}>
        <Button href="https://aetherdmx.com/hardware" style={buttonSecondary}>
          Hardware Guide
        </Button>
      </Section>

      <Text style={paragraph}>
        Need help? Reply to this email or reach out in the Discord
        #support channel. We&apos;re here to make sure your setup goes
        smoothly.
      </Text>

      <Text style={signoff}>
        — The Aether DMX Team
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

const subheading: React.CSSProperties = {
  fontSize: '16px',
  fontWeight: 600,
  color: '#ffffff',
  margin: '24px 0 12px 0',
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
  margin: '0 0 12px 0',
};

const buttonRow: React.CSSProperties = {
  textAlign: 'center' as const,
  margin: '12px 0',
};

const buttonPrimary: React.CSSProperties = {
  backgroundColor: '#00d4ff',
  color: '#000000',
  fontWeight: 600,
  fontSize: '14px',
  padding: '12px 24px',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'inline-block',
};

const buttonSecondary: React.CSSProperties = {
  backgroundColor: '#1f1f24',
  color: '#ffffff',
  fontWeight: 500,
  fontSize: '14px',
  padding: '10px 20px',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'inline-block',
  border: '1px solid #2e2e35',
};

const signoff: React.CSSProperties = {
  color: '#71717a',
  fontSize: '14px',
  fontStyle: 'italic',
  margin: '24px 0 0 0',
};
