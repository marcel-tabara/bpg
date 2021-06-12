import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setSearch } from '@bpgen/services'
import { useSearchData } from './../hooks/useSearchData'
import { useCollections } from '../hooks/useCollections'

export const useSearch = () => {
  const dispatch = useDispatch()
  const { searchData } = useSearchData()
  const { providers, components, technos } = useCollections()

  const getFilteredTechnos = () =>
    technos.filter(
      (e) => e.data.isActive && components.some((c) => c.data.techno === e._id)
    )
  const filteredTechnos = getFilteredTechnos()

  const getFilteredProviders = () =>
    providers.filter(
      (e) =>
        (e.data.isActive && e.data.techno === searchData.techno) || e.techno
    )
  const filteredProviders = getFilteredProviders()

  useEffect(() => {
    dispatch(
      setSearch({
        ...searchData,
        provider:
          filteredProviders.length === 1
            ? filteredProviders[0]._id
            : searchData.provider
            ? searchData.provider
            : 'all',
      })
    )
  }, [filteredProviders.length, filteredProviders[0]?._id])

  const handleChange = (event) => {
    const { keyword, techno = 'all', provider = '' } = searchData

    dispatch(
      setSearch({
        keyword,
        techno: techno,
        provider: event.target.name === 'techno' ? '' : provider,
        [event.target.name]: event.target.value,
      })
    )
  }

  return {
    handleChange,
    filteredProviders,
    filteredTechnos,
  }
}
