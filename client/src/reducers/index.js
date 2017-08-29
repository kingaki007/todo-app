import {combineReducers} from 'redux';
import TasksReducer from './reducer_tasks';
import ActiveTask from './reducer_active_task';

const rootReducer = combineReducers({
    tasks : TasksReducer,
    activeTask : ActiveTask
})

export default rootReducer;