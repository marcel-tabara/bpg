import {
  generateCode,
  removeModal,
  setCustomForms,
  setError,
} from '@bpgen/services'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import * as _ from 'lodash'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import React from 'react'
import Form from '@rjsf/material-ui'
import { useDispatch } from 'react-redux'
import { useCollections } from '../hooks/useCollections'
import { useCustomForms } from '../hooks/useCustomForms'
import { useModals } from '../hooks/useModals'
import { useProjects } from '../hooks/useProjects'

const CustomForm = () => {
  const dispatch = useDispatch()
  const { modals } = useModals()
  const { customForms } = useCustomForms()
  const currentModal = modals[modals.length - 1]
  const { currentProject } = useProjects()

  const {
    collections,
    components,
    technos,
    projects,
    providers,
    templates,
    proptypes,
    selectedCollection,
    selectedElement,
    technosEnums,
    technosEnumNames,
    proptypesEnums,
    proptypesEnumNames,
    providersEnums,
    providersEnumNames,
  } = useCollections()

  const allCollections = {
    collections,
    components,
    technos,
    projects,
    providers,
    templates,
    proptypes,
    selectedCollection,
    selectedElement,
    technosEnums,
    technosEnumNames,
    proptypesEnums,
    proptypesEnumNames,
    providersEnums,
    providersEnumNames,
  }

  const getTemplateForm = () => {
    let templateForm = {}
    get(currentProject, 'currentTemplate.templateFiles', []).map(e => {
      get(e, 'fileForms', []).filter(form => {
        if (form.formName === currentModal.type) {
          templateForm = form
        }
      })
    })
    return templateForm
  }

  const currentForm = getTemplateForm()

  if (isEmpty(get(currentForm, 'formSchema', {}))) {
    dispatch(setError('Missing schema'))
    return null
  }
  let formData = customForms[currentForm.formName] || {}

  let schema = {}
  let uiSchema = {}

  try {
    schema =
      new Function(
        '_',
        'allCollections',
        'currentProject',
        currentForm.formSchema
      )(_, allCollections, currentProject) || {}
    uiSchema =
      new Function('_', 'allCollections', currentForm.formUiSchema)(
        _,
        allCollections
      ) || {}
    if (_.has(currentForm, 'formData')) {
      formData =
        new Function(
          '_',
          'collections',
          'currentProject',
          currentForm.formData
        )(_, allCollections, currentProject) || {}
    }
  } catch (error) {
    dispatch(setError(error.message))
  }

  const onSubmit = ({ formData }) => {
    dispatch(removeModal())
    const newForms = {
      ...customForms,
      [currentForm.formName]: formData,
    }
    dispatch(setCustomForms(newForms))

    dispatch(
      generateCode({
        currentProject: { ...currentProject, customForms: newForms },
      })
    )
  }

  return (
    <Container maxWidth='md'>
      <Form
        schema={schema}
        onSubmit={onSubmit}
        formData={formData}
        uiSchema={uiSchema}
      >
        <div className='padd_top_bott'>
          <Button variant='contained' color='primary' type='submit'>
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default CustomForm
