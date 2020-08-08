import { createSlice } from '@reduxjs/toolkit'
import * as helper from './helper'
import * as selectors from './selectors'

const codeGenService = createSlice({
  name: 'codegen',
  initialState: {
    code: [],
  },
  reducers: {
    setCode: (state, action) => {
      state.code = action.payload
    },
    generateCode: () => {},
  },
})

const { actions, reducer } = codeGenService
export const { generateCode, setCode } = actions
export { reducer as codeGenServiceReducer }
export { selectors as codeGenSelectors }
export { helper as codeGenHelper }
