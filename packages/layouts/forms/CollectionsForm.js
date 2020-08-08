import { collectionActions, createItem, updateItem } from '@bpgen/services'

import React, { useState } from 'react'
import Form from '@rjsf/material-ui'
import { useDispatch } from 'react-redux'
import { useAuth } from '../hooks/useAuth'
import { useCollections } from '../hooks/useCollections'
import AceWidget from '../components/AceWidget'

const CollectionsForm = ({ navigate, id }) => {
  useAuth(navigate)
  const { selectedCollection } = useCollections(id)
  const [formState, setFormState] = useState(selectedCollection)
  const dispatch = useDispatch()

  const AceWidgetWrapper = props => {
    const {
      schema: { title },
      id,
      onChange,
    } = props
    return (
      <AceWidget
        title={title}
        id={id}
        formState={formState}
        onChange={onChange}
      />
    )
  }

  const widgets = {
    aceWidget: AceWidgetWrapper,
  }

  const schema = {
    type: 'object',
    properties: {
      _id: { type: 'string', title: 'Id' },
      title: { type: 'string', title: 'Name' },
      description: { type: 'string', title: 'Description' },
      searchFields: { type: 'string', title: 'searchFields' },
      jfSchema: { type: 'string', title: 'Schema' },
      jfUiSchema: { type: 'string', title: 'UISchema' },
    },
  }

  const uiSchema = {
    _id: { 'ui:widget': 'hidden' },
    jfSchema: {
      'ui:widget': 'aceWidget',
      'ui:options': {
        rows: 15,
      },
    },
    jfUiSchema: {
      'ui:widget': 'aceWidget',
      'ui:options': {
        rows: 15,
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
    <div>
      <Button
        onClick={() => navigate(`/list`)}
        component='button'
        color='secondary'
      >
        Back
      </Button>
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
    </div>
  )
}

export default CollectionsForm
