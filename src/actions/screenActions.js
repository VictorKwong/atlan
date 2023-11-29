import { SET_CURRENT_SCREEN } from './types';

export const setCurrentScreen = (screen) => {
  return {
    type: SET_CURRENT_SCREEN,
    screen: screen,
  };
};