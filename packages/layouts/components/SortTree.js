import {
  addModal,
  generateCode,
  setError,
  setProjectTree,
} from '@bpgen/services'
import InfoIcon from '@material-ui/icons/Info'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'
import StorageIcon from '@material-ui/icons/Storage'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import React from 'react'
import { useDispatch } from 'react-redux'
import SortableTree, { removeNodeAtPath } from 'react-sortable-tree'

import { useCollections } from '../hooks/useCollections'
import { useProjects } from '../hooks/useProjects'
import { useSearchData } from '../hooks/useSearchData'

import 'react-sortable-tree/style.css'

const externalNodeType = 'yourNodeType'
const shouldCopyOnOutsideDrop = true
const getNodeKey = ({ treeIndex }) => treeIndex

const SortTree = () => {
  const dispatch = useDispatch()
  const { components, providers } = useCollections()
  const { searchData } = useSearchData()
  const { currentProject, projectTree } = useProjects()

  const componentsForTree = components.map((e) => {
    const subtitle = get(
      providers.find((el) => el._id === e.data.provider),
      'data.title',
      ''
    )
    return { ...e.data, subtitle }
  })

  const filteredDefaultTree = () => {
    const filteredComponents = componentsForTree.filter((el) => {
      if (get(searchData, 'keyword', '')) {
        return (
          el.title.toLowerCase().indexOf(searchData.keyword.toLowerCase()) !==
            -1 &&
          (get(searchData, 'provider', el.provider) === el.provider ||
            get(searchData, 'provider', 'all') === 'all') &&
          (get(searchData, 'techno', el.techno) === el.techno ||
            get(searchData, 'techno', 'all') === 'all')
        )
      }
      return (
        (get(searchData, 'provider', el.provider) === el.provider ||
          get(searchData, 'provider', 'all') === 'all') &&
        (get(searchData, 'techno', el.techno) === el.techno ||
          get(searchData, 'techno', 'all') === 'all')
      )
    })

    return sortBy(filteredComponents, (el) => el.title)
  }

  const onChange = (treeData) => {
    try {
      if (treeData.length === 1) {
        dispatch(setProjectTree(treeData))
        dispatch(generateCode({ currentProject }))
      } else {
        dispatch(setError('Tree length should be 1'))
      }
    } catch (error) {
      dispatch(setError(error))
    }
  }

  const remove = (path) => {
    const newTree = removeNodeAtPath({
      treeData: projectTree,
      path,
      getNodeKey,
    })

    dispatch(setProjectTree(newTree))
    dispatch(generateCode({ currentProject }))
  }

  const openModal = (type, node, path) =>
    dispatch(addModal({ type, data: { node, path } }))

  return (
    <div className="row">
      <div
        style={{
          height: window.innerHeight - 170,
          float: 'left',
          minHeight: window.innerHeight - 170,
          minWidth: window.innerWidth / 5,
        }}
      >
        <SortableTree
          isVirtualized={false}
          treeData={filteredDefaultTree()}
          onChange={() => console.log('changed')}
          dndType={externalNodeType}
          shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
          generateNodeProps={({ node, path }) => ({
            buttons: [
              <InfoIcon
                color="primary"
                className="generic_link"
                onClick={() => openModal('component_info', node, path)}
              />,
            ],
          })}
        />
      </div>
      <div
        style={{
          height: window.innerHeight - 100,
          float: 'left',
          minHeight: window.innerHeight - 100,
          minWidth: window.innerWidth / 3,
        }}
      >
        <SortableTree
          isVirtualized={false}
          treeData={projectTree}
          onChange={onChange}
          dndType={externalNodeType}
          shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
          getNodeKey={getNodeKey}
          generateNodeProps={({ node, path }) => ({
            buttons: [
              <RemoveCircleOutlineIcon
                color="primary"
                className="generic_link"
                onClick={() => remove(path)}
              />,
              <StorageIcon
                color="primary"
                className="generic_link"
                onClick={() => openModal('component_props', node, path)}
              />,
            ],
          })}
        />
      </div>
    </div>
  )
}

export default SortTree
