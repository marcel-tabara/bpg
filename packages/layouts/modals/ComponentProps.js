import { generateCode, removeModal, setProjectTree } from '@bpgen/services'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import React from 'react'
import Form from '@rjsf/material-ui'
import { useDispatch } from 'react-redux'
import { changeNodeAtPath } from 'react-sortable-tree'
import { useCustomForms } from '../hooks/useCustomForms'
import { useModals } from '../hooks/useModals'
import { useProjects } from '../hooks/useProjects'

const getNodeKey = ({ treeIndex }) => treeIndex

const ComponentProps = (props) => {
  const dispatch = useDispatch()
  const { modals } = useModals()
  const { currentProject } = useProjects()
  const {
    data: { node, path },
  } = modals[modals.length - 1]

  const tree = currentProject.projectTree

  const uiSchema = { componentProps: {} }
  const schema = {
    type: 'object',
    properties: {},
  }
  const properties = schema.properties
  const propsInfo = get(node, 'componentProps', [])

  propsInfo.map((prop) => {
    const { title, propTypeVal, val, propTypeProp, description } = prop

    if (get(prop, 'propTypeProp', '').includes('boolean')) {
      const propEnum = ['true', 'false']

      properties[title] = {
        type: 'string',
        title: title,
        enum: propEnum,
        default: val,
        description: propTypeProp + ': ' + description,
      }

      uiSchema[title] = {
        'ui:placeholder': 'Select',
        'ui:options': {
          label: true,
        },
      }
    } else if (get(prop, 'propTypeProp', '').includes('enum')) {
      const propEnum = propTypeVal.replace(/'/g, '').split('|')

      properties[title] = {
        type: 'string',
        title: title,
        enum: propEnum,
        default: val,
        description: propTypeProp + ': ' + description,
      }

      uiSchema[title] = {
        'ui:placeholder': 'Select',
        'ui:options': {
          label: true,
        },
      }
    } else {
      properties[title] = {
        type: 'string',
        title: title,
        default: val,
        description: propTypeProp + ': ' + description,
      }
    }
  })

  const onSubmit = ({ formData }) => {
    const newProps = []

    propsInfo.map((e) => {
      newProps.push({ ...e, val: formData[e.title] })
    })

    const newNode = { ...node }
    newNode.componentProps = newProps
    const hasComponentPropsVals = newProps.filter((el) => el.val)
    newNode.hasComponentPropsVals = !isEmpty(hasComponentPropsVals)

    const newTree = changeNodeAtPath({
      treeData: tree,
      path,
      getNodeKey,
      newNode,
    })

    dispatch(setProjectTree(newTree))
    dispatch(generateCode({ currentProject }))
    dispatch(removeModal())
  }

  return (
    <Container maxWidth="md">
      <Form schema={schema} uiSchema={uiSchema} onSubmit={onSubmit}>
        <div className="padd_top_bott">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default ComponentProps
