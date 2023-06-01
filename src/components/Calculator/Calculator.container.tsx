import { useState } from 'react';

import { IRow, Sign } from '../../types';

import Calculator from './Calculator';

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
    return rows.reduce((sum, row) => {
      if (row.enabled) {
        return sum + (row.sign === '+' ? row.value : -row.value);
      }

      return sum;
    }, 0);
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
