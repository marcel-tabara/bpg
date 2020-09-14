import Ace from '@bpgen/layouts/components/Ace'
import CustomNavBar from '@bpgen/layouts/components/CustomNavBar'
import Search from '@bpgen/layouts/components/Search'
import {
  addModal,
  collectionActions,
  createItem,
  exportFiles,
  initCurrentProject,
  setCode,
  setInfo,
  updateItem,
} from '@bpgen/services'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import React from 'react'
import { useDispatch } from 'react-redux'
import SortTree from '../components/SortTree'
import { useCodeGen } from '../hooks/useCodeGen'
import { useProjects } from '../hooks/useProjects'
import { useProjectSettings } from '../hooks/useProjectSettings'
import { useAuth } from './../hooks/useAuth'

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 },
}))

const Editor = ({ id, navigate }) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const { authenticated, user } = useAuth(navigate, false)
  const { projectSettings } = useProjectSettings()
  const { currentProject, currentTemplate, currentTab, aceTabs } = useProjects()
  const { code } = useCodeGen()

  const onClick = () =>
    dispatch(addModal({ type: 'projectSettings', data: {} }))

  if (isEmpty(projectSettings)) {
    return (
      <div className='center'>
        <Button
          onClick={onClick}
          component='button'
          color='primary'
          variant='contained'
        >
          Settings
        </Button>
      </div>
    )
  }

  const isComponentTemplate = currentTemplate.templateIsComponent

  const saveProject = () => {
    const newProject = { ...currentProject }
    newProject.title = newProject.projectSettings.title
    newProject.uid = user._id

    Boolean(id)
      ? dispatch(
          updateItem({ type: 'projects', data: { data: newProject, _id: id } })
        )
      : dispatch(createItem({ type: 'projects', data: { data: newProject } }))

    dispatch(collectionActions.getCollection({ type: 'projects' }))
    dispatch(setInfo('Collection saved'))
  }

  const exportProjectFiles = () => {
    const data = {
      id: 'all',
      code,
      dest: projectSettings.destination,
    }
    dispatch(exportFiles({ data }))
  }

  const initProject = () => {
    dispatch(initCurrentProject({}))
    dispatch(setCode({}))
    navigate(`/editor`)
  }

  return (
    <div className={classes.root}>
      <CustomNavBar />
      <Grid container spacing={2}>
        {isComponentTemplate && (
          <Grid item md={6}>
            <div className='left'>
              <Search searchFields={['keyword', 'technos', 'providers']} />
            </div>
          </Grid>
        )}
        <Grid item md={isComponentTemplate ? 6 : 12}>
          <div className='right'>
            <ButtonGroup
              color='secondary'
              aria-label='outlined secondary button group'
            >
              <Button
                onClick={initProject}
                component='button'
                variant='outlined'
              >
                init
              </Button>
              {authenticated && (
                <Button
                  onClick={saveProject}
                  component='button'
                  variant='outlined'
                >
                  Save
                </Button>
              )}
              {get(currentProject, 'projectSettings.destination', false) && (
                <Button
                  onClick={exportProjectFiles}
                  component='button'
                  variant='outlined'
                >
                  Export
                </Button>
              )}
              <Button onClick={onClick} component='button' variant='outlined'>
                Settings
              </Button>
            </ButtonGroup>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        {isComponentTemplate && (
          <Grid item md={8} component='div'>
            <SortTree />
          </Grid>
        )}
        <Grid item md={isComponentTemplate ? 4 : 12} component='div'>
          <Ace code={code} currentTab={currentTab} aceTabs={aceTabs} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Editor
