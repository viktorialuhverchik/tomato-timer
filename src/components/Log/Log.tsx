import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    Grid,
    Input,
    Paper,
    Select,
    Slider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { showLog } from '../../redux/actions/actions';
import { DateOptions } from '../../types';

import './Log.css';

const Log = ({ isShowLog, log }: any) => {

    const dispatch: any = useDispatch();

    useEffect(() => {
        let log = localStorage.getItem("log");
        if(!log) {
            return;
        }
        let formattedLog = JSON.parse(log);
        // dispatch(createLog(formattedLog));
    }, [dispatch]);

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
                            <TableBody>
                            {!log ? <TableRow key="1"><TableCell align="right">Nothing logged yet</TableCell></TableRow> :
                                log.map((item: any) => (
                                <TableRow key={item.id}>
                                <TableCell component="th" scope="row">
                                    {item.session}
                                </TableCell>
                                <TableCell align="right">{item.startTime}</TableCell>
                                <TableCell align="right">{item.endTime}</TableCell>
                                <TableCell align="right">
                                    <TextField
                                        id="outlined-basic"
                                        label="Description"
                                        multiline
                                        value={item.description}
                                        onChange={() => console.log("description")}
                                        variant="outlined"
                                    />
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
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
