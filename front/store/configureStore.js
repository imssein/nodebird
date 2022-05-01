import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-Extension';
import reducer from '../reducers';

const configureStore1 = () => {
  const middlewares = [];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))

  const store = configureStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore1, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper; 