import { formatCurrency } from '@libs/utils';
import { useState } from 'react';

const useCurrencyInput = (initialValue) => {
  const [ammount, setAmmount] = useState(formatCurrency(initialValue));

  function sanitizeValue(value) {
    const clearValue = value.replace(/[^\d.]/g, '');

    if (clearValue) {
      return parseFloat(clearValue);
    }

    return '';
  }

  const onKeyUpValue = (e) => {
    const { keyCode, target: { value } } = e;
    console.log(keyCode);

    if ((keyCode >= 48 && keyCode <= 57) ||
      (keyCode >= 96 && keyCode <= 105) ||
      (keyCode >= 37 && keyCode <= 40) ||
      keyCode === 110 || keyCode === 190 ||
      keyCode === 8 || keyCode === 46 // keyCode === 188 ||
    ) {
      // console.log('is number');

      setAmmount(sanitizeValue(value));
    } else {
      e.preventDefault();
    }
  };

  return [ammount, onKeyUpValue];
};

export default useCurrencyInput;
