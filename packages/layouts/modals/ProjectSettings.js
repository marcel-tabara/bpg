import {
  removeModal,
  setAceTabs,
  setCurrentTab,
  setCurrentTemplate,
  setProjectSettings,
} from '@bpgen/services'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import React, { useState } from 'react'
import Form from '@rjsf/material-ui'
import { useDispatch } from 'react-redux'
import { useCollections } from '../hooks/useCollections'
import { useProjects } from '../hooks/useProjects'

const sortPredicate = (a, b) => (a.title > b.title ? 1 : -1)

const ProjectSettings = () => {
  const dispatch = useDispatch()
  const { projectSettings = { techno: '', title: '', template: '' } } =
    useProjects()
  const { templates = [], technos = [] } = useCollections()
  const [formState, setFormState] = useState(projectSettings)

  const getFilteredTemplates = () => {
    const filteredTemplates = templates
      .filter((e) => e.data.isActive)
      .filter((e) => e.data.techno.toLowerCase().includes(formState.techno))
    return !isEmpty(filteredTemplates)
      ? {
          type: 'string',
          anyOf: filteredTemplates.map((e) => {
            return {
              type: 'string',
              title: e.data.title,
              enum: [e._id],
            }
          }),
        }
      : {}
  }

  const getDefaultTemplates = () =>
    isEmpty(templates)
      ? {}
      : {
          type: 'string',
          anyOf: templates
            .filter((e) => e.data.isActive)
            .map((e) => {
              return {
                type: 'string',
                title: e.data.title,
                enum: [e._id],
              }
            })
            .sort(sortPredicate),
        }
  const getTemplates = () => {
    return !isEmpty(formState.techno)
      ? getFilteredTemplates()
      : getDefaultTemplates()
  }

  const getTechnos = () => {
    const existingTemplateTechnos = () =>
      templates.filter((e) => e.data.isActive).map((e) => e.data.techno)
    const allTechnoTemplates = existingTemplateTechnos()

    if (isEmpty(allTechnoTemplates)) return {}
    return {
      type: 'string',
      anyOf: technos
        .filter((e) => allTechnoTemplates.includes(e._id))
        .map((e) => {
          return {
            type: 'string',
            title: e.data.title,
            enum: [e._id],
          }
        })
        .sort(sortPredicate),
    }
  }

  const schema = {
    type: 'object',
    required: ['title', 'template'],
    properties: {
      title: {
        type: 'string',
        title: 'Project Title',
        default: get(projectSettings, 'title', ''),
      },
      techno: getTechnos(),
      template: getTemplates(),
    },
  }

  const uiSchema = {
    template: {
      'ui:placeholder': 'Choose a template',
    },
    techno: {
      'ui:placeholder': 'Choose a techno',
    },
  }

  const onSubmit = ({ formData }) => {
    const currentTemplate = get(
      templates.find((e) => e._id === formData.template),
      'data',
      []
    )
    const aceTabs = get(currentTemplate, 'files', [])
      .filter((file) => file.fileIsActive)
      .map((file) => file.fileName)

    dispatch(setProjectSettings(formData))
    dispatch(setCurrentTemplate(currentTemplate))
    dispatch(setAceTabs(aceTabs))
    dispatch(setCurrentTab(aceTabs[0]))

    dispatch(removeModal())
  }

  return (
    <Container maxWidth="md">
      <div>
        <Form
          schema={schema}
          onSubmit={onSubmit}
          onChange={({ formData }) => setFormState(formData)}
          formData={formState}
          uiSchema={uiSchema}
        >
          <div className="padd_top_bott">
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  )
}

export default ProjectSettings
