import { createSlice } from '@reduxjs/toolkit'
import * as selectors from './selectors'

const loginService = createSlice({
  name: 'login',
  initialState: {
    authenticated: false,
    user: {},
  },
  reducers: {
    signin: () => {},
    register: () => {},
    authenticate: (state, action) => {
      state.authenticated = action.payload.authenticated
      state.user = action.payload.user
    },
  },
})

const { actions, reducer } = loginService
export const { signin, register, authenticate } = actions
export { reducer as loginServiceReducer }
export { selectors as loginSelectors }
