import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { showLog } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';

import './Log.css';

const Log = ({ isShowLog }: any) => {

    const dispatch: any = useDispatch();

    return (
        <div className="app-settings">
            <Dialog
                open={isShowLog}
                keepMounted
                onClose={() => dispatch(showLog(!isShowLog))}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="title-wrapper">
                    <DialogTitle id="alert-dialog-title">Time log</DialogTitle>
                    <CloseIcon className="close-button" onClick={() => dispatch(showLog(!isShowLog))} />
                </div>
                <DialogContent>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Session</TableCell>
                                <TableCell align="right">Start time</TableCell>
                                <TableCell align="right">End time</TableCell>
                                <TableCell align="right">Description</TableCell>
                            </TableRow>
                            </TableHead>
                            {/* <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">
                                    <TextField
                                        id="outlined-basic"
                                        label="Description"
                                        multiline
                                        onChange={() => console.log("description")}
                                        variant="outlined"
                                    />
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody> */}
                        </Table>
                    </TableContainer>
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => dispatch(showLog(!isShowLog))} color="primary">
                        Clear timer log
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Log;
