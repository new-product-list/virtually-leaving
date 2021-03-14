import React, { useState } from "react";
import { Button } from "design-system";

export interface ModalProps {
  /**
   * Function called on submit click
   */
  visible: boolean;
  /**
   * Function called on submit click returns the message
   */
  onSubmit: (message: string) => void;
  /**
   * Function called on cancel click
   */
  onCancel?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Modal: React.FC<ModalProps> = ({
  visible,
  onCancel,
  onSubmit,
}) => {
  const [state, setState] = useState("");
  if (!visible) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <input
          className="modal-input"
          placeholder="Enter your message"
          value={state}
          onChange={(evt) => {
            setState(evt.target.value);
          }}
        />
        <div className="button-panel">
          <Button
            label="submit"
            onClick={() => {
              onSubmit(state);
              setState("");
            }}
          />
          <Button label="cancel" onClick={onCancel} />
        </div>
      </div>
    </div>
  );
};
