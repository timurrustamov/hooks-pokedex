import React from 'react';

import PokemonCard from '../../components/PokemonCard';
import { PokemonType } from '../../components/PokemonCard/Stats/Type';
import WithMousePosition, { withMousePosition } from '../../components/WithMousePosition';
import ThemeContext from '../../context/theme';
import WithPokemon from '../../components/WithPokemon';

export type ClassicPokedexProps = {
  x?: number;
  y?: number;
};

export type ClassicPokedexState = {
  name: string;
  type: PokemonType;
};

class ClassicPokedex extends React.Component<ClassicPokedexProps, ClassicPokedexState> {
  state: ClassicPokedexState = {
    name: 'Pokemon',
    type: 'ground',
  };

  componentDidMount() {
    document.title = this.state.name;
  }
  componentDidUpdate(_previousProps: ClassicPokedexProps, previousState: ClassicPokedexState) {
    if (previousState.name !== this.state.name) {
      document.title = this.state.name;
    }
  }

  public render() {
    const { x, y } = this.props;
    const { name, type } = this.state;
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <WithPokemon name={name}>
            {({ data }) => (
              <PokemonCard
                theme={theme}
                onNameChange={(newName) => this.setState({ name: newName })}
                type={type}
                onTypeChange={(newType) => this.setState({ type: newType })}
                tiltX={x}
                tiltY={y}
                {...data}
                name={name}
              />
            )}
          </WithPokemon>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default withMousePosition(ClassicPokedex);
