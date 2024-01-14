import TechCard from "@/app/components/TechCard/TechCard";
import styles from "./TechContainer.module.scss";
import {
    faReact,
    faJs,
    faAws,
    faDrupal,
    faNode,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Break from "@/app/components/Break/Break";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const TechContainer = () => {
    return (
        <div className={styles.techContainer}>
            <h2 className={`${styles.heading} ${roboto.className}`}>
                Technologies I Know
            </h2>
            <Break />
            <div className={styles.techWrapper}>
                <TechCard
                    background="#54c5e3"
                    tech="React"
                    icon={faReact}
                    description="Bring your ideas to life with React, the leading JavaScript framework for building dynamic and interactive user interfaces. React's component-based architecture makes it efficient and scalable, perfect for creating engaging web experiences that captivate your audience."
                    delay={0.2}
                />
                <TechCard
                    background="#d9c43b"
                    tech="JavaScript"
                    icon={faJs}
                    description="JavaScript adds a magical touch to your creations. This versatile language breathes life into static pages, enabling animations, user interactions, and seamless functionality. With JavaScript, your projects become attractive and dynamic, exceeding user expectations."
                    delay={0.4}
                />
                <TechCard
                    background="#68a063"
                    tech="Node.js"
                    icon={faNode}
                    description="Node.js powers your applications. This server-side JavaScript runtime excels in handling real-time data, building APIs, and running high-performance web applications. Node.js ensures scalability and efficiency, allowing you to focus on creating exceptional user experiences."
                    delay={0.6}
                />
                <TechCard
                    background="#F79400"
                    tech="Amazon Web Services"
                    icon={faAws}
                    description="Don't reinvent the wheel; harness the power of the cloud with AWS. This comprehensive package of cloud computing services provides everything you need to build, deploy, and manage your applications at scale. From storage and databases to security and machine learning, AWS empowers you to innovate faster and reach new heights."
                    delay={0.8}
                />
                <TechCard
                    background="#001e2b"
                    tech="Mongo DB"
                    icon={faDatabase}
                    description="Say goodbye to rigid data structures. MongoDB's document-oriented database offers unparalleled flexibility and scalability, adapting to your evolving needs. Store, query, and analyze data with ease, gaining valuable insights and powering dynamic applications."
                    delay={1}
                />
                <TechCard
                    background="#009cde"
                    tech="Drupal"
                    icon={faDrupal}
                    description="Empower your clients to easily manage their content. Drupal, the leading open-source content management system, provides a user-friendly platform for building and maintaining websites and web applications. With extensive customization options and a vibrant community, Drupal gives you the power to create powerful and scalable content experiences."
                    delay={1.2}
                />
            </div>
        </div>
    );
};

export default TechContainer;
