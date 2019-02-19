import createUseAxios from './useAxios';
import { useContext, useEffect, useState } from 'react';
import { RequestDelayContext } from '../components/RequestDelay';
import useDebounce from './useDebounce';

const useAxios = createUseAxios((name?: string) => {
  return {
    url: name && name !== 'Pokemon'
      ? `${process.env.POKEMON_API}/pokemon/${name.toLowerCase()}`
      : undefined,
  };
});

const usePokemon = (name?: string) => {
  const delay = useContext(RequestDelayContext);
  const { loading, error, data } = useAxios(name);

  const debouncedData = useDebounce(data, delay);
  const [debouncedLoading, setDebouncedLoading] = useState(false);
  useEffect(() => {
    if (loading && !debouncedLoading) {
      setDebouncedLoading(true);
    } else if (!loading && debouncedLoading) {
      const timeout = setTimeout(() => setDebouncedLoading(false), delay);
      return () => clearTimeout(timeout);
    }
  }, [loading, delay])

  return { data: debouncedData, loading: debouncedLoading, error };
};

export default usePokemon;
