import { Text, Section, Link } from '@react-email/components';
import * as React from 'react';
import BaseLayout from './BaseLayout';

interface AdminNewSignupProps {
  fullName: string;
  email: string;
  role: string;
  company: string | null;
  experienceLevel: string;
  currentSystem: string | null;
  interestReason: string | null;
  howHeard: string | null;
}

export default function AdminNewSignup({
  fullName,
  email,
  role,
  company,
  experienceLevel,
  currentSystem,
  interestReason,
  howHeard,
}: AdminNewSignupProps) {
  return (
    <BaseLayout previewText={`New beta signup: ${fullName} (${email})`}>
      <Text style={heading}>New Beta Signup 🔔</Text>

      <Text style={paragraph}>
        A new user just signed up for the Aether DMX beta:
      </Text>

      <Section style={detailsBox}>
        <Text style={detailRow}>
          <span style={label}>Name:</span> <span style={value}>{fullName}</span>
        </Text>
        <Text style={detailRow}>
          <span style={label}>Email:</span> <span style={value}>{email}</span>
        </Text>
        <Text style={detailRow}>
          <span style={label}>Role:</span> <span style={value}>{role}</span>
        </Text>
        {company && (
          <Text style={detailRow}>
            <span style={label}>Company:</span> <span style={value}>{company}</span>
          </Text>
        )}
        <Text style={detailRow}>
          <span style={label}>Experience:</span> <span style={value}>{experienceLevel}</span>
        </Text>
        {currentSystem && (
          <Text style={detailRow}>
            <span style={label}>Current System:</span> <span style={value}>{currentSystem}</span>
          </Text>
        )}
        {howHeard && (
          <Text style={detailRow}>
            <span style={label}>How Heard:</span> <span style={value}>{howHeard}</span>
          </Text>
        )}
      </Section>

      {interestReason && (
        <>
          <Text style={sectionLabel}>What they hope Aether solves:</Text>
          <Section style={quoteBox}>
            <Text style={quoteText}>&ldquo;{interestReason}&rdquo;</Text>
          </Section>
        </>
      )}

      <Text style={paragraph}>
        <Link href="https://aetherdmx.com/admin/beta" style={link}>
          Review in Admin Panel →
        </Link>
      </Text>
    </BaseLayout>
  );
}

const heading: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 700,
  color: '#ffffff',
  margin: '0 0 16px 0',
};

const paragraph: React.CSSProperties = {
  color: '#d4d4d8',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0 0 16px 0',
};

const detailsBox: React.CSSProperties = {
  backgroundColor: '#0a0a0c',
  borderRadius: '8px',
  padding: '16px 20px',
  marginBottom: '16px',
};

const detailRow: React.CSSProperties = {
  color: '#d4d4d8',
  fontSize: '14px',
  lineHeight: '1.8',
  margin: 0,
};

const label: React.CSSProperties = {
  color: '#71717a',
  fontWeight: 500,
};

const value: React.CSSProperties = {
  color: '#ffffff',
};

const sectionLabel: React.CSSProperties = {
  color: '#71717a',
  fontSize: '13px',
  fontWeight: 500,
  margin: '0 0 8px 0',
};

const quoteBox: React.CSSProperties = {
  borderLeft: '3px solid #00d4ff',
  paddingLeft: '16px',
  marginBottom: '16px',
};

const quoteText: React.CSSProperties = {
  color: '#d4d4d8',
  fontSize: '14px',
  fontStyle: 'italic',
  lineHeight: '1.6',
  margin: 0,
};

const link: React.CSSProperties = {
  color: '#00d4ff',
  textDecoration: 'none',
  fontWeight: 600,
};
