import * as stylex from '@stylexjs/stylex';

const row = stylex.create({
  resizer: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    cursor: 'row-resize',
    padding: '2px 0'
  },
  resizerUI: {
    width: '100%',
    height: 1,
    backgroundColor: '#000'
  }
});

const column = stylex.create({
  resizer: {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    cursor: 'col-resize',
    padding: '0 2px'
  },
  resizerUI: {
    width: 1,
    height: '100%',
    backgroundColor: '#000'
  }
});

export const shared = stylex.create({
  pseudo: {
    '::after': {
      content: '',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      backgroundColor: 'transparent',
      pointerEvents: 'none',
      transition: 'background-color 0.3s ease'
    },
    ':hover::after': {
      backgroundColor: '#44acff'
    }
  }
});

const orientations = { row, column };

export default orientations;
