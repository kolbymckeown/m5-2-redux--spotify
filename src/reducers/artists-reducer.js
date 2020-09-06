// const initialState = {
//     currentArtist: null,
//     status: 'loading',
//     error: null,
// }

const initialState = {
    token: null,
    status: 'idle',
};

export default function artistsReducer(state = initialState, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}