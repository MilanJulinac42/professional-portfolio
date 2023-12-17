import styles from "./Service.module.scss";

type ServiceProps = {
    title: string;
    description: string;
    image: string;
};

const Service: React.FC<ServiceProps> = ({ title, description, image }) => {
    return (
        <div>
            <h5>{title}</h5>
            <p>{description}</p>
            <img src={image} />
            <button>Learn more</button>
        </div>
    );
};

export default Service;
