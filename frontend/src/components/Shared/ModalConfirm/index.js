import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Shared/Button';
import Modal from 'components/Shared/Modal';
import Footer from 'components/Shared/Footer';

import './style.css';

export default function ModalConfirm({
    show, onConfirm, onCancel, loading, children, message, title,
}) {
    return (
        <Modal
            show={show}
            title={title}
            onClose={onCancel}>
            {
                children || (
                    <div className="modal-confirm-content">
                        <h3>{message}</h3>
                    </div>
                )
            }
            <Footer>
                <Button
                    onClick={onCancel}>
                    Cancelar
                </Button>
                <Button
                    kind="danger"
                    loading={loading}
                    onClick={onConfirm}>
                    Confirmar
                </Button>
            </Footer>
        </Modal>
    );
}

ModalConfirm.propTypes = {
    show: PropTypes.bool,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
    message: PropTypes.string,
    loading: PropTypes.bool,
    title: PropTypes.string,
};

ModalConfirm.defaultProps = {
    title: 'Confirmar?',
};
