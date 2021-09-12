import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function Input({
    type = 'text', placeholder, defaultValue, name, className, label, error, containerStyle, ...rest
}) {
    let inputClass = 'input-default';

    if (className) {
        inputClass += ` ${className}`;
    }

    if (error) {
        inputClass += 'input-error';
    }

    const value = defaultValue ? defaultValue.toString() : '';

    if (type === 'textarea') {
        return (
            <div className="input-default-container" style={containerStyle}>
                <label htmlFor={name}>
                    {label}
                </label>
                <textarea name={name} className={inputClass} {...rest}>
                    {value}
                </textarea>
            </div>
        );
    }

    if (type === 'checkbox') {
        return (
            <div className="input-checkbox-container" style={containerStyle}>
                <input
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    defaultValue={value}
                    name={name}
                    className={inputClass}
                    {...rest}
                />
                <label htmlFor={name} className="input-checkbox-label">
                    {label}
                </label>
            </div>
        );
    }

    return (
        <div className="input-default-container" style={containerStyle}>
            <div>
                <label htmlFor={name}>
                    {label}
                </label>
            </div>
            <div>
                <input
                    type={type}
                    placeholder={placeholder}
                    defaultValue={value}
                    name={name}
                    className={inputClass}
                    {...rest}
                />
            </div>
        </div>

    );
}

export const InputSeparator = ({ margin = 20 }) => (
    <div style={{ width: margin }}></div>
);

export const InputGroup = ({ children }) => (
    <div className="input-group-container">{children}</div>
);

InputGroup.propTypes = {
    children: PropTypes.any,
};

InputSeparator.propTypes = {
    margin: PropTypes.number,
};

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.bool,
    containerStyle: PropTypes.object,
};
