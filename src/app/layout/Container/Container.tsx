import React, { ReactNode } from "react";
import styles from "./Container.module.scss";
import { Roboto, Inter } from "next/font/google";

type ContainerProps = {
    children: ReactNode;
    title: string;
    background?: string;
    clippy?: boolean;
};

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

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
