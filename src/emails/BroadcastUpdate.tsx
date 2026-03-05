import { Text, Button, Section } from '@react-email/components';
import * as React from 'react';
import BaseLayout from './BaseLayout';

interface BroadcastUpdateProps {
  recipientName: string;
  subject: string;
  body: string;
  ctaText?: string;
  ctaUrl?: string;
}

export default function BroadcastUpdate({
  recipientName,
  subject,
  body,
  ctaText,
  ctaUrl,
}: BroadcastUpdateProps) {
  const firstName = recipientName.split(' ')[0];

  // Split body into paragraphs on double newlines
  const paragraphs = body.split(/\n\n+/).filter(Boolean);

  return (
    <BaseLayout previewText={subject}>
      <Text style={heading}>{subject}</Text>

      <Text style={greeting}>Hey {firstName},</Text>

      {paragraphs.map((para, i) => (
        <Text key={i} style={paragraph}>
          {para}
        </Text>
      ))}

      {ctaText && ctaUrl && (
        <Section style={buttonContainer}>
          <Button href={ctaUrl} style={button}>
            {ctaText}
          </Button>
        </Section>
      )}

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

const greeting: React.CSSProperties = {
  color: '#d4d4d8',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0 0 16px 0',
};

const paragraph: React.CSSProperties = {
  color: '#d4d4d8',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0 0 16px 0',
  whiteSpace: 'pre-wrap' as const,
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

const signoff: React.CSSProperties = {
  color: '#71717a',
  fontSize: '14px',
  fontStyle: 'italic',
  margin: '24px 0 0 0',
};
