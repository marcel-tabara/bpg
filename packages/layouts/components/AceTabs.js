import { setCurrentTab } from '@bpgen/services'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch } from 'react-redux'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

const AceTabs = ({ aceTabs, currentTab }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleChange = (e, newValue) =>
    dispatch(setCurrentTab(aceTabs[newValue]))

  const renderTabs = () => {
    return aceTabs.map((e) => {
      return <Tab label={e} key={aceTabs.indexOf(e)} />
    })
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={aceTabs.indexOf(currentTab)}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {renderTabs()}
        </Tabs>
      </AppBar>
    </div>
  )
}

export default AceTabs
