import { Fragment } from 'react';
import ReactDOM from "react-dom";

import './Modal.css';

const Backdrop = props => {
    return <div className="backdrop" onClick={props.onHideCart}></div>
};

const ModalOverlay = props => {
    return <div className="modal">
        <div className="content">{props.children}</div>
    </div>
};

const portalElement = document.getElementById("overlays-modal");

const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onHideCart={props.onClick}/>, portalElement)}
        {ReactDOM.createPortal(
            <ModalOverlay onClick={props.onClick}>
                {props.children}
            </ModalOverlay>, portalElement
        )}
    </Fragment>
};

export default Modal;
