import HeroCard from "@/app/components/HeroCard/HeroCard";
import Container from "../Container/Container";
import styles from "./AboutMeCards.module.scss";
import { inter } from "@/app/layout";

const AboutMeCards = () => {
    return (
        <Container
            title="Building Trust: My Dedication & Skills"
            background="#F0F0FA"
        >
            <div className={`${styles.containerWrapper} ${inter.className}`}>
                <HeroCard
                    title="Punctuality & Dedication"
                    description="I meet deadlines consistently, prioritizing efficiency and organization. My dedication fuels my focus, ensuring every task receives my full attention."
                    image="/commit.svg"
                />
                <HeroCard
                    title="Communication & Collaboration"
                    description="I forge strong connections with colleagues and clients, fostering open communication and collaborative problem-solving. My clear and concise communication ensures everyone is on the same page."
                    image="/agreement.svg"
                />
                <HeroCard
                    title="Problem-Solving & Initiative"
                    description="I tackle obstacles with innovative solutions, thinking outside the box to devise effective strategies. My proactive approach keeps projects moving forward."
                    image="/lightbulb.svg"
                />
            </div>
        </Container>
    );
};

export default AboutMeCards;
