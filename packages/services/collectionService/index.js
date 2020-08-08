import { createSlice } from '@reduxjs/toolkit'
import * as selectors from './selectors'

const collectionService = createSlice({
  name: 'collection',
  initialState: {
    projects: [],
    technos: [],
    proptypes: [],
    components: [],
    templates: [],
    providers: [],
    collectionTree: [],
    collections: [],
  },
  reducers: {
    getCollections: () => {},
    getCollection: () => {},
    setCollection: (state, action) => {
      state[action.payload.type] = action.payload.data
    },
    setCollections: (state, action) => {
      state.collections = action.payload
    },
    setCollectionTree: (state, action) => {
      state.collectionTree = action.payload
    },
    getCollectionTree: () => {},
    importCollectionData: () => {},
  },
})

const { actions, reducer } = collectionService

export { actions as collectionActions }
export { reducer as collectionServiceReducer }
export { selectors as collectionSelectors }
