import { IRow, Sign } from '../../types';

import CalculatorRow from './CalculatorRow';

interface Props {
  rows: IRow[];
  onAddRow: () => void;
  onRemoveRow: (id: number) => void;
  onSignChange: (id: number, newSign: Sign) => void;
  onValueChange: (id: number, newValue: number) => void;
  onEnabledChange: (id: number) => void;
  calculateTotal: () => number;
}

const CalculatorContainer: React.FC<Props> = ({
  rows,
  onAddRow,
  onRemoveRow,
  onSignChange,
  onValueChange,
  onEnabledChange,
  calculateTotal,
}) => {
  const result = calculateTotal();

  return (
    <div className="calculator">
      {rows.map((row) => (
        <CalculatorRow
          key={row.id}
          calculateTotal={calculateTotal}
          enabled={row.enabled}
          id={row.id}
          sign={row.sign}
          value={row.value}
          onEnabledChange={onEnabledChange}
          onRemove={onRemoveRow}
          onSignChange={onSignChange}
          onValueChange={onValueChange}
        />
      ))}
      <div className="calculator-footer">
        <button aria-label="Add Row" onClick={onAddRow}>
          Add Row
        </button>
        <p className="calculator-result">Result: {result}</p>
      </div>
    </div>
  );
};

export default CalculatorContainer;
