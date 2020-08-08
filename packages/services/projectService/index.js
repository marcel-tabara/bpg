import { createSlice } from '@reduxjs/toolkit'
import * as helper from './helper'
import * as selectors from './selectors'

const init = {
  projectTree: [],
  projectSettings: {},
  customForms: [],
  aceTabs: [],
  currentTab: '',
}

const projectService = createSlice({
  name: 'project',
  initialState: {
    currentProject: init,
    projects: [],
    error: '',
    info: '',
  },
  reducers: {
    setCurrentProject: (state, action) => {
      state.currentProject = action.payload
    },
    setProjects: (state, action) => {
      state.projects = action.payload
    },
    setProjectSettings: (state, action) => {
      state.currentProject.projectSettings = action.payload
    },
    setProjectTree: (state, action) => {
      state.currentProject.projectTree = action.payload
    },
    setCustomForms: (state, action) => {
      state.currentProject.customForms = action.payload
    },
    setCurrentTemplate: (state, action) => {
      state.currentProject.currentTemplate = action.payload
    },
    setAceTabs: (state, action) => {
      state.currentProject.aceTabs = action.payload
    },
    setCurrentTab: (state, action) => {
      state.currentProject.currentTab = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setInfo: (state, action) => {
      state.info = action.payload
    },
    resetAlert: state => {
      state.info = ''
      state.error = ''
    },
    exportFiles: () => {},
    initCurrentProject: state => {
      state.currentProject = init
    },
  },
})

const { actions, reducer } = projectService
export const {
  setCurrentProject,
  setProjects,
  setProjectSettings,
  setProjectTree,
  setCustomForms,
  setCurrentTemplate,
  setAceTabs,
  setCurrentTab,
  setError,
  setInfo,
  resetAlert,
  exportFiles,
  initCurrentProject,
} = actions
export { reducer as projectServiceReducer }
export { selectors as projectSelectors }
export { helper as projectHelper }
