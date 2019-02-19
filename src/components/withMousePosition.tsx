import React from 'react';

export type State = {
  x?: number;
  y?: number;
};

function withMousePosition(Component: React.ComponentType<State>) {
  return class extends React.Component<State> {
    state: State = {
      x: 0,
      y: 0,
    };

    handleMousePosition = (e: MouseEvent) => {
      this.setState({ x: e.clientX, y: e.clientY });
    };

    componentDidMount() {
      addEventListener('mousemove', this.handleMousePosition);
    }
    componentWillUnmount() {
      removeEventListener('mousemove', this.handleMousePosition);
    }

    render() {
      const { x, y } = this.state;
      return <Component x={x} y={y} {...this.props} />;
    }
  };
}

export default withMousePosition;
