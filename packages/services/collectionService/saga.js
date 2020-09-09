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

const callBackend = (type, data, token) => {
  return axios.post(
    `${process.env.API_URL}/${type}`,
    { data },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  )
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
  const token = (yield select()).loginServiceReducer.user.token
  try {
    const res = yield callBackend(
      'read',
      {
        type: payload.type,
      },
      token
    )

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
      })
    )
  }
}

export default function* rootSaga() {
  yield takeEvery('collection/getCollection', watchGetCollection)
  yield takeLatest('collection/getCollections', watchGetCollections)
  yield takeLatest('collection/importCollectionData', watchImportCollectionData)
}
