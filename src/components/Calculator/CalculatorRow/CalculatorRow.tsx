import React from 'react';

import RadioButtonCheckedIcon from '../../../assets/RadioButtonCheckedIcon';
import RadioButtonUncheckedIcon from '../../../assets/RadioButtonUncheckedIcon';
import TrashIcon from '../../../assets/TrashIcon';
import PlusIcon from '../../../assets/PlusIcon';
import MinusIcon from '../../../assets/MinusIcon';

interface Props {
  sign: string;
  value: number;
  enabled: boolean;
  onRemove: () => void;
  onSignChange: () => void;
  onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEnabledChange: () => void;
}

const CalculatorRow: React.FC<Props> = ({
  sign,
  value,
  enabled,
  onRemove,
  onSignChange,
  onValueChange,
  onEnabledChange,
}) => {
  return (
    <div className={`calculator-row ${enabled ? '' : 'disabled'}`}>
      <div className={`calculator-row__wrapper ${enabled ? '' : 'disabled'}`}>
        <input
          aria-label="Value"
          className="calculator-row__input"
          disabled={!enabled}
          type="number"
          value={value}
          onChange={onValueChange}
        />
        <button
          aria-label={sign === '+' ? 'Add' : 'Subtract'}
          className="calculator-row__button"
          disabled={!enabled}
          onClick={onSignChange}
        >
          {sign === '+' ? <PlusIcon /> : <MinusIcon />}
        </button>
        <button
          aria-label="Remove"
          className="calculator-row__button"
          disabled={!enabled}
          onClick={onRemove}
        >
          <TrashIcon />
        </button>
      </div>
      <button
        aria-label="Enable/Disable"
        aria-pressed={enabled}
        className="calculator-row__checkbox"
        onClick={onEnabledChange}
      >
        {enabled ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}
      </button>
      <label className="calculator-row__label">Enabled</label>
    </div>
  );
};

export default CalculatorRow;
