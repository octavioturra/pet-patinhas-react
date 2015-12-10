import { createReducer }     from '../utils';
import { FETCH_ANIMALS_START, FETCH_ANIMALS_DONE, FETCH_ANIMALS } from 'constants/counter';

const initialState = {
    fetching: false,
    animals: []
};
export default createReducer(initialState, {
  [FETCH_ANIMALS_START] : (state) => {...initialState, fetching: true},
  [FETCH_ANIMALS_DONE] : (state, payload) => {...initialState, fetching: false, animals: payload},
  [FETCH_ANIMALS] : (state) => {...initialState}
});
