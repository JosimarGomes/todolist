import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import MuiDialogContent from '@material-ui/core/DialogContent';
import PropTypes from 'prop-types';

import { Close as CloseIcon } from 'components/Shared/Icons';

import './style.css';

const DIALOG_SIZES = {
    small: 'sm',
    medium: 'md',
    large: 'lg',
};

export default function Modal({
    show, children, onClose, title, size = 'small',
}) {
    const dialogSize = DIALOG_SIZES[size];

    return (
        <Dialog open={show} fullWidth={true} maxWidth={dialogSize}>
            <MuiDialogTitle disableTypography className="modal-dialog-title">
                <span>{title}</span>
                {
                    onClose ? (
                        <IconButton aria-label="close" onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    )
                        : null
                }
            </MuiDialogTitle>
            <MuiDialogContent>
                {children}
            </MuiDialogContent>
        </Dialog>
    );
}

Modal.propTypes = {
    show: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
    onClose: PropTypes.func,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};
