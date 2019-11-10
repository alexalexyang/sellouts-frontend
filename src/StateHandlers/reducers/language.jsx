
export const language = (state = "", action) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            console.log("Setting language: ", action.payload)
            return action.payload

        default:
            return state;
    }
}

export const languages = (state = [], action) => {
    switch (action.type) {
        case 'SET_LANGUAGES':
            console.log("Saving languages: ", action.payload)
            return action.payload

        default:
            return state;
    }
}