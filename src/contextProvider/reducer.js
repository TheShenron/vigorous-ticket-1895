export const reducer = (state , action)=>{

    switch (action.type){
        case "START_LOGIN" : 
            return {
                ...state,
                loading : true
            }

        case "LOGIN_SUCCESS" : 
            return {
                ...state,
                isAuth : true,
                token : action.payload,
                loading : false
            }

        case "LOGIN_ERROR" : 
            return {
                ...state,
                loading : false,
                error : action.payload
            }

        default :
            return state
    }

}