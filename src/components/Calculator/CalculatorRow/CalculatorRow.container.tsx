import { Sign } from '../../../types';

import CalculatorRow from './CalculatorRow';

interface Props {
  id: number;
  sign: string;
  value: number;
  enabled: boolean;
  onRemove: (id: number) => void;
  onSignChange: (id: number, newSign: Sign) => void;
  onValueChange: (id: number, newValue: number) => void;
  onEnabledChange: (id: number) => void;
  calculateTotal: () => number;
}

const CalculatorRowContainer: React.FC<Props> = ({
  id,
  sign,
  value,
  enabled,
  onRemove,
  onSignChange,
  onValueChange,
  onEnabledChange,
  calculateTotal,
}) => {
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const newValue = inputValue !== '' ? parseInt(inputValue) : 0;

    onValueChange(id, newValue);
  };

  const handleSignChange = () => {
    const newSign = sign === '+' ? '-' : '+';

    onSignChange(id, newSign);
    calculateTotal();
  };

  const handleEnabledChange = () => {
    onEnabledChange(id);
  };

  const handleRemoveRow = () => {
    onRemove(id);
  };

  return (
    <CalculatorRow
      enabled={enabled}
      sign={sign}
      value={value}
      onEnabledChange={handleEnabledChange}
      onRemove={handleRemoveRow}
      onSignChange={handleSignChange}
      onValueChange={handleValueChange}
    />
  );
};

export default CalculatorRowContainer;
