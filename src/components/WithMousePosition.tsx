import React from 'react';

export type WithMousePositionProps = {
  children: (x: number, y: number) => React.ReactNode;
};

export type WithMousePositionState = {
  x?: number;
  y?: number;
};

class WithMousePosition extends React.Component<WithMousePositionProps, WithMousePositionState> {
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
    return this.props.children(x!, y!);
  }
}

export default WithMousePosition;

export type WithMousePositionArgument<T = {}> = React.ComponentClass<T & WithMousePositionState>;

export function withMousePosition<T = {}>(Component: WithMousePositionArgument<T>) {
  return (props: T) => (
    <WithMousePosition>{(x, y) => <Component x={x} y={y} {...props} />}</WithMousePosition>
  );
}
