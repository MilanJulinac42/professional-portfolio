import HeroWork from "../HeroWork/HeroWork";
import styles from "./WorkContainer.module.scss";

const WorkContainer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <HeroWork
                    projectImage="/cofee.png"
                    projectTitle="Coffee shop"
                    projectDescription="502 is a web application that allows users to create and share their own playlists. It is built with React, Redux, and Firebase."
                    projectLink="/work/502"
                    gray
                />
                <HeroWork
                    projectImage="/cofee.png"
                    projectTitle="Regalo"
                    projectDescription="502 is a web application that allows users to create and share their own playlists. It is built with React, Redux, and Firebase."
                    projectLink="/work/502"
                    reverse
                />
            </div>
        </div>
    );
};

export default WorkContainer;
