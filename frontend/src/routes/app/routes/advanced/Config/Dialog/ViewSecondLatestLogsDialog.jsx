import React from 'react';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';

import ViewSecondLatestLogs from '../DialogContent/ViewSecondLatestLogs';

class ViewSecondLatestLogsDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

    /* TODO: Send off an event to the backend to turn all off or on */

    /* TODO: Add message to the content of the dialog.
     * Maybe display the command that will be executed.
     * Live updates in dialog?
     */
    render() {
        return (
            <div>
                <Button
                    variant='raised'
                    style={this.props.minWidthStyle}
                    onClick={this.handleOpen}
                >
                    View Second /latest Logs
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogTitle id='form-dialog-title'>
                        View the second latest log files in /latest
                    </DialogTitle>
                    <DialogContent>
                        <ViewSecondLatestLogs />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default ViewSecondLatestLogsDialog;