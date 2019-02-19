import React from 'react';

import PokemonCard from '../../components/PokemonCard';
import { PokemonType } from '../../components/PokemonCard/Stats/Type';
import withMousePosition from '../../components/withMousePosition';
import ThemeContext from '../../context/theme';
import WithPokemon from '../../components/WithPokemon';

export type Props = {
  x?: number;
  y?: number;
};

export type State = {
  name?: string;
  type?: PokemonType;
  debouncedName?: string;
};

class ClassicPokedex extends React.Component<Props, State> {
  timeout = -1;
  state: State = {
    name: 'Pokemon',
    type: 'ground',
  };

  componentDidMount() {
    document.title = this.state.name || '';
  }
  componentDidUpdate(_previousProps: Props, previousState: State) {
    if (previousState.name !== this.state.name) {
      document.title = this.state.name || '';
      window.clearTimeout(this.timeout);
      this.timeout = window.setTimeout(() => {
        this.setState({ debouncedName: this.state.name });
      }, 300);
    }
  }

  public render() {
    const { x, y } = this.props;
    const { name, debouncedName, type } = this.state;
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <WithPokemon name={debouncedName}>
            {({ data, loading }) => (
              <PokemonCard
                loading={loading}
                theme={theme}
                onNameChange={(newName) => {
                  this.setState({ name: newName });
                }}
                type={type}
                onTypeChange={(newType) => {
                  this.setState({ type: newType });
                }}
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
