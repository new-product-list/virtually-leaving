import React from "react";

export interface StepProps {
  /**
   * Number to show in circle
   */
  number: string;
}

/**
 * Step circle
 */
export const Step: React.FC<StepProps> = ({ number }) => {
  return <div className="step">{number}</div>;
};
