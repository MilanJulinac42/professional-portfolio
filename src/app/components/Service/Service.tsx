import styles from "./Service.module.scss";

type ServiceProps = {
    title: string;
    description: string;
    image: string;
    extraParagraph?: string;
    listItems?: string[];
};

const Service: React.FC<ServiceProps> = ({
    title,
    description,
    image,
    extraParagraph,
    listItems = [],
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img src={image} />
                <div className={styles.contentWrapper}>
                    <h5>{title}</h5>
                    <p>{description}</p>
                    {listItems.length > 0 && (
                        <ul>
                            {listItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                    <p>{extraParagraph}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;
