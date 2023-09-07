const defaultState = {
  todo: [
    { id: 1, title: "Hello" },
    { id: 2, title: "By" },
  ],
};

const ADD_TASK = "ADD_TASK";
const EDIT_TODO = "EDIT_TODO";
const DELETE_TODO = "DELETE_TODO";

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return { ...state, todo: [...state.todo, action.payload] };
    }
    case EDIT_TODO: {
      return {
        todo: state.todo.map((task) => {
          if (task.id === action.payload.id) {
            return { ...task, title: action.payload.title };
          }
          return task;
        }),
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todo: state.todo.filter((task) => task.id !== action.payload),
      };
    }

    default: {
      return state;
    }
  }
};

export const customAddTask = (payload) => ({ type: ADD_TASK, payload });
export const customEditTask = (payload) => ({ type: EDIT_TODO, payload });
export const customDeleteTask = (payload) => ({ type: DELETE_TODO, payload });
