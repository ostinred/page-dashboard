import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Checkbox from './Checkbox';

it('should call callback on Click', () => {
  const onCheckboxChange = jest.fn();

  const { getByTestId } = render(
    <Checkbox
      name="testName"
      checked={true}
      onCheckboxChange={onCheckboxChange}
    />
  );

  expect(getByTestId('checkbox-test-id')).toBeInTheDocument();
  fireEvent.click(getByTestId('checkbox-test-id'));
  expect(onCheckboxChange).toHaveBeenCalledTimes(1);
});
