import { useState } from 'react';

import Calculator from './Calculator';

import { IRow, Sign } from '@/types';

const CalculatorContainer: React.FC = () => {
  const [rows, setRows] = useState<IRow[]>([
    {
      id: Date.now(),
      sign: '+',
      value: 10,
      enabled: true,
    },
  ]);

  const handleAddRow = () => {
    const newRow: IRow = {
      id: Date.now(),
      sign: '+',
      value: 10,
      enabled: true,
    };

    setRows([...rows, newRow]);
  };

  const handleRemoveRow = (id: number) => {
    const updatedRows = rows.filter((row) => row.id !== id);

    setRows(updatedRows);
  };

  const handleSignChange = (rowId: number, newSign: Sign) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === rowId ? { ...row, sign: newSign } : row)),
    );
  };

  const handleValueChange = (rowId: number, newValue: number) => {
    const updatedRows = rows.map((row) => (row.id === rowId ? { ...row, value: newValue } : row));

    setRows(updatedRows);
  };

  const handleEnabledChange = (rowId: number) => {
    const updatedRows = rows.map((row) =>
      row.id === rowId ? { ...row, enabled: !row.enabled } : row,
    );

    setRows(updatedRows);
  };

  const calculateTotal = () => {
    const total = rows.reduce((sum, row) => {
      const { value, enabled, sign } = row;

      if (enabled) {
        if (!isNaN(value)) {
          return sum + (sign === '+' ? value : -value);
        }
      }

      return sum;
    }, 0);

    return total;
  };

  return (
    <Calculator
      calculateTotal={calculateTotal}
      rows={rows}
      onAddRow={handleAddRow}
      onEnabledChange={handleEnabledChange}
      onRemoveRow={handleRemoveRow}
      onSignChange={handleSignChange}
      onValueChange={handleValueChange}
    />
  );
};

export default CalculatorContainer;
