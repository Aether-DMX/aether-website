import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Link,
  Img,
  Preview,
} from '@react-email/components';
import * as React from 'react';

interface BaseLayoutProps {
  previewText: string;
  children: React.ReactNode;
}

export default function BaseLayout({ previewText, children }: BaseLayoutProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Img
              src="https://aetherdmx.com/aether-logo.png"
              width="32"
              height="32"
              alt="Aether DMX"
              style={logoImg}
            />
            <Text style={logoText}>
              Aether <span style={logoAccent}>DMX</span>
            </Text>
          </Section>

          {/* Content */}
          <Section style={content}>
            {children}
          </Section>

          {/* Footer */}
          <Hr style={divider} />
          <Section style={footer}>
            <Text style={footerText}>
              Aether DMX — AI-powered architectural lighting control
            </Text>
            <Text style={footerLinks}>
              <Link href="https://aetherdmx.com" style={footerLink}>Website</Link>
              {' · '}
              <Link href="https://discord.gg/uAHsRVtJMY" style={footerLink}>Discord</Link>
              {' · '}
              <Link href="https://aetherdmx.com/docs" style={footerLink}>Docs</Link>
            </Text>
            <Text style={footerMuted}>
              © {new Date().getFullYear()} Aether DMX. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const body: React.CSSProperties = {
  backgroundColor: '#0a0a0c',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  margin: 0,
  padding: 0,
};

const container: React.CSSProperties = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '40px 20px',
};

const header: React.CSSProperties = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const logoImg: React.CSSProperties = {
  display: 'inline-block',
  verticalAlign: 'middle',
  marginRight: '8px',
};

const logoText: React.CSSProperties = {
  display: 'inline',
  fontSize: '20px',
  fontWeight: 700,
  color: '#ffffff',
  letterSpacing: '-0.02em',
};

const logoAccent: React.CSSProperties = {
  color: '#00d4ff',
};

const content: React.CSSProperties = {
  backgroundColor: '#111114',
  border: '1px solid #1f1f24',
  borderRadius: '12px',
  padding: '32px',
};

const divider: React.CSSProperties = {
  borderColor: '#1f1f24',
  borderTopWidth: '1px',
  marginTop: '32px',
  marginBottom: '24px',
};

const footer: React.CSSProperties = {
  textAlign: 'center' as const,
};

const footerText: React.CSSProperties = {
  color: '#71717a',
  fontSize: '13px',
  margin: '0 0 8px 0',
};

const footerLinks: React.CSSProperties = {
  color: '#71717a',
  fontSize: '13px',
  margin: '0 0 8px 0',
};

const footerLink: React.CSSProperties = {
  color: '#00d4ff',
  textDecoration: 'none',
};

const footerMuted: React.CSSProperties = {
  color: '#52525b',
  fontSize: '11px',
  margin: '0',
};
