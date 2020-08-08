import { codeGenSelectors } from '@bpgen/services'
import { useSelector } from 'react-redux'

export const useCodeGen = () => {
  const code = useSelector(codeGenSelectors.codeGenSelector) || []

  return {
    code,
  }
}
