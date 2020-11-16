import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { clearLog, createLog, showLog } from '../../redux/actions/actions';
import { ILogItem, PropsLog } from '../../types';

import './Log.css';

const Log: FC<PropsLog> = ({ isShowLog, log }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        const logFromStorage: string | null = localStorage.getItem("log");
        if(logFromStorage) {
            dispatch(createLog(JSON.parse(logFromStorage)));
        }
    }, [dispatch]);

    const handleClickShowLog = () => {
        dispatch(showLog(!isShowLog));
    };

    const handleClearLog = () => {
        dispatch(clearLog());
    };

    return (
        <div className="app-settings">
            <Dialog
                open={isShowLog}
                keepMounted
                onClose={handleClickShowLog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="title-wrapper">
                    <DialogTitle id="alert-dialog-title">Time log</DialogTitle>
                    <CloseIcon className="close-button" onClick={handleClickShowLog} />
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
                            {!log ?
                                <TableRow key="1">
                                    <TableCell align="right">Nothing logged yet</TableCell>
                                </TableRow> :
                                log.map((item: ILogItem) => (
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
                    <Button onClick={handleClearLog} color="primary">
                        Clear timer log
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Log;
