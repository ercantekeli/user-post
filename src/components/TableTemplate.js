import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';


const TableTemplate = ({ exampleData }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(9);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const keys = Object.keys(exampleData[0])
    console.log(keys)
    console.log(exampleData)
    return (
        <Paper sx={{ width: '75%',marginLeft:"18rem", marginTop:"3rem"}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{backgroundColor:"lightgray"}}>
                            {keys.map((column) => {
                                return <TableCell sx={{fontWeight:"bolder"}}>{column}</TableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {exampleData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                            
                            return (
                                
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {keys.map((cell) => {
                                        
                                        return <TableCell component="th" scope="row">
                                                    {row[cell]}
                                                </TableCell>

                                    })}
                                </TableRow>
                            )
                        }
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[9, 25, 100]}
                component="div"
                count={exampleData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default TableTemplate