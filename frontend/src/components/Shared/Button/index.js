import React from 'react';
import PropTypes from 'prop-types';

import Spinner from 'components/Shared/Spinner';

import './style.css';

export default function Button({
    children, kind, className, outlined, onClick, loading, ...rest
}) {
    let buttonClass = 'button-default';

    if (kind === 'primary') {
        buttonClass += ' primary';
    }

    if (kind === 'success') {
        buttonClass += ' success';
    }

    if (kind === 'danger') {
        buttonClass += ' danger';
    }

    if (className) {
        buttonClass += ` ${className}`;
    }

    if (outlined) {
        buttonClass += ' outlined';
    }

    if (loading) {
        return (
            <Spinner size={30} />
        );
    }

    return (
        <button className={buttonClass} onClick={onClick} {...rest}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    kind: PropTypes.oneOf(['primary', 'success', 'danger']),
    className: PropTypes.string,
    onClick: PropTypes.func,
    outlined: PropTypes.bool,
    loading: PropTypes.bool,
};
