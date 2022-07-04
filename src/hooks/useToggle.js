import { useState } from 'react';

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const handleToggle = () => setState(prev => !prev);

  return [
    state,
    handleToggle
  ];
};

export default useToggle;
