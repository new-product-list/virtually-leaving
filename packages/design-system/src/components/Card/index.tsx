import React from 'react';
import './card.css';

export interface CardProps {
  /**
   * Is the message text to show in the card
   */
  bodyText: string;
}

/**
 * Primary UI component for user interaction
 */

export const Card: React.FC<CardProps> = ({ bodyText }) => (
  <div className="storybook-card">{bodyText}</div>
);
