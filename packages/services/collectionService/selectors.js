import { createSelector } from '@reduxjs/toolkit'

const collections = (state) => state.collectionServiceReducer.collections
const components = (state) => state.collectionServiceReducer.components
const technos = (state) => state.collectionServiceReducer.technos
const providers = (state) => state.collectionServiceReducer.providers
const projects = (state) => state.collectionServiceReducer.projects
const proptypes = (state) => state.collectionServiceReducer.proptypes
const templates = (state) => state.collectionServiceReducer.templates
const collectionTree = (state) => state.collectionServiceReducer.collectionTree

export const collectionSelector = createSelector(collections, (items) => items)

export const technosSelector = createSelector(technos, (items) => items)

export const componentsSelector = createSelector(components, (items) => items)

export const providersSelector = createSelector(providers, (items) => items)

export const projectsSelector = createSelector(projects, (items) => items)

export const proptypesSelector = createSelector(proptypes, (items) => items)

export const templatesSelector = createSelector(templates, (items) => items)

export const collectionTreeSelector = createSelector(
  collectionTree,
  (items) => items
)

export const providerByIdSelector = createSelector(
  [providers],
  (res) => (id) => res.filter((e) => e.title === id)
)
