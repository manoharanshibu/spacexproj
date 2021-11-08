import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../state';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Draggable from 'react-draggable';
import { ActionType } from '../state/action-types';
import Paper from '@material-ui/core/Paper';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import './RocketDialog.scss';

const PaperComponent = (props: any) => {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

interface IProps {
    open: boolean
}

const RocketDialog: React.FC<IProps> = (props) => {
    const [open, setOpen] = useState(props.open);
    const dispatch = useDispatch();
    const { showRocketDetails, selectedRocket } = useSelector((state: State) => state.itemsReducer);

    useEffect(() => {
        setOpen(showRocketDetails);
    }, [showRocketDetails])

    const handleClose = () => {
        setOpen(false);
        dispatch({
            type: ActionType.SHOW_ROCKET_DETAILS,
            payload: {
                showRocketDetails: false,
                selectedRocket: null
            }
        });
    };

    const getDetails = () => {
        if (selectedRocket) {
            return <TableContainer component={Paper}>
                <Table sx={{ minWidth: 250 }} aria-label="simple table">
                    <TableBody>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>Rocket ID</TableCell>
                            <TableCell>{selectedRocket.rocket_id}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>Name</TableCell>
                            <TableCell>{selectedRocket.rocket_name}</TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>Type</TableCell>
                            <TableCell>{selectedRocket.rocket_type}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        } else {
            return <div>No Data</div>
        }
    }

    return (
        <Dialog
            open={open === true ? true : false}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
        >
            <DialogTitle className='dialog-title' id="draggable-dialog-title" data-testid="draggable-dialog-title">
                Rocket Details
                </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {getDetails()}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Close
                    </Button>
            </DialogActions>
        </Dialog>
    );
}

export default RocketDialog;
