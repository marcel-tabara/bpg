import { setSearch } from '@bpgen/services'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import get from 'lodash/get'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useCollections } from '../hooks/useCollections'
import { useSearchData } from './../hooks/useSearchData'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  formControl: {
    //margin: theme.spacing(1),
    paddingRight: '0.5rem',
    minWidth: 120,
  },
  selectEmpty: { marginTop: theme.spacing(2) },
}))

const Search = ({ searchFields = '' }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { searchData } = useSearchData()
  const { providers, technos } = useCollections()

  const inputLabel = React.useRef(null)
  const [labelWidth, setLabelWidth] = useState(0)

  useEffect(() => {
    setLabelWidth(get(inputLabel, 'current.offsetWidth', 0))
  }, [])

  const handleChange = (event) =>
    dispatch(
      setSearch({ ...searchData, [event.target.name]: event.target.value })
    )

  const getTechnos = () =>
    technos.map((e) => (
      <MenuItem value={e._id} key={e.data.title}>
        {e.data.title}
      </MenuItem>
    ))

  const getProviders = () =>
    providers.map((e) => (
      <MenuItem value={e._id} key={e.data.title}>
        {e.data.title}
      </MenuItem>
    ))

  return (
    <>
      {searchFields.includes('keyword') && (
        <FormControl variant="filled" className={classes.formControl}>
          <TextField
            name="keyword"
            label="Search"
            variant="outlined"
            onChange={handleChange}
            defaultValue={searchData.keyword}
          />
        </FormControl>
      )}
      {searchFields.includes('technos') && (
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="techno_label">
            Technos
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            name="techno"
            value={searchData.techno || 'all'}
            onChange={handleChange}
            labelWidth={labelWidth}
          >
            <MenuItem value="all">
              <em>All</em>
            </MenuItem>
            {getTechnos()}
          </Select>
        </FormControl>
      )}
      {searchFields.includes('providers') && (
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="provider_label">
            Providers
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            name="provider"
            value={searchData.provider || 'all'}
            onChange={handleChange}
            labelWidth={labelWidth}
          >
            <MenuItem value="all">
              <em>All</em>
            </MenuItem>
            {getProviders()}
          </Select>
        </FormControl>
      )}
    </>
  )
}

export default Search
