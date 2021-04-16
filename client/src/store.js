import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from 'src/reducers/index';
import { rootSaga } from 'src/sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(
      sagaMiddleware,
      createLogger()
    ),
  );
  
  sagaMiddleware.run(rootSaga);
  
  export default store;