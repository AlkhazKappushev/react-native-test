const initialState = {
  events: [],
  fetching: false,
  error: null,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default: {
      return {
        ...state,
      };
    }
  }
};

export default eventsReducer;
