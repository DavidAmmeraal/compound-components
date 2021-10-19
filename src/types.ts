export type CssProps = {
  style?: React.CSSProperties;
  className?: string;
};

export type CssFC<T = unknown> = React.FC<T & CssProps>;
