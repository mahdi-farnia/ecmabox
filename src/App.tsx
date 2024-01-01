import StarterView from './components/StarterView';
import TargetsPanel from './components/TargetsPanel';
import Console from './components/Console';
import * as stylex from '@stylexjs/stylex';

const s = stylex.create({
  grid: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplate: '1fr 300px / 1fr 300px'
  },
  starter: {},
  targetsPanel: {},
  console: {
    gridArea: '2 / 1 / span 1 / span 2'
  }
});

const App: React.FC = () => (
  <div {...stylex.props(s.grid)}>
    <StarterView style={s.starter} />
    <TargetsPanel style={s.targetsPanel} />
    <Console style={s.console} />
  </div>
);

export default App;
