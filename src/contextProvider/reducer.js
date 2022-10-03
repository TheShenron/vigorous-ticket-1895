export const reducer = (state, action) => {

    switch (action.type) {
        case "START_LOGIN":
            return {
                ...state,
                loading: true
            }

        case "LOGIN_SUCCESS":
            return {
                ...state,
                isAuth: true,
                token: action.payload.token,
                user: { ...state.user, avatar: action.payload.avatar },
                loading: false
            }

        case "LOGIN_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case "LOGOUT":
            return {
                user: {
                    avatar: ""
                },
                isAuth: false,
                token: null,
                loading: false,
                error: ""
            }

        default:
            return state
    }

}