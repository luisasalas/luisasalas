declare module 'react-typed' {
  import * as React from 'react';

  export interface ReactTypedProps {
    strings?: string[];
    typeSpeed?: number;
    backSpeed?: number;
    attr?: string;
    loop?: boolean;
    showCursor?: boolean;
    cursorChar?: string;
    backDelay?: number;
    smartBackspace?: boolean;
    shuffle?: boolean;
    fadeOut?: boolean;
    fadeOutClass?: string;
    fadeOutDelay?: number;
    startDelay?: number;
    loopCount?: number;
    bindInputFocusEvents?: boolean;
    contentType?: 'html' | 'null';
    stopped?: boolean;
  }

  const ReactTyped: React.FC<ReactTypedProps>;
  export default ReactTyped;
}
