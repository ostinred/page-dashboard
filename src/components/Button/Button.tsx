import React from 'react';

export interface IButton {
  type?: 'button' | 'submit';
  title: string | boolean;
  className?: string;
  icon?:
    | 'excel'
    | 'print'
    | 'plus'
    | 'checkmark'
    | 'arrow-bottom'
    | 'document'
    | 'pencil';
  size?: 'small';
  iconPosition?: 'right';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  colorScheme?: 'dark' | 'light';
  backgroundColor?: string;
}

const Button: React.FC<IButton> = ({
  type = 'button',
  title,
  onClick,
  className,
  icon,
  iconPosition,
  size = 'small',
  colorScheme = 'light',
  backgroundColor,
}) => {
  const renderClassNames = () => {
    let classNames = ['is-btn'];

    if (!title) {
      classNames = [...classNames, 'only-icon'];
    }

    if (iconPosition === 'right') {
      classNames = [...classNames, 'right-aligned-icon'];
    }

    if (size) {
      classNames = [...classNames, `is-btn-${size}`];
    }

    if (colorScheme) {
      classNames = [...classNames, `is-btn-${colorScheme}`];
    }

    return [...classNames, className].join(' ');
  };

  return (
    <button
      type={type}
      className={renderClassNames()}
      onClick={onClick}
      style={{ backgroundColor }}>
      {icon ? <i className={`icon-${icon}`} aria-hidden="true" /> : null}
      {title ? <span>{title}</span> : null}
    </button>
  );
};

export default Button;
