import {createWrapper} from 'next-redux-wrapper';
import {createStore} from 'redux';
import reducer from '../reducers';

export default function configureStore(){
    const store = createStore(reducer, enhancer);
    //디스패치하는 순간 리듀서로 전달됨. 
    store.dispatch({
        type:'CHANGE_NICKNAME',
        data: 'boogicho',
    })
    return store;
};
//옵션 객체
const wrapper = createWrapper(configureStore, 
    {debug: process.env.NODE_ENV === 'development'}); 



