import React from 'react'
import Grid from '@material-ui/core/Grid'
import CollectionWidget from '../components/CollectionWidget'
import PersonalCollectionWidget from '../components/PersonalCollectionWidget'
import { useAuth } from '../hooks/useAuth'

const Home = (props) => {
  const { navigation } = props
  const { authenticated } = useAuth(navigation, false)
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <CollectionWidget />
        </Grid>
        {authenticated && (
          <Grid item xs={6}>
            <PersonalCollectionWidget />
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default Home
