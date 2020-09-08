import { collectionActions, createItem, updateItem } from '@bpgen/services'

import React, { useState } from 'react'
import Form from '@rjsf/material-ui'
import { useDispatch } from 'react-redux'
import { useAuth } from '../hooks/useAuth'
import { useCollections } from '../hooks/useCollections'
import AceWidget from '../components/AceWidget'
import Button from '@material-ui/core/Button'

const CollectionsForm = ({ navigate, id }) => {
  useAuth(navigate)
  const { selectedCollection } = useCollections(id)
  const [formState, setFormState] = useState(selectedCollection)
  const dispatch = useDispatch()

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
    const data = { ...formData }
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
