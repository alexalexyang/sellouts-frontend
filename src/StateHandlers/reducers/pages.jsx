
export const pages = (state = [], action) => {
    switch (action.type) {
        case 'GET_PAGES':
            return action.payload

        default:
            return state;
    }
}
