import TechCard from "@/app/components/TechCard/TechCard";
import styles from "./TechContainer.module.scss";
import {
    faReact,
    faJs,
    faNodeJs,
    faAws,
    faDrupal,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { roboto } from "@/app/layout";
import Break from "@/app/components/Break/Break";

const TechContainer = () => {
    return (
        <div className={styles.techContainer}>
            <h2 className={`${styles.heading} ${roboto.className}`}>
                My tech stack
            </h2>
            <Break />
            <div className={styles.techWrapper}>
                <TechCard
                    background="#54c5e3"
                    tech="React"
                    icon={faReact}
                    description="Bring your ideas to life with React, the leading JavaScript framework for building dynamic and interactive user interfaces. React's component-based architecture makes it efficient and scalable, perfect for crafting engaging web experiences that captivate your audience."
                />
                <TechCard
                    background="#d9c43b"
                    tech="JavaScript"
                    icon={faJs}
                    description="JavaScript adds the magic touch to your creations. This versatile language breathes life into static pages, enabling animations, user interactions, and seamless functionality. With JavaScript, your projects become engaging and dynamic, exceeding user expectations.

"
                />
                <TechCard
                    background="#68a063"
                    tech="Node.JS"
                    icon={faNodeJs}
                    description="Node.js is the powerhouse behind your applications. This server-side JavaScript runtime environment excels at handling real-time data, building APIs, and powering high-performance web applications. Node.js ensures scalability and efficiency, letting you focus on crafting exceptional user experiences."
                />
                <TechCard
                    background="#F79400"
                    tech="Amazon Web Services"
                    icon={faAws}
                    description="Don't reinvent the wheel, leverage the cloud's power with AWS. This comprehensive suite of cloud computing services provides everything you need to build, deploy, and manage your applications at scale. From storage and databases to security and machine learning, AWS empowers you to innovate faster and reach new heights."
                />
                <TechCard
                    background="#001e2b"
                    tech="Mongo DB"
                    icon={faDatabase}
                    description="Say goodbye to rigid data structures. MongoDB's document-oriented database offers unmatched flexibility and scalability, adapting to your evolving needs. Store, query, and analyze data with ease, gaining valuable insights and powering dynamic applications."
                />
                <TechCard
                    background="#009cde"
                    tech="Drupal"
                    icon={faDrupal}
                    description="Empower your clients to manage their content with ease. Drupal, the leading open-source CMS, provides a user-friendly platform for building and maintaining websites and web applications. With extensive customization options and a thriving community, Drupal empowers you to create powerful and scalable content experiences."
                />
            </div>
        </div>
    );
};

export default TechContainer;
