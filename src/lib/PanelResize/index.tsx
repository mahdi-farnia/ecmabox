/**
 * Only renders a hoverable line to screen, all resize logics specifies by parent
 * Capable for horizontal and vertical mode
 */
import * as stylex from '@stylexjs/stylex';
import orientationStyles from './style.stylex';

interface PanelResizeProps {
  orientation: keyof typeof orientationStyles;
}

const PanelResize: React.FC<PanelResizeProps> = ({ orientation }) => {
  return (
    <div {...stylex.props(orientationStyles[orientation].resizer)}>
      <div {...stylex.props(orientationStyles[orientation].resizerUI)} />
    </div>
  );
};

export default PanelResize;
