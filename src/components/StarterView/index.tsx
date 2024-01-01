import * as stylex from '@stylexjs/stylex';
import type { StyleXAsProp } from 'box/lib/utility';

const StarterView: React.FC<StyleXAsProp> = ({ style }) => {
  return <div {...stylex.props(style)}>StarterView</div>;
};

export default StarterView;
