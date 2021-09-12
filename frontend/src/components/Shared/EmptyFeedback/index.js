import React from 'react';
import PropTypes from 'prop-types';

import { ErrorOutline } from 'components/Shared/Icons';

import './style.css';

export default function EmptyFeedback({ message }) {
    return (
        <div className="empty-feedback-container">
            <ErrorOutline fontSize="large" />
            <span>{message}</span>
        </div>
    );
}

EmptyFeedback.propTypes = {
    message: PropTypes.string,
};
