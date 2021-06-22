import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import createSagaWatcher from 'saga-watcher'
import rootReducer from './reducer'
import rootSaga from './saga'

export default function configureAppStore(preloadedState) {
  const isDev = process.env.NODE_ENV === 'development'
  const sagaMiddleware = createSagaMiddleware({
    sagaMonitor: isDev ? createSagaWatcher() : undefined,
  })

  const store = configureStore({
    reducer: rootReducer,
    middleware: isDev ? [(logger, sagaMiddleware)] : [sagaMiddleware],
    preloadedState,
  })

  sagaMiddleware.run(rootSaga)

  return store
}
