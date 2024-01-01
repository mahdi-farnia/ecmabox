import * as stylex from '@stylexjs/stylex';

const s = stylex.create({
  container: {
    flex: 1
  }
});

const StarterView: React.FC = () => {
  return <div {...stylex.props(s.container)}>StarterView</div>;
};

export default StarterView;
