import { addModal } from '@bpgen/services'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useProjects } from '../hooks/useProjects'
import '../styles.scss'

const CustomNavBar = () => {
  const dispatch = useDispatch()

  const { currentTemplate } = useProjects()
  if (isEmpty(currentTemplate)) return null

  const openModalForm = (e) =>
    dispatch(addModal({ type: e, data: currentTemplate }))

  const getButtons = (form) => {
    return (
      form.formIsActive && (
        <Button
          onClick={() => openModalForm(form.formName)}
          key={form.formName}
          name={form.formName}
          id={form.formName}
          component="button"
          variant="outlined"
        >
          {form.formName}
        </Button>
      )
    )
  }

  const getButtonGroup = () => {
    return (
      <ButtonGroup
        color="primary"
        aria-label="outlined primary button group"
        key="custom-nav-bar-button-group"
      >
        {getTemplateForms()}
      </ButtonGroup>
    )
  }

  const getTemplateForms = () =>
    get(currentTemplate, 'files', []).map((file) => {
      return get(file, 'fileForms', []).map((form) => getButtons(form))
    })

  return getButtonGroup()
}

export default CustomNavBar
