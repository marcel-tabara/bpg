import React from 'react'
import CollectionWidget from '../components/CollectionWidget'
import PersonalCollectionWidget from '../components/PersonalCollectionWidget'
import { useAuth } from '../hooks/useAuth'

const Home = props => {
  const { navigation } = props
  const { authenticated } = useAuth(navigation, false)
  return (
    <div className='center'>
      <CollectionWidget />
      {authenticated && <PersonalCollectionWidget />}
    </div>
  )
}

export default Home
