import React from 'react';

interface ILabelRating {
  value: string;
}

const LabelRating: React.FC<ILabelRating> = ({ value }) => {
  const renderColor = () => {
    const rating = Number(value);

    if (value === 'NR' || Number.isNaN(rating)) return 'label-text-grey';

    if (rating < 2) {
      return 'label-bg-dark-red';
    }

    if (rating < 3) {
      return 'label-bg-red';
    }

    if (rating < 4) {
      return 'label-bg-orange';
    }

    if (rating < 4.5) {
      return 'label-bg-green';
    }

    if (rating >= 4.5) {
      return 'label-bg-dark-green';
    }
  };
  return <div className={`label-rating ${renderColor()}`}>{value}</div>;
};

export default LabelRating;
