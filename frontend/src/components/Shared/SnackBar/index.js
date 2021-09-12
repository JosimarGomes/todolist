import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';

import { CheckCircleOutline, ErrorOutline } from 'components/Shared/Icons';

import './style.css';

export default function SnackBarFeedback({
    show, onClose, duration, type, message,
}) {
    let classSnackbar = 'snack-bar-content';

    if (type === 'success') {
        classSnackbar += ' success';
    }
    if (type === 'error') {
        classSnackbar += ' error';
    }

    return (
        <Snackbar
            open={show}
            autoHideDuration={duration}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <div className={classSnackbar}>
                <span className="snack-bar-icon">
                    {
                        type === 'success' && (

                            <CheckCircleOutline />
                        )
                    }
                    {
                        type === 'error' && (
                            <ErrorOutline />
                        )
                    }
                </span>
                <span>
                    {message}
                </span>
            </div>
        </Snackbar>
    );
}

SnackBarFeedback.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
    duration: PropTypes.number,
    type: PropTypes.oneOf(['success', 'error']),
    message: PropTypes.string,
};
SnackBarFeedback.defaultProps = {
    type: 'success',
    message: 'Salvou com sucesso!',
    duration: 6000,
};
