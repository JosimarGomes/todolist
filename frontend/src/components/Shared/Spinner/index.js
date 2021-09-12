import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import './style.css';

export default function Spinner({ size = 40 }) {
    return (
        <CircularProgress size={size} className="spinner-content" />
    );
}

export const SpinnerContainer = ({ children }) => (
    <div className="spinner-container">
        {children}
    </div>
);

Spinner.propTypes = {
    size: PropTypes.number,
};

SpinnerContainer.propTypes = {
    children: PropTypes.element,
};
