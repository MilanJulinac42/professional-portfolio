import React, { ReactNode } from "react";
import styles from "./Container.module.scss";
import { roboto } from "@/app/layout";

type ContainerProps = {
    children: ReactNode;
    title: string;
    background?: string;
    clippy?: boolean;
};

const Container: React.FC<ContainerProps> = ({
    children,
    title,
    background,
    clippy,
}) => {
    return (
        <div
            className={styles.container}
            style={{ backgroundColor: `${background}` }}
        >
            <div className={styles.wrapper}>
                <h3 className={roboto.className}>{title}</h3>
                {children}
            </div>
            <div className={styles.triangleContainer}></div>
            {clippy && <div className={styles.clippy}></div>}
        </div>
    );
};

export default Container;
