import { createReducer }     from '../utils';
import { LOG_IN }            from 'constants/header';

const initialState = {};
export default createReducer(initialState, {
  [LOG_IN] : (state) => {...initialState},
});
