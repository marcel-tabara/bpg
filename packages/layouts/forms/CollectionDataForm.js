import {
  collectionActions,
  createItem,
  setError,
  updateItem,
} from '@bpgen/services'
import Button from '@material-ui/core/Button'
import * as _ from 'lodash'
import get from 'lodash/get'
import React, { useState } from 'react'
import Form from '@rjsf/material-ui'
import { useDispatch } from 'react-redux'
import { useAuth } from '../hooks/useAuth'
import AceWidget from '../components/AceWidget'
import { useCollections } from '../hooks/useCollections'

const CollectionDataForm = (props) => {
  const { id, navigate, el } = props
  const { user } = useAuth(navigate)
  const dispatch = useDispatch()
  const goToDetails = () => navigate(`/data/${id}`)

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
  } = useCollections(id, el)
  const { jfSchema, jfUiSchema } = selectedCollection
  const getSelectedElement = get(props, 'location.state.row', selectedElement)
  const [formState, setFormState] = useState(getSelectedElement)

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
    formState,
  }

  let schema = {}
  let uiSchema = {}

  const AceWidgetWrapper = (props) => {
    const {
      schema: { title },
      onChange,
      value,
    } = props
    const onValueChane = (e) => onChange(e)

    return <AceWidget title={title} onChange={onValueChane} value={value} />
  }

  const widgets = {
    aceWidget: AceWidgetWrapper,
  }

  try {
    schema =
      new Function('_', 'allCollections', jfSchema)(_, allCollections) || {}
    uiSchema =
      new Function('_', 'allCollections', jfUiSchema)(_, allCollections) || {}
  } catch (error) {
    dispatch(setError(error.message))
  }

  const onSubmit = ({ formData }) => {
    const newCollection = {
      data: { ...formData, uid: user._id },
      _id: el && el !== 'new' ? el : null,
    }

    el !== 'new'
      ? dispatch(
          updateItem({ type: selectedCollection.title, data: newCollection })
        )
      : dispatch(
          createItem({ type: selectedCollection.title, data: newCollection })
        )
    dispatch(
      collectionActions.getCollection({
        type: selectedCollection.title,
      })
    )
    navigate(`/data/${id}`)
  }

  const onChange = ({ formData }) => setFormState(formData)

  return (
    <div className="wrapper">
      <Button onClick={goToDetails} color="primary" variant="outlined">
        Back
      </Button>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={onSubmit}
        formData={formState}
        widgets={widgets}
        //onChange={onChange}
      >
        <div className="padd_top_bott">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default CollectionDataForm
