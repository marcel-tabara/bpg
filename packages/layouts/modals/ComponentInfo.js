import Container from '@material-ui/core/Container'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'
import { useModals } from '../hooks/useModals'
import { useCollections } from './../hooks/useCollections'

const useStyles = makeStyles(theme => ({
  title: { flexGrow: 1 },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightMedium,
  },
}))

const ProjectSettings = () => {
  const { modals } = useModals()
  const currentModal = modals[modals.length - 1]

  const {
    title,
    description,
    provider,
    techno,
    propType,
    componentProps = [],
  } = currentModal.data.node
  const classes = useStyles()
  const { providers, technos, proptypes } = useCollections()

  const getComponentProps = () => {
    return componentProps.map(e => {
      return (
        <ExpansionPanel key={e.title}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography className={classes.heading}>
              {e.title} : {e.propTypeProp}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{e.description}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )
    })
  }

  return (
    <Container maxWidth='md'>
      <div className={classes.root}>
        <Typography variant='h2' className={classes.title}>
          {title}
        </Typography>
        <TextField
          id='provider'
          label='Provider'
          variant='outlined'
          color='secondary'
          defaultValue={providers.find(e => e._id === provider).data.title}
          disabled
        />
        <TextField
          id='techno'
          label='Techno'
          variant='outlined'
          color='secondary'
          defaultValue={technos.find(e => e._id === techno).data.title}
          disabled
        />
        <TextField
          id='propType'
          label='PropType'
          variant='outlined'
          color='secondary'
          defaultValue={proptypes.find(e => e._id === propType).data.title}
          disabled
        />
        <TextField
          id='description'
          label='Description'
          multiline
          rows='25'
          defaultValue={description}
          variant='outlined'
          fullWidth
          disabled
        />

        <div className='padded'>
          <Typography variant='h4' className={classes.title}>
            Props
          </Typography>
          {getComponentProps()}
        </div>
      </div>
    </Container>
  )
}

export default ProjectSettings
