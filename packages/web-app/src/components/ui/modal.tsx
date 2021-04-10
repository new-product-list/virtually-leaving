import React, { useState } from "react";
import { ModalInputType } from "../../types";
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
  /**
   * Optional placeholder text
   */
  placeholder?: string;
  /**
   * Function called on cancel click
   */
  fieldType?: ModalInputType;
}

interface IInputProps {
  type: ModalInputType | undefined;
  state: string;
  setState: any;
  placeholder: string | undefined;
}

const CustomInput = (props: IInputProps) => {
  const { type, state, setState, placeholder } = props;
  if (type === "INPUT") {
    return (
      <input
        className="modal-input"
        placeholder={placeholder || "Enter your message"}
        value={state}
        onChange={(evt) => {
          setState(evt.target.value);
        }}
      />
    );
  }
  return (
    <textarea
      className="modal-input"
      placeholder={placeholder || "Enter your message"}
      value={state}
      onChange={(evt) => {
        setState(evt.target.value);
      }}
    />
  );
};

/**
 * Primary UI component for user interaction
 */
export const Modal: React.FC<ModalProps> = ({
  visible,
  placeholder,
  fieldType,
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
        <CustomInput
          type={fieldType}
          state={state}
          setState={setState}
          placeholder={placeholder}
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
