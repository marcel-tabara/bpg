import { authenticate, collectionActions, setError } from '@bpgen/services'
import axios from 'axios'
import { put, takeLatest } from 'redux-saga/effects'

const callBackend = (type, data) => {
  return axios.post(`${process.env.API_URL}/${type}`, { data })
}

export function* watchRegister(action) {
  try {
    const res = yield callBackend('register', action.payload)
    if (!res.data.success) {
      yield put(setError(res.data.error.message))
    } else {
      yield put(authenticate({ authenticated: true, user: res.data.user }))
    }
  } catch (error) {
    yield put(setError(error.message))
  }
}

export function* watchSignin(action) {
  try {
    const res = yield callBackend('authenticate', action.payload)
    if (!res.data.success) {
      yield put(setError(res.data.error.message))
    } else {
      yield put(authenticate({ authenticated: true, user: res.data.user }))

      yield put(collectionActions.getCollections())
      yield put(
        collectionActions.getCollection({
          type: 'components',
          uid: res.data.user._id,
        })
      )
      yield put(
        collectionActions.getCollection({
          type: 'templates',
          uid: res.data.user._id,
        })
      )
      yield put(
        collectionActions.getCollection({
          type: 'technos',
          uid: res.data.user._id,
        })
      )
      yield put(
        collectionActions.getCollection({
          type: 'providers',
          uid: res.data.user._id,
        })
      )
      yield put(
        collectionActions.getCollection({
          type: 'projects',
          uid: res.data.user._id,
        })
      )
      yield put(
        collectionActions.getCollection({
          type: 'proptypes',
          uid: res.data.user._id,
        })
      )
    }
  } catch (error) {
    yield put(setError(error.message))
  }
}

export default function* rootSaga() {
  yield takeLatest('login/register', watchRegister)
  yield takeLatest('login/signin', watchSignin)
}
