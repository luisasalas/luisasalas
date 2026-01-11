declare module 'react-particles-js' {
  import * as React from 'react';

  export interface ParticlesProps {
    width?: string;
    height?: string;
    params?: any;
    style?: React.CSSProperties;
    className?: string;
    canvasClassName?: string;
  }

  export default class Particles extends React.Component<ParticlesProps> {}
}
