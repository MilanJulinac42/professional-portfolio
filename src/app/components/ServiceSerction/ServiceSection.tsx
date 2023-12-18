import styles from "./ServiceSection.module.scss";

type ServiceSectionProps = {
    title: string;
    description: string;
    imgSrc: string;
    reverse: boolean;
    background: string;
};

const ServiceSection: React.FC<ServiceSectionProps> = ({
    title,
    description,
    imgSrc,
    reverse,
    background,
}) => {
    return (
        <div className={styles.serviceContainer}>
            <div
                className={`${styles.serviceWrapper} ${
                    reverse ? styles.reverse : ""
                }`}
            >
                <div className={styles.imageContainer}>
                    <img className={styles.serviceImg} src={imgSrc} alt="" />
                </div>
                <div
                    className={styles.serviceContent}
                    style={{ backgroundColor: `${background}` }}
                >
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <ul>
                        <li>
                            <h1>SECTION</h1>
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Veniam culpa similique obcaecati accusamus
                            modi voluptas vitae. Eligendi quod quam dignissimos!
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Veniam culpa similique obcaecati accusamus
                            modi voluptas vitae. Eligendi quod quam dignissimos!
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Veniam culpa similique obcaecati accusamus
                            modi voluptas vitae. Eligendi quod quam dignissimos!
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Veniam culpa similique obcaecati accusamus
                            modi voluptas vitae. Eligendi quod quam dignissimos!
                        </li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quo labore dolorem eligendi earum vero non
                        accusantium quia laboriosam at recusandae esse est,
                        similique numquam cupiditate id eveniet. Iusto, possimus
                        excepturi.
                    </p>
                    <button>Bla bla bla</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
