import { projectSelectors } from '@bpgen/services'
import { useSelector } from 'react-redux'

export const useCustomForms = () => {
  const customForms = useSelector(projectSelectors.customFormsSelector) || []

  return {
    customForms,
  }
}
