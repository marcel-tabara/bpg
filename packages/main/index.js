import CustomAlert from '@bpgen/layouts/components/CustomAlert'
import NavBar from '@bpgen/layouts/components/NavBar'
import GenericModal from '@bpgen/layouts/screens/GenericModal'
import routes from '@bpgen/reach-router'
import store from '@bpgen/redux-store'
import { collectionActions } from '@bpgen/services'
import Container from '@material-ui/core/Container'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './styles.scss'

const theme = createMuiTheme({})
const bpGenStore = store()

bpGenStore.dispatch(collectionActions.getCollections())
bpGenStore.dispatch(collectionActions.getCollection({ type: 'projects' }))
bpGenStore.dispatch(collectionActions.getCollection({ type: 'technos' }))
bpGenStore.dispatch(collectionActions.getCollection({ type: 'providers' }))
bpGenStore.dispatch(collectionActions.getCollection({ type: 'templates' }))
bpGenStore.dispatch(collectionActions.getCollection({ type: 'proptypes' }))
bpGenStore.dispatch(collectionActions.getCollection({ type: 'components' }))

render(
  <Provider store={bpGenStore}>
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl'>
        <div className='nav'>
          <NavBar />
        </div>
        <CustomAlert />
        {routes}
        <GenericModal />
      </Container>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
