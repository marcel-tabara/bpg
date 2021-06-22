import { createSelector } from '@reduxjs/toolkit'

const authenticated = (state) => state.loginServiceReducer.authenticated
const user = (state) => state.loginServiceReducer.user
const admin = (state) => state.loginServiceReducer.user.isAdmin

export const loginSelector = createSelector(authenticated, (items) => items)
export const userSelector = createSelector(user, (items) => items)
export const adminSelector = createSelector(admin, (items) => items)
