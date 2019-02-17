import React from 'react';

export type WithMousePositionState = {
  x?: number;
  y?: number;
};

function withMousePosition<T = {}>(Component: React.ComponentType<T & WithMousePositionState>) {
  return class extends React.Component<T, WithMousePositionState> {
    state: WithMousePositionState = {
      x: 0,
      y: 0,
    };

    handleMousePosition = (e: MouseEvent) => {
      this.setState({ x: e.clientX, y: e.clientY });
    };

    componentDidMount() {
      document.addEventListener('mousemove', this.handleMousePosition);
    }
    componentWillUnmount() {
      document.removeEventListener('mousemove', this.handleMousePosition);
    }

    render() {
      const { x, y } = this.state;
      return <Component x={x} y={y} {...this.props} />;
    }
  };
}

export default withMousePosition;
