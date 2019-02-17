import createUseAxios from './useAxios';

const usePokemon = createUseAxios((name?: string) => {
  return {
    url: name ? `${process.env.POKEMON_API}/pokemon/${name.toLowerCase()}` : undefined,
  };
});

export default usePokemon;
