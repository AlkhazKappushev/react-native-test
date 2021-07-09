const initialState = {
  curerntEventId: null,
  events: [],
  fetching: false,
  error: null,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EVENTS': {
      return {
        ...state,
      };
    }
    case 'GET_EVENTS_SUCCESS': {
      return {
        ...state, events: action.data.data,
      };
    }
    case 'GET_EVENTS_FAILED': {
      return {
        ...state, error: action.error,
      };
    }
    case 'SET_CURRENT_EVENT': {
      return {
        ...state, curerntEventId: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default eventsReducer;
