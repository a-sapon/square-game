import Type from './types';
const blue = 'rgb(0, 102, 255)';
const red = 'rgb(255, 26, 26)';
const green = 'rgb(0, 204, 0)';

const INIT_STATE = {
  fieldBlocksNum: 0,
  delay: 0
};

export const mainReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case Type.GET_GAME_MODE:
      return {
        ...state,
        fieldBlocksNum: action.mode * action.mode
      };
    case Type.GET_GAME_DELAY:
      return {
        ...state,
        delay: action.delay
      };
    default:
      return state;
  }
};

export const blocksReducer = (state = [], action) => {
  const targetObj = state.find(obj => obj.id === action.id);
  switch (action.type) {
    case Type.FILL_ARRAY:
      return action.arr;
    case Type.MAKE_BLUE:
      targetObj.bgColor = blue;
      return Object.assign([], state, { [action.id]: targetObj });
    case Type.MAKE_RED:
      targetObj.bgColor = red;
      return Object.assign([], state, { [action.id]: targetObj });
    case Type.MAKE_GREEN:
      targetObj.bgColor = green;
      return Object.assign([], state, { [action.id]: targetObj });
    default:
      return state;
  }
};

const INIT_USER = {
  name: '',
  points: 0,
  isWinner: false
};

export const userReducer = (state = INIT_USER, action) => {
  switch (action.type) {
    case Type.SET_USERNAME:
      return { ...state, name: action.name };
    case Type.ADD_USER_POINT:
      return { ...state, points: state.points + 1 };
    case Type.USER_WINS:
      return { ...state, isWinner: true };
    default:
      return state;
  }
};

const INIT_PC = {
  name: 'Computer',
  points: 0,
  isWinner: false
};

export const pcReducer = (state = INIT_PC, action) => {
  switch (action.type) {
    case Type.ADD_PC_POINT:
      return { ...state, points: state.points + 1 };
    case Type.PC_WINS:
      return { ...state, isWinner: true };
    default:
      return state;
  }
};
