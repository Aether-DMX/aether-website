// TODO: Wire up when Stripe integration is built for the store.
// This is a skeleton template — flesh out when the store goes live.

import { Text } from '@react-email/components';
import * as React from 'react';
import BaseLayout from './BaseLayout';

interface OrderConfirmationProps {
  customerName: string;
  orderNumber: string;
  items: Array<{ name: string; quantity: number; price: number }>;
  total: number;
}

export default function OrderConfirmation({
  customerName,
  orderNumber,
  items,
  total,
}: OrderConfirmationProps) {
  const firstName = customerName.split(' ')[0];

  return (
    <BaseLayout previewText={`Order confirmed: #${orderNumber}`}>
      <Text style={heading}>Order Confirmed ✓</Text>

      <Text style={paragraph}>
        Hey {firstName}, your order <strong>#{orderNumber}</strong> has been confirmed.
      </Text>

      {items.map((item, i) => (
        <Text key={i} style={itemRow}>
          {item.quantity}x {item.name} — ${item.price.toFixed(2)}
        </Text>
      ))}

      <Text style={totalRow}>
        Total: ${total.toFixed(2)}
      </Text>

      <Text style={paragraph}>
        We&apos;ll send you a shipping update once your order is on its way.
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

const itemRow: React.CSSProperties = {
  color: '#d4d4d8',
  fontSize: '14px',
  margin: '0 0 4px 0',
};

const totalRow: React.CSSProperties = {
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 700,
  margin: '12px 0 16px 0',
  borderTop: '1px solid #1f1f24',
  paddingTop: '12px',
};
