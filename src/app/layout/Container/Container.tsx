import React, { ReactNode } from "react";
import styles from "./Container.module.scss";
import { roboto } from "@/app/layout";

type ContainerProps = {
    children: ReactNode;
    title: string;
    background?: string;
};

const Container: React.FC<ContainerProps> = ({
    children,
    title,
    background,
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
        </div>
    );
};

export default Container;
