import { combineReducers } from 'redux'; // 다수의 리듀서를 하나로 묶는다.
import counter from './counter';
import ui from './ui';

const reducers = combineReducers({
    counter, ui
});

export default reducers;