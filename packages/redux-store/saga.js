import backendSaga from '@bpgen/services/backendService/saga'
import codeGenSaga from '@bpgen/services/codeGenService/saga'
import collectionSaga from '@bpgen/services/collectionService/saga'
import loginSaga from '@bpgen/services/loginService/saga'
import projectSaga from '@bpgen/services/projectService/saga'
import { all, fork } from 'redux-saga/effects'

export default function* sagas() {
  yield all(
    [backendSaga, collectionSaga, projectSaga, codeGenSaga, loginSaga].map(
      (saga) => fork(saga)
    )
  )
}
