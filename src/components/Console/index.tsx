import * as stylex from '@stylexjs/stylex';
import s from './style.stylex';
import PanelResize from 'box/lib/PanelResize';

const Console: React.FC = () => {
  return (
    <div {...stylex.props(s.container)}>
      <PanelResize orientation="row" />
    </div>
  );
};

export default Console;
