import { HYDRATE } from 'eslint-config-next';

const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpdata: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    }
};

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data, 
    }
}
export const logoutAction = (data) => {
    return {
        type: 'LOG_OUT',
        data, 
    }
}
//action creator
const changeNickname = (data) => {
    return {
    type: 'CHANGE_NICKNAME',
    data,
    }
};
changeNickname('boogicho');
store.dispatch(changeNickname('mignty tak'))



//(이전상태, 액션) => 다음 상태 
export default function rootReducer(state = initialState, action){
    switch(action.type) {
        case HYDRATE:
            
            return { ...state, ...action.payload};
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                }
            };
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                }
            };
            default:
                return state;
    }
}