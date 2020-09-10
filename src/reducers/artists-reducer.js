// const initialState = {
//     currentArtist: null,
//     status: 'loading',
//     error: null,
// }

const initialState = {
  currentArtist: null,
  status: "idle",
  
};

export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ARTIST_INFO": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_ARTIST_INFO": {
      return {
        ...state,
        currentArtist: action.profile,
        status: "idle",
      };
    }
    case "RECEIVE_ARTIST_INFO_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }
    default: {
      return state;
    }
  }
}
