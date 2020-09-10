import React from 'react'
import { useDispatch } from 'react-redux'
import { useCollections } from '../hooks/useCollections'
import CardHeader from '@material-ui/core/CardHeader'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useAuth } from '../hooks/useAuth'

const useStyles = makeStyles({
  root: {
    minWidth: 475,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const PersonalCollectionWidget = props => {
  const dispatch = useDispatch()
  const {
    components,
    technos,
    projects,
    providers,
    templates,
  } = useCollections()
  const getComponents = id => components.filter(e => e.data.provider === id)
  const getTechno = id => technos.filter(e => e._id === id)[0].data.title
  const { user } = useAuth(() => undefined, false)
  const classes = useStyles()

  const personalProviders = providers.filter(e => e.data.uid === user._id)
  const personalTemplates = templates.filter(e => e.data.uid === user._id)
  const personalComponents = components.filter(e => e.data.uid === user._id)
  const current_datetime = new Date()
  return (
    <Card className={classes.root}>
      <CardHeader
        title='Personal'
        subheader={
          current_datetime.getDate() +
          '-' +
          (current_datetime.getMonth() + 1) +
          '-' +
          current_datetime.getFullYear()
        }
      />
      <CardContent>
        <Typography variant='h5' component='h2'>
          Project: {projects.length}
        </Typography>
        <Typography variant='h5' component='h2'>
          Components: {personalComponents.length}
        </Typography>
        <Typography variant='h5' component='h2'>
          UI Libraries: {personalProviders.length}
        </Typography>
        <Typography
          className={classes.pos}
          color='textSecondary'
          component='div'
        >
          {personalProviders.map(e => (
            <p key={e._id}>
              {e.data.id !== 'provider-html' &&
                e.data.title + ' (' + getComponents(e._id).length + ')'}
            </p>
          ))}
        </Typography>
        <Typography variant='h5' component='h2'>
          Templates: {personalTemplates.length}
        </Typography>
        <Typography
          className={classes.pos}
          color='textSecondary'
          component='div'
        >
          {personalTemplates.map(e => (
            <p key={e._id}>
              {e.data.title} / {getTechno(e.data.templateTechno)}
            </p>
          ))}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PersonalCollectionWidget
