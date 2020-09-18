import React from 'react';
import './Modal.css';
import FontAwesome from 'react-fontawesome';
import styled, { keyframes } from "styled-components";
import { flipInY } from "react-animations";

const Modal = (props) => {
    
    const Flip = styled.div`animation: 1s ${keyframes`${flipInY}`}`;

    const { closeModal } = props;

    const closeIcon = () => (
        <FontAwesome
        // Any close icon can be used
        className="close-modal"
        name="times"
        onClick={closeModal}
        style={{
            padding: '10px',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 0,
            position: 'absolute',
            top: '0.3rem',
            right: '0.5rem',
        }}
        />
    );

    return (
        
        <div className="modal-overlay">
            <Flip>
            <div className="modal-content">
                {props.noClose ? "" : closeIcon()}
                {props.children}
            </div>
            </Flip>
        </div>
        
    );
};

export default Modal;