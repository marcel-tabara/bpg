import Search from '@bpgen/layouts/components/Search'
import {
  collectionActions,
  deleteItem,
  generateCode,
  setCurrentProject,
  setSearch,
} from '@bpgen/services'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import { DeleteRounded } from '@material-ui/icons'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import sortBy from 'lodash/sortBy'
import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAuth } from '../hooks/useAuth'
import { useAlertDialog } from '../hooks/useAlertDialog'
import { useCollections } from '../hooks/useCollections'
import { useSearchData } from '../hooks/useSearchData'
import { useTableStyle } from '../hooks/useTableStyle'
import '../styles.scss'
import AlertDialog from '../components/AlertDialog'

let fileReader
const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
}))

const CollectionData = ({ id, navigate }) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const { admin, user } = useAuth(navigate)
  const { alertDialog, setAlertDialog } = useAlertDialog()
  const { data = [], selectedCollection = {}, providers } = useCollections(id)
  const { StyledTableCell, StyledTableRow } = useTableStyle()
  const { searchData } = useSearchData()

  useEffect(
    () => dispatch(setSearch({ keyword: undefined, techno: '', provider: '' })),
    []
  )

  const filteredData = () => {
    const byUser = ({ data }) => data.uid === user._id || admin
    const byKeyword = (el) =>
      searchData.keyword
        ? el.data.title
            .toLowerCase()
            .indexOf(searchData.keyword.toLowerCase()) !== -1
        : el
    const byTechno = (el) =>
      searchData.techno && searchData.techno !== 'all'
        ? searchData.techno === el.data.techno
        : el
    const byProvider = (el) =>
      searchData.provider && searchData.provider !== 'all'
        ? searchData.provider === el.data.provider
        : el

    const filtered = data
      .filter(byUser)
      .filter(byKeyword)
      .filter(byTechno)
      .filter(byProvider)

    return sortBy(filtered, (el) => el.data.title)
  }

  const addNew = (row) => {
    !isEmpty(row)
      ? navigate(`/editdata/${id}/new`, { state: { row } })
      : navigate(`/editdata/${id}/new`)
  }

  const deleteCollectionData = useCallback(
    (item) => {
      dispatch(
        deleteItem({ data: { type: selectedCollection.title, data: item } })
      )
      dispatch(
        collectionActions.getCollection({
          type: selectedCollection.title,
        })
      )
      navigate(`/data/${id}`)
    },
    [selectedCollection.title]
  )

  const onClick = useCallback(
    ({ _id, data }) => {
      if (selectedCollection.title === 'projects') {
        dispatch(setCurrentProject(data))
        dispatch(generateCode({ currentProject: data }))
        navigate(`/editor/${_id}`)
      } else {
        navigate(`/editdata/${id}/${_id}`)
      }
    },
    [selectedCollection.title]
  )

  const showActions = useCallback(
    (collectionUser) => collectionUser === user._id || admin,
    [user._id, admin]
  )

  const handleFileRead = (e) => {
    const collection = new Function(fileReader.result)()
    const list = {
      data: collection,
      importType: selectedCollection.title,
    }
    dispatch(collectionActions.importCollectionData(list))
  }

  const onImport = (e) => {
    fileReader = new FileReader()
    fileReader.onloadend = handleFileRead
    fileReader.readAsText(e.target.files[0])
  }

  const getProvider = (provider) => {
    if (!provider) return null
    return get(
      providers.find((e) => e._id === provider),
      'data.title',
      ''
    )
  }

  const onConfirmDelete = useCallback(() => {
    deleteCollectionData(alertDialog.id)
    setAlertDialog({ open: false, id: null })
  }, [alertDialog.id])

  const projectCollection =
    selectedCollection && selectedCollection.title === 'projects'

  const bool2str = (val) => (val ? 'Yes' : 'No')

  return (
    <>
      <AlertDialog
        setAlertDialog={setAlertDialog}
        onConfirm={onConfirmDelete}
        open={alertDialog.open}
      />
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Button
            onClick={() => navigate(`/list`)}
            color="primary"
            variant="outlined"
          >
            Back
          </Button>
        </Grid>
        <Grid
          item
          xs={9}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'cenetr',
          }}
        >
          <Typography variant="h6">
            {get(selectedCollection, 'title', '').toUpperCase()}
          </Typography>
        </Grid>
        {!projectCollection && (
          <Grid item xs={2} className="rightButton">
            <div className="icon_wrapper">
              <div className="rightButton">
                <Button
                  onClick={() => addNew()}
                  variant="outlined"
                  color="primary"
                  component="span"
                >
                  Add
                </Button>
                <input
                  accept="js"
                  className={classes.input}
                  id="contained-button-file"
                  type="file"
                  onChange={onImport}
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="outlined"
                    color="secondary"
                    component="span"
                    style={{ marginLeft: 5 }}
                  >
                    Import
                  </Button>
                </label>
              </div>
            </div>
          </Grid>
        )}
        <Grid item xs={12}>
          <Search
            searchFields={selectedCollection.searchFields}
            isData={selectedCollection.title === 'components' ? true : false}
            searchData={searchData}
          />
        </Grid>
        {isEmpty(filteredData()) && (
          <Grid item xs={12}>
            <div className="center">
              <h3>No Results</h3>
            </div>
          </Grid>
        )}

        {!isEmpty(filteredData()) && (
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table className="table" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Active</StyledTableCell>
                    <StyledTableCell>Public</StyledTableCell>
                    <StyledTableCell align="right">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData().map(({ _id, data }) => (
                    <StyledTableRow key={_id}>
                      <TableCell>
                        <Link
                          onClick={() => onClick({ _id, data })}
                          className="generic_link"
                        >
                          {data.title}
                        </Link>
                        {data.provider && (
                          <div className="subtitle">
                            {getProvider(data.provider)}
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        <div>{bool2str(data.isActive)}</div>
                      </TableCell>
                      <TableCell>
                        <div>{bool2str(data.isPublic)}</div>
                      </TableCell>
                      <TableCell align="right">
                        {showActions(data.uid) && (
                          <>
                            <DeleteRounded
                              onClick={() =>
                                setAlertDialog({ open: true, id: _id })
                              }
                              color="primary"
                              className="generic_link"
                            />
                            <FileCopyIcon
                              onClick={() => addNew(data)}
                              color="primary"
                              className="generic_link"
                            />
                          </>
                        )}
                      </TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default CollectionData
