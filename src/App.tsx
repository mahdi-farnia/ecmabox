import StarterView from './components/StarterView';
import TargetsPanel from './components/TargetsPanel';
import Console from './components/Console';

const App: React.FC = () => (
  <div>
    <div>
      <StarterView />
      <TargetsPanel />
    </div>
    <Console />
  </div>
);

export default App;
