import generateId from '../../utils/generateId';
import {
  CLEAN_ALL, EDIT, INSERT_TASK, TASK_REMOVE, TASK_SELECTED, UPDATE_TASK,
} from '../actions/taskActions';

const INITIAL_STATE = {
  tasks: [],
  taskSelected: null,
  edit: false,
  taskText: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INSERT_TASK:
      return { ...state, tasks: [...state.tasks, { id: generateId(), task: action.state }] };

    case TASK_SELECTED:
      return { ...state, taskSelected: action.state.id, taskText: action.state.task };

    case EDIT:
      return { ...state, edit: action.state };

    case TASK_REMOVE:
      return { ...state, tasks: state.tasks.filter(({ id }) => state.taskSelected !== id) };

    case CLEAN_ALL:
      return INITIAL_STATE;

    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => (task.id === action.state.id ? action.state : task)),
      };

    default: return state;
  }
};

export default reducer;
