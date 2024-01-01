import * as stylex from '@stylexjs/stylex';
import s from './style.stylex';
import PanelResize from 'box/lib/PanelResize';
import { StyleXAsProp } from 'box/lib/utility';

const Console: React.FC<StyleXAsProp> = ({ style }) => {
  return (
    <div {...stylex.props(style, s.container)}>
      <PanelResize orientation="row" />
    </div>
  );
};

export default Console;
