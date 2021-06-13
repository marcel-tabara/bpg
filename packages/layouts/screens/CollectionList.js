import Search from '@bpgen/layouts/components/Search'
import { collectionActions, deleteItem, setSearch } from '@bpgen/services'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { DeleteRounded } from '@material-ui/icons'
import StorageIcon from '@material-ui/icons/Storage'
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import React, { useEffect } from 'react'
import { useAlertDialog } from '../hooks/useAlertDialog'
import { useDispatch } from 'react-redux'
import { useAuth } from '../hooks/useAuth'
import { useCollections } from '../hooks/useCollections'
import { useSearchData } from '../hooks/useSearchData'
import { useTableStyle } from '../hooks/useTableStyle'
import AlertDialog from '../components/AlertDialog'

const useStyles = makeStyles({
  input: {
    display: 'none',
  },
  table: { minWidth: 650 },
})
let fileReader

const CollectionList = ({ navigate }) => {
  const dispatch = useDispatch()
  const { admin } = useAuth(navigate)
  const { collections } = useCollections()
  const { searchData } = useSearchData()
  const classes = useStyles()
  const { alertDialog, setAlertDialog } = useAlertDialog()
  const { StyledTableCell, StyledTableRow } = useTableStyle()

  useEffect(
    () =>
      dispatch(
        setSearch({ keyword: undefined, techno: 'all', provider: 'all' })
      ),
    []
  )

  const filteredCollections = () => {
    const filtered = collections.filter((el) => {
      return get(searchData, 'keyword', '')
        ? el.title.toLowerCase().indexOf(searchData.keyword.toLowerCase()) !==
            -1
        : []
    })

    return sortBy(filtered, (el) => el.title)
  }

  const handleFileRead = (e) => {
    const collection = new Function(fileReader.result)()
    const list = {
      data: collection,
      importType: 'collections',
    }
    dispatch(collectionActions.importCollectionData(list))
  }

  const onImport = (e) => {
    fileReader = new FileReader()
    fileReader.onloadend = handleFileRead
    fileReader.readAsText(e.target.files[0])
  }

  const addNew = () => navigate('/form')
  const deleteCollection = (id) => {
    dispatch(deleteItem({ data: { type: 'collections', data: id } }))
    dispatch(collectionActions.getCollections())
  }

  const onConfirmDelete = () => {
    deleteCollection(alertDialog.id)
    setAlertDialog({ open: false, id: null })
  }

  const renderList = () => {
    return (
      <div>
        <AlertDialog
          setAlertDialog={setAlertDialog}
          onConfirm={onConfirmDelete}
          open={alertDialog.open}
        />
        <div className="padd_bott">
          <Grid container>
            <Grid item xs={10} className="leftButton">
              <Search searchFields={['keyword']} searchData={searchData} />
            </Grid>
            <Grid item xs={2} className="rightButton">
              {admin && (
                <div className="icon_wrapper">
                  <div className="rightButton">
                    <Button
                      onClick={addNew}
                      component="button"
                      color="primary"
                      variant="outlined"
                    >
                      Add
                    </Button>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
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
              )}
            </Grid>
          </Grid>
        </div>
        {isEmpty(filteredCollections()) && (
          <div className="center">No Results</div>
        )}
        {!isEmpty(filteredCollections()) && (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Description</StyledTableCell>
                  <StyledTableCell align="right">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCollections().map((row) => (
                  <StyledTableRow key={row._id}>
                    <TableCell component="th" scope="row">
                      {admin ? (
                        <Link
                          onClick={() => navigate(`/form/${row._id}`)}
                          className="generic_link"
                        >
                          {row.title}
                        </Link>
                      ) : (
                        row.title
                      )}
                    </TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell align="right">
                      {admin && (
                        <DeleteRounded
                          onClick={() =>
                            setAlertDialog({ open: true, id: row._id })
                          }
                          color="primary"
                          className="generic_link"
                        />
                      )}
                      <StorageIcon
                        color="primary"
                        onClick={() => navigate(`/data/${row._id}`)}
                        className="generic_link"
                      />
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    )
  }

  return <div>{renderList()}</div>
}

export default CollectionList
