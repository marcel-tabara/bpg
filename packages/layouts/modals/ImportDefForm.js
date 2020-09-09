import { collectionActions, createItem, updateItem } from '@bpgen/services'

import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Form from '@rjsf/material-ui'
import { useDispatch } from 'react-redux'
import { useAuth } from '../hooks/useAuth'
import { useCollections } from '../hooks/useCollections'
import AceWidget from '../components/AceWidget'
import Button from '@material-ui/core/Button'

const ImportDefForm = ({ navigate, id }) => {
  useAuth(navigate)
  const [formState, setFormState] = useState(selectedCollection)
  const dispatch = useDispatch()

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

  const AceWidgetWrapper = props => {
    const {
      schema: { title },
      onChange,
      value,
    } = props
    const onValueChane = e => onChange(e)

    return <AceWidget title={title} onChange={onValueChane} value={value} />
  }

  const widgets = {
    aceWidget: AceWidgetWrapper,
  }

  const schema = {
    type: 'object',
    required: ['title', 'provider', 'techno'],
    properties: {
      provider: {
        type: 'string',
        name: 'Provider',
        enum: providersEnums,
        enumNames: providersEnumNames,
      },
      componentImport: {
        type: 'string',
        name: 'Import Path',
      },
      techno: {
        type: 'string',
        name: 'Techno',
        enum: technosEnums,
        enumNames: technosEnumNames,
      },
      propType: {
        type: 'string',
        name: 'PropType',
        enum: proptypesEnums,
        enumNames: proptypesEnumNames,
      },
      isPublic: { type: 'boolean', name: 'isPublic' },
      isActive: { type: 'boolean', name: 'isActive' },
      isDefault: { type: 'boolean', name: 'isDefault' },
      def: { type: 'string', title: 'Definition' },
    },
  }

  const uiSchema = {
    def: {
      'ui:widget': 'aceWidget',
      'ui:options': {
        rows: 35,
      },
    },
  }

  const onSubmit = ({ formData }) => {
    const data = { ...formData, jfSchema, jfUiSchema }
    const type = 'collections'
    formData._id
      ? dispatch(updateItem({ type, data }))
      : dispatch(createItem({ type, data }))
    dispatch(collectionActions.getCollections())
    navigate('/list')
  }

  return (
    <Container maxWidth='md'>
      <Form
        schema={schema}
        onSubmit={onSubmit}
        formData={formState}
        uiSchema={uiSchema}
        widgets={widgets}
        onChange={({ formData }) => setFormState(formData)}
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

export default ImportDefForm
