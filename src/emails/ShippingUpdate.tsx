// TODO: Wire up when Stripe integration and shipping tracking is built.
// This is a skeleton template — flesh out when the store goes live.

import { Text, Button, Section } from '@react-email/components';
import * as React from 'react';
import BaseLayout from './BaseLayout';

interface ShippingUpdateProps {
  customerName: string;
  orderNumber: string;
  trackingNumber: string;
  carrier: string;
  trackingUrl: string;
  estimatedDelivery: string;
}

export default function ShippingUpdate({
  customerName,
  orderNumber,
  trackingNumber,
  carrier,
  trackingUrl,
  estimatedDelivery,
}: ShippingUpdateProps) {
  const firstName = customerName.split(' ')[0];

  return (
    <BaseLayout previewText={`Your order #${orderNumber} has shipped!`}>
      <Text style={heading}>Your Order Has Shipped! 📦</Text>

      <Text style={paragraph}>
        Hey {firstName}, your order <strong>#{orderNumber}</strong> is on its way.
      </Text>

      <Section style={detailsBox}>
        <Text style={detailRow}>
          <span style={label}>Carrier:</span> {carrier}
        </Text>
        <Text style={detailRow}>
          <span style={label}>Tracking #:</span> {trackingNumber}
        </Text>
        <Text style={detailRow}>
          <span style={label}>Est. Delivery:</span> {estimatedDelivery}
        </Text>
      </Section>

      <Section style={buttonContainer}>
        <Button href={trackingUrl} style={button}>
          Track Your Package
        </Button>
      </Section>
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
