import { useEffect, useState } from 'react';

const useDebounce = <T>(value: T, delay: number) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setState(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return state;
};

export default useDebounce;
