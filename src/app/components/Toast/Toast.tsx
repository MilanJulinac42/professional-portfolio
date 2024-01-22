"use client";
import React, { useState } from "react";
import styles from "./Toast.module.scss";

type ToastProps = {
    text: string;
    onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ text, onClose }) => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
        onClose();
    };
    return (
        <>
            {visible && (
                <div className={styles.toastContainer}>
                    <div className={styles.toast}>
                        <span className={styles.toastText}>{text}</span>
                        <button
                            className={styles.closeButton}
                            onClick={handleClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Toast;
