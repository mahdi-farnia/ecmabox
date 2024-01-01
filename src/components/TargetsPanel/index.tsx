import * as stylex from '@stylexjs/stylex';
import s from './styles.stylex';
import PanelResize from 'box/lib/PanelResize';
import { StyleXAsProp } from 'box/lib/utility';

const TargetsPanel: React.FC<StyleXAsProp> = ({ style }) => {
  return (
    <div {...stylex.props(style, s.container)}>
      <PanelResize orientation="column" />
    </div>
  );
};

export default TargetsPanel;
