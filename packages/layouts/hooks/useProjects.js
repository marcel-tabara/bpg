import { collectionSelectors, projectSelectors } from '@bpgen/services'
import get from 'lodash/get'
import { useSelector } from 'react-redux'

export const useProjects = () => {
  const templates = useSelector(collectionSelectors.templatesSelector) || []
  const aceTabs = useSelector(projectSelectors.aceTabsSelector) || []
  const currentTab = useSelector(projectSelectors.currentTabSelector) || ''
  const currentTemplateId =
    useSelector(projectSelectors.currentTemplateSelector) || []
  const currentProject =
    useSelector(projectSelectors.currentProjectSelector) || []
  const projectTree = useSelector(projectSelectors.projectTreeSelector) || []
  const error = useSelector(projectSelectors.errorSelector)
  const info = useSelector(projectSelectors.infoSelector)

  const currentTemplate = get(
    templates.find(e => e._id === currentTemplateId),
    'data',
    false
  )

  const projectSettings = useSelector(projectSelectors.projectSettingsSelector)

  return {
    aceTabs,
    currentTab,
    currentTemplate,
    currentProject,
    projectTree,
    error,
    info,
    currentTemplateId,
    projectSettings,
  }
}
