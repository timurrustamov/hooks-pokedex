import React, { FunctionComponent, HTMLProps } from 'react';

import { Omit } from '@material-ui/core';
import { animated, useSpring } from 'react-spring';

const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const interpolate = (x: number, y: number, s: number) => {
  return `perspective(600px) rotateX(${x / 2}deg) rotateY(${y / 2}deg) scale(${s})`;
};

export type WrapperProps = {
  tiltX?: number;
  tiltY?: number;
} & Omit<HTMLProps<HTMLDivElement>, 'ref'>;

const Wrapper: FunctionComponent<WrapperProps> = (props) => {
  const { tiltX = 0, tiltY = 0, ...restProps } = props;

  let xys = [0, 0, 1];
  if (tiltX || tiltY) {
    xys = calc(tiltX, tiltY);
  }
  const animation = useSpring({ xys });
  return (
    <animated.div
      style={{ transform: animation.xys.interpolate(interpolate as any) }}
      {...restProps}
    >
    </animated.div>
  );
};

export default Wrapper;
