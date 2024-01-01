import * as stylex from '@stylexjs/stylex';
import s from './styles.stylex';
import PanelResize from 'box/lib/PanelResize';

const TargetsPanel: React.FC = () => {
  return (
    <div {...stylex.props(s.container)}>
      {/* TODO */}
      <PanelResize orientation="column" />
    </div>
  );
};

export default TargetsPanel;
