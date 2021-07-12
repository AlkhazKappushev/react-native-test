const initialState = {
  events: [],
  updateButtonActive: false,
  polling: false,
  fetching: false,
  error: null,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_POLLING': {
      return {
        ...state, polling: true,
      };
    }
    case 'STOP_POLLING': {
      return {
        ...state, polling: false,
      };
    }
    case 'GET_EVENTS_SUCCESS': {
      return {
        ...state, events: action.data.data, updateButtonActive: false,
      };
    }
    case 'GET_EVENTS_FAILED': {
      return {
        ...state, error: action.error,
      };
    }
    case 'SET_ACTIVE_UPDATE_BUTTON': {
      return {
        ...state, updateButtonActive: true,
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
