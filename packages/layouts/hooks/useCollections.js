import { collectionSelectors } from '@bpgen/services'
import get from 'lodash/get'
import { useSelector } from 'react-redux'

export const useCollections = (id, el) => {
  const collections = useSelector(collectionSelectors.collectionSelector) || []
  const components = useSelector(collectionSelectors.componentsSelector) || []
  const technos = useSelector(collectionSelectors.technosSelector) || []
  const projects = useSelector(collectionSelectors.projectsSelector) || []
  const providers = useSelector(collectionSelectors.providersSelector) || []
  const templates = useSelector(collectionSelectors.templatesSelector) || []
  const proptypes = useSelector(collectionSelectors.proptypesSelector) || []

  const selectedCollection = collections.find(e => e._id === id) || {}

  const getData = () => {
    switch (get(selectedCollection, 'title', '')) {
      case 'components':
        return components
      case 'technos':
        return technos
      case 'projects':
        return projects
      case 'providers':
        return providers
      case 'templates':
        return templates
      case 'proptypes':
        return proptypes
      default:
        return []
    }
  }

  const technosEnums = technos.map(e => e._id)
  const technosEnumNames = technos.map(e => e.data.title)

  const proptypesEnums = proptypes.map(e => e._id)
  const proptypesEnumNames = proptypes.map(e => e.data.title)

  const providersEnums = providers.map(e => e._id)
  const providersEnumNames = providers.map(e => e.data.title)

  const data = !id ? [] : getData()

  const selectedElement = data.find(e => e._id === el) || {}

  return {
    collections,
    components,
    technos,
    projects,
    providers,
    templates,
    proptypes,
    data,
    selectedCollection,
    selectedElement: selectedElement.data,
    technosEnums,
    technosEnumNames,
    proptypesEnums,
    proptypesEnumNames,
    providersEnums,
    providersEnumNames,
  }
}
