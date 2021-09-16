export const defaultReducer = (state, action) => {
    const message = action.message ? action.message : state.message
    switch (action.type) {
        case 'PROCESSING':
            return {
                ...state,
                loading: true,
                error: false,
                uri: null,
                message: message
            }
        case 'SUCCESS':
            return {
                ...state,
                loading: false,
                error: false,
                uri: action.payload,
                message: message
            }
        case 'INFO':
            return {
                ...state,
                message: message
            }
        case 'ERROR':
            return {
                ...state,
                loading: false,
                error: true,
                uri: null,
                message: message
            }
        default:
            throw new Error()
    }
}