import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function Footer({ children, ...rest }) {
    return (
        <div className="footer-content" {...rest}>
            {children}
        </div>
    );
}

Footer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
};
