import React, { ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps = {
    children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default Container;
