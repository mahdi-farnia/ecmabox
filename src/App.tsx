import * as stylex from '@stylexjs/stylex';

const s = stylex.create({
  test: {
    fontSize: 20,
    color: 'red'
  }
});

function App() {
  return (
    <>
      <p {...stylex.props(s.test)}>Hello World</p>
    </>
  );
}

export default App;
