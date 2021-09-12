import PropTypes from 'prop-types';

import { ArrowForwardIos } from 'components/Shared/Icons';

export default function MenuItem({ title, onClick }) {
    return (
        <div className="menu-item-container" onClick={onClick}>
            <h3>{title}</h3>
            <ArrowForwardIos />
        </div>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
};
