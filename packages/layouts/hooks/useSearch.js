import { useDispatch } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { setSearch } from '@bpgen/services'
import { useCollections } from '../hooks/useCollections'
import { useAuth } from '../hooks/useAuth'

export const useSearch = ({ searchData, isData }) => {
  const dispatch = useDispatch()
  const { keyword, techno = '', provider = '' } = searchData
  const { providers, components, technos, templates, selectedCollection } =
    useCollections()
  const { user } = useAuth({}, false)

  const hasData = useCallback(
    (dataType, type, typeId, uid) => {
      return dataType.some((c) =>
        isData
          ? c.data[type] === typeId && (c.data.uid === uid || user.isAdmin)
          : c.data[type] === typeId
      )
    },
    [isData]
  )

  const getFilteredTechnos = useCallback(() => {
    return technos.filter(
      (e) =>
        user.isAdmin ||
        hasData(
          selectedCollection.title === 'templates' ? templates : components,
          'techno',
          e._id,
          user._id
        )
    )
  }, [user.isAdmin, user._id])

  const getFilteredProviders = () => {
    return providers.filter((e) =>
      searchData.techno
        ? e.data.techno === searchData.techno &&
          hasData(components, 'provider', e._id, user._id)
        : e
    )
  }

  const filteredTechnos = getFilteredTechnos()
  const filteredProviders = getFilteredProviders()

  useEffect(() => {
    dispatch(
      setSearch({
        ...searchData,
        techno:
          filteredTechnos.length === 1
            ? filteredTechnos[0]._id
            : techno
            ? techno
            : 'all',
        provider:
          filteredProviders.length === 1
            ? filteredProviders[0]._id
            : provider
            ? provider
            : 'all',
      })
    )
  }, [
    filteredTechnos.length,
    filteredTechnos[0]?._id,
    techno,
    filteredProviders.length,
    filteredProviders[0]?._id,
    provider,
  ])

  const handleChange = useCallback(
    (event) => {
      dispatch(
        setSearch({
          keyword,
          techno,
          provider: event.target.name === 'techno' ? '' : provider,
          [event.target.name]: event.target.value,
        })
      )
    },
    [keyword, techno, provider]
  )

  return {
    handleChange,
    filteredProviders,
    filteredTechnos,
  }
}
