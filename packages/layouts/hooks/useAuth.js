import { loginSelectors } from '@bpgen/services'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useAuth = (navigate, shouldNavigate = true) => {
  const authenticated = useSelector(loginSelectors.loginSelector)
  const user = useSelector(loginSelectors.userSelector)
  const admin = useSelector(loginSelectors.adminSelector) || false

  useEffect(() => {
    if (!authenticated && shouldNavigate) {
      navigate('/login')
    }
  }, [authenticated, shouldNavigate])
  return {
    user,
    admin,
    authenticated,
  }
}
