import React from 'react';

interface ICheckbox {
  name: string;
  onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  label?: string;
}

const Checkbox: React.FC<ICheckbox> = ({
  name,
  onCheckboxChange,
  checked,
  label,
}) => {
  return (
    <div className="is-checkbox">
      <label htmlFor={name}>
        <input
          data-testid="checkbox-test-id"
          name={name}
          type="checkbox"
          onChange={onCheckboxChange}
          checked={checked}
        />

        <span className="check-icon">
          <i className="icon-checkmark" />
        </span>
        {label ? <span>{label}</span> : null}
      </label>
    </div>
  );
};

export default Checkbox;
