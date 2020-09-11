import { resetAlert } from '@bpgen/services'
import Alert from '@material-ui/lab/Alert'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useProjects } from '../hooks/useProjects'

const CustomAlert = () => {
  const dispatch = useDispatch()
  const { error, info } = useProjects()

  const onClose = () => dispatch(resetAlert())

  useEffect(() => {
    setTimeout(() => onClose(), 5000)
  }, [])

  if (!error && !info) return null
  const severity = error ? 'error' : 'success'

  return (
    <div className='alert'>
    <Alert severity={severity} onClose={onClose}>
      {error || info}
    </Alert>
    </div>

  )
}

export default CustomAlert
