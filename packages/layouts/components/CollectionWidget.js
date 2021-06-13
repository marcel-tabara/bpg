import React from 'react'
import { useDispatch } from 'react-redux'
import { useCollections } from '../hooks/useCollections'
import CardHeader from '@material-ui/core/CardHeader'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 475,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const CollectionWidget = () => {
  const { components, technos, providers, templates } = useCollections()
  const getComponents = (id) => components.filter((e) => e.data.provider === id)
  const getTechno = (id) => technos.filter((e) => e._id === id)[0].data.title
  const classes = useStyles()
  const current_datetime = new Date()

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Public"
        subheader={
          current_datetime.getDate() +
          '-' +
          (current_datetime.getMonth() + 1) +
          '-' +
          current_datetime.getFullYear()
        }
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          Components: {components.length}
        </Typography>
        <Typography variant="h5" component="h2">
          UI Libraries: {providers.length - 1}
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          component="div"
        >
          {providers.map((e) => (
            <p key={e._id}>
              {e.data.id !== 'provider-html' &&
                e.data.title + ' (' + getComponents(e._id).length + ')'}
            </p>
          ))}
        </Typography>
        <Typography variant="h5" component="h2">
          Templates: {templates.length}
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          component="div"
        >
          {templates.map((e) => (
            <p key={e._id}>
              {e.data.title} / {getTechno(e.data.techno)}
            </p>
          ))}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CollectionWidget
