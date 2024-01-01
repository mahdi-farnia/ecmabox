import StarterView from './components/StarterView';
import TargetsPanel from './components/TargetsPanel';
import Console from './components/Console';
import * as stylex from '@stylexjs/stylex';

const s = stylex.create({
  base: {
    display: 'flex'
  },
  vstack: {
    flexDirection: 'column',
    height: '100%'
  },
  hstack: {
    alignItems: 'stretch',
    flexDirection: 'row',
    flex: 1
  }
});

const App: React.FC = () => (
  <div {...stylex.props(s.base, s.vstack)}>
    <div {...stylex.props(s.base, s.hstack)}>
      <StarterView />
      <TargetsPanel />
    </div>
    <Console />
  </div>
);

export default App;
