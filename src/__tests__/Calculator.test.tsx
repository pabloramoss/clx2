import { screen, fireEvent, render } from '@testing-library/react';
import { describe, it } from 'vitest';

import Calculator from '../components/Calculator';

describe('Calculator', () => {
  beforeEach(() => {
    render(<Calculator />);
  });

  it('should add a row when the add row button is clicked', () => {
    const addRowButton = screen.getByLabelText('Add Row');

    fireEvent.click(addRowButton);

    const rows = document.querySelectorAll('.calculator-row');

    expect(rows.length).toEqual(2);
  });

  it('should remove a row when the remove row button is clicked', () => {
    const addRowButton = screen.getByLabelText('Add Row');

    fireEvent.click(addRowButton);

    const removeRowButton = screen.getAllByLabelText('Remove');

    fireEvent.click(removeRowButton[1]);

    const rows = document.querySelectorAll('.calculator-row');

    expect(rows.length).toEqual(1);
  });

  it('should add the value of a new row to the total', () => {
    const addRowButton = screen.getByLabelText('Add Row');

    fireEvent.click(addRowButton);

    const inputRowButtons = screen.getAllByLabelText('Value');

    fireEvent.change(inputRowButtons[1], { target: { value: 1 } });

    const result = screen.getByLabelText('Result');

    expect(result).toHaveTextContent('11');
  });

  it('should substract the value of a new row when the sign is changed to "-"', () => {
    const addRowButton = screen.getByLabelText('Add Row');

    fireEvent.click(addRowButton);

    const inputRowButtons = screen.getAllByLabelText('Value');

    fireEvent.change(inputRowButtons[1], { target: { value: 1 } });

    const changeSignRowButtons = screen.getAllByLabelText('Add');

    fireEvent.click(changeSignRowButtons[1]);

    const result = screen.getByLabelText('Result');

    expect(result).toHaveTextContent('9');
  });

  it('should substract the value of a row when the row is disabled', () => {
    const addRowButton = screen.getByLabelText('Add Row');

    fireEvent.click(addRowButton);

    const inputRowButtons = screen.getAllByLabelText('Value');

    fireEvent.change(inputRowButtons[1], { target: { value: 1 } });

    const disableRowButtons = screen.getAllByLabelText('Enable/Disable');

    fireEvent.click(disableRowButtons[0]);

    const result = screen.getByLabelText('Result');

    expect(result).toHaveTextContent('1');
  });
});
