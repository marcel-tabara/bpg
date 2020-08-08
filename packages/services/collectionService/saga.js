import { collectionActions, createItem, setError } from '@bpgen/services'
import axios from 'axios'
import isEmpty from 'lodash/isEmpty'
import {
  all,
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects'

const callBackend = (type, data) => {
  return axios.post(`${process.env.API_URL}/${type}`, { data })
}

export function* watchGetCollections() {
  try {
    const res = yield callBackend('read', { type: 'collections' })

    yield put(collectionActions.setCollections(res.data))
  } catch (error) {
    yield put(setError(error.message))
  }
}

export function* watchGetCollection({ payload }) {
  try {
    const res = yield callBackend('read', {
      type: payload.type,
      uid: payload.uid,
    })

    yield put(
      collectionActions.setCollection({ type: payload.type, data: res.data })
    )
  } catch (error) {
    yield put(setError(error.message))
  }
}

export function* setData({ importType, data }) {
  data._id
    ? yield put(createItem({ type: importType, data }))
    : yield put(createItem({ type: importType, data: { data } }))
}

export function* watchImportCollectionData({ payload }) {
  const { data, importType } = payload
  const uid = (yield select()).loginServiceReducer.user._id

  if (!isEmpty(data)) {
    yield all(
      data.map(data =>
        call(setData, {
          data,
          importType,
        })
      )
    )
    yield put(
      collectionActions.getCollection({
        type: importType,
        uid,
      })
    )
  }
}

export default function* rootSaga() {
  yield takeEvery('collection/getCollection', watchGetCollection)
  yield takeLatest('collection/getCollections', watchGetCollections)
  yield takeLatest('collection/importCollectionData', watchImportCollectionData)
}
