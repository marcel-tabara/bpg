import { modalSelectors } from '@bpgen/services'
import { useSelector } from 'react-redux'

export const useModals = () => {
  const modals = useSelector(modalSelectors.modalSelector) || []

  return {
    modals,
  }
}
